"use client";

import { motion } from "framer-motion";
import WeeklyMiniProject from "@/components/widgets/WeeklyMiniProject";
import DailyReflection from "@/components/widgets/DailyReflection";
import WeeklyReview from "@/components/widgets/WeeklyReview";
import TeachingNotes from "@/components/widgets/TeachingNotes";
import Link from "next/link";
import { ArrowLeft, Rocket, PenLine, Calendar, MessageCircle } from "lucide-react";

export default function LearningPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
            {/* Header */}
            <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <Link
                    href="/tasks"
                    className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-4"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Quay lại Tasks
                </Link>
                <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
                    📚 Phương pháp học nâng cao
                </h1>
                <p className="text-[var(--text-secondary)]">
                    Mini-projects, reflection, review và practice Feynman Technique
                </p>
            </motion.div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <motion.div
                    className="p-4 rounded-xl bg-gradient-to-br from-[var(--accent-primary)]/20 to-transparent border border-[var(--accent-primary)]/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Rocket className="w-5 h-5 text-[var(--accent-primary)] mb-2" />
                    <p className="text-sm font-medium text-[var(--text-primary)]">Mini Project</p>
                    <p className="text-xs text-[var(--text-muted)]">Mỗi tuần 1 dự án</p>
                </motion.div>
                <motion.div
                    className="p-4 rounded-xl bg-gradient-to-br from-[var(--accent-secondary)]/20 to-transparent border border-[var(--accent-secondary)]/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                >
                    <PenLine className="w-5 h-5 text-[var(--accent-secondary)] mb-2" />
                    <p className="text-sm font-medium text-[var(--text-primary)]">Daily Reflection</p>
                    <p className="text-xs text-[var(--text-muted)]">3 câu mỗi ngày</p>
                </motion.div>
                <motion.div
                    className="p-4 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)]/20 to-transparent border border-[var(--accent-cyan)]/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Calendar className="w-5 h-5 text-[var(--accent-cyan)] mb-2" />
                    <p className="text-sm font-medium text-[var(--text-primary)]">Weekly Review</p>
                    <p className="text-xs text-[var(--text-muted)]">Ôn concept cuối tuần</p>
                </motion.div>
                <motion.div
                    className="p-4 rounded-xl bg-gradient-to-br from-[var(--accent-green)]/20 to-transparent border border-[var(--accent-green)]/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                >
                    <MessageCircle className="w-5 h-5 text-[var(--accent-green)] mb-2" />
                    <p className="text-sm font-medium text-[var(--text-primary)]">Teach Someone</p>
                    <p className="text-xs text-[var(--text-muted)]">Feynman Technique</p>
                </motion.div>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <WeeklyMiniProject />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 }}
                    >
                        <WeeklyReview />
                    </motion.div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <DailyReflection />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 }}
                    >
                        <TeachingNotes />
                    </motion.div>
                </div>
            </div>

            {/* Tips Section */}
            <motion.div
                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[var(--accent-primary)]/10 via-[var(--accent-secondary)]/10 to-[var(--accent-green)]/10 border border-[var(--border-subtle)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">💡 Workflow học tập đề xuất</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent-primary)]/20 flex items-center justify-center mx-auto mb-2">
                            <span className="text-lg">1️⃣</span>
                        </div>
                        <p className="text-sm text-[var(--text-primary)] font-medium">Học lý thuyết</p>
                        <p className="text-xs text-[var(--text-muted)]">30% thời gian</p>
                    </div>
                    <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent-secondary)]/20 flex items-center justify-center mx-auto mb-2">
                            <span className="text-lg">2️⃣</span>
                        </div>
                        <p className="text-sm text-[var(--text-primary)] font-medium">Code mini-project</p>
                        <p className="text-xs text-[var(--text-muted)]">50% thời gian</p>
                    </div>
                    <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent-cyan)]/20 flex items-center justify-center mx-auto mb-2">
                            <span className="text-lg">3️⃣</span>
                        </div>
                        <p className="text-sm text-[var(--text-primary)] font-medium">Viết reflection</p>
                        <p className="text-xs text-[var(--text-muted)]">10% thời gian</p>
                    </div>
                    <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-[var(--accent-green)]/20 flex items-center justify-center mx-auto mb-2">
                            <span className="text-lg">4️⃣</span>
                        </div>
                        <p className="text-sm text-[var(--text-primary)] font-medium">Dạy lại concept</p>
                        <p className="text-xs text-[var(--text-muted)]">10% thời gian</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
