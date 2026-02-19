"use client";

import { motion } from "framer-motion";
import { Trophy, Lock } from "lucide-react";
import { achievements, useGamificationStore, getLevelFromXP, getXPProgress } from "@/data/gamification";

export default function AchievementBadges() {
    const { xp, unlockedAchievements } = useGamificationStore();
    const level = getLevelFromXP(xp);
    const xpProgress = getXPProgress(xp);

    const recentAchievements = achievements.filter(a =>
        unlockedAchievements.includes(a.id)
    ).slice(-3);

    const lockedAchievements = achievements.filter(a =>
        !unlockedAchievements.includes(a.id)
    ).slice(0, 3);

    return (
        <div className="card p-5">
            {/* Level Display */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-amber)] to-[var(--accent-primary)] flex items-center justify-center">
                        <span className="text-white font-bold">{level.level}</span>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-[var(--text-primary)]">
                            {level.title}
                        </h3>
                        <p className="text-xs text-[var(--text-muted)]">
                            {xp} XP
                        </p>
                    </div>
                </div>
                <Trophy className="w-5 h-5 text-[var(--accent-amber)]" />
            </div>

            {/* XP Progress Bar */}
            <div className="mb-4">
                <div className="flex justify-between text-xs text-[var(--text-muted)] mb-1">
                    <span>Level {level.level}</span>
                    <span>Level {level.level + 1}</span>
                </div>
                <div className="h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[var(--accent-amber)] to-[var(--accent-primary)] rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${xpProgress}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>

            {/* Achievements Grid */}
            <div className="space-y-2">
                <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
                    Thành tựu ({unlockedAchievements.length}/{achievements.length})
                </p>

                <div className="grid grid-cols-6 gap-2">
                    {/* Unlocked - show recent */}
                    {recentAchievements.map((achievement) => (
                        <motion.div
                            key={achievement.id}
                            className="aspect-square rounded-lg bg-gradient-to-br from-[var(--accent-amber)]/20 to-[var(--accent-primary)]/20 flex items-center justify-center cursor-pointer group relative"
                            whileHover={{ scale: 1.1 }}
                            title={`${achievement.title}: ${achievement.description}`}
                        >
                            <span className="text-xl">{achievement.icon}</span>
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-[var(--bg-tertiary)] text-xs text-[var(--text-primary)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                {achievement.title}
                            </div>
                        </motion.div>
                    ))}

                    {/* Locked - show next 3 */}
                    {lockedAchievements.map((achievement) => (
                        <motion.div
                            key={achievement.id}
                            className="aspect-square rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center opacity-40 cursor-pointer group relative"
                            title={`🔒 ${achievement.title}: ${achievement.description}`}
                        >
                            <Lock className="w-4 h-4 text-[var(--text-muted)]" />
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded bg-[var(--bg-tertiary)] text-xs text-[var(--text-primary)] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                                🔒 {achievement.title}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
