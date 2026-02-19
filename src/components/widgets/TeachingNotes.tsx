"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    MessageCircle, Save, Sparkles, Lightbulb,
    RefreshCw, ChevronDown, ChevronUp
} from "lucide-react";

interface TeachingNote {
    topic: string;
    explanation: string;
    date: string;
}

const suggestedTopics = [
    "HashMap vs TreeMap - khi nào dùng cái nào?",
    "Dependency Injection hoạt động thế nào?",
    "Tại sao cần interface thay vì dùng class?",
    "REST API vs GraphQL - khác nhau gì?",
    "JPA @OneToMany vs @ManyToOne",
    "Spring Bean scopes giải thích",
    "Multithreading - synchronized vs Lock",
    "Exception checked vs unchecked",
    "Stream API - map, filter, reduce",
    "Abstract class vs Interface trong Java 8+",
];

export default function TeachingNotes() {
    const [currentTopic, setCurrentTopic] = useState("");
    const [explanation, setExplanation] = useState("");
    const [savedNotes, setSavedNotes] = useState<TeachingNote[]>([]);
    const [showHistory, setShowHistory] = useState(false);
    const [saved, setSaved] = useState(false);

    const randomTopic = () => {
        const random = suggestedTopics[Math.floor(Math.random() * suggestedTopics.length)];
        setCurrentTopic(random);
        setExplanation("");
    };

    useEffect(() => {
        // Load saved notes
        const notes = localStorage.getItem("teaching-notes");
        if (notes) {
            setSavedNotes(JSON.parse(notes));
        }
        // Set random topic
        randomTopic();
    }, []);

    const handleSave = () => {
        if (!explanation.trim()) return;

        const newNote: TeachingNote = {
            topic: currentTopic,
            explanation: explanation,
            date: new Date().toISOString()
        };

        const updated = [newNote, ...savedNotes].slice(0, 20); // Keep last 20
        setSavedNotes(updated);
        localStorage.setItem("teaching-notes", JSON.stringify(updated));

        setSaved(true);
        setTimeout(() => {
            setSaved(false);
            randomTopic();
        }, 1500);
    };

    return (
        <div className="card p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[var(--accent-green)]" />
                    Teach Someone
                </h3>
                <button
                    onClick={randomTopic}
                    className="p-1.5 rounded-lg hover:bg-[var(--bg-secondary)] text-[var(--text-muted)] transition-colors cursor-pointer"
                    title="Topic khác"
                >
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>

            {/* Topic */}
            <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-green)]/10 border border-[var(--accent-primary)]/20">
                <p className="text-xs text-[var(--text-muted)] mb-1 flex items-center gap-1">
                    <Lightbulb className="w-3 h-3" />
                    Giải thích concept này:
                </p>
                <p className="text-sm font-medium text-[var(--text-primary)]">
                    {currentTopic}
                </p>
            </div>

            {/* Explanation Input */}
            <div className="mb-4">
                <label className="text-xs text-[var(--text-muted)] mb-1 block">
                    ✍️ Giải thích như đang dạy cho người mới học:
                </label>
                <textarea
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder="Hãy tưởng tượng bạn đang giải thích cho một người bạn chưa biết gì về lập trình..."
                    className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] resize-none"
                    rows={4}
                />
            </div>

            {/* Save Button */}
            <motion.button
                onClick={handleSave}
                disabled={!explanation.trim()}
                className={`w-full py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all cursor-pointer ${saved
                        ? "bg-[var(--accent-green)] text-white"
                        : explanation.trim()
                            ? "bg-[var(--accent-primary)] text-white hover:opacity-90"
                            : "bg-[var(--bg-secondary)] text-[var(--text-muted)] cursor-not-allowed"
                    }`}
                whileTap={explanation.trim() ? { scale: 0.98 } : {}}
            >
                {saved ? (
                    <>
                        <Sparkles className="w-4 h-4" />
                        Tuyệt vời! Bạn đã hiểu concept này!
                    </>
                ) : (
                    <>
                        <Save className="w-4 h-4" />
                        Lưu giải thích
                    </>
                )}
            </motion.button>

            {/* History */}
            {savedNotes.length > 0 && (
                <div className="mt-4">
                    <button
                        onClick={() => setShowHistory(!showHistory)}
                        className="w-full flex items-center justify-between py-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                    >
                        <span className="text-xs">
                            📝 Đã giải thích ({savedNotes.length} topics)
                        </span>
                        {showHistory ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {showHistory && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            className="space-y-2 pt-2 max-h-40 overflow-y-auto"
                        >
                            {savedNotes.slice(0, 5).map((note, index) => (
                                <div
                                    key={index}
                                    className="p-2 rounded-lg bg-[var(--bg-secondary)] text-xs"
                                >
                                    <p className="font-medium text-[var(--text-primary)] truncate">
                                        {note.topic}
                                    </p>
                                    <p className="text-[var(--text-muted)] line-clamp-2">
                                        {note.explanation}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </div>
            )}

            {/* Tip */}
            <p className="text-xs text-[var(--text-muted)] text-center mt-3">
                💡 Feynman Technique: Nếu giải thích được đơn giản = Bạn đã hiểu!
            </p>
        </div>
    );
}
