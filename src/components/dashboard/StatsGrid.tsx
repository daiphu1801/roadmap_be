"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2, Flame, BarChart3 } from "lucide-react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const duration = 1000;
        const steps = 30;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setDisplayValue(value);
                clearInterval(timer);
            } else {
                setDisplayValue(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [value]);

    return <span>{displayValue}{suffix}</span>;
}

interface StatsGridProps {
    totalProgress: number;
    currentStreak: number;
    totalDsaSolved: number;
    activeDaysCount: number;
}

export default function StatsGrid({ totalProgress, currentStreak, totalDsaSolved, activeDaysCount }: StatsGridProps) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Progress */}
            <motion.div
                className="card-interactive p-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14">
                        <svg className="w-14 h-14 -rotate-90">
                            <circle cx="28" cy="28" r="24" fill="none" stroke="var(--bg-elevated)" strokeWidth="4" />
                            <motion.circle
                                cx="28" cy="28" r="24" fill="none"
                                stroke="var(--accent-primary)"
                                strokeWidth="4"
                                strokeDasharray={`${totalProgress * 1.508} 151`}
                                strokeLinecap="round"
                                initial={{ strokeDasharray: "0 151" }}
                                animate={{ strokeDasharray: `${totalProgress * 1.508} 151` }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                            />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[var(--accent-primary)]">
                            <AnimatedNumber value={totalProgress} suffix="%" />
                        </span>
                    </div>
                    <div>
                        <div className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Tổng thể</div>
                        <div className="text-lg font-bold text-[var(--text-primary)]">Tiến độ</div>
                    </div>
                </div>
            </motion.div>

            {/* Streak */}
            <motion.div
                className="card-interactive p-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
            >
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Chuỗi ngày</span>
                    <Flame className="w-5 h-5 text-[var(--accent-orange)]" />
                </div>
                <div className="text-3xl font-black text-[var(--text-primary)] mb-2">
                    <AnimatedNumber value={currentStreak} />
                </div>
                <div className="flex gap-1">
                    {[...Array(7)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`flex-1 h-1.5 rounded-full ${i < currentStreak ? 'bg-[var(--accent-orange)]' : 'bg-[var(--bg-elevated)]'}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.2 + i * 0.05 }}
                        />
                    ))}
                </div>
            </motion.div>

            {/* DSA */}
            <motion.div
                className="card-interactive p-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">DSA</span>
                    <Code2 className="w-5 h-5 text-[var(--accent-primary)]" />
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-black text-[var(--text-primary)]">{totalDsaSolved}</span>
                    <span className="text-lg text-[var(--text-muted)]">/75</span>
                </div>
                <div className="progress-bar">
                    <motion.div
                        className="progress-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${(totalDsaSolved / 75) * 100}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                </div>
            </motion.div>

            {/* Activity */}
            <motion.div
                className="card-interactive p-5"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
            >
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Hoạt động</span>
                    <BarChart3 className="w-5 h-5 text-[var(--accent-secondary)]" />
                </div>
                <div className="text-3xl font-black text-[var(--text-primary)] mb-2">
                    <AnimatedNumber value={activeDaysCount} />
                </div>
                <div className="flex items-end gap-1 h-6">
                    {[...Array(7)].map((_, i) => {
                        const baseHeight = 20;
                        const randomHeight = activeDaysCount > 0 ? baseHeight + (i * 10) % 80 : baseHeight;
                        return (
                            <motion.div
                                key={i}
                                className="flex-1 bg-[var(--accent-secondary)] rounded-t opacity-70"
                                initial={{ height: 0 }}
                                animate={{ height: `${randomHeight}%` }}
                                transition={{ delay: 0.3 + i * 0.05, duration: 0.5 }}
                            />
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
}
