"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { format, eachDayOfInterval, startOfMonth, endOfMonth, subMonths, getDay, isSameDay } from "date-fns";
import { vi } from "date-fns/locale";
import { Activity, TrendingUp } from "lucide-react";

interface ContributionHeatmapProps {
    activeDays: string[];
    monthsToShow?: number;
}

const DAYS_OF_WEEK = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

export default function ContributionHeatmap({
    activeDays,
    monthsToShow = 6
}: ContributionHeatmapProps) {
    const today = useMemo(() => new Date(), []);

    const { days, months } = useMemo(() => {
        const startDate = startOfMonth(subMonths(today, monthsToShow - 1));
        const endDate = endOfMonth(today);

        const allDays = eachDayOfInterval({ start: startDate, end: endDate });

        const uniqueMonths: { name: string; startIndex: number }[] = [];
        let currentMonth = '';

        allDays.forEach((day, index) => {
            const monthName = format(day, 'MMM', { locale: vi });
            if (monthName !== currentMonth) {
                currentMonth = monthName;
                uniqueMonths.push({ name: monthName, startIndex: index });
            }
        });

        return { days: allDays, months: uniqueMonths };
    }, [monthsToShow, today]);

    const getContributionLevel = (date: Date): number => {
        const dateStr = format(date, 'yyyy-MM-dd');
        const count = activeDays.filter(d => d === dateStr).length;
        if (count === 0) return 0;
        if (count === 1) return 1;
        if (count <= 3) return 2;
        return 3;
    };

    // Spotify green gradient
    const contributionColors = [
        'var(--bg-elevated)',
        'rgba(29, 185, 84, 0.3)',
        'rgba(29, 185, 84, 0.6)',
        'var(--accent-primary)',
    ];

    // Calculate weeks
    const weeks: Date[][] = [];
    let currentWeek: Date[] = [];

    const firstDay = days[0];
    const firstDayOfWeek = getDay(firstDay);
    for (let i = 0; i < firstDayOfWeek; i++) {
        currentWeek.push(null as unknown as Date);
    }

    days.forEach((day) => {
        currentWeek.push(day);
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    });

    if (currentWeek.length > 0) {
        weeks.push(currentWeek);
    }

    const totalContributions = activeDays.length;

    return (
        <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-primary)] flex items-center justify-center">
                        <Activity className="w-5 h-5 text-black" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-[var(--text-primary)]">
                            Lịch sử hoạt động
                        </h3>
                        <p className="text-xs text-[var(--text-muted)]">
                            6 tháng gần đây
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-elevated)]">
                    <TrendingUp className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span className="text-sm font-bold text-[var(--text-primary)]">
                        {totalContributions}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">ngày</span>
                </div>
            </div>

            <div className="overflow-x-auto">
                <div className="min-w-[700px]">
                    {/* Month labels */}
                    <div className="flex mb-2 ml-8">
                        {months.map((month, i) => (
                            <div
                                key={i}
                                className="text-xs text-[var(--text-muted)] uppercase tracking-wider"
                                style={{
                                    marginLeft: i === 0 ? 0 : 'auto',
                                    minWidth: '60px'
                                }}
                            >
                                {month.name}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-1">
                        {/* Day labels */}
                        <div className="flex flex-col gap-1 mr-2">
                            {DAYS_OF_WEEK.map((day, i) => (
                                <div
                                    key={day}
                                    className="text-[10px] text-[var(--text-muted)] h-3 flex items-center"
                                    style={{ visibility: i % 2 === 1 ? 'visible' : 'hidden' }}
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Heatmap grid */}
                        <div className="flex gap-1">
                            {weeks.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex flex-col gap-1">
                                    {week.map((day, dayIndex) => {
                                        if (!day) {
                                            return <div key={dayIndex} className="w-3 h-3" />;
                                        }

                                        const level = getContributionLevel(day);
                                        const isToday = isSameDay(day, today);

                                        return (
                                            <motion.div
                                                key={dayIndex}
                                                className={`
                                                    w-3 h-3 rounded-sm cursor-pointer
                                                    transition-all duration-200 hover:scale-125
                                                `}
                                                style={{
                                                    backgroundColor: contributionColors[level],
                                                    border: isToday ? '1px solid var(--text-primary)' : 'none',
                                                }}
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: weekIndex * 0.02 + dayIndex * 0.01 }}
                                                title={`${format(day, 'd MMM yyyy', { locale: vi })}: ${level > 0 ? `${level} hoạt động` : 'Không có hoạt động'}`}
                                            />
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-end gap-2 mt-6">
                        <span className="text-xs text-[var(--text-muted)]">Ít</span>
                        {contributionColors.map((color, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 rounded-sm"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                        <span className="text-xs text-[var(--text-muted)]">Nhiều</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
