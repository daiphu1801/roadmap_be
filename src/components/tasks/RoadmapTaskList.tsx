"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, BookOpen } from "lucide-react";
import Link from "next/link";
import { Topic, TaskItem } from "@/lib/types";

interface RoadmapTaskListProps {
    currentMonthInRoadmap: number;
    shortTitle?: string;
    topics: Topic[];
    completedTasks: string[];
    completedCount: number;
    totalCount: number;
    onToggle: (id: string) => void;
}

export default function RoadmapTaskList({
    currentMonthInRoadmap,
    shortTitle,
    topics,
    completedTasks,
    completedCount,
    totalCount,
    onToggle,
}: RoadmapTaskListProps) {
    return (
        <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[var(--accent-cyan)]" />
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                        Lộ trình Tháng {currentMonthInRoadmap}: {shortTitle}
                    </h2>
                </div>
                <Link
                    href={`/roadmap/${currentMonthInRoadmap}`}
                    className="text-sm text-[var(--accent-primary)] hover:underline"
                >
                    Xem chi tiết →
                </Link>
            </div>

            {/* Thanh tiến độ */}
            <div className="progress-bar mb-6">
                <motion.div
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: totalCount > 0 ? `${(completedCount / totalCount) * 100}%` : '0%' }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Danh sách theo chủ đề */}
            <div className="space-y-6">
                {topics.map((topic: Topic) => (
                    <div key={topic.id}>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-lg">{topic.icon}</span>
                            <h3 className="text-sm font-medium text-[var(--text-secondary)]">
                                {topic.name}
                            </h3>
                            <span className="text-xs text-[var(--text-muted)] ml-auto">
                                {topic.items.filter(item => completedTasks.includes(item.id)).length}/{topic.items.length}
                            </span>
                        </div>
                        <ul className="space-y-2">
                            {topic.items.map((item: TaskItem) => {
                                const isCompleted = completedTasks.includes(item.id);
                                return (
                                    <motion.li
                                        key={item.id}
                                        className={`
                                            flex items-center gap-3 p-3 rounded-lg cursor-pointer
                                            transition-all duration-200
                                            ${isCompleted
                                                ? 'bg-[var(--accent-green)]/10'
                                                : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)]'
                                            }
                                        `}
                                        onClick={() => onToggle(item.id)}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle2 className="w-5 h-5 text-[var(--accent-green)] flex-shrink-0" />
                                        ) : (
                                            <Circle className="w-5 h-5 text-[var(--text-muted)] flex-shrink-0" />
                                        )}
                                        <span className={`
                                            text-sm flex-1
                                            ${isCompleted
                                                ? 'text-[var(--text-secondary)] line-through'
                                                : 'text-[var(--text-primary)]'
                                            }
                                        `}>
                                            {item.title}
                                        </span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
