// Type definitions for Backend SE Roadmap Tracker

export interface TaskItem {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    completedAt?: string;
    notes?: string;
}

export interface Topic {
    id: string;
    name: string;
    icon?: string;
    items: TaskItem[];
}

export interface Month {
    id: number;
    title: string;
    shortTitle: string;
    goal: string;
    topics: Topic[];
    dsaTopics?: DSATopic[];
}

export interface DSATopic {
    id: string;
    name: string;
    target: number;
    solved: number;
    problems: Problem[];
}

export interface Problem {
    id: string;
    name: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    link?: string;
    solvedAt?: string;
    notes?: string;
}

export interface DailyLog {
    date: string; // YYYY-MM-DD
    tasksCompleted: string[];
    dsaSolved: number;
    hoursStudied: number;
    notes?: string;
}

export interface UserProgress {
    currentStreak: number;
    longestStreak: number;
    totalDsaSolved: number;
    activeDays: string[];
    startDate: string;
    completedTasks: string[];
    dailyLogs: DailyLog[];
}

export interface RoadmapState {
    months: Month[];
    progress: UserProgress;
    currentMonth: number;

    // Actions
    toggleTask: (monthId: number, topicId: string, taskId: string) => void;
    addDsaProblem: (topicId: string, problem: Omit<Problem, 'id'>) => void;
    updateStreak: () => void;
    getMonthProgress: (monthId: number) => number;
    getTotalProgress: () => number;
}

export type NavItem = {
    name: string;
    href: string;
    icon: string;
};
