"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Zap, ExternalLink } from "lucide-react";
import { categoryLabels, DailyPlanTask } from "@/data/dailyPlans";

interface ScheduledTaskListProps {
    tasks: DailyPlanTask[];
    completedTasks: string[];
    currentStudyDay: number;
    onToggle: (id: string) => void;
}

export default function ScheduledTaskList({ tasks, completedTasks, currentStudyDay, onToggle }: ScheduledTaskListProps) {
    const completedCount = tasks.filter(t => completedTasks.includes(t.id)).length;
    const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

    return (
        <div className="card p-6">
            <div className="space-y-3">
                {tasks.map((task, index) => {
                    const isCompleted = completedTasks.includes(task.id);
                    return (
                        <motion.div
                            key={task.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => onToggle(task.id)}
                            className={`
                                flex items-start gap-3 p-4 rounded-xl cursor-pointer
                                transition-all duration-200 group
                                ${isCompleted
                                    ? 'bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/30'
                                    : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] border border-transparent'
                                }
                            `}
                        >
                            <div className="flex-shrink-0 mt-0.5">
                                {isCompleted ? (
                                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-green)]" />
                                ) : (
                                    <Circle className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)]" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className={`text-sm font-medium ${isCompleted ? 'text-[var(--text-secondary)] line-through' : 'text-[var(--text-primary)]'}`}>
                                    {task.title}
                                </p>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-muted)]">
                                        {categoryLabels[task.category]}
                                    </span>
                                    <span className="text-xs flex items-center gap-1 text-[var(--text-muted)]">
                                        <Clock className="w-3 h-3" />
                                        {task.duration}
                                    </span>
                                    {task.priority === 'high' && (
                                        <span className="text-xs flex items-center gap-1 text-[var(--accent-red)]">
                                            <Zap className="w-3 h-3" />
                                            Ưu tiên
                                        </span>
                                    )}
                                    {task.leetcodeLink && (
                                        <a
                                            href={task.leetcodeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs flex items-center gap-1 text-[var(--accent-cyan)] hover:underline"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink className="w-3 h-3" />
                                            LeetCode
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Progress */}
            <div className="mt-6 pt-4 border-t border-[var(--border-default)]">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--text-secondary)]">Tiến độ ngày {currentStudyDay}</span>
                    <span className="text-sm font-bold text-[var(--accent-green)]">
                        {completedCount}/{tasks.length}
                    </span>
                </div>
                <div className="progress-bar h-2">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
