import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { roadmapData } from '@/data/roadmap';
import { format } from 'date-fns';
import { Topic, TaskItem } from './types';

interface Problem {
    id: string;
    name: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    topicId: string;
    solved: boolean;
    link?: string;
    solvedAt?: string;
}

interface DailyTask {
    id: string;
    title: string;
    completed: boolean;
    date: string;
}

interface Note {
    id: string;
    title: string;
    content: string;
    tags: string[];
    createdAt: string;
    updatedAt: string;
}

interface RoadmapStore {
    // Progress tracking
    completedTasks: string[];
    activeDays: string[];
    currentStreak: number;
    longestStreak: number;
    startDate: string;

    // Manual day control
    currentStudyDay: number; // 1-indexed day in the roadmap

    // DSA
    solvedProblems: Problem[];

    // Daily tasks
    dailyTasks: DailyTask[];

    // Notes
    notes: Note[];

    // Actions
    toggleTask: (taskId: string) => void;
    addActiveDay: (date: string) => void;
    updateStreak: () => void;

    // Manual day control actions
    setCurrentStudyDay: (day: number) => void;
    advanceToNextDay: () => void;
    goToPreviousDay: () => void;
    getCurrentMonth: () => number;
    getCurrentDayInMonth: () => number;

    // DSA actions
    addProblem: (problem: Omit<Problem, 'id' | 'solvedAt'>) => void;
    toggleProblem: (problemId: string) => void;

    // Daily task actions
    addDailyTask: (title: string, date: string) => void;
    toggleDailyTask: (taskId: string) => void;
    updateDailyTask: (taskId: string, title: string) => void;
    removeDailyTask: (taskId: string) => void;

    // Notes actions
    addNote: (title: string) => void;
    updateNote: (id: string, updates: Partial<Pick<Note, 'title' | 'content' | 'tags'>>) => void;
    deleteNote: (id: string) => void;

    // Computed
    getTotalProgress: () => number;
    getMonthProgress: (monthId: number) => number;
    getDsaStats: () => { total: number; easy: number; medium: number; hard: number };
}

export const useRoadmapStore = create<RoadmapStore>()(
    persist(
        (set, get) => ({
            // Initial state
            completedTasks: [],
            activeDays: [],
            currentStreak: 0,
            longestStreak: 0,
            startDate: format(new Date(), 'yyyy-MM-dd'),
            currentStudyDay: 1,
            solvedProblems: [],
            dailyTasks: [],
            notes: [],

            // Task actions
            toggleTask: (taskId: string) => {
                const { completedTasks } = get();
                const isCompleted = completedTasks.includes(taskId);

                set({
                    completedTasks: isCompleted
                        ? completedTasks.filter(id => id !== taskId)
                        : [...completedTasks, taskId]
                });

                // Add today as active day
                get().addActiveDay(format(new Date(), 'yyyy-MM-dd'));
            },

            addActiveDay: (date: string) => {
                const { activeDays } = get();
                if (!activeDays.includes(date)) {
                    set({ activeDays: [...activeDays, date] });
                    get().updateStreak();
                }
            },

            updateStreak: () => {
                const { activeDays, longestStreak } = get();
                if (activeDays.length === 0) {
                    set({ currentStreak: 0 });
                    return;
                }

                // Sort dates in descending order
                const sortedDays = [...activeDays].sort((a, b) =>
                    new Date(b).getTime() - new Date(a).getTime()
                );

                // Calculate current streak
                let streak = 1;
                const today = format(new Date(), 'yyyy-MM-dd');
                const yesterday = format(new Date(Date.now() - 86400000), 'yyyy-MM-dd');

                // Check if today or yesterday is the most recent active day
                if (sortedDays[0] !== today && sortedDays[0] !== yesterday) {
                    set({ currentStreak: 0 });
                    return;
                }

                for (let i = 0; i < sortedDays.length - 1; i++) {
                    const current = new Date(sortedDays[i]);
                    const next = new Date(sortedDays[i + 1]);
                    const diffDays = (current.getTime() - next.getTime()) / 86400000;

                    if (diffDays === 1) {
                        streak++;
                    } else {
                        break;
                    }
                }

                set({
                    currentStreak: streak,
                    longestStreak: Math.max(longestStreak, streak)
                });
            },

            // Manual day control actions
            setCurrentStudyDay: (day: number) => {
                if (day >= 1 && day <= 168) { // 6 months * 28 days
                    set({ currentStudyDay: day });
                }
            },

            advanceToNextDay: () => {
                const { currentStudyDay } = get();
                if (currentStudyDay < 168) {
                    set({ currentStudyDay: currentStudyDay + 1 });
                }
            },

            goToPreviousDay: () => {
                const { currentStudyDay } = get();
                if (currentStudyDay > 1) {
                    set({ currentStudyDay: currentStudyDay - 1 });
                }
            },

            getCurrentMonth: () => {
                const { currentStudyDay } = get();
                return Math.ceil(currentStudyDay / 28);
            },

            getCurrentDayInMonth: () => {
                const { currentStudyDay } = get();
                return ((currentStudyDay - 1) % 28) + 1;
            },

            // DSA actions
            addProblem: (problem) => {
                const newProblem: Problem = {
                    ...problem,
                    id: Date.now().toString(),
                    solvedAt: problem.solved ? format(new Date(), 'yyyy-MM-dd') : undefined
                };
                set(state => ({ solvedProblems: [...state.solvedProblems, newProblem] }));

                if (problem.solved) {
                    get().addActiveDay(format(new Date(), 'yyyy-MM-dd'));
                }
            },

            toggleProblem: (problemId: string) => {
                set(state => ({
                    solvedProblems: state.solvedProblems.map(p =>
                        p.id === problemId
                            ? {
                                ...p,
                                solved: !p.solved,
                                solvedAt: !p.solved ? format(new Date(), 'yyyy-MM-dd') : undefined
                            }
                            : p
                    )
                }));
                get().addActiveDay(format(new Date(), 'yyyy-MM-dd'));
            },

            // Daily task actions
            addDailyTask: (title: string, date: string) => {
                const newTask: DailyTask = {
                    id: Date.now().toString(),
                    title,
                    completed: false,
                    date
                };
                set(state => ({ dailyTasks: [...state.dailyTasks, newTask] }));
            },

            toggleDailyTask: (taskId: string) => {
                set(state => ({
                    dailyTasks: state.dailyTasks.map(t =>
                        t.id === taskId ? { ...t, completed: !t.completed } : t
                    )
                }));
                get().addActiveDay(format(new Date(), 'yyyy-MM-dd'));
            },

            removeDailyTask: (taskId: string) => {
                set(state => ({
                    dailyTasks: state.dailyTasks.filter(t => t.id !== taskId)
                }));
            },

            updateDailyTask: (taskId: string, title: string) => {
                set(state => ({
                    dailyTasks: state.dailyTasks.map(t =>
                        t.id === taskId ? { ...t, title } : t
                    )
                }));
            },

            // Notes actions
            addNote: (title: string) => {
                const now = format(new Date(), 'yyyy-MM-dd');
                const newNote: Note = {
                    id: Date.now().toString(),
                    title,
                    content: '',
                    tags: [],
                    createdAt: now,
                    updatedAt: now
                };
                set(state => ({ notes: [newNote, ...state.notes] }));
            },

            updateNote: (id: string, updates) => {
                set(state => ({
                    notes: state.notes.map(n =>
                        n.id === id
                            ? { ...n, ...updates, updatedAt: format(new Date(), 'yyyy-MM-dd') }
                            : n
                    )
                }));
            },

            deleteNote: (id: string) => {
                set(state => ({
                    notes: state.notes.filter(n => n.id !== id)
                }));
            },

            // Computed values
            getTotalProgress: () => {
                const { completedTasks } = get();
                let total = 0;

                roadmapData.forEach(month => {
                    month.topics.forEach((topic: Topic) => {
                        total += topic.items.length;
                    });
                });

                return total > 0 ? Math.round((completedTasks.length / total) * 100) : 0;
            },

            getMonthProgress: (monthId: number) => {
                const { completedTasks } = get();
                const month = roadmapData.find(m => m.id === monthId);
                if (!month) return 0;

                let total = 0;
                let completed = 0;

                month.topics.forEach((topic: Topic) => {
                    topic.items.forEach((item: TaskItem) => {
                        total++;
                        if (completedTasks.includes(item.id)) {
                            completed++;
                        }
                    });
                });

                return total > 0 ? Math.round((completed / total) * 100) : 0;
            },

            getDsaStats: () => {
                const { solvedProblems } = get();
                const solved = solvedProblems.filter(p => p.solved);

                return {
                    total: solved.length,
                    easy: solved.filter(p => p.difficulty === 'Easy').length,
                    medium: solved.filter(p => p.difficulty === 'Medium').length,
                    hard: solved.filter(p => p.difficulty === 'Hard').length
                };
            }
        }),
        {
            name: 'roadmap-storage',
            version: 1
        }
    )
);
