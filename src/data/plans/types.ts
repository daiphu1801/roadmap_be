// Shared types for daily plans
export interface DailyPlanTask {
    id: string;
    title: string;
    category: 'theory' | 'practice' | 'dsa' | 'project' | 'review';
    duration: string;
    priority: 'high' | 'medium' | 'low';
    resources?: string[];
    leetcodeId?: number;
    leetcodeLink?: string;
}

export interface DailyPlan {
    day: number;
    month: number;
    theme: string;
    focus: 'theory' | 'practice' | 'project' | 'review';
    tasks: DailyPlanTask[];
}

// Vietnamese labels for categories
export const categoryLabels: Record<string, string> = {
    theory: '📚 Lý thuyết',
    practice: '💻 Thực hành',
    dsa: '🧮 DSA',
    project: '🛠️ Dự án',
    review: '📝 Ôn tập',
};

export const priorityLabels: Record<string, string> = {
    high: '🔴 Cao',
    medium: '🟡 Trung bình',
    low: '🟢 Thấp',
};
