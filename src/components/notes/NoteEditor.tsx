"use client";

import { motion } from "framer-motion";
import { FileText, Plus, Calendar, Folder, Trash2, Edit3 } from "lucide-react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Note, categories } from "@/data/notesData";

interface NoteEditorProps {
    note: Note | null;
    isEditing: boolean;
    onNoteChange: (note: Note) => void;
    onEdit: () => void;
    onSave: () => void;
    onCancelEdit: () => void;
    onDelete: (id: string) => void;
    onNewNote: () => void;
}

export default function NoteEditor({
    note,
    isEditing,
    onNoteChange,
    onEdit,
    onSave,
    onCancelEdit,
    onDelete,
    onNewNote,
}: NoteEditorProps) {
    if (!note) {
        return (
            <div className="card p-8 sm:p-12 h-full min-h-[300px] flex flex-col items-center justify-center text-center">
                <FileText className="w-16 h-16 mb-4 text-[var(--text-muted)] opacity-30" />
                <p className="text-[var(--text-muted)] mb-4">
                    Chọn một ghi chú để xem hoặc tạo mới
                </p>
                <button
                    onClick={onNewNote}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-primary)] text-white hover:opacity-90"
                >
                    <Plus className="w-4 h-4" />
                    Tạo ghi chú mới
                </button>
            </div>
        );
    }

    return (
        <motion.div
            className="card p-4 sm:p-6 min-h-[400px] lg:min-h-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={note.id}
        >
            {/* Note Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div className="flex-1">
                    {isEditing ? (
                        <input
                            type="text"
                            value={note.title}
                            onChange={(e) => onNoteChange({ ...note, title: e.target.value })}
                            className="w-full text-lg sm:text-xl font-bold bg-transparent text-[var(--text-primary)] border-b border-[var(--border-default)] focus:outline-none focus:border-[var(--accent-primary)] pb-2"
                            placeholder="Tiêu đề ghi chú..."
                        />
                    ) : (
                        <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                            {note.title}
                        </h2>
                    )}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                    {isEditing ? (
                        <>
                            <button
                                onClick={onCancelEdit}
                                className="px-3 py-1.5 text-sm rounded-lg border border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"
                            >
                                Hủy
                            </button>
                            <button
                                onClick={onSave}
                                className="px-3 py-1.5 text-sm rounded-lg bg-[var(--accent-green)] text-white hover:opacity-90"
                            >
                                Lưu
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={onEdit}
                                className="p-2 rounded-lg hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                            >
                                <Edit3 className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => onDelete(note.id)}
                                className="p-2 rounded-lg hover:bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--accent-red)]"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-[var(--text-muted)]">
                <div
                    className="flex items-center gap-1 px-2 py-0.5 rounded"
                    style={{
                        backgroundColor: `${categories[note.category].color}20`,
                        color: categories[note.category].color
                    }}
                >
                    <Folder className="w-3 h-3" />
                    <span className="text-xs">{categories[note.category].label}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs">
                        {format(new Date(note.updatedAt), "d MMMM yyyy", { locale: vi })}
                    </span>
                </div>
            </div>

            {/* Content */}
            {isEditing ? (
                <textarea
                    value={note.content}
                    onChange={(e) => onNoteChange({ ...note, content: e.target.value })}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[450px] p-4 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] font-mono text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
                    placeholder="Nội dung ghi chú..."
                />
            ) : (
                <div className="prose prose-invert max-w-none overflow-auto">
                    <pre className="whitespace-pre-wrap text-sm text-[var(--text-secondary)] font-mono bg-[var(--bg-secondary)] p-4 rounded-lg min-h-[300px] sm:min-h-[400px]">
                        {note.content}
                    </pre>
                </div>
            )}

            {/* Tags Editor */}
            {isEditing && (
                <div className="mt-4 pt-4 border-t border-[var(--border-default)]">
                    <label className="text-sm text-[var(--text-secondary)] mb-2 block">Tags:</label>
                    <input
                        type="text"
                        value={note.tags.join(", ")}
                        onChange={(e) => onNoteChange({
                            ...note,
                            tags: e.target.value.split(",").map(t => t.trim()).filter(Boolean)
                        })}
                        placeholder="Nhập tags, cách nhau bằng dấu phẩy..."
                        className="w-full px-3 py-2 rounded-lg bg-[var(--bg-secondary)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)]"
                    />
                </div>
            )}
        </motion.div>
    );
}
