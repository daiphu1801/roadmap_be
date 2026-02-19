"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Month } from "@/lib/types";
import { Lock, CheckCircle2, Play, Headphones } from "lucide-react";

interface MonthlyCardsProps {
    months: Month[];
    completedTasks: string[];
}

const monthIcons: Record<number, string> = {
    1: "☕",
    2: "⚡",
    3: "🗃️",
    4: "🍃",
    5: "🔐",
    6: "🐳",
};

const monthGradients: Record<number, string> = {
    1: "from-blue-600 to-purple-600",
    2: "from-yellow-500 to-orange-500",
    3: "from-pink-500 to-rose-500",
    4: "from-green-500 to-emerald-500",
    5: "from-orange-500 to-red-500",
    6: "from-cyan-500 to-blue-500",
};

export default function MonthlyCards({ months, completedTasks }: MonthlyCardsProps) {
    const getMonthProgress = (month: Month): number => {
        let total = 0;
        let completed = 0;

        month.topics.forEach(topic => {
            topic.items.forEach(item => {
                total++;
                if (completedTasks.includes(item.id) || item.completed) {
                    completed++;
                }
            });
        });

        return total > 0 ? Math.round((completed / total) * 100) : 0;
    };

    const getMonthStatus = (monthId: number, progress: number): 'locked' | 'in-progress' | 'completed' => {
        if (progress === 100) return 'completed';
        if (monthId <= 2) return 'in-progress';
        return 'locked';
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {months.map((month, index) => {
                const progress = getMonthProgress(month);
                const status = getMonthStatus(month.id, progress);
                const isLocked = status === 'locked';
                const gradient = monthGradients[month.id];

                return (
                    <motion.div
                        key={month.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.08, type: "spring", stiffness: 100 }}
                    >
                        <Link
                            href={isLocked ? "#" : `/roadmap/${month.id}`}
                            className={`block h-full ${isLocked ? 'pointer-events-none' : ''}`}
                            onClick={(e) => isLocked && e.preventDefault()}
                        >
                            <motion.div
                                className={`album-card h-full relative group ${isLocked ? 'opacity-50' : ''}`}
                                whileHover={!isLocked ? { scale: 1.02 } : {}}
                            >
                                {/* Album Cover */}
                                <div className={`aspect-square rounded-lg mb-4 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
                                    <span className="text-4xl">{monthIcons[month.id]}</span>

                                    {/* Play button overlay */}
                                    {!isLocked && (
                                        <motion.div
                                            className="album-play-btn absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[var(--accent-primary)] flex items-center justify-center shadow-lg"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <Play className="w-5 h-5 text-black ml-0.5" fill="currentColor" />
                                        </motion.div>
                                    )}

                                    {/* Status badge */}
                                    {status === 'completed' && (
                                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[var(--accent-primary)] flex items-center justify-center">
                                            <CheckCircle2 className="w-4 h-4 text-black" />
                                        </div>
                                    )}

                                    {/* Lock overlay */}
                                    {isLocked && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <Lock className="w-8 h-8 text-white/70" />
                                        </div>
                                    )}
                                </div>

                                {/* Album Info */}
                                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1 line-clamp-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                    {month.shortTitle}
                                </h4>
                                <p className="text-xs text-[var(--text-muted)] mb-3">
                                    Tháng {month.id}
                                </p>

                                {/* Progress bar */}
                                <div className="space-y-2">
                                    <div className="progress-bar h-1">
                                        <motion.div
                                            className="progress-bar-fill"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progress}%` }}
                                            transition={{ duration: 0.8, delay: index * 0.1 }}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1">
                                            <Headphones className="w-3 h-3 text-[var(--text-muted)]" />
                                            <span className="text-xs text-[var(--text-muted)]">
                                                {isLocked ? 'Khóa' : `${progress}%`}
                                            </span>
                                        </div>
                                        {status === 'in-progress' && progress > 0 && (
                                            <span className="text-[10px] font-medium text-[var(--accent-primary)]">
                                                ĐANG HỌC
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>
    );
}
