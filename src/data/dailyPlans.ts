// ============================================
// DAILY PLANS - MAIN ENTRY POINT
// Re-exports everything from the plans folder
// ============================================

// Re-export everything from plans/index
export * from './plans';

// For backward compatibility, also export individual items
export {
    getDayPlan,
    getMonthPlans,
    getTodayPlan,
    allPlans,
    overallStats,
    categoryLabels,
    priorityLabels
} from './plans';

export type { DailyPlan, DailyPlanTask } from './plans';
