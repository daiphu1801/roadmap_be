"use client";

import { motion } from "framer-motion";
import { blind75Stats } from "@/data/blind75";

interface DSAStatsProps {
    stats: { total: number; easy: number; medium: number; hard: number };
}

export default function DSAStats({ stats }: DSAStatsProps) {
    return (
        <>
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                <motion.div className="card p-4 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="text-3xl font-bold text-[var(--accent-primary)]">{stats.total}</div>
                    <div className="text-sm text-[var(--text-muted)]">Đã giải</div>
                </motion.div>
                <motion.div className="card p-4 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                    <div className="text-3xl font-bold text-[var(--accent-green)]">{stats.easy}</div>
                    <div className="text-sm text-[var(--text-muted)]">Dễ</div>
                </motion.div>
                <motion.div className="card p-4 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <div className="text-3xl font-bold text-[var(--accent-amber)]">{stats.medium}</div>
                    <div className="text-sm text-[var(--text-muted)]">Trung bình</div>
                </motion.div>
                <motion.div className="card p-4 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                    <div className="text-3xl font-bold text-[var(--accent-red)]">{stats.hard}</div>
                    <div className="text-sm text-[var(--text-muted)]">Khó</div>
                </motion.div>
                <motion.div className="card p-4 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <div className="text-3xl font-bold text-[var(--text-primary)]">{blind75Stats.categories}</div>
                    <div className="text-sm text-[var(--text-muted)]">Chủ đề</div>
                </motion.div>
            </div>

            {/* Overall Progress */}
            <motion.div className="card p-6 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <div className="flex items-center justify-between mb-3">
                    <span className="text-[var(--text-secondary)]">Tiến độ Blind 75</span>
                    <span className="text-[var(--text-primary)] font-semibold">
                        {stats.total} / {blind75Stats.total} ({Math.round((stats.total / blind75Stats.total) * 100)}%)
                    </span>
                </div>
                <div className="progress-bar h-3">
                    <div className="progress-bar-fill" style={{ width: `${(stats.total / blind75Stats.total) * 100}%` }} />
                </div>
            </motion.div>
        </>
    );
}
