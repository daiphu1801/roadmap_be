"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { roadmapData } from "@/data/roadmap";
import { ArrowRight, CheckCircle2, Circle, Clock } from "lucide-react";
import { Topic, TaskItem } from "@/lib/types";

// Completed tasks - bắt đầu từ tháng 2/2026 (Month 1)
const completedTasks: string[] = [];

const getMonthProgress = (monthId: number): number => {
    const month = roadmapData.find(m => m.id === monthId);
    if (!month) return 0;

    let total = 0;
    let completed = 0;

    month.topics.forEach((topic: Topic) => {
        topic.items.forEach((item: TaskItem) => {
            total++;
            if (completedTasks.includes(item.id)) {
                completed++;
            }
        });
    });

    return total > 0 ? Math.round((completed / total) * 100) : 0;
};

const monthColors: Record<number, string> = {
    1: "from-yellow-500 to-orange-500",
    2: "from-blue-500 to-purple-500",
    3: "from-green-500 to-teal-500",
    4: "from-lime-500 to-green-500",
    5: "from-red-500 to-pink-500",
    6: "from-cyan-500 to-blue-500",
};

export default function RoadmapPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    🗺️ Lộ Trình{" "}
                    <span className="gradient-text">6 Tháng</span>
                </h1>
                <p className="text-[var(--text-secondary)]">
                    Chiến Binh Backend SE - Từ Java Core đến DevOps
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border-default)] hidden md:block" />

                <div className="space-y-6">
                    {roadmapData.map((month, index) => {
                        const progress = getMonthProgress(month.id);
                        const isCompleted = progress === 100;
                        const isInProgress = progress > 0 && progress < 100;
                        const isLocked = month.id > 2 && progress === 0;

                        return (
                            <motion.div
                                key={month.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative md:pl-20"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 top-6 hidden md:flex items-center justify-center w-5 h-5 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--border-default)]">
                                    {isCompleted ? (
                                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-green)]" />
                                    ) : isInProgress ? (
                                        <Clock className="w-3 h-3 text-[var(--accent-amber)]" />
                                    ) : (
                                        <Circle className="w-3 h-3 text-[var(--text-muted)]" />
                                    )}
                                </div>

                                <Link
                                    href={isLocked ? "#" : `/roadmap/${month.id}`}
                                    className={`
                    block card overflow-hidden
                    ${isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:border-[var(--border-hover)]'}
                  `}
                                    onClick={(e) => isLocked && e.preventDefault()}
                                >
                                    {/* Gradient top bar */}
                                    <div className={`h-1 bg-gradient-to-r ${monthColors[month.id]}`} />

                                    <div className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
                                                        Tháng {month.id}
                                                    </span>
                                                    {isCompleted && (
                                                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-green)]/20 text-[var(--accent-green)]">
                                                            Hoàn thành
                                                        </span>
                                                    )}
                                                    {isInProgress && (
                                                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-amber)]/20 text-[var(--accent-amber)]">
                                                            Đang học
                                                        </span>
                                                    )}
                                                    {isLocked && (
                                                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--text-muted)]/20 text-[var(--text-muted)]">
                                                            🔒 Chưa mở
                                                        </span>
                                                    )}
                                                </div>

                                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                                    {month.shortTitle}
                                                </h3>

                                                <p className="text-sm text-[var(--text-secondary)] mb-4">
                                                    {month.goal}
                                                </p>

                                                {/* Topics preview */}
                                                <div className="flex flex-wrap gap-2">
                                                    {month.topics.map((topic: Topic) => (
                                                        <span
                                                            key={topic.id}
                                                            className="text-xs px-2 py-1 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                                                        >
                                                            {topic.icon} {topic.name}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col items-end gap-3 min-w-[120px]">
                                                {/* Progress circle */}
                                                <div className="relative w-16 h-16">
                                                    <svg className="w-full h-full -rotate-90">
                                                        <circle
                                                            cx="32"
                                                            cy="32"
                                                            r="28"
                                                            fill="none"
                                                            stroke="var(--bg-secondary)"
                                                            strokeWidth="4"
                                                        />
                                                        <circle
                                                            cx="32"
                                                            cy="32"
                                                            r="28"
                                                            fill="none"
                                                            stroke="var(--accent-green)"
                                                            strokeWidth="4"
                                                            strokeLinecap="round"
                                                            strokeDasharray={`${2 * Math.PI * 28}`}
                                                            strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
                                                            className="transition-all duration-500"
                                                        />
                                                    </svg>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="text-sm font-bold text-[var(--text-primary)]">
                                                            {progress}%
                                                        </span>
                                                    </div>
                                                </div>

                                                {!isLocked && (
                                                    <div className="flex items-center gap-1 text-sm text-[var(--accent-primary)]">
                                                        <span>Xem chi tiết</span>
                                                        <ArrowRight className="w-4 h-4" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
