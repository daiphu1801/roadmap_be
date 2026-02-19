"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Circle } from "lucide-react";
import { roadmapData } from "@/data/roadmap";
import { Topic, TaskItem } from "@/lib/types";
import { useRoadmapStore } from "@/lib/store";

interface MonthDetailPageProps {
    params: Promise<{ month: string }>;
}

export default function MonthDetailPage({ params }: MonthDetailPageProps) {
    const resolvedParams = use(params);
    const monthId = parseInt(resolvedParams.month);
    const month = roadmapData.find(m => m.id === monthId);
    const { completedTasks, toggleTask } = useRoadmapStore();

    if (!month) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                <h1 className="text-2xl font-bold text-[var(--text-primary)]">
                    Không tìm thấy tháng này
                </h1>
                <Link href="/roadmap" className="text-[var(--accent-primary)] mt-4 inline-block">
                    ← Quay lại Lộ trình
                </Link>
            </div>
        );
    }

    const getTopicProgress = (topicId: string): number => {
        const topic = month.topics.find((t: Topic) => t.id === topicId);
        if (!topic) return 0;

        const completed = topic.items.filter((item: TaskItem) =>
            completedTasks.includes(item.id)
        ).length;

        return Math.round((completed / topic.items.length) * 100);
    };

    const totalItems = month.topics.reduce((acc: number, topic: Topic) => acc + topic.items.length, 0);
    const completedItems = month.topics.reduce((acc: number, topic: Topic) =>
        acc + topic.items.filter((item: TaskItem) => completedTasks.includes(item.id)).length, 0
    );
    const overallProgress = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    const handleToggleTask = (taskId: string) => {
        toggleTask(taskId);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Nút quay lại */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <Link
                    href="/roadmap"
                    className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Quay lại Lộ trình
                </Link>
            </motion.div>

            {/* Header tháng */}
            <motion.div
                className="card p-6 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <span className="text-sm font-medium text-[var(--accent-primary)] mb-2 block">
                            Tháng {month.id}
                        </span>
                        <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-2">
                            {month.shortTitle}
                        </h1>
                        <p className="text-[var(--text-secondary)]">
                            {month.goal}
                        </p>
                    </div>

                    <div className="flex flex-col items-center min-w-[100px]">
                        <div className="relative w-20 h-20">
                            <svg className="w-full h-full -rotate-90">
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="35"
                                    fill="none"
                                    stroke="var(--bg-secondary)"
                                    strokeWidth="6"
                                />
                                <motion.circle
                                    cx="40"
                                    cy="40"
                                    r="35"
                                    fill="none"
                                    stroke="var(--accent-green)"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    strokeDasharray={`${2 * Math.PI * 35}`}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 35 }}
                                    animate={{ strokeDashoffset: 2 * Math.PI * 35 * (1 - overallProgress / 100) }}
                                    transition={{ duration: 0.5 }}
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-lg font-bold text-[var(--text-primary)]">
                                    {overallProgress}%
                                </span>
                            </div>
                        </div>
                        <span className="text-sm text-[var(--text-secondary)] mt-2">
                            {completedItems}/{totalItems} hoàn thành
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Lưới chủ đề */}
            <div className="grid md:grid-cols-2 gap-6">
                {month.topics.map((topic: Topic, topicIndex: number) => {
                    const topicProgress = getTopicProgress(topic.id);

                    return (
                        <motion.div
                            key={topic.id}
                            className="card p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: topicIndex * 0.1 }}
                        >
                            {/* Header chủ đề */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl">{topic.icon}</span>
                                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                                        {topic.name}
                                    </h2>
                                </div>
                                <span className="text-sm font-medium text-[var(--accent-green)]">
                                    {topicProgress}%
                                </span>
                            </div>

                            {/* Thanh tiến độ */}
                            <div className="progress-bar mb-4">
                                <motion.div
                                    className="progress-bar-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${topicProgress}%` }}
                                    transition={{ duration: 0.5, delay: topicIndex * 0.1 }}
                                />
                            </div>

                            {/* Danh sách task */}
                            <ul className="space-y-3">
                                {topic.items.map((item: TaskItem, itemIndex: number) => {
                                    const isCompleted = completedTasks.includes(item.id);

                                    return (
                                        <motion.li
                                            key={item.id}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: topicIndex * 0.1 + itemIndex * 0.05 }}
                                            className={`
                                                flex items-center gap-3 p-3 rounded-lg cursor-pointer
                                                transition-all duration-200 group
                                                ${isCompleted
                                                    ? 'bg-[var(--accent-green)]/10'
                                                    : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)]'
                                                }
                                            `}
                                            onClick={() => handleToggleTask(item.id)}
                                        >
                                            {isCompleted ? (
                                                <CheckCircle2 className="w-5 h-5 text-[var(--accent-green)] flex-shrink-0" />
                                            ) : (
                                                <Circle className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] flex-shrink-0" />
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
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
