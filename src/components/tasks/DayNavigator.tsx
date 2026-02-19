"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, PartyPopper } from "lucide-react";
import { TOTAL_DAYS } from "@/lib/roadmapConfig";

interface DayNavigatorProps {
    currentStudyDay: number;
    currentMonthInRoadmap: number;
    currentDayInMonth: number;
    theme: string;
    allCompleted: boolean;
    taskCount: number;
    onPrevious: () => void;
    onNext: () => void;
}

export default function DayNavigator({
    currentStudyDay,
    currentMonthInRoadmap,
    currentDayInMonth,
    theme,
    allCompleted,
    taskCount,
    onPrevious,
    onNext,
}: DayNavigatorProps) {
    return (
        <>
            <div className="card p-4 bg-gradient-to-r from-[var(--accent-green)]/10 to-[var(--accent-cyan)]/10 border-l-4 border-[var(--accent-green)]">
                <div className="flex items-center justify-between">
                    {/* Nút lùi ngày */}
                    <button
                        onClick={onPrevious}
                        disabled={currentStudyDay <= 1}
                        className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)] hover:bg-[var(--accent-primary)]/20 hover:border-[var(--accent-primary)]/50 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] disabled:opacity-30 transition-all cursor-pointer disabled:cursor-not-allowed group"
                        title="Ngày trước"
                    >
                        <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>

                    {/* Thông tin ngày */}
                    <div className="flex items-center gap-3 flex-1 justify-center">
                        <div className="w-12 h-12 rounded-xl bg-[var(--accent-green)]/20 border border-[var(--accent-green)]/30 flex items-center justify-center">
                            <span className="text-xl font-black text-[var(--accent-green)]">{currentDayInMonth}</span>
                        </div>
                        <div>
                            <p className="text-xs text-[var(--text-muted)]">Tháng {currentMonthInRoadmap} — Ngày {currentStudyDay}/{TOTAL_DAYS}</p>
                            <h3 className="text-base font-bold text-[var(--text-primary)]">{theme}</h3>
                        </div>
                    </div>

                    {/* Nút tiến ngày */}
                    <button
                        onClick={onNext}
                        disabled={currentStudyDay >= TOTAL_DAYS}
                        className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-default)] hover:bg-[var(--accent-green)]/20 hover:border-[var(--accent-green)]/50 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-green)] disabled:opacity-30 transition-all cursor-pointer disabled:cursor-not-allowed group"
                        title="Ngày tiếp theo"
                    >
                        <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Nút hoàn thành ngày */}
            {allCompleted && taskCount > 0 && (
                <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <button
                        onClick={onNext}
                        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-cyan)] text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[var(--accent-green)]/30 transition-all cursor-pointer"
                    >
                        <PartyPopper className="w-5 h-5" />
                        Hoàn thành! Sang ngày {currentStudyDay + 1}
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>
            )}
        </>
    );
}
