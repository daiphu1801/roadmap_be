// ============================================
// DAILY PLANS - INDEX
// Export all monthly plans from a single location
// ============================================

// Types
export * from './types';

// Monthly plans
export { month1Plans, month1Stats } from './month1';
export { month2Plans, month2Stats } from './month2';
export { month3Plans, month3Stats } from './month3';
export { month4Plans, month4Stats } from './month4';
export { month5Plans, month5Stats } from './month5';
export { month6Plans, month6Stats } from './month6';

// Utility imports
import { DailyPlan, DailyPlanTask, categoryLabels, priorityLabels } from './types';
import { month1Plans } from './month1';
import { month2Plans } from './month2';
import { month3Plans } from './month3';
import { month4Plans } from './month4';
import { month5Plans } from './month5';
import { month6Plans } from './month6';

// Combined plans array
export const allPlans: DailyPlan[] = [
    ...month1Plans,
    ...month2Plans,
    ...month3Plans,
    ...month4Plans,
    ...month5Plans,
    ...month6Plans,
];

// Helper function to get day plan by month and day
export function getDayPlan(month: number, day: number): DailyPlan | undefined {
    return allPlans.find(p => p.month === month && p.day === day);
}

// Helper function to get all plans for a specific month
export function getMonthPlans(month: number): DailyPlan[] {
    return allPlans.filter(p => p.month === month);
}

// Get today's plan based on start date
export function getTodayPlan(startDate: Date): DailyPlan | undefined {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - startDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Calculate month and day
    const month = Math.floor(diffDays / 28) + 1;
    const day = (diffDays % 28) + 1;

    if (month > 6) return undefined; // Program completed

    return getDayPlan(month, day);
}

// Statistics
export const overallStats = {
    totalMonths: 6,
    totalDays: allPlans.length,
    totalTasks: allPlans.reduce((acc, day) => acc + day.tasks.length, 0),
    categories: {
        dsa: allPlans.reduce((acc, day) => acc + day.tasks.filter(t => t.category === 'dsa').length, 0),
        theory: allPlans.reduce((acc, day) => acc + day.tasks.filter(t => t.category === 'theory').length, 0),
        practice: allPlans.reduce((acc, day) => acc + day.tasks.filter(t => t.category === 'practice').length, 0),
        project: allPlans.reduce((acc, day) => acc + day.tasks.filter(t => t.category === 'project').length, 0),
        review: allPlans.reduce((acc, day) => acc + day.tasks.filter(t => t.category === 'review').length, 0),
    }
};

// Re-export labels
export { categoryLabels, priorityLabels };
export type { DailyPlan, DailyPlanTask };
