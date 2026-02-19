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
        theme: "SQL Foundations Review",
        focus: "theory",
        tasks: [
            { id: "m3d1-1", title: "SELECT, WHERE, ORDER BY, LIMIT - best practices", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d1-2", title: "Aggregate functions: COUNT, SUM, AVG, GROUP BY, HAVING", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d1-3", title: "Viết 10 queries phức tạp với sample data", category: "practice", duration: "1h", priority: "high" },
            { id: "m3d1-4", title: "Maximum Product Subarray", category: "dsa", duration: "40m", priority: "high", leetcodeId: 152, leetcodeLink: "https://leetcode.com/problems/maximum-product-subarray/" },
        ]
    },
    {
        day: 2, month: 3,
        theme: "JOINs Mastery",
        focus: "theory",
        tasks: [
            { id: "m3d2-1", title: "INNER, LEFT, RIGHT, FULL OUTER JOIN", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d2-2", title: "CROSS JOIN, SELF JOIN use cases", category: "theory", duration: "30m", priority: "medium" },
            { id: "m3d2-3", title: "Subqueries vs JOINs - performance", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d2-4", title: "Word Break", category: "dsa", duration: "45m", priority: "high", leetcodeId: 139, leetcodeLink: "https://leetcode.com/problems/word-break/" },
        ]
    },
    {
        day: 3, month: 3,
        theme: "Indexes Deep Dive",
        focus: "theory",
        tasks: [
            { id: "m3d3-1", title: "B-Tree index: structure, when to use", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d3-2", title: "Composite indexes và column order", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d3-3", title: "Covering indexes và index-only scans", category: "theory", duration: "30m", priority: "medium" },
            { id: "m3d3-4", title: "Longest Increasing Subsequence", category: "dsa", duration: "45m", priority: "high", leetcodeId: 300, leetcodeLink: "https://leetcode.com/problems/longest-increasing-subsequence/" },
        ]
    },
    {
        day: 4, month: 3,
        theme: "EXPLAIN ANALYZE",
        focus: "practice",
        tasks: [
            { id: "m3d4-1", title: "Đọc execution plan: Seq Scan, Index Scan, Bitmap", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d4-2", title: "Identify slow queries và optimize", category: "practice", duration: "1h", priority: "high" },
            { id: "m3d4-3", title: "Query tuning với real scenarios", category: "practice", duration: "30m", priority: "high" },
            { id: "m3d4-4", title: "Unique Paths", category: "dsa", duration: "30m", priority: "high", leetcodeId: 62, leetcodeLink: "https://leetcode.com/problems/unique-paths/" },
        ]
    },
    {
        day: 5, month: 3,
        theme: "Database Normalization",
        focus: "theory",
        tasks: [
            { id: "m3d5-1", title: "1NF, 2NF, 3NF - theory và examples", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d5-2", title: "Denormalization: khi nào và tại sao?", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d5-3", title: "Design schema cho E-commerce system", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d5-4", title: "Longest Common Subsequence", category: "dsa", duration: "40m", priority: "high", leetcodeId: 1143, leetcodeLink: "https://leetcode.com/problems/longest-common-subsequence/" },
        ]
    },
    {
        day: 6, month: 3,
        theme: "ACID Properties",
        focus: "theory",
        tasks: [
            { id: "m3d6-1", title: "Atomicity: all-or-nothing với transactions", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d6-2", title: "Consistency, Isolation, Durability explained", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d6-3", title: "Demo ACID violations và consequences", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d6-4", title: "Maximum Subarray", category: "dsa", duration: "25m", priority: "high", leetcodeId: 53, leetcodeLink: "https://leetcode.com/problems/maximum-subarray/" },
        ]
    },
    {
        day: 7, month: 3,
        theme: "📝 Review Tuần 1 + Greedy",
        focus: "review",
        tasks: [
            { id: "m3d7-1", title: "Quiz: SQL và Database concepts", category: "review", duration: "30m", priority: "high" },
            { id: "m3d7-2", title: "Tổng hợp SQL cheatsheet", category: "review", duration: "30m", priority: "medium" },
            { id: "m3d7-3", title: "Jump Game", category: "dsa", duration: "35m", priority: "high", leetcodeId: 55, leetcodeLink: "https://leetcode.com/problems/jump-game/" },
        ]
    },

    // ========== TUẦN 2: Transactions & Locking + Intervals ==========
    {
        day: 8, month: 3,
        theme: "Transaction Isolation Levels",
        focus: "theory",
        tasks: [
            { id: "m3d8-1", title: "READ UNCOMMITTED, READ COMMITTED", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d8-2", title: "REPEATABLE READ, SERIALIZABLE", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d8-3", title: "Demo isolation level behaviors", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d8-4", title: "Insert Interval", category: "dsa", duration: "35m", priority: "high", leetcodeId: 57, leetcodeLink: "https://leetcode.com/problems/insert-interval/" },
        ]
    },
    {
        day: 9, month: 3,
        theme: "Concurrency Issues",
        focus: "theory",
        tasks: [
            { id: "m3d9-1", title: "Dirty Read, Non-repeatable Read, Phantom Read", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d9-2", title: "Lost Update problem", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d9-3", title: "Simulate và fix concurrency issues", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d9-4", title: "Merge Intervals", category: "dsa", duration: "35m", priority: "high", leetcodeId: 56, leetcodeLink: "https://leetcode.com/problems/merge-intervals/" },
        ]
    },
    {
        day: 10, month: 3,
        theme: "Pessimistic Locking",
        focus: "theory",
        tasks: [
            { id: "m3d10-1", title: "SELECT FOR UPDATE syntax", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d10-2", title: "Row-level vs Table-level locks", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d10-3", title: "Lock wait timeout và deadlock detection", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d10-4", title: "Non-overlapping Intervals", category: "dsa", duration: "40m", priority: "high", leetcodeId: 435, leetcodeLink: "https://leetcode.com/problems/non-overlapping-intervals/" },
        ]
    },
    {
        day: 11, month: 3,
        theme: "Optimistic Locking",
        focus: "theory",
        tasks: [
            { id: "m3d11-1", title: "Version column strategy", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d11-2", title: "Optimistic vs Pessimistic: trade-offs", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d11-3", title: "Implement optimistic locking với JPA @Version", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d11-4", title: "Rotate Image", category: "dsa", duration: "35m", priority: "high", leetcodeId: 48, leetcodeLink: "https://leetcode.com/problems/rotate-image/" },
        ]
    },
    {
        day: 12, month: 3,
        theme: "Connection Pooling",
        focus: "theory",
        tasks: [
            { id: "m3d12-1", title: "HikariCP configuration: pool size, timeout", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d12-2", title: "Connection leak detection", category: "practice", duration: "30m", priority: "high" },
            { id: "m3d12-3", title: "Monitoring connection pool health", category: "practice", duration: "30m", priority: "medium" },
            { id: "m3d12-4", title: "Spiral Matrix", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 54, leetcodeLink: "https://leetcode.com/problems/spiral-matrix/" },
        ]
    },
    {
        day: 13, month: 3,
        theme: "Database Schema Design",
        focus: "practice",
        tasks: [
            { id: "m3d13-1", title: "Design booking system schema", category: "practice", duration: "1h", priority: "high" },
            { id: "m3d13-2", title: "Handle time slots và constraints", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d13-3", title: "Viết migration scripts", category: "practice", duration: "30m", priority: "medium" },
            { id: "m3d13-4", title: "Set Matrix Zeroes", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 73, leetcodeLink: "https://leetcode.com/problems/set-matrix-zeroes/" },
        ]
    },
    {
        day: 14, month: 3,
        theme: "📝 Review Tuần 2 + Bit Manipulation",
        focus: "review",
        tasks: [
            { id: "m3d14-1", title: "Quiz: Transactions và Locking", category: "review", duration: "30m", priority: "high" },
            { id: "m3d14-2", title: "Document locking strategies", category: "review", duration: "30m", priority: "medium" },
            { id: "m3d14-3", title: "Single Number", category: "dsa", duration: "15m", priority: "high", leetcodeId: 136, leetcodeLink: "https://leetcode.com/problems/single-number/" },
            { id: "m3d14-4", title: "Number of 1 Bits", category: "dsa", duration: "20m", priority: "medium", leetcodeId: 191, leetcodeLink: "https://leetcode.com/problems/number-of-1-bits/" },
        ]
    },

    // ========== TUẦN 3: Project Pickleball Booking ==========
    {
        day: 15, month: 3,
        theme: "🏓 Pickleball Booking - Day 1",
        focus: "project",
        tasks: [
            { id: "m3d15-1", title: "Requirements analysis và database design", category: "project", duration: "1h", priority: "high" },
            { id: "m3d15-2", title: "ERD với Court, TimeSlot, Booking entities", category: "project", duration: "45m", priority: "high" },
            { id: "m3d15-3", title: "Setup PostgreSQL với Docker", category: "project", duration: "30m", priority: "high" },
            { id: "m3d15-4", title: "Counting Bits", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 338, leetcodeLink: "https://leetcode.com/problems/counting-bits/" },
        ]
    },
    {
        day: 16, month: 3,
        theme: "🏓 Pickleball Booking - Day 2",
        focus: "project",
        tasks: [
            { id: "m3d16-1", title: "Implement JPA entities với relationships", category: "project", duration: "1h", priority: "high" },
            { id: "m3d16-2", title: "Repository layer với custom queries", category: "project", duration: "45m", priority: "high" },
            { id: "m3d16-3", title: "Seed data cho courts và time slots", category: "project", duration: "30m", priority: "medium" },
            { id: "m3d16-4", title: "Reverse Bits", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 190, leetcodeLink: "https://leetcode.com/problems/reverse-bits/" },
        ]
    },
    {
        day: 17, month: 3,
        theme: "🏓 Pickleball Booking - Day 3",
        focus: "project",
        tasks: [
            { id: "m3d17-1", title: "BookingService với double-booking prevention", category: "project", duration: "1h", priority: "high" },
            { id: "m3d17-2", title: "Implement pessimistic locking", category: "project", duration: "45m", priority: "high" },
            { id: "m3d17-3", title: "Unit tests cho booking logic", category: "project", duration: "30m", priority: "high" },
            { id: "m3d17-4", title: "Missing Number", category: "dsa", duration: "20m", priority: "medium", leetcodeId: 268, leetcodeLink: "https://leetcode.com/problems/missing-number/" },
        ]
    },
    {
        day: 18, month: 3,
        theme: "🏓 Pickleball Booking - Day 4",
        focus: "project",
        tasks: [
            { id: "m3d18-1", title: "REST API endpoints cho booking", category: "project", duration: "1h", priority: "high" },
            { id: "m3d18-2", title: "Validation và error handling", category: "project", duration: "45m", priority: "high" },
            { id: "m3d18-3", title: "API documentation với Swagger", category: "project", duration: "30m", priority: "medium" },
            { id: "m3d18-4", title: "Sum of Two Integers", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 371, leetcodeLink: "https://leetcode.com/problems/sum-of-two-integers/" },
        ]
    },
    {
        day: 19, month: 3,
        theme: "🏓 Pickleball Booking - Day 5",
        focus: "project",
        tasks: [
            { id: "m3d19-1", title: "Concurrent booking test với JMeter", category: "project", duration: "1h", priority: "high" },
            { id: "m3d19-2", title: "Fix race conditions nếu có", category: "project", duration: "45m", priority: "high" },
            { id: "m3d19-3", title: "Performance metrics logging", category: "project", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 20, month: 3,
        theme: "🏓 Pickleball Booking - Day 6",
        focus: "project",
        tasks: [
            { id: "m3d20-1", title: "Benchmark với 1000 concurrent requests", category: "project", duration: "1h", priority: "high" },
            { id: "m3d20-2", title: "Query optimization với EXPLAIN ANALYZE", category: "project", duration: "45m", priority: "high" },
            { id: "m3d20-3", title: "Add indexes và measure improvement", category: "project", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 21, month: 3,
        theme: "📝 Review Tuần 3 + Polish Project",
        focus: "review",
        tasks: [
            { id: "m3d21-1", title: "Code review và refactoring", category: "project", duration: "45m", priority: "high" },
            { id: "m3d21-2", title: "README với benchmark results", category: "project", duration: "30m", priority: "high" },
            { id: "m3d21-3", title: "Lessons learned document", category: "review", duration: "30m", priority: "medium" },
        ]
    },

    // ========== TUẦN 4: NoSQL & Caching Intro ==========
    {
        day: 22, month: 3,
        theme: "NoSQL Concepts",
        focus: "theory",
        tasks: [
            { id: "m3d22-1", title: "SQL vs NoSQL: trade-offs", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d22-2", title: "Document, Key-Value, Column, Graph databases", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d22-3", title: "CAP Theorem explained", category: "theory", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 23, month: 3,
        theme: "MongoDB Basics",
        focus: "practice",
        tasks: [
            { id: "m3d23-1", title: "MongoDB: documents, collections", category: "theory", duration: "30m", priority: "medium" },
            { id: "m3d23-2", title: "CRUD operations với MongoDB Shell", category: "practice", duration: "45m", priority: "medium" },
            { id: "m3d23-3", title: "Khi nào chọn MongoDB vs PostgreSQL?", category: "theory", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 24, month: 3,
        theme: "Redis Introduction",
        focus: "theory",
        tasks: [
            { id: "m3d24-1", title: "Redis data structures: String, List, Set, Hash", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d24-2", title: "TTL và expiration policies", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d24-3", title: "Redis CLI practices", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 25, month: 3,
        theme: "Caching Strategies",
        focus: "theory",
        tasks: [
            { id: "m3d25-1", title: "Cache-Aside, Read-Through, Write-Through", category: "theory", duration: "45m", priority: "high" },
            { id: "m3d25-2", title: "Cache Invalidation strategies", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d25-3", title: "Distributed caching considerations", category: "theory", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 26, month: 3,
        theme: "Database Migration",
        focus: "practice",
        tasks: [
            { id: "m3d26-1", title: "Flyway/Liquibase basics", category: "theory", duration: "30m", priority: "medium" },
            { id: "m3d26-2", title: "Version control cho database schemas", category: "practice", duration: "45m", priority: "medium" },
            { id: "m3d26-3", title: "Rollback strategies", category: "theory", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 27, month: 3,
        theme: "Database Interview Prep",
        focus: "review",
        tasks: [
            { id: "m3d27-1", title: "Common database interview questions", category: "review", duration: "1h", priority: "high" },
            { id: "m3d27-2", title: "Practice explaining ACID, isolation levels", category: "review", duration: "45m", priority: "high" },
            { id: "m3d27-3", title: "Design Instagram/Twitter database schema", category: "practice", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 28, month: 3,
        theme: "📝 Tổng Kết Tháng 3",
        focus: "review",
        tasks: [
            { id: "m3d28-1", title: "Review Database concepts", category: "review", duration: "1h", priority: "high" },
            { id: "m3d28-2", title: "Update Pickleball Booking với lessons learned", category: "project", duration: "30m", priority: "medium" },
            { id: "m3d28-3", title: "Prepare for Month 4: Spring Boot", category: "review", duration: "30m", priority: "medium" },
        ]
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
