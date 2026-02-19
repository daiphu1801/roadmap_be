"use client";

import { motion } from "framer-motion";
import { Flame } from "lucide-react";

interface StreakCounterProps {
    currentStreak: number;
    longestStreak?: number;
}

export default function StreakCounter({
    currentStreak,
    longestStreak = 21
}: StreakCounterProps) {
    return (
        <div className="card p-6 flex flex-col items-center justify-center">
            <motion.div
                className="relative"
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <Flame className="w-12 h-12 text-orange-500" />
                <div className="absolute inset-0 blur-lg bg-orange-500/30 rounded-full" />
            </motion.div>

            <motion.span
                className="mt-3 text-4xl font-bold text-[var(--text-primary)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                {currentStreak}
            </motion.span>

            <span className="text-sm text-[var(--text-secondary)]">Chuỗi ngày hiện tại</span>

            <div className="mt-2 text-xs text-[var(--text-muted)]">
                Kỷ lục: {longestStreak} ngày
            </div>
        </div>
    );
}
