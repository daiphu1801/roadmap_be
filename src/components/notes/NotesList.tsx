"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Note, categories } from "@/data/notesData";

interface NotesListProps {
    notes: Note[];
    selectedNoteId: string | null;
    searchQuery: string;
    selectedCategory: string | null;
    selectedTag: string | null;
    onSelect: (note: Note) => void;
}

export default function NotesList({ notes, selectedNoteId, searchQuery, selectedCategory, selectedTag, onSelect }: NotesListProps) {
    if (notes.length === 0) {
        return (
            <div className="card p-8 text-center">
                <FileText className="w-12 h-12 mx-auto mb-3 text-[var(--text-muted)] opacity-50" />
                <p className="text-[var(--text-muted)]">
                    {searchQuery || selectedCategory || selectedTag
                        ? "Không tìm thấy ghi chú phù hợp"
                        : "Chưa có ghi chú nào"}
                </p>
            </div>
        );
    }

    return (
        <>
            {notes.map((note, index) => (
                <motion.button
                    key={note.id}
                    onClick={() => onSelect(note)}
                    className={`w-full text-left card p-4 transition-all group ${selectedNoteId === note.id ? 'ring-2 ring-[var(--accent-primary)]' : ''}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                >
                    <div className="flex items-start gap-3">
                        <div
                            className="w-1 h-full min-h-[60px] rounded-full flex-shrink-0"
                            style={{ backgroundColor: categories[note.category].color }}
                        />
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-[var(--text-primary)] mb-1 line-clamp-2 text-sm sm:text-base">
                                {note.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-2 line-clamp-2">
                                {note.content.substring(0, 80)}...
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)]">
                                    {categories[note.category].label.split(' ')[0]}
                                </span>
                                <span className="text-xs text-[var(--text-muted)]">
                                    {format(new Date(note.updatedAt), "d MMM", { locale: vi })}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.button>
            ))}
        </>
    );
}
