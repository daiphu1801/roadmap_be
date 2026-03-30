// ============================================
// THÁNG 3: DATABASE + SYSTEM THINKING
// Mục tiêu: SQL, Transactions, Locking + DP 1D/2D, Greedy
// DSA Focus: 1-D Dynamic Programming, 2-D DP, Greedy
// ============================================

import { DailyPlan, DailyPlanTask } from './types';

export const month3Plans: DailyPlan[] = [
    // ========== TUẦN 1: SQL Fundamentals + DP 1D ==========
    {
        day: 1, month: 3,
        theme: "Buổi 1: SQL Foundations & DP 1D",
        focus: "theory",
        tasks: [
            { id: "m3d1-1", title: "SELECT, Aggregate functions (COUNT, SUM, AVG, GROUP BY, HAVING)", category: "theory", duration: "1h", priority: "high" },
            { id: "m3d1-2", title: "Viết 10 queries phức tạp với sample data", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d1-3", title: "Maximum Product Subarray", category: "dsa", duration: "40m", priority: "high", leetcodeId: 152, leetcodeLink: "https://leetcode.com/problems/maximum-product-subarray/" },
        ]
    },
    {
        day: 2, month: 3,
        theme: "Buổi 2: JOINs Mastery & DP",
        focus: "theory",
        tasks: [
            { id: "m3d2-1", title: "INNER, LEFT, RIGHT, FULL OUTER JOIN, CROSS JOIN, SELF JOIN", category: "theory", duration: "1h", priority: "high" },
            { id: "m3d2-2", title: "Subqueries vs JOINs - performance", category: "practice", duration: "30m", priority: "high" },
            { id: "m3d2-3", title: "Word Break", category: "dsa", duration: "45m", priority: "high", leetcodeId: 139, leetcodeLink: "https://leetcode.com/problems/word-break/" },
        ]
    },
    {
        day: 3, month: 3,
        theme: "Buổi 3: Indexes Deep Dive & Constraints",
        focus: "theory",
        tasks: [
            { id: "m3d3-1", title: "B-Tree index, Composite indexes, Covering indexes", category: "theory", duration: "1h", priority: "high" },
            { id: "m3d3-2", title: "Database Normalization (1NF, 2NF, 3NF)", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d3-3", title: "Longest Increasing Subsequence", category: "dsa", duration: "45m", priority: "high", leetcodeId: 300, leetcodeLink: "https://leetcode.com/problems/longest-increasing-subsequence/" },
        ]
    },
    {
        day: 4, month: 3,
        theme: "Buổi 4: Query Tuning & ACID",
        focus: "practice",
        tasks: [
            { id: "m3d4-1", title: "EXPLAIN ANALYZE & Query tuning", category: "practice", duration: "1h", priority: "high" },
            { id: "m3d4-2", title: "ACID Properties (Atomicity, Consistency, Isolation, Durability)", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d4-3", title: "Unique Paths", category: "dsa", duration: "30m", priority: "high", leetcodeId: 62, leetcodeLink: "https://leetcode.com/problems/unique-paths/" },
        ]
    },
    {
        day: 5, month: 3,
        theme: "Buổi 5 (Tùy chọn): Thuật toán DP 2D",
        focus: "practice",
        tasks: [
            { id: "m3d5-1", title: "Longest Common Subsequence", category: "dsa", duration: "40m", priority: "high", leetcodeId: 1143, leetcodeLink: "https://leetcode.com/problems/longest-common-subsequence/" },
            { id: "m3d5-2", title: "Maximum Subarray", category: "dsa", duration: "25m", priority: "high", leetcodeId: 53, leetcodeLink: "https://leetcode.com/problems/maximum-subarray/" },
        ]
    },
    {
        day: 6, month: 3,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 7, month: 3,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },

    // ========== TUẦN 2: Transactions & Locking + Intervals ==========
    {
        day: 8, month: 3,
        theme: "Buổi 1: Transaction Isolation Levels & Intervals",
        focus: "theory",
        tasks: [
            { id: "m3d8-1", title: "Isolation Levels (READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE)", category: "theory", duration: "1h", priority: "high" },
            { id: "m3d8-2", title: "Concurrency Issues (Dirty Read, Phantom Read, Lost Update)", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d8-3", title: "Insert Interval", category: "dsa", duration: "35m", priority: "high", leetcodeId: 57, leetcodeLink: "https://leetcode.com/problems/insert-interval/" },
        ]
    },
    {
        day: 9, month: 3,
        theme: "Buổi 2: Database Locking Strategies",
        focus: "theory",
        tasks: [
            { id: "m3d9-1", title: "Pessimistic Locking (SELECT FOR UPDATE) & Deadlocks", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d9-2", title: "Optimistic Locking & Version column strategy", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d9-3", title: "Merge Intervals", category: "dsa", duration: "35m", priority: "high", leetcodeId: 56, leetcodeLink: "https://leetcode.com/problems/merge-intervals/" },
        ]
    },
    {
        day: 10, month: 3,
        theme: "Buổi 3: Connection Pooling & DB Design",
        focus: "theory",
        tasks: [
            { id: "m3d10-1", title: "HikariCP configuration & Connection leak detection", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d10-2", title: "Design database schema cho Booking System", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d10-3", title: "Non-overlapping Intervals", category: "dsa", duration: "40m", priority: "high", leetcodeId: 435, leetcodeLink: "https://leetcode.com/problems/non-overlapping-intervals/" },
        ]
    },
    {
        day: 11, month: 3,
        theme: "Buổi 4: Matrices & Review",
        focus: "practice",
        tasks: [
            { id: "m3d11-1", title: "Rotate Image", category: "dsa", duration: "35m", priority: "high", leetcodeId: 48, leetcodeLink: "https://leetcode.com/problems/rotate-image/" },
            { id: "m3d11-2", title: "Spiral Matrix", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 54, leetcodeLink: "https://leetcode.com/problems/spiral-matrix/" },
            { id: "m3d11-3", title: "Review Locking & Transactions Concepts", category: "review", duration: "45m", priority: "high" },
        ]
    },
    {
        day: 12, month: 3,
        theme: "Buổi 5 (Tùy chọn): Thuật toán Matrix & Review",
        focus: "review",
        tasks: [
            { id: "m3d12-1", title: "Set Matrix Zeroes", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 73, leetcodeLink: "https://leetcode.com/problems/set-matrix-zeroes/" },
            { id: "m3d12-2", title: "Jump Game", category: "dsa", duration: "35m", priority: "high", leetcodeId: 55, leetcodeLink: "https://leetcode.com/problems/jump-game/" },
        ]
    },
    {
        day: 13, month: 3,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 14, month: 3,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },

    // ========== TUẦN 3: Project Pickleball Booking ==========
    {
        day: 15, month: 3,
        theme: "Buổi 1: Project Pickleball & Setup",
        focus: "project",
        tasks: [
            { id: "m3d15-1", title: "ERD Design với Court, TimeSlot, Booking entities", category: "project", duration: "45m", priority: "high" },
            { id: "m3d15-2", title: "Setup PostgreSQL với Docker & Migration Scripts (Flyway)", category: "project", duration: "1h", priority: "high" },
            { id: "m3d15-3", title: "Counting Bits", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 338, leetcodeLink: "https://leetcode.com/problems/counting-bits/" },
        ]
    },
    {
        day: 16, month: 3,
        theme: "Buổi 2: Implement Entities & Repositories",
        focus: "project",
        tasks: [
            { id: "m3d16-1", title: "Implement JPA entities, Relationships & Repositories", category: "project", duration: "1h", priority: "high" },
            { id: "m3d16-2", title: "Seed data cho courts và time slots", category: "project", duration: "45m", priority: "medium" },
            { id: "m3d16-3", title: "Single Number", category: "dsa", duration: "15m", priority: "high", leetcodeId: 136, leetcodeLink: "https://leetcode.com/problems/single-number/" },
            { id: "m3d16-4", title: "Number of 1 Bits", category: "dsa", duration: "20m", priority: "medium", leetcodeId: 191, leetcodeLink: "https://leetcode.com/problems/number-of-1-bits/" },
        ]
    },
    {
        day: 17, month: 3,
        theme: "Buổi 3: BookingService & Double-booking prevention",
        focus: "project",
        tasks: [
            { id: "m3d17-1", title: "BookingService với pessimistic locking", category: "project", duration: "1h", priority: "high" },
            { id: "m3d17-2", title: "Unit tests cho booking logic", category: "project", duration: "45m", priority: "high" },
            { id: "m3d17-3", title: "Reverse Bits", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 190, leetcodeLink: "https://leetcode.com/problems/reverse-bits/" },
        ]
    },
    {
        day: 18, month: 3,
        theme: "Buổi 4: REST API & JMeter Testing",
        focus: "project",
        tasks: [
            { id: "m3d18-1", title: "REST API endpoints, Validation, Error Handling", category: "project", duration: "1h", priority: "high" },
            { id: "m3d18-2", title: "Concurrent booking test với JMeter", category: "project", duration: "1h", priority: "high" },
            { id: "m3d18-3", title: "Missing Number", category: "dsa", duration: "20m", priority: "medium", leetcodeId: 268, leetcodeLink: "https://leetcode.com/problems/missing-number/" },
        ]
    },
    {
        day: 19, month: 3,
        theme: "Buổi 5 (Tùy chọn): Performance Optimization & Benchmark",
        focus: "project",
        tasks: [
            { id: "m3d19-1", title: "Benchmark với 1000 concurrent requests, Add indexes", category: "project", duration: "1h", priority: "high" },
            { id: "m3d19-2", title: "Sum of Two Integers", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 371, leetcodeLink: "https://leetcode.com/problems/sum-of-two-integers/" },
        ]
    },
    {
        day: 20, month: 3,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 21, month: 3,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },

    // ========== TUẦN 4: NoSQL & Caching Intro ==========
    {
        day: 22, month: 3,
        theme: "Buổi 1: NoSQL & MongoDB Basics",
        focus: "theory",
        tasks: [
            { id: "m3d22-1", title: "SQL vs NoSQL trade-offs, CAP Theorem", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d22-2", title: "MongoDB: documents, collections, CRUD ops", category: "practice", duration: "1h", priority: "medium" },
        ]
    },
    {
        day: 23, month: 3,
        theme: "Buổi 2: Redis & Caching Strategies",
        focus: "theory",
        tasks: [
            { id: "m3d23-1", title: "Redis data structures, TTL, CLI operations", category: "theory", duration: "1h", priority: "high" },
            { id: "m3d23-2", title: "Caching Strategies (Cache-Aside, Write-Through)", category: "theory", duration: "45m", priority: "high" },
        ]
    },
    {
        day: 24, month: 3,
        theme: "Buổi 3: Database Migration & Design Patterns",
        focus: "practice",
        tasks: [
            { id: "m3d24-1", title: "Database Migration strategies & Rollback", category: "theory", duration: "45m", priority: "medium" },
            { id: "m3d24-2", title: "Design Social Media (Twitter) database schema", category: "practice", duration: "1h", priority: "high" },
        ]
    },
    {
        day: 25, month: 3,
        theme: "Buổi 4: Interview Prep Database",
        focus: "review",
        tasks: [
            { id: "m3d25-1", title: "Thực hành trả lời ACID, Transaction ISOLATION, Indexes", category: "review", duration: "1h", priority: "high" },
            { id: "m3d25-2", title: "SQL Query tuning practice questions", category: "review", duration: "45m", priority: "high" },
        ]
    },
    {
        day: 26, month: 3,
        theme: "Buổi 5 (Tùy chọn): Thuật toán & Tổng Kết Cả Tháng 3",
        focus: "review",
        tasks: [
            { id: "m3d26-1", title: "Review toàn bộ Database concepts", category: "review", duration: "1h", priority: "high" },
            { id: "m3d26-2", title: "Prepare for Month 4: Spring Boot", category: "review", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 27, month: 3,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 28, month: 3,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
];

export const month3Stats = {
    totalDays: 28,
    totalTasks: month3Plans.reduce((acc, day) => acc + day.tasks.length, 0),
    dsaTasks: month3Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'dsa').length, 0),
    theoryTasks: month3Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'theory').length, 0),
    practiceTasks: month3Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'practice').length, 0),
    projectTasks: month3Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'project').length, 0),
    reviewTasks: month3Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'review').length, 0),
};
