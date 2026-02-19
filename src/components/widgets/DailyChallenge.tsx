"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, RefreshCw, CheckCircle2, Eye } from "lucide-react";
import { getRandomChallenge } from "@/data/gamification";

interface DailyChallengeProps {
    category?: string;
}

export default function DailyChallenge({ category }: DailyChallengeProps) {
    const [challenge, setChallenge] = useState(getRandomChallenge(category));
    const [showAnswer, setShowAnswer] = useState(false);

    const getNewChallenge = () => {
        setChallenge(getRandomChallenge(category));
        setShowAnswer(false);
    };

    const handleReveal = () => {
        setShowAnswer(true);
    };

    const categoryColors: Record<string, string> = {
        java: 'var(--accent-amber)',
        spring: 'var(--accent-green)',
        dsa: 'var(--accent-cyan)',
        database: 'var(--accent-primary)',
    };

    return (
        <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-[var(--accent-amber)]" />
                    Daily Challenge
                </h3>
                <button
                    onClick={getNewChallenge}
                    className="p-1.5 rounded-lg hover:bg-[var(--bg-secondary)] text-[var(--text-muted)] transition-colors"
                >
                    <RefreshCw className="w-4 h-4" />
                </button>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={challenge.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                >
                    {/* Category Tag */}
                    <span
                        className="inline-block text-xs px-2 py-0.5 rounded-full mb-3"
                        style={{
                            backgroundColor: `${categoryColors[challenge.category]}20`,
                            color: categoryColors[challenge.category]
                        }}
                    >
                        {challenge.category.toUpperCase()}
                    </span>

                    {/* Question */}
                    <p className="text-[var(--text-primary)] font-medium mb-4">
                        {challenge.question}
                    </p>

                    {/* Answer */}
                    <AnimatePresence>
                        {showAnswer ? (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="p-3 rounded-lg bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/20"
                            >
                                <div className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)] mt-0.5 flex-shrink-0" />
                                    <p className="text-sm text-[var(--text-primary)]">
                                        {challenge.answer}
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.button
                                onClick={handleReveal}
                                className="w-full py-2.5 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] transition-colors flex items-center justify-center gap-2"
                                whileTap={{ scale: 0.98 }}
                            >
                                <Eye className="w-4 h-4" />
                                Xem đáp án
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
