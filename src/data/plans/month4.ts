// ============================================
// THÁNG 4: SPRING BOOT – TƯ DUY KỸ SƯ
// Mục tiêu: IoC, DI, REST API, Testing
// DSA Focus: Ôn tập và củng cố Blind 75
// ============================================

import { DailyPlan, DailyPlanTask } from './types';

export const month4Plans: DailyPlan[] = [
    // ========== TUẦN 1: Spring Core Concepts ==========
    {
        day: 1, month: 4,
        theme: "Spring Boot Quickstart",
        focus: "theory",
        tasks: [
            { id: "m4d1-1", title: "Spring Boot architecture overview", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d1-2", title: "Auto-configuration magic: @SpringBootApplication", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d1-3", title: "Tạo project với Spring Initializr", category: "practice", duration: "30m", priority: "high" },
            { id: "m4d1-4", title: "Ôn tập: Two Sum + Contains Duplicate", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 1, leetcodeLink: "https://leetcode.com/problems/two-sum/" },
        ]
    },
    {
        day: 2, month: 4,
        theme: "Inversion of Control (IoC)",
        focus: "theory",
        tasks: [
            { id: "m4d2-1", title: "IoC Container: ApplicationContext", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d2-2", title: "Bean lifecycle: creation, initialization, destruction", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d2-3", title: "@PostConstruct, @PreDestroy annotations", category: "practice", duration: "30m", priority: "medium" },
            { id: "m4d2-4", title: "Ôn tập: Valid Anagram + Group Anagrams", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 242, leetcodeLink: "https://leetcode.com/problems/valid-anagram/" },
        ]
    },
    {
        day: 3, month: 4,
        theme: "Dependency Injection Deep Dive",
        focus: "theory",
        tasks: [
            { id: "m4d3-1", title: "Constructor vs Setter vs Field injection", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d3-2", title: "Tại sao Constructor injection được prefer?", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d3-3", title: "@Autowired, @Qualifier, @Primary", category: "practice", duration: "45m", priority: "high" },
            { id: "m4d3-4", title: "Ôn tập: 3Sum", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 15, leetcodeLink: "https://leetcode.com/problems/3sum/" },
        ]
    },
    {
        day: 4, month: 4,
        theme: "Bean Scopes & Profiles",
        focus: "theory",
        tasks: [
            { id: "m4d4-1", title: "Singleton, Prototype, Request, Session scopes", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d4-2", title: "@Profile cho environment-specific beans", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d4-3", title: "Conditional bean creation với @Conditional", category: "practice", duration: "30m", priority: "medium" },
            { id: "m4d4-4", title: "Ôn tập: Longest Substring Without Repeating", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 3, leetcodeLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        ]
    },
    {
        day: 5, month: 4,
        theme: "Configuration Properties",
        focus: "practice",
        tasks: [
            { id: "m4d5-1", title: "application.properties vs application.yml", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d5-2", title: "@ConfigurationProperties type-safe binding", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d5-3", title: "Environment-specific configurations", category: "practice", duration: "30m", priority: "medium" },
            { id: "m4d5-4", title: "Ôn tập: Binary Tree Level Order Traversal", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 102, leetcodeLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        ]
    },
    {
        day: 6, month: 4,
        theme: "Spring AOP Basics",
        focus: "theory",
        tasks: [
            { id: "m4d6-1", title: "AOP concepts: aspect, advice, pointcut, join point", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d6-2", title: "@Before, @After, @Around advice", category: "practice", duration: "45m", priority: "high" },
            { id: "m4d6-3", title: "Logging và timing với AOP", category: "practice", duration: "30m", priority: "medium" },
            { id: "m4d6-4", title: "Ôn tập: Validate BST", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 98, leetcodeLink: "https://leetcode.com/problems/validate-binary-search-tree/" },
        ]
    },
    {
        day: 7, month: 4,
        theme: "📝 Review Tuần 1",
        focus: "review",
        tasks: [
            { id: "m4d7-1", title: "Quiz: Spring Core concepts", category: "review", duration: "30m", priority: "high" },
            { id: "m4d7-2", title: "Build a simple DI demo application", category: "practice", duration: "1h", priority: "high" },
            { id: "m4d7-3", title: "Ôn tập: Number of Islands + Clone Graph", category: "dsa", duration: "50m", priority: "medium", leetcodeId: 200, leetcodeLink: "https://leetcode.com/problems/number-of-islands/" },
        ]
    },

    // ========== TUẦN 2: REST API Development ==========
    {
        day: 8, month: 4,
        theme: "REST API Fundamentals",
        focus: "theory",
        tasks: [
            { id: "m4d8-1", title: "REST principles: stateless, resources, HTTP methods", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d8-2", title: "@RestController, @RequestMapping, @GetMapping", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d8-3", title: "Path variables vs Query parameters", category: "practice", duration: "30m", priority: "high" },
            { id: "m4d8-4", title: "Ôn tập: Course Schedule", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 207, leetcodeLink: "https://leetcode.com/problems/course-schedule/" },
        ]
    },
    {
        day: 9, month: 4,
        theme: "Request Body & Response",
        focus: "practice",
        tasks: [
            { id: "m4d9-1", title: "@RequestBody, @ResponseBody, ResponseEntity", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d9-2", title: "JSON serialization với Jackson", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d9-3", title: "Custom JSON serializers/deserializers", category: "practice", duration: "30m", priority: "medium" },
            { id: "m4d9-4", title: "Ôn tập: House Robber + House Robber II", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 198, leetcodeLink: "https://leetcode.com/problems/house-robber/" },
        ]
    },
    {
        day: 10, month: 4,
        theme: "Validation & Error Handling",
        focus: "practice",
        tasks: [
            { id: "m4d10-1", title: "Bean Validation: @Valid, @NotNull, @Size, @Email", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d10-2", title: "Custom validators", category: "practice", duration: "30m", priority: "medium" },
            { id: "m4d10-3", title: "@ControllerAdvice, @ExceptionHandler", category: "practice", duration: "45m", priority: "high" },
            { id: "m4d10-4", title: "Ôn tập: Coin Change", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 322, leetcodeLink: "https://leetcode.com/problems/coin-change/" },
        ]
    },
    {
        day: 11, month: 4,
        theme: "Pagination & Sorting",
        focus: "practice",
        tasks: [
            { id: "m4d11-1", title: "Spring Data Pageable, Sort", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d11-2", title: "PageRequest, Page, Slice interfaces", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d11-3", title: "Implement paginated API với custom response", category: "practice", duration: "45m", priority: "high" },
            { id: "m4d11-4", title: "Ôn tập: Longest Increasing Subsequence", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 300, leetcodeLink: "https://leetcode.com/problems/longest-increasing-subsequence/" },
        ]
    },
    {
        day: 12, month: 4,
        theme: "Spring Data JPA Integration",
        focus: "practice",
        tasks: [
            { id: "m4d12-1", title: "JpaRepository, CrudRepository methods", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d12-2", title: "Query methods naming convention", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d12-3", title: "@Query với JPQL và native SQL", category: "practice", duration: "45m", priority: "high" },
            { id: "m4d12-4", title: "Ôn tập: LCA of BST + Kth Smallest in BST", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 235, leetcodeLink: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
        ]
    },
    {
        day: 13, month: 4,
        theme: "Transaction Management",
        focus: "theory",
        tasks: [
            { id: "m4d13-1", title: "@Transactional: propagation, isolation, rollback", category: "theory", duration: "1h", priority: "high" },
            { id: "m4d13-2", title: "Declarative vs Programmatic transactions", category: "theory", duration: "30m", priority: "medium" },
            { id: "m4d13-3", title: "Common pitfalls với @Transactional", category: "practice", duration: "30m", priority: "high" },
            { id: "m4d13-4", title: "Ôn tập: Merge Intervals", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 56, leetcodeLink: "https://leetcode.com/problems/merge-intervals/" },
        ]
    },
    {
        day: 14, month: 4,
        theme: "📝 Review Tuần 2",
        focus: "review",
        tasks: [
            { id: "m4d14-1", title: "Quiz: REST API best practices", category: "review", duration: "30m", priority: "high" },
            { id: "m4d14-2", title: "Build complete CRUD API cho entity", category: "practice", duration: "1h", priority: "high" },
            { id: "m4d14-3", title: "API documentation với Swagger/OpenAPI", category: "practice", duration: "30m", priority: "medium" },
        ]
    },

    // ========== TUẦN 3: Testing in Spring ==========
    {
        day: 15, month: 4,
        theme: "Spring Testing Fundamentals",
        focus: "practice",
        tasks: [
            { id: "m4d15-1", title: "@SpringBootTest, @WebMvcTest, @DataJpaTest", category: "theory", duration: "45m", priority: "high" },
            { id: "m4d15-2", title: "Test slices và khi nào dùng cái nào", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d15-3", title: "Mock beans với @MockBean", category: "practice", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 16, month: 4,
        theme: "Controller Testing",
        focus: "practice",
        tasks: [
            { id: "m4d16-1", title: "MockMvc cho controller testing", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d16-2", title: "Testing các HTTP methods và responses", category: "practice", duration: "1h", priority: "high" },
            { id: "m4d16-3", title: "Testing validation errors", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 17, month: 4,
        theme: "Service Layer Testing",
        focus: "practice",
        tasks: [
            { id: "m4d17-1", title: "Unit testing services với Mockito", category: "practice", duration: "1h", priority: "high" },
            { id: "m4d17-2", title: "Verify interactions và argument capture", category: "practice", duration: "30m", priority: "medium" },
            { id: "m4d17-3", title: "Testing exception scenarios", category: "practice", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 18, month: 4,
        theme: "Repository Testing",
        focus: "practice",
        tasks: [
            { id: "m4d18-1", title: "@DataJpaTest với H2 in-memory database", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d18-2", title: "Testing custom queries", category: "practice", duration: "45m", priority: "high" },
            { id: "m4d18-3", title: "Test data setup với @BeforeEach", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 19, month: 4,
        theme: "Integration Testing",
        focus: "practice",
        tasks: [
            { id: "m4d19-1", title: "Full integration tests với @SpringBootTest", category: "theory", duration: "30m", priority: "high" },
            { id: "m4d19-2", title: "Testcontainers cho real database testing", category: "practice", duration: "1h", priority: "high" },
            { id: "m4d19-3", title: "Test configuration và profiles", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 20, month: 4,
        theme: "Test Coverage & Best Practices",
        focus: "review",
        tasks: [
            { id: "m4d20-1", title: "JaCoCo configuration và reports", category: "practice", duration: "30m", priority: "medium" },
            { id: "m4d20-2", title: "Test naming conventions và organization", category: "theory", duration: "30m", priority: "medium" },
            { id: "m4d20-3", title: "TDD workflow practice", category: "practice", duration: "1h", priority: "high" },
        ]
    },
    {
        day: 21, month: 4,
        theme: "📝 Review Tuần 3",
        focus: "review",
        tasks: [
            { id: "m4d21-1", title: "Comprehensive test suite cho API", category: "practice", duration: "1h", priority: "high" },
            { id: "m4d21-2", title: "Target 80% code coverage", category: "practice", duration: "30m", priority: "medium" },
            { id: "m4d21-3", title: "Testing cheatsheet", category: "review", duration: "30m", priority: "medium" },
        ]
    },

    // ========== TUẦN 4: Project + Advanced Topics ==========
    {
        day: 22, month: 4,
        theme: "🛠️ Pickleball API - Day 1",
        focus: "project",
        tasks: [
            { id: "m4d22-1", title: "Migrate booking system to Spring Boot", category: "project", duration: "1h30m", priority: "high" },
            { id: "m4d22-2", title: "Setup entity classes và repositories", category: "project", duration: "1h", priority: "high" },
        ]
    },
    {
        day: 23, month: 4,
        theme: "🛠️ Pickleball API - Day 2",
        focus: "project",
        tasks: [
            { id: "m4d23-1", title: "Implement BookingService với business logic", category: "project", duration: "1h", priority: "high" },
            { id: "m4d23-2", title: "REST controllers cho booking endpoints", category: "project", duration: "1h", priority: "high" },
            { id: "m4d23-3", title: "Validation và error handling", category: "project", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 24, month: 4,
        theme: "🛠️ Pickleball API - Day 3",
        focus: "project",
        tasks: [
            { id: "m4d24-1", title: "Write comprehensive tests", category: "project", duration: "1h30m", priority: "high" },
            { id: "m4d24-2", title: "Integration tests với Testcontainers", category: "project", duration: "1h", priority: "high" },
        ]
    },
    {
        day: 25, month: 4,
        theme: "🛠️ Pickleball API - Day 4",
        focus: "project",
        tasks: [
            { id: "m4d25-1", title: "Swagger documentation", category: "project", duration: "45m", priority: "medium" },
            { id: "m4d25-2", title: "Logging và monitoring setup", category: "project", duration: "45m", priority: "medium" },
            { id: "m4d25-3", title: "Performance testing", category: "project", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 26, month: 4,
        theme: "Advanced Spring Topics",
        focus: "theory",
        tasks: [
            { id: "m4d26-1", title: "Spring Events: ApplicationEventPublisher", category: "theory", duration: "30m", priority: "medium" },
            { id: "m4d26-2", title: "Async processing với @Async", category: "practice", duration: "45m", priority: "medium" },
            { id: "m4d26-3", title: "Scheduling với @Scheduled", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 27, month: 4,
        theme: "Spring Boot Interview Prep",
        focus: "review",
        tasks: [
            { id: "m4d27-1", title: "Common Spring Boot interview questions", category: "review", duration: "1h", priority: "high" },
            { id: "m4d27-2", title: "Explain IoC, DI, AOP in simple terms", category: "review", duration: "45m", priority: "high" },
            { id: "m4d27-3", title: "Architecture design questions", category: "review", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 28, month: 4,
        theme: "📝 Tổng Kết Tháng 4",
        focus: "review",
        tasks: [
            { id: "m4d28-1", title: "Review Spring Boot concepts", category: "review", duration: "1h", priority: "high" },
            { id: "m4d28-2", title: "Finalize Pickleball API project", category: "project", duration: "45m", priority: "high" },
            { id: "m4d28-3", title: "Prepare for Month 5: Security & Performance", category: "review", duration: "30m", priority: "medium" },
        ]
    },
];

export const month4Stats = {
    totalDays: 28,
    totalTasks: month4Plans.reduce((acc, day) => acc + day.tasks.length, 0),
    dsaTasks: month4Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'dsa').length, 0),
    theoryTasks: month4Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'theory').length, 0),
    practiceTasks: month4Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'practice').length, 0),
    projectTasks: month4Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'project').length, 0),
    reviewTasks: month4Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'review').length, 0),
};
