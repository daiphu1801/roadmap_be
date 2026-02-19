"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Search, BookOpen } from "lucide-react";
import { format } from "date-fns";
import { Note, categories, noteTemplates, allTags, mockNotes } from "@/data/notesData";

// Components
import NotesList from "@/components/notes/NotesList";
import NoteEditor from "@/components/notes/NoteEditor";
import NewNoteModal from "@/components/notes/NewNoteModal";

export default function NotesPage() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [showNewNote, setShowNewNote] = useState(false);
    const [newNoteData, setNewNoteData] = useState({
        title: "",
        category: "general" as Note['category'],
        template: "concept"
    });

    // Initialize notes from localStorage or use mock data
    useEffect(() => {
        const saved = localStorage.getItem('roadmap-notes');
        if (saved) {
            setNotes(JSON.parse(saved));
        } else {
            setNotes(mockNotes);
        }
    }, []);

    // Save notes to localStorage whenever they change
    useEffect(() => {
        if (notes.length > 0) {
            localStorage.setItem('roadmap-notes', JSON.stringify(notes));
        }
    }, [notes]);

    const filteredNotes = notes.filter(note => {
        const matchesSearch = note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.content.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !selectedCategory || note.category === selectedCategory;
        const matchesTag = !selectedTag || note.tags.includes(selectedTag);
        return matchesSearch && matchesCategory && matchesTag;
    });

    const handleCreateNote = () => {
        const template = noteTemplates[newNoteData.template] || "";
        const newNote: Note = {
            id: Date.now().toString(),
            title: newNoteData.title || "Ghi chú mới",
            content: template,
            tags: [],
            category: newNoteData.category,
            createdAt: format(new Date(), "yyyy-MM-dd"),
            updatedAt: format(new Date(), "yyyy-MM-dd")
        };
        setNotes(prev => [newNote, ...prev]);
        setSelectedNote(newNote);
        setIsEditing(true);
        setShowNewNote(false);
        setNewNoteData({ title: "", category: "general", template: "concept" });
    };

    const handleDeleteNote = (noteId: string) => {
        if (confirm("Bạn có chắc muốn xóa ghi chú này?")) {
            setNotes(prev => prev.filter(n => n.id !== noteId));
            if (selectedNote?.id === noteId) setSelectedNote(null);
        }
    };

    const handleSaveNote = () => {
        if (selectedNote) {
            setNotes(prev => prev.map(n =>
                n.id === selectedNote.id
                    ? { ...selectedNote, updatedAt: format(new Date(), "yyyy-MM-dd") }
                    : n
            ));
            setIsEditing(false);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
            {/* Header */}
            <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                        <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--accent-amber)]" />
                        <div>
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                                Ghi chú học tập
                            </h1>
                            <p className="text-sm text-[var(--text-secondary)] hidden sm:block">
                                Quản lý kiến thức theo lộ trình 6 tháng
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowNewNote(true)}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-primary)]/80 transition-colors w-full sm:w-auto"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Ghi chú mới</span>
                    </button>
                </div>

                {/* Search */}
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Tìm kiếm ghi chú..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-default)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(categories).map(([key, { label, color }]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
                            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${selectedCategory === key ? 'scale-105' : 'opacity-70 hover:opacity-100'}`}
                            style={{
                                backgroundColor: `${color}20`,
                                color: color,
                                boxShadow: selectedCategory === key ? `0 0 0 2px ${color}` : 'none'
                            }}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* Tags Filter */}
                <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                            className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${selectedTag === tag
                                ? 'bg-[var(--accent-primary)] text-white'
                                : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                }`}
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Notes Grid */}
            <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
                {/* Notes List */}
                <div className="lg:col-span-1 space-y-3 order-2 lg:order-1">
                    <NotesList
                        notes={filteredNotes}
                        selectedNoteId={selectedNote?.id || null}
                        searchQuery={searchQuery}
                        selectedCategory={selectedCategory}
                        selectedTag={selectedTag}
                        onSelect={(note) => { setSelectedNote(note); setIsEditing(false); }}
                    />
                </div>

                {/* Note Detail / Editor */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                    <NoteEditor
                        note={selectedNote}
                        isEditing={isEditing}
                        onNoteChange={setSelectedNote}
                        onEdit={() => setIsEditing(true)}
                        onSave={handleSaveNote}
                        onCancelEdit={() => setIsEditing(false)}
                        onDelete={handleDeleteNote}
                        onNewNote={() => setShowNewNote(true)}
                    />
                </div>
            </div>

            {/* New Note Modal */}
            <NewNoteModal
                visible={showNewNote}
                data={newNoteData}
                onChange={setNewNoteData}
                onCreate={handleCreateNote}
                onClose={() => setShowNewNote(false)}
            />
        </div>
    );
}
