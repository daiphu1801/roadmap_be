// ============================================
// THÁNG 5: PERFORMANCE, SECURITY & ASYNC
// Mục tiêu: JWT, Redis Caching, Message Queues
// DSA Focus: Advanced Graphs, Backtracking
// ============================================

import { DailyPlan, DailyPlanTask } from './types';

export const month5Plans: DailyPlan[] = [
    // ========== TUẦN 1: Security Fundamentals ==========
    {
        day: 1, month: 5,
        theme: "Spring Security Introduction",
        focus: "theory",
        tasks: [
            { id: "m5d1-1", title: "Security concepts: Authentication vs Authorization", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d1-2", title: "Spring Security filter chain architecture", category: "theory", duration: "45m", priority: "high" },
            { id: "m5d1-3", title: "Adding Spring Security dependency", category: "practice", duration: "30m", priority: "high" },
            { id: "m5d1-4", title: "Graph Valid Tree (Premium alternative: Clone Graph)", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 133, leetcodeLink: "https://leetcode.com/problems/clone-graph/" },
        ]
    },
    {
        day: 2, month: 5,
        theme: "User Authentication",
        focus: "theory",
        tasks: [
            { id: "m5d2-1", title: "UserDetailsService implementation", category: "theory", duration: "45m", priority: "high" },
            { id: "m5d2-2", title: "PasswordEncoder: BCrypt hashing", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d2-3", title: "Custom UserDetails và AuthenticationProvider", category: "practice", duration: "45m", priority: "high" },
            { id: "m5d2-4", title: "Ôn tập: Pacific Atlantic Water Flow", category: "dsa", duration: "45m", priority: "medium", leetcodeId: 417, leetcodeLink: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
        ]
    },
    {
        day: 3, month: 5,
        theme: "JWT Fundamentals",
        focus: "theory",
        tasks: [
            { id: "m5d3-1", title: "JWT structure: header, payload, signature", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d3-2", title: "Stateless authentication với JWT", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d3-3", title: "Access Token vs Refresh Token pattern", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d3-4", title: "Redundant Connection", category: "dsa", duration: "45m", priority: "medium", leetcodeId: 684, leetcodeLink: "https://leetcode.com/problems/redundant-connection/" },
        ]
    },
    {
        day: 4, month: 5,
        theme: "JWT Implementation",
        focus: "practice",
        tasks: [
            { id: "m5d4-1", title: "JWT generation với jjwt library", category: "practice", duration: "45m", priority: "high" },
            { id: "m5d4-2", title: "JWT validation filter", category: "practice", duration: "45m", priority: "high" },
            { id: "m5d4-3", title: "Login endpoint và token response", category: "practice", duration: "30m", priority: "high" },
            { id: "m5d4-4", title: "Ôn tập: Word Search", category: "dsa", duration: "45m", priority: "medium", leetcodeId: 79, leetcodeLink: "https://leetcode.com/problems/word-search/" },
        ]
    },
    {
        day: 5, month: 5,
        theme: "RBAC - Role-Based Access Control",
        focus: "practice",
        tasks: [
            { id: "m5d5-1", title: "Role và Authority trong Spring Security", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d5-2", title: "@PreAuthorize, @PostAuthorize, @Secured", category: "practice", duration: "45m", priority: "high" },
            { id: "m5d5-3", title: "Method-level security configuration", category: "practice", duration: "30m", priority: "high" },
            { id: "m5d5-4", title: "Ôn tập: Combination Sum", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 39, leetcodeLink: "https://leetcode.com/problems/combination-sum/" },
        ]
    },
    {
        day: 6, month: 5,
        theme: "Security Best Practices",
        focus: "theory",
        tasks: [
            { id: "m5d6-1", title: "CORS configuration", category: "practice", duration: "30m", priority: "high" },
            { id: "m5d6-2", title: "CSRF protection", category: "theory", duration: "30m", priority: "medium" },
            { id: "m5d6-3", title: "Security headers: X-Frame-Options, CSP", category: "theory", duration: "30m", priority: "medium" },
            { id: "m5d6-4", title: "Common vulnerabilities: SQL Injection, XSS", category: "theory", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 7, month: 5,
        theme: "📝 Review Tuần 1",
        focus: "review",
        tasks: [
            { id: "m5d7-1", title: "Quiz: Security concepts", category: "review", duration: "30m", priority: "high" },
            { id: "m5d7-2", title: "Build complete auth system với JWT", category: "practice", duration: "1h30m", priority: "high" },
        ]
    },

    // ========== TUẦN 2: Caching & Performance ==========
    {
        day: 8, month: 5,
        theme: "Redis Basics",
        focus: "theory",
        tasks: [
            { id: "m5d8-1", title: "Redis installation với Docker", category: "practice", duration: "30m", priority: "high" },
            { id: "m5d8-2", title: "Redis data structures: String, Hash, List, Set, Sorted Set", category: "theory", duration: "1h", priority: "high" },
            { id: "m5d8-3", title: "Redis CLI commands practice", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 9, month: 5,
        theme: "Spring Cache Abstraction",
        focus: "practice",
        tasks: [
            { id: "m5d9-1", title: "@EnableCaching và cache managers", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d9-2", title: "@Cacheable, @CachePut, @CacheEvict", category: "practice", duration: "45m", priority: "high" },
            { id: "m5d9-3", title: "Cache key generation strategies", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 10, month: 5,
        theme: "Redis Caching with Spring",
        focus: "practice",
        tasks: [
            { id: "m5d10-1", title: "Spring Data Redis configuration", category: "practice", duration: "45m", priority: "high" },
            { id: "m5d10-2", title: "RedisTemplate và operations", category: "practice", duration: "45m", priority: "high" },
            { id: "m5d10-3", title: "Cache serialization strategies", category: "theory", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 11, month: 5,
        theme: "Cache Invalidation Strategies",
        focus: "theory",
        tasks: [
            { id: "m5d11-1", title: "TTL-based expiration", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d11-2", title: "Event-driven invalidation", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d11-3", title: "Cache stampede prevention", category: "theory", duration: "30m", priority: "medium" },
            { id: "m5d11-4", title: "Distributed cache considerations", category: "theory", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 12, month: 5,
        theme: "Session Management with Redis",
        focus: "practice",
        tasks: [
            { id: "m5d12-1", title: "Spring Session với Redis", category: "practice", duration: "45m", priority: "high" },
            { id: "m5d12-2", title: "Distributed session management", category: "theory", duration: "30m", priority: "medium" },
            { id: "m5d12-3", title: "Session timeout và invalidation", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 13, month: 5,
        theme: "Performance Monitoring",
        focus: "practice",
        tasks: [
            { id: "m5d13-1", title: "Spring Boot Actuator endpoints", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d13-2", title: "Micrometer metrics", category: "practice", duration: "45m", priority: "high" },
            { id: "m5d13-3", title: "Prometheus + Grafana setup", category: "practice", duration: "45m", priority: "medium" },
        ]
    },
    {
        day: 14, month: 5,
        theme: "📝 Review Tuần 2",
        focus: "review",
        tasks: [
            { id: "m5d14-1", title: "Quiz: Caching strategies", category: "review", duration: "30m", priority: "high" },
            { id: "m5d14-2", title: "Add caching to Pickleball API", category: "practice", duration: "1h", priority: "high" },
            { id: "m5d14-3", title: "Measure performance improvement", category: "practice", duration: "30m", priority: "high" },
        ]
    },

    // ========== TUẦN 3: Asynchronous Processing ==========
    {
        day: 15, month: 5,
        theme: "RabbitMQ Introduction",
        focus: "theory",
        tasks: [
            { id: "m5d15-1", title: "Message Queue concepts: producer, consumer, broker", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d15-2", title: "RabbitMQ installation với Docker", category: "practice", duration: "30m", priority: "high" },
            { id: "m5d15-3", title: "Exchanges, Queues, Bindings", category: "theory", duration: "45m", priority: "high" },
        ]
    },
    {
        day: 16, month: 5,
        theme: "Spring AMQP",
        focus: "practice",
        tasks: [
            { id: "m5d16-1", title: "RabbitTemplate configuration", category: "practice", duration: "45m", priority: "high" },
            { id: "m5d16-2", title: "Sending messages", category: "practice", duration: "30m", priority: "high" },
            { id: "m5d16-3", title: "@RabbitListener cho consuming", category: "practice", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 17, month: 5,
        theme: "Message Patterns",
        focus: "theory",
        tasks: [
            { id: "m5d17-1", title: "Direct, Fanout, Topic exchanges", category: "theory", duration: "45m", priority: "high" },
            { id: "m5d17-2", title: "Dead Letter Queue (DLQ)", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d17-3", title: "Message acknowledgment và reliability", category: "practice", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 18, month: 5,
        theme: "Async Email Processing",
        focus: "project",
        tasks: [
            { id: "m5d18-1", title: "Design async email notification system", category: "project", duration: "30m", priority: "high" },
            { id: "m5d18-2", title: "EmailService với RabbitMQ integration", category: "project", duration: "1h", priority: "high" },
            { id: "m5d18-3", title: "Email consumer với retry logic", category: "project", duration: "45m", priority: "high" },
        ]
    },
    {
        day: 19, month: 5,
        theme: "Kafka Introduction",
        focus: "theory",
        tasks: [
            { id: "m5d19-1", title: "Kafka vs RabbitMQ: when to use which", category: "theory", duration: "30m", priority: "medium" },
            { id: "m5d19-2", title: "Kafka concepts: topics, partitions, consumers", category: "theory", duration: "45m", priority: "medium" },
            { id: "m5d19-3", title: "Spring Kafka basics", category: "theory", duration: "30m", priority: "low" },
        ]
    },
    {
        day: 20, month: 5,
        theme: "Event Sourcing Concepts",
        focus: "theory",
        tasks: [
            { id: "m5d20-1", title: "Event sourcing vs state storage", category: "theory", duration: "30m", priority: "medium" },
            { id: "m5d20-2", title: "Event store và replay", category: "theory", duration: "30m", priority: "medium" },
            { id: "m5d20-3", title: "CQRS pattern overview", category: "theory", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 21, month: 5,
        theme: "📝 Review Tuần 3",
        focus: "review",
        tasks: [
            { id: "m5d21-1", title: "Quiz: Async processing", category: "review", duration: "30m", priority: "high" },
            { id: "m5d21-2", title: "Complete email notification system", category: "project", duration: "1h", priority: "high" },
            { id: "m5d21-3", title: "Integration tests cho async flows", category: "practice", duration: "30m", priority: "medium" },
        ]
    },

    // ========== TUẦN 4: Advanced Topics & Integration ==========
    {
        day: 22, month: 5,
        theme: "API Rate Limiting",
        focus: "practice",
        tasks: [
            { id: "m5d22-1", title: "Rate limiting algorithms: token bucket, sliding window", category: "theory", duration: "30m", priority: "high" },
            { id: "m5d22-2", title: "Bucket4j implementation", category: "practice", duration: "45m", priority: "high" },
            { id: "m5d22-3", title: "Distributed rate limiting với Redis", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 23, month: 5,
        theme: "API Versioning",
        focus: "theory",
        tasks: [
            { id: "m5d23-1", title: "Versioning strategies: URL, header, query param", category: "theory", duration: "30m", priority: "medium" },
            { id: "m5d23-2", title: "Backward compatibility considerations", category: "theory", duration: "30m", priority: "medium" },
            { id: "m5d23-3", title: "API deprecation process", category: "theory", duration: "30m", priority: "low" },
        ]
    },
    {
        day: 24, month: 5,
        theme: "🛠️ Enhance Pickleball - Security",
        focus: "project",
        tasks: [
            { id: "m5d24-1", title: "Add JWT authentication", category: "project", duration: "1h", priority: "high" },
            { id: "m5d24-2", title: "Implement RBAC for endpoints", category: "project", duration: "45m", priority: "high" },
            { id: "m5d24-3", title: "Security tests", category: "project", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 25, month: 5,
        theme: "🛠️ Enhance Pickleball - Caching",
        focus: "project",
        tasks: [
            { id: "m5d25-1", title: "Add Redis caching cho read endpoints", category: "project", duration: "45m", priority: "high" },
            { id: "m5d25-2", title: "Implement cache invalidation", category: "project", duration: "45m", priority: "high" },
            { id: "m5d25-3", title: "Performance benchmark before/after", category: "project", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 26, month: 5,
        theme: "🛠️ Enhance Pickleball - Notifications",
        focus: "project",
        tasks: [
            { id: "m5d26-1", title: "Add booking confirmation email (async)", category: "project", duration: "1h", priority: "high" },
            { id: "m5d26-2", title: "RabbitMQ integration", category: "project", duration: "45m", priority: "high" },
        ]
    },
    {
        day: 27, month: 5,
        theme: "Security & Performance Interview Prep",
        focus: "review",
        tasks: [
            { id: "m5d27-1", title: "Security interview questions", category: "review", duration: "45m", priority: "high" },
            { id: "m5d27-2", title: "Performance optimization questions", category: "review", duration: "45m", priority: "high" },
            { id: "m5d27-3", title: "Architecture design: caching strategies", category: "review", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 28, month: 5,
        theme: "📝 Tổng Kết Tháng 5",
        focus: "review",
        tasks: [
            { id: "m5d28-1", title: "Review Security, Caching, Async", category: "review", duration: "1h", priority: "high" },
            { id: "m5d28-2", title: "Finalize Pickleball API enhancements", category: "project", duration: "45m", priority: "high" },
            { id: "m5d28-3", title: "Prepare for Month 6: DevOps", category: "review", duration: "30m", priority: "medium" },
        ]
    },
];

export const month5Stats = {
    totalDays: 28,
    totalTasks: month5Plans.reduce((acc, day) => acc + day.tasks.length, 0),
    dsaTasks: month5Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'dsa').length, 0),
    theoryTasks: month5Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'theory').length, 0),
    practiceTasks: month5Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'practice').length, 0),
    projectTasks: month5Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'project').length, 0),
    reviewTasks: month5Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'review').length, 0),
};
