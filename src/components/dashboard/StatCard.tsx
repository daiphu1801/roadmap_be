"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
    icon: LucideIcon;
    value: number | string;
    label: string;
    subLabel?: string;
    color?: string;
    delay?: number;
}

export default function StatCard({
    icon: Icon,
    value,
    label,
    subLabel,
    color = "var(--accent-primary)",
    delay = 0
}: StatCardProps) {
    return (
        <motion.div
            className="card p-6 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.4 }}
        >
            <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: `${color}20` }}
            >
                <Icon className="w-6 h-6" style={{ color }} />
            </div>

            <span className="text-3xl font-bold text-[var(--text-primary)]">
                {value}
            </span>

            <span className="text-sm text-[var(--text-secondary)] mt-1">
                {label}
            </span>

            {subLabel && (
                <span className="text-xs text-[var(--text-muted)] mt-1">
                    {subLabel}
                </span>
            )}
        </motion.div>
    );
}
