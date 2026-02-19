"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { format, startOfWeek, addDays, differenceInDays } from "date-fns";
import { vi } from "date-fns/locale";
import { Calendar, Zap } from "lucide-react";
import { useRoadmapStore } from "@/lib/store";
import { roadmapData } from "@/data/roadmap";
import { getDayPlan } from "@/data/dailyPlans";
import { Topic, TaskItem } from "@/lib/types";
import { getRoadmapStartDate, DAYS_PER_MONTH } from "@/lib/roadmapConfig";
import Link from "next/link";

// Components
import CountdownView from "@/components/tasks/CountdownView";
import DayNavigator from "@/components/tasks/DayNavigator";
import ScheduledTaskList from "@/components/tasks/ScheduledTaskList";
import DailyTaskList from "@/components/tasks/DailyTaskList";
import RoadmapTaskList from "@/components/tasks/RoadmapTaskList";
import TaskSidebar from "@/components/tasks/TaskSidebar";

export default function TasksPage() {
    const {
        dailyTasks,
        addDailyTask,
        toggleDailyTask,
        removeDailyTask,
        updateDailyTask,
        activeDays,
        completedTasks,
        toggleTask,
        currentStudyDay,
        advanceToNextDay,
        goToPreviousDay,
    } = useRoadmapStore();

    const [activeTab, setActiveTab] = useState<"daily" | "roadmap" | "scheduled">("scheduled");

    // Date calculations
    const today = new Date();
    const todayStr = format(today, "yyyy-MM-dd");
    const weekStart = startOfWeek(today, { weekStartsOn: 1 });
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

    const roadmapStartDate = getRoadmapStartDate();
    const todayMidnight = new Date(today);
    todayMidnight.setHours(0, 0, 0, 0);

    const hasRoadmapStarted = todayMidnight >= roadmapStartDate;
    const daysSinceStart = differenceInDays(todayMidnight, roadmapStartDate) + 1;

    // Roadmap position from store
    const currentMonthInRoadmap = Math.ceil(currentStudyDay / DAYS_PER_MONTH);
    const currentDayInMonth = ((currentStudyDay - 1) % DAYS_PER_MONTH) + 1;
    const currentWeek = Math.ceil(currentStudyDay / 7);

    // Data
    const todayPlan = getDayPlan(currentMonthInRoadmap, currentDayInMonth);
    const allScheduledTasksCompleted = todayPlan ? todayPlan.tasks.every(t => completedTasks.includes(t.id)) : false;
    const todayTasks = dailyTasks.filter(task => task.date === todayStr);
    const currentMonthData = roadmapData[currentMonthInRoadmap - 1];
    const allRoadmapTasks: TaskItem[] = currentMonthData?.topics.flatMap((topic: Topic) => topic.items) || [];
    const completedRoadmapCount = allRoadmapTasks.filter(t => completedTasks.includes(t.id)).length;

    // Helpers
    const isDayCompleted = (dateStr: string) => {
        if (!hasRoadmapStarted) return false;
        const checkDate = new Date(dateStr);
        if (checkDate < roadmapStartDate) return false;
        return activeDays.includes(dateStr);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-8 h-8 text-[var(--accent-primary)]" />
                    <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                        Công việc hàng ngày
                    </h1>
                </div>
                <p className="text-[var(--text-secondary)]">
                    {format(today, "EEEE, 'ngày' d 'tháng' M 'năm' yyyy", { locale: vi })}
                </p>
                {!hasRoadmapStarted ? (
                    <p className="text-sm text-[var(--text-muted)] mt-2">
                        ⏰ Bắt đầu: Thứ 5, 12/02/2026 lúc 7:00 sáng • Còn <span className="font-bold text-[var(--accent-primary)]">{Math.abs(daysSinceStart) + 1} ngày</span>
                    </p>
                ) : (
                    <p className="text-sm text-[var(--text-muted)] mt-2">
                        🚀 Đang học ngày {currentStudyDay} trong hành trình Backend Engineer
                    </p>
                )}
            </motion.div>

            {/* Learning Banner */}
            <LearningBanner
                currentStudyDay={currentStudyDay}
                currentWeek={currentWeek}
                hasRoadmapStarted={hasRoadmapStarted}
            />

            <div className="grid md:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    {/* Tabs */}
                    <div className="flex gap-1 p-1 bg-[var(--bg-secondary)] rounded-lg overflow-x-auto">
                        <TabButton active={activeTab === "scheduled"} onClick={() => setActiveTab("scheduled")} color="green">
                            🎯 Kế hoạch ({todayPlan?.tasks.length || 0})
                        </TabButton>
                        <TabButton active={activeTab === "daily"} onClick={() => setActiveTab("daily")} color="primary">
                            📝 Tự thêm ({todayTasks.length})
                        </TabButton>
                        <TabButton active={activeTab === "roadmap"} onClick={() => setActiveTab("roadmap")} color="primary">
                            🗺️ Tháng {currentMonthInRoadmap} ({completedRoadmapCount}/{allRoadmapTasks.length})
                        </TabButton>
                    </div>

                    {/* Scheduled Tasks Tab */}
                    {activeTab === "scheduled" && (
                        <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            {!hasRoadmapStarted ? (
                                <CountdownView daysSinceStart={daysSinceStart} />
                            ) : todayPlan ? (
                                <>
                                    <DayNavigator
                                        currentStudyDay={currentStudyDay}
                                        currentMonthInRoadmap={currentMonthInRoadmap}
                                        currentDayInMonth={currentDayInMonth}
                                        theme={todayPlan.theme}
                                        allCompleted={allScheduledTasksCompleted}
                                        taskCount={todayPlan.tasks.length}
                                        onPrevious={goToPreviousDay}
                                        onNext={advanceToNextDay}
                                    />
                                    <ScheduledTaskList
                                        tasks={todayPlan.tasks}
                                        completedTasks={completedTasks}
                                        currentStudyDay={currentStudyDay}
                                        onToggle={toggleTask}
                                    />
                                </>
                            ) : (
                                <div className="card p-8 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center">
                                        <Calendar className="w-8 h-8 text-[var(--text-muted)]" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                                        Chưa có kế hoạch cho ngày này
                                    </h3>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        Bạn có thể thêm task tự do ở tab &quot;Tự thêm&quot;.
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* Daily Tasks Tab */}
                    {activeTab === "daily" && (
                        <DailyTaskList
                            tasks={todayTasks}
                            onToggle={toggleDailyTask}
                            onAdd={(title) => addDailyTask(title, todayStr)}
                            onDelete={removeDailyTask}
                            onUpdate={updateDailyTask}
                        />
                    )}

                    {/* Roadmap Tasks Tab */}
                    {activeTab === "roadmap" && currentMonthData && (
                        <RoadmapTaskList
                            currentMonthInRoadmap={currentMonthInRoadmap}
                            shortTitle={currentMonthData.shortTitle}
                            topics={currentMonthData.topics}
                            completedTasks={completedTasks}
                            completedCount={completedRoadmapCount}
                            totalCount={allRoadmapTasks.length}
                            onToggle={toggleTask}
                        />
                    )}

                    {/* Quick Notes */}
                    <motion.div
                        className="card p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
                            📝 Ghi chú nhanh
                        </h2>
                        <textarea
                            placeholder="Viết ghi chú nhanh cho hôm nay..."
                            className="
                                w-full h-32 px-4 py-3 rounded-lg resize-none
                                bg-[var(--bg-secondary)] border border-[var(--border-default)]
                                text-[var(--text-primary)] placeholder-[var(--text-muted)]
                                focus:outline-none focus:border-[var(--accent-primary)]
                                transition-colors font-mono text-sm
                            "
                        />
                    </motion.div>
                </div>

                {/* Sidebar */}
                <TaskSidebar
                    todayPlan={todayPlan ?? null}
                    currentMonthInRoadmap={currentMonthInRoadmap}
                    currentWeek={currentWeek}
                    currentStudyDay={currentStudyDay}
                    completedTasks={completedTasks}
                    activeDays={activeDays}
                    completedRoadmapCount={completedRoadmapCount}
                    totalRoadmapTasks={allRoadmapTasks.length}
                    hasRoadmapStarted={hasRoadmapStarted}
                    weekDays={weekDays}
                    today={today}
                    roadmapStartDate={roadmapStartDate}
                    isDayCompleted={isDayCompleted}
                />
            </div>
        </div>
    );
}

// --- Small helper components ---

function TabButton({ active, onClick, color, children }: {
    active: boolean;
    onClick: () => void;
    color: "primary" | "green";
    children: React.ReactNode;
}) {
    const activeClass = color === "green"
        ? "bg-[var(--accent-green)] text-white shadow-lg shadow-[var(--accent-green)]/30"
        : "bg-[var(--accent-primary)] text-white shadow-lg shadow-[var(--accent-primary)]/30";

    return (
        <button
            onClick={onClick}
            className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${active ? activeClass : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                }`}
        >
            {children}
        </button>
    );
}

function LearningBanner({ currentStudyDay, currentWeek, hasRoadmapStarted }: {
    currentStudyDay: number;
    currentWeek: number;
    hasRoadmapStarted: boolean;
}) {
    const dayInWeek = ((currentStudyDay - 1) % 7) + 1;
    const isEndOfWeek = dayInWeek >= 5;
    const daysUntilDeadline = 7 - dayInWeek;

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
        >
            <Link
                href="/learning"
                className={`block p-4 rounded-xl border transition-all hover:scale-[1.01] ${isEndOfWeek && hasRoadmapStarted
                    ? 'bg-gradient-to-r from-[var(--accent-amber)]/20 via-[var(--accent-red)]/10 to-[var(--accent-primary)]/20 border-[var(--accent-amber)]/40 animate-pulse'
                    : 'bg-gradient-to-r from-[var(--accent-primary)]/15 to-[var(--accent-green)]/15 border-[var(--accent-primary)]/30'
                    }`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isEndOfWeek && hasRoadmapStarted
                            ? 'bg-[var(--accent-amber)] text-black'
                            : 'bg-[var(--accent-primary)] text-white'
                            }`}>
                            <Zap className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-medium text-[var(--text-primary)]">
                                📚 Phương pháp học nâng cao
                            </p>
                            {isEndOfWeek && hasRoadmapStarted ? (
                                <p className="text-sm text-[var(--accent-amber)] font-medium">
                                    ⚠️ Còn {daysUntilDeadline} ngày để hoàn thành Mini Project tuần {currentWeek}!
                                </p>
                            ) : hasRoadmapStarted ? (
                                <p className="text-xs text-[var(--text-muted)]">
                                    Mini Project tuần {currentWeek} • Daily Reflection • Weekly Review
                                </p>
                            ) : (
                                <p className="text-xs text-[var(--text-muted)]">
                                    Chuẩn bị sẵn sàng với các công cụ học tập hiệu quả
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="text-[var(--text-muted)]">→</div>
                </div>
            </Link>
        </motion.div>
    );
}
