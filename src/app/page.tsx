"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Music } from "lucide-react";
import { roadmapData } from "@/data/roadmap";
import { Month, Topic, TaskItem } from "@/lib/types";
import { getDayPlan } from "@/data/dailyPlans";
import { getRoadmapStartDate } from "@/lib/roadmapConfig";

// Components
import HeroSection from "@/components/dashboard/HeroSection";
import StatsGrid from "@/components/dashboard/StatsGrid";
import TodayPlaylist from "@/components/dashboard/TodayPlaylist";
import MonthlyCards from "@/components/dashboard/MonthlyCards";
import ContributionHeatmap from "@/components/dashboard/ContributionHeatmap";

// Mock data - will be replaced with Zustand store
const mockProgress = {
  currentStreak: 0,
  longestStreak: 0,
  totalDsaSolved: 0,
  activeDays: [] as string[],
  completedTasks: [] as string[],
  startDate: "2026-02-12T07:00:00+07:00",
};

// Helper functions
const getDayCount = () => {
  const start = getRoadmapStartDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = today.getTime() - start.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
};

const hasStarted = () => getDayCount() >= 1;

const getDaysUntilStart = () => {
  const start = getRoadmapStartDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((start.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
};

const getCurrentMonthAndDay = () => {
  const dayCount = getDayCount();
  if (dayCount < 1) return { month: 1, day: 1 };
  const month = Math.floor((dayCount - 1) / 28) + 1;
  const day = ((dayCount - 1) % 28) + 1;
  return { month: Math.min(month, 6), day: Math.min(day, 28) };
};

const getTotalProgress = () => {
  let total = 0;
  let completed = 0;
  roadmapData.forEach((month: Month) => {
    month.topics.forEach((topic: Topic) => {
      topic.items.forEach((item: TaskItem) => {
        total++;
        if (mockProgress.completedTasks.includes(item.id)) completed++;
      });
    });
  });
  return total > 0 ? Math.round((completed / total) * 100) : 0;
};

export default function DashboardPage() {
  const dayCount = getDayCount();
  const daysUntilStart = getDaysUntilStart();
  const started = hasStarted();
  const totalProgress = getTotalProgress();
  const { month, day } = getCurrentMonthAndDay();
  const todayPlan = getDayPlan(month, day);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Hero Section */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <HeroSection
          started={started}
          dayCount={dayCount}
          daysUntilStart={daysUntilStart}
          currentTime={currentTime}
        />

        {/* Stats Grid */}
        <StatsGrid
          totalProgress={totalProgress}
          currentStreak={mockProgress.currentStreak}
          totalDsaSolved={mockProgress.totalDsaSolved}
          activeDaysCount={mockProgress.activeDays.length}
        />
      </motion.section>

      {/* Today's Playlist */}
      {todayPlan && (
        <TodayPlaylist
          started={started}
          month={month}
          day={day}
          theme={todayPlan.theme}
          tasks={todayPlan.tasks}
        />
      )}

      {/* Albums - Roadmap Months */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Albums học tập
          </h2>
          <span className="badge">
            <Music className="w-3 h-3" />
            <span>Giai đoạn {Math.min(Math.max(1, Math.ceil(dayCount / 28)), 6)}/6</span>
          </span>
        </div>
        <MonthlyCards
          months={roadmapData}
          completedTasks={mockProgress.completedTasks}
        />
      </motion.section>

      {/* Quote */}
      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <div className="card p-6 bg-gradient-to-r from-[var(--bg-secondary)] to-[var(--bg-card)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[var(--accent-primary)] flex items-center justify-center shrink-0">
              <Music className="w-6 h-6 text-black" />
            </div>
            <div>
              <p className="text-lg text-[var(--text-primary)] mb-2 italic">
                &quot;Sự kiên trì đánh bại tài năng khi tài năng không kiên trì.&quot;
              </p>
              <p className="text-sm text-[var(--text-muted)]">
                — James Clear
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Activity Heatmap */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <ContributionHeatmap
          activeDays={mockProgress.activeDays}
          monthsToShow={6}
        />
      </motion.section>
    </div>
  );
}
