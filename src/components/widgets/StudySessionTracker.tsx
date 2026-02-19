"use client";

import React from "react";

import { Clock, Calendar, TrendingUp, Target } from "lucide-react";
import { useRoadmapStore } from "@/lib/store";
import { differenceInDays, format, startOfWeek, addDays } from "date-fns";
import { vi } from "date-fns/locale";

export default function StudySessionTracker() {
    const { activeDays, completedTasks } = useRoadmapStore();

    const today = new Date();
    const startDate = new Date(2026, 1, 12); // Feb 12, 2026
    const hasStarted = today >= startDate;
    const daysSinceStart = hasStarted ? differenceInDays(today, startDate) + 1 : 0;

    // Tính streak hiện tại
    const calculateStreak = () => {
        if (!hasStarted || activeDays.length === 0) return 0;

        const sortedDays = [...activeDays].sort((a, b) =>
            new Date(b).getTime() - new Date(a).getTime()
        );

        let streak = 0;
        let checkDate = today;

        for (const dayStr of sortedDays) {
            const expectedStr = format(checkDate, "yyyy-MM-dd");
            if (dayStr === expectedStr) {
                streak++;
                checkDate = addDays(checkDate, -1);
            } else if (dayStr < expectedStr) {
                break;
            }
        }

        return streak;
    };

    const currentStreak = calculateStreak();
    const completionRate = hasStarted && daysSinceStart > 0
        ? Math.round((activeDays.length / daysSinceStart) * 100)
        : 0;

    // Weekly activity
    const weekStart = startOfWeek(today, { weekStartsOn: 1 });
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
    const weeklyActive = weekDays.filter(day =>
        activeDays.includes(format(day, "yyyy-MM-dd"))
    ).length;

    return (
        <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--accent-cyan)]" />
                    Theo dõi học tập
                </h3>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
                {/* Current Streak */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--accent-red)]/10 to-transparent border border-[var(--accent-red)]/20">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">🔥</span>
                        <span className="text-xs text-[var(--text-muted)]">Streak</span>
                    </div>
                    <p className="text-2xl font-bold text-[var(--text-primary)]">{currentStreak}</p>
                    <p className="text-xs text-[var(--text-muted)]">ngày liên tiếp</p>
                </div>

                {/* Days Active */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--accent-green)]/10 to-transparent border border-[var(--accent-green)]/20">
                    <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-[var(--accent-green)]" />
                        <span className="text-xs text-[var(--text-muted)]">Tổng ngày</span>
                    </div>
                    <p className="text-2xl font-bold text-[var(--text-primary)]">{activeDays.length}</p>
                    <p className="text-xs text-[var(--text-muted)]">ngày hoạt động</p>
                </div>

                {/* Completion Rate */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--accent-primary)]/10 to-transparent border border-[var(--accent-primary)]/20">
                    <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-[var(--accent-primary)]" />
                        <span className="text-xs text-[var(--text-muted)]">Tỷ lệ</span>
                    </div>
                    <p className="text-2xl font-bold text-[var(--text-primary)]">{completionRate}%</p>
                    <p className="text-xs text-[var(--text-muted)]">hoàn thành</p>
                </div>

                {/* Tasks Done */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--accent-amber)]/10 to-transparent border border-[var(--accent-amber)]/20">
                    <div className="flex items-center gap-2 mb-1">
                        <Target className="w-4 h-4 text-[var(--accent-amber)]" />
                        <span className="text-xs text-[var(--text-muted)]">Tasks</span>
                    </div>
                    <p className="text-2xl font-bold text-[var(--text-primary)]">{completedTasks.length}</p>
                    <p className="text-xs text-[var(--text-muted)]">đã hoàn thành</p>
                </div>
            </div>

            {/* Weekly Progress Bar */}
            <div className="p-3 rounded-xl bg-[var(--bg-secondary)]">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-[var(--text-muted)]">Tuần này</span>
                    <span className="text-xs font-medium text-[var(--accent-green)]">{weeklyActive}/7 ngày</span>
                </div>
                <div className="flex gap-1">
                    {weekDays.map((day, index) => {
                        const isActive = activeDays.includes(format(day, "yyyy-MM-dd"));
                        const isToday = format(day, "yyyy-MM-dd") === format(today, "yyyy-MM-dd");
                        const isFuture = day > today;

                        return (
                            <div
                                key={index}
                                className={`
                                    flex-1 h-8 rounded-md flex items-center justify-center text-xs
                                    ${isActive
                                        ? 'bg-[var(--accent-green)] text-white'
                                        : isToday
                                            ? 'bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] ring-1 ring-[var(--accent-primary)]'
                                            : isFuture
                                                ? 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]/50'
                                                : 'bg-[var(--bg-tertiary)] text-[var(--text-muted)]'
                                    }
                                `}
                            >
                                {format(day, "EEEEEE", { locale: vi })}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Encouragement Message */}
            {!hasStarted && (
                <div className="mt-3 p-3 rounded-lg bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/20 text-center">
                    <p className="text-sm text-[var(--text-primary)]">
                        🚀 Bắt đầu vào {format(startDate, "EEEE, dd/MM", { locale: vi })}
                    </p>
                </div>
            )}
        </div>
    );
}
