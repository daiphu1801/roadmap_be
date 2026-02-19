"use client";

import { motion } from "framer-motion";
import PomodoroTimer from "@/components/widgets/PomodoroTimer";
import QuickResources from "@/components/widgets/QuickResources";
import DailyChallenge from "@/components/widgets/DailyChallenge";
import MotivationalQuote from "@/components/widgets/MotivationalQuote";
import AchievementBadges from "@/components/widgets/AchievementBadges";
import StudySessionTracker from "@/components/widgets/StudySessionTracker";
import LearningMethodsGuide from "@/components/widgets/LearningMethodsGuide";
import { useGamificationStore } from "@/data/gamification";

export default function ToolsPage() {
    const { incrementPomodoro } = useGamificationStore();

    const handlePomodoroComplete = () => {
        incrementPomodoro();
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
            {/* Header */}
            <motion.div
                className="mb-8 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
                    🛠️ Công cụ học tập
                </h1>
                <p className="text-[var(--text-secondary)]">
                    Timer, thử thách, phương pháp học và tài liệu tham khảo
                </p>
            </motion.div>

            {/* Main Grid - 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Column 1 - Pomodoro & Quote */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <PomodoroTimer onComplete={handlePomodoroComplete} />
                    <MotivationalQuote />
                </motion.div>

                {/* Column 2 - Learning Methods */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                >
                    <LearningMethodsGuide />
                </motion.div>

                {/* Column 3 - Challenge & Resources */}
                <motion.div
                    className="space-y-6 md:col-span-2 lg:col-span-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <DailyChallenge />
                    <QuickResources />
                </motion.div>
            </div>

            {/* Bottom Row - Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                >
                    <StudySessionTracker />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <AchievementBadges />
                </motion.div>
            </div>
        </div>
    );
}


