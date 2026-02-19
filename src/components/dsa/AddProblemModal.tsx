"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface AddProblemModalProps {
    visible: boolean;
    data: { name: string; difficulty: "Easy" | "Medium" | "Hard"; link: string };
    onChange: (data: { name: string; difficulty: "Easy" | "Medium" | "Hard"; link: string }) => void;
    onSubmit: (e: React.FormEvent) => void;
    onClose: () => void;
}

export default function AddProblemModal({ visible, data, onChange, onSubmit, onClose }: AddProblemModalProps) {
    return (
        <AnimatePresence>
            {visible && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <motion.div
                        className="card p-6 w-full max-w-md"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                                Thêm bài mới
                            </h3>
                            <button
                                onClick={onClose}
                                className="text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <form className="space-y-4" onSubmit={onSubmit}>
                            <div>
                                <label className="block text-sm text-[var(--text-secondary)] mb-1">
                                    Tên bài toán
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => onChange({ ...data, name: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                                    placeholder="e.g., Two Sum"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-[var(--text-secondary)] mb-1">
                                    Độ khó
                                </label>
                                <select
                                    value={data.difficulty}
                                    onChange={(e) => onChange({ ...data, difficulty: e.target.value as "Easy" | "Medium" | "Hard" })}
                                    className="w-full px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                                >
                                    <option value="Easy">Dễ</option>
                                    <option value="Medium">Trung bình</option>
                                    <option value="Hard">Khó</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm text-[var(--text-secondary)] mb-1">
                                    Link LeetCode
                                </label>
                                <input
                                    type="url"
                                    value={data.link}
                                    onChange={(e) => onChange({ ...data, link: e.target.value })}
                                    className="w-full px-3 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-default)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                                    placeholder="https://leetcode.com/problems/..."
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 px-4 py-2 rounded-lg border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 px-4 py-2 rounded-lg bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary)]/80"
                                >
                                    Thêm bài
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
