"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Note, categories } from "@/data/notesData";

interface NewNoteModalProps {
    visible: boolean;
    data: { title: string; category: Note['category']; template: string };
    onChange: (data: { title: string; category: Note['category']; template: string }) => void;
    onCreate: () => void;
    onClose: () => void;
}

export default function NewNoteModal({ visible, data, onChange, onCreate, onClose }: NewNoteModalProps) {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="card p-6 w-full max-w-md"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    >
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                                ✏️ Tạo ghi chú mới
                            </h3>
                            <button
                                onClick={onClose}
                                className="p-1.5 rounded-lg hover:bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-[var(--text-secondary)] mb-2">Tiêu đề</label>
                                <input
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => onChange({ ...data, title: e.target.value })}
                                    placeholder="VD: HashMap Internals..."
                                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-[var(--text-secondary)] mb-2">Danh mục</label>
                                <div className="grid grid-cols-2 gap-2">
                                    {Object.entries(categories).map(([key, { label, color }]) => (
                                        <button
                                            key={key}
                                            type="button"
                                            onClick={() => onChange({ ...data, category: key as Note['category'] })}
                                            className={`px-3 py-2 rounded-lg text-sm transition-all text-left ${data.category === key ? 'scale-105' : 'opacity-60 hover:opacity-100'}`}
                                            style={{
                                                backgroundColor: `${color}20`,
                                                color: color,
                                                boxShadow: data.category === key ? `0 0 0 2px ${color}` : 'none'
                                            }}
                                        >
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm text-[var(--text-secondary)] mb-2">Template</label>
                                <select
                                    value={data.template}
                                    onChange={(e) => onChange({ ...data, template: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                                >
                                    <option value="concept">📘 Concept/Lý thuyết</option>
                                    <option value="dsa">🧮 DSA Problem</option>
                                    <option value="interview">🎤 Interview Q&amp;A</option>
                                </select>
                            </div>

                            <div className="flex gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"
                                >
                                    Hủy
                                </button>
                                <button
                                    onClick={onCreate}
                                    className="flex-1 px-4 py-2.5 rounded-lg bg-[var(--accent-primary)] text-white hover:opacity-90"
                                >
                                    Tạo ghi chú
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
