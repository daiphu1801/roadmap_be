// Shared roadmap configuration constants
export const ROADMAP_START_DATE = new Date(2026, 1, 23); // 23/02/2026
export const TOTAL_DAYS = 168;
export const DAYS_PER_MONTH = 28;
export const DAYS_PER_WEEK = 7;

export function getRoadmapStartDate(): Date {
    const d = new Date(ROADMAP_START_DATE);
    d.setHours(0, 0, 0, 0);
    return d;
}
