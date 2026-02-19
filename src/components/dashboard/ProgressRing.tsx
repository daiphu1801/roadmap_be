"use client";

import { motion } from "framer-motion";

interface ProgressRingProps {
    progress: number;
    size?: number;
    strokeWidth?: number;
    label?: string;
}

export default function ProgressRing({
    progress,
    size = 120,
    strokeWidth = 8,
    label = "Tiến độ tổng"
}: ProgressRingProps) {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className="card p-6 flex flex-col items-center justify-center">
            <div className="relative" style={{ width: size, height: size }}>
                {/* Background circle */}
                <svg className="transform -rotate-90" width={size} height={size}>
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="var(--bg-secondary)"
                        strokeWidth={strokeWidth}
                    />
                    {/* Progress circle */}
                    <motion.circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="url(#progressGradient)"
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset: offset }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <defs>
                        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--accent-green)" />
                            <stop offset="100%" stopColor="var(--accent-cyan)" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                        className="text-3xl font-bold text-[var(--text-primary)]"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {progress}%
                    </motion.span>
                </div>
            </div>
            <span className="mt-3 text-sm text-[var(--text-secondary)]">{label}</span>
        </div>
    );
}
