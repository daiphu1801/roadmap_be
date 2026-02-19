"use client";

import { motion } from "framer-motion";
import { Play, Layers } from "lucide-react";
import Link from "next/link";
import { DailyPlanTask } from "@/data/dailyPlans";

interface TodayPlaylistProps {
    started: boolean;
    month: number;
    day: number;
    theme: string;
    tasks: DailyPlanTask[];
}

export default function TodayPlaylist({ started, month, day, theme, tasks }: TodayPlaylistProps) {
    return (
        <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                    {started ? "Playlist hôm nay" : "Playlist ngày 1"}
                </h2>
                <Link
                    href="/tasks"
                    className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                    Xem tất cả
                </Link>
            </div>

            <div className="card p-6">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-tertiary)] flex items-center justify-center shrink-0">
                        <Layers className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm text-[var(--text-muted)] mb-1">{theme}</p>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Tháng {month} • Ngày {day}</h3>
                        <p className="text-sm text-[var(--text-secondary)]">{tasks.length} công việc</p>
                    </div>
                    <motion.button
                        className="play-btn shrink-0"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Play className="w-6 h-6 ml-0.5" fill="currentColor" />
                    </motion.button>
                </div>

                {/* Task List - Track List Style */}
                <div className="space-y-2">
                    {tasks.slice(0, 4).map((task, index) => (
                        <motion.div
                            key={task.id}
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer group"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                        >
                            <span className="w-6 text-center text-sm text-[var(--text-muted)] group-hover:hidden">
                                {index + 1}
                            </span>
                            <Play className="w-4 h-4 text-[var(--text-primary)] hidden group-hover:block" />
                            <div className={`w-2 h-2 rounded-full shrink-0 ${task.priority === 'high' ? 'bg-[var(--accent-secondary)]' :
                                task.priority === 'medium' ? 'bg-[var(--accent-yellow)]' :
                                    'bg-[var(--accent-primary)]'
                                }`} />
                            <span className="flex-1 text-sm text-[var(--text-primary)] truncate">
                                {task.title}
                            </span>
                            <span className="text-xs text-[var(--text-muted)] shrink-0">
                                {task.duration}
                            </span>
                        </motion.div>
                    ))}
                    {tasks.length > 4 && (
                        <p className="text-sm text-[var(--text-muted)] text-center py-2">
                            +{tasks.length - 4} công việc khác
                        </p>
                    )}
                </div>
            </div>
        </motion.section>
    );
}
