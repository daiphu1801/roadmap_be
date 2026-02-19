"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, BookOpen, Target } from "lucide-react";
import { format, isSameDay } from "date-fns";
import { vi } from "date-fns/locale";
import Link from "next/link";
import { DailyPlanTask } from "@/data/dailyPlans";

interface TaskSidebarProps {
    todayPlan: { theme: string; tasks: DailyPlanTask[] } | null;
    currentMonthInRoadmap: number;
    currentWeek: number;
    currentStudyDay: number;
    completedTasks: string[];
    activeDays: string[];
    completedRoadmapCount: number;
    totalRoadmapTasks: number;
    hasRoadmapStarted: boolean;
    weekDays: Date[];
    today: Date;
    roadmapStartDate: Date;
    isDayCompleted: (dateStr: string) => boolean;
}

export default function TaskSidebar({
    todayPlan,
    currentMonthInRoadmap,
    currentWeek,
    currentStudyDay,
    completedTasks,
    activeDays,
    completedRoadmapCount,
    totalRoadmapTasks,
    hasRoadmapStarted,
    weekDays,
    today,
    roadmapStartDate,
    isDayCompleted,
}: TaskSidebarProps) {
    const scheduledCompleted = todayPlan ? todayPlan.tasks.filter(t => completedTasks.includes(t.id)).length : 0;
    const scheduledTotal = todayPlan ? todayPlan.tasks.length : 0;
    const scheduledProgress = scheduledTotal > 0 ? (scheduledCompleted / scheduledTotal) * 100 : 0;

    return (
        <div className="space-y-5">
            {/* Focus của ngày hôm nay */}
            <motion.div
                className="card p-5 bg-gradient-to-br from-[var(--accent-green)]/10 to-[var(--accent-cyan)]/5 border border-[var(--accent-green)]/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
            >
                <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-green)] flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                        Focus hôm nay
                    </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {todayPlan ? todayPlan.theme : "Chuẩn bị tinh thần cho hành trình mới!"}
                </p>
            </motion.div>

            {/* Vị trí hiện tại */}
            <motion.div
                className="card p-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
            >
                <h3 className="text-sm font-medium text-[var(--text-muted)] mb-4">
                    📍 Vị trí hiện tại
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[var(--bg-secondary)] rounded-xl p-3 text-center">
                        <p className="text-2xl font-black text-[var(--accent-primary)]">
                            {currentMonthInRoadmap}
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">Tháng</p>
                    </div>
                    <div className="bg-[var(--bg-secondary)] rounded-xl p-3 text-center">
                        <p className="text-2xl font-black text-[var(--accent-secondary)]">
                            {currentWeek}
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">Tuần</p>
                    </div>
                </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
                className="card p-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
            >
                <h3 className="text-sm font-medium text-[var(--text-muted)] mb-4">
                    📊 Thống kê nhanh
                </h3>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-[var(--text-secondary)]">Tasks hôm nay</span>
                        <span className="font-bold text-[var(--text-primary)]">
                            {scheduledTotal > 0 ? `${scheduledCompleted}/${scheduledTotal}` : '0'}
                        </span>
                    </div>
                    <div className="h-1.5 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-cyan)] rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${scheduledProgress}%` }}
                            transition={{ duration: 0.8 }}
                        />
                    </div>
                    <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-[var(--text-secondary)]">Ngày hoạt động</span>
                        <span className="font-bold text-[var(--accent-primary)]">{activeDays.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-[var(--text-secondary)]">Tháng {currentMonthInRoadmap} hoàn thành</span>
                        <span className="font-bold text-[var(--text-primary)]">
                            {totalRoadmapTasks > 0 ? Math.round((completedRoadmapCount / totalRoadmapTasks) * 100) : 0}%
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Tiến độ tuần */}
            <motion.div
                className="card p-5 overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
            >
                <h3 className="text-sm font-medium text-[var(--text-muted)] mb-4">
                    {hasRoadmapStarted ? "📅 Tiến độ tuần" : "📅 Tuần này"}
                </h3>
                <div className="grid grid-cols-7 gap-1.5">
                    {weekDays.map((day, index) => {
                        const dayStr = format(day, "yyyy-MM-dd");
                        const isCompleted = isDayCompleted(dayStr);
                        const isToday = isSameDay(day, today);
                        const isBeforeStart = day < roadmapStartDate;
                        const isStartDay = isSameDay(day, roadmapStartDate);

                        return (
                            <div key={index} className="flex flex-col items-center gap-1.5">
                                <span className={`text-xs ${isBeforeStart ? 'text-[var(--text-muted)]/50' : 'text-[var(--text-muted)]'}`}>
                                    {format(day, "EEEEEE", { locale: vi })}
                                </span>
                                <div className={`
                                    w-8 h-8 rounded-lg flex items-center justify-center transition-all
                                    ${isCompleted
                                        ? 'bg-[var(--accent-green)] text-white shadow-lg shadow-[var(--accent-green)]/30'
                                        : isToday
                                            ? hasRoadmapStarted
                                                ? 'bg-[var(--accent-primary)] text-white shadow-lg shadow-[var(--accent-primary)]/30'
                                                : 'ring-2 ring-[var(--accent-primary)] bg-[var(--bg-secondary)] text-[var(--text-primary)]'
                                            : isStartDay
                                                ? 'bg-[var(--accent-amber)]/20 text-[var(--accent-amber)] ring-1 ring-[var(--accent-amber)]'
                                                : isBeforeStart
                                                    ? 'bg-[var(--bg-secondary)]/50 text-[var(--text-muted)]/50'
                                                    : 'bg-[var(--bg-secondary)] text-[var(--text-muted)]'
                                    }
                                `}>
                                    {isCompleted ? (
                                        <CheckCircle2 className="w-4 h-4" />
                                    ) : isStartDay && !hasRoadmapStarted ? (
                                        <span className="text-xs font-bold">{format(day, "d")}</span>
                                    ) : (
                                        <span className="text-xs">{format(day, "d")}</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mt-4 text-center">
                    {hasRoadmapStarted
                        ? `${weekDays.filter(day => isDayCompleted(format(day, "yyyy-MM-dd"))).length}/7 ngày hoàn thành • Đang học ngày ${currentStudyDay}`
                        : `🚀 Bắt đầu vào ngày ${format(roadmapStartDate, "d/M")}`
                    }
                </p>
            </motion.div>

            {/* Trích dẫn động lực */}
            <motion.div
                className="card p-5 bg-gradient-to-br from-[var(--accent-primary)]/15 via-[var(--accent-secondary)]/10 to-[var(--bg-card)] border border-[var(--accent-primary)]/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                        <p className="text-sm italic text-[var(--text-primary)] leading-relaxed mb-2">
                            &quot;Sự kiên trì đánh bại cường độ. Hãy xuất hiện mỗi ngày, dù chỉ 30 phút.&quot;
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">— Wisdom for Developers</p>
                    </div>
                </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
                className="card p-5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
            >
                <h3 className="text-sm font-medium text-[var(--text-muted)] mb-3">
                    ⚡ Truy cập nhanh
                </h3>
                <div className="grid grid-cols-2 gap-2">
                    <Link
                        href="/roadmap"
                        className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-colors text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                        <BookOpen className="w-4 h-4" />
                        Lộ trình
                    </Link>
                    <Link
                        href="/dsa"
                        className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-colors text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    >
                        <Target className="w-4 h-4" />
                        DSA
                    </Link>
                    <Link
                        href="/learning"
                        className="col-span-2 flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-[var(--accent-primary)]/20 to-[var(--accent-green)]/20 hover:from-[var(--accent-primary)]/30 hover:to-[var(--accent-green)]/30 transition-all text-sm text-[var(--text-primary)] font-medium border border-[var(--accent-primary)]/30"
                    >
                        <Zap className="w-4 h-4 text-[var(--accent-amber)]" />
                        📚 Phương pháp học nâng cao
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
