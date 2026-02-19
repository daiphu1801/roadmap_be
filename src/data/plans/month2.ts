// ============================================
// THÁNG 2: CONCURRENCY + DSA TRUNG BÌNH
// Mục tiêu: Thread, Synchronization, Executor + Trees, Tries, Heap
// DSA Focus: Trees (continued), Tries, Heap/Priority Queue
// ============================================

import { DailyPlan, DailyPlanTask } from './types';

export const month2Plans: DailyPlan[] = [
    // ========== TUẦN 1: Advanced Concurrency + Trees Deep Dive ==========
    {
        day: 1, month: 2,
        theme: "Executor Framework Foundations",
        focus: "theory",
        tasks: [
            { id: "m2d1-1", title: "ExecutorService: submit(), shutdown(), awaitTermination()", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d1-2", title: "ThreadPoolExecutor: corePoolSize, maxPoolSize, queue", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d1-3", title: "Tạo custom ThreadPool cho các scenarios khác nhau", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d1-4", title: "Count Good Nodes in Binary Tree", category: "dsa", duration: "40m", priority: "high", leetcodeId: 1448, leetcodeLink: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
        ]
    },
    {
        day: 2, month: 2,
        theme: "Callable & Future",
        focus: "theory",
        tasks: [
            { id: "m2d2-1", title: "Callable vs Runnable: return values, exceptions", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d2-2", title: "Future: get(), isDone(), cancel()", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d2-3", title: "Implement parallel file processing với Callable", category: "practice", duration: "1h", priority: "high" },
            { id: "m2d2-4", title: "Validate Binary Search Tree", category: "dsa", duration: "35m", priority: "high", leetcodeId: 98, leetcodeLink: "https://leetcode.com/problems/validate-binary-search-tree/" },
        ]
    },
    {
        day: 3, month: 2,
        theme: "CompletableFuture",
        focus: "theory",
        tasks: [
            { id: "m2d3-1", title: "CompletableFuture: supplyAsync, thenApply, thenCompose", category: "theory", duration: "1h", priority: "high" },
            { id: "m2d3-2", title: "Combining futures: allOf, anyOf", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d3-3", title: "Exception handling với exceptionally() và handle()", category: "practice", duration: "45m", priority: "medium" },
            { id: "m2d3-4", title: "Kth Smallest Element in a BST", category: "dsa", duration: "35m", priority: "high", leetcodeId: 230, leetcodeLink: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
        ]
    },
    {
        day: 4, month: 2,
        theme: "Concurrent Collections",
        focus: "theory",
        tasks: [
            { id: "m2d4-1", title: "ConcurrentHashMap: segments, lock striping", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d4-2", title: "CopyOnWriteArrayList, ConcurrentLinkedQueue", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d4-3", title: "Khi nào dùng concurrent vs synchronized collections?", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d4-4", title: "Construct Binary Tree from Preorder and Inorder", category: "dsa", duration: "45m", priority: "high", leetcodeId: 105, leetcodeLink: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
        ]
    },
    {
        day: 5, month: 2,
        theme: "BlockingQueue Patterns",
        focus: "practice",
        tasks: [
            { id: "m2d5-1", title: "Producer-Consumer pattern với BlockingQueue", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d5-2", title: "ArrayBlockingQueue vs LinkedBlockingQueue", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d5-3", title: "Implement Task Queue system", category: "practice", duration: "1h", priority: "high" },
            { id: "m2d5-4", title: "Binary Tree Maximum Path Sum", category: "dsa", duration: "50m", priority: "high", leetcodeId: 124, leetcodeLink: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
        ]
    },
    {
        day: 6, month: 2,
        theme: "Atomic Classes",
        focus: "theory",
        tasks: [
            { id: "m2d6-1", title: "AtomicInteger, AtomicLong, AtomicReference", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d6-2", title: "Compare-and-Swap (CAS) operations", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d6-3", title: "LongAdder cho high-contention scenarios", category: "practice", duration: "30m", priority: "medium" },
            { id: "m2d6-4", title: "Serialize and Deserialize Binary Tree", category: "dsa", duration: "50m", priority: "high", leetcodeId: 297, leetcodeLink: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
        ]
    },
    {
        day: 7, month: 2,
        theme: "📝 Review Tuần 1 + Tries Intro",
        focus: "review",
        tasks: [
            { id: "m2d7-1", title: "Quiz: Concurrency concepts và best practices", category: "review", duration: "30m", priority: "high" },
            { id: "m2d7-2", title: "Debug concurrency issues trong sample code", category: "practice", duration: "45m", priority: "medium" },
            { id: "m2d7-3", title: "Implement Trie (Prefix Tree)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 208, leetcodeLink: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
        ]
    },

    // ========== TUẦN 2: Mini Project + Tries & Heap ==========
    {
        day: 8, month: 2,
        theme: "🛠️ BookingLockManager - Day 1",
        focus: "project",
        tasks: [
            { id: "m2d8-1", title: "Thiết kế hệ thống: entities, services, locking strategy", category: "project", duration: "1h", priority: "high" },
            { id: "m2d8-2", title: "Implement Slot entity với time-based locking", category: "project", duration: "1h", priority: "high" },
            { id: "m2d8-3", title: "Design Add and Search Words Data Structure", category: "dsa", duration: "45m", priority: "high", leetcodeId: 211, leetcodeLink: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
        ]
    },
    {
        day: 9, month: 2,
        theme: "🛠️ BookingLockManager - Day 2",
        focus: "project",
        tasks: [
            { id: "m2d9-1", title: "Implement BookingService với optimistic locking", category: "project", duration: "1h", priority: "high" },
            { id: "m2d9-2", title: "Handle concurrent booking attempts", category: "project", duration: "1h", priority: "high" },
            { id: "m2d9-3", title: "Word Search II", category: "dsa", duration: "1h", priority: "high", leetcodeId: 212, leetcodeLink: "https://leetcode.com/problems/word-search-ii/" },
        ]
    },
    {
        day: 10, month: 2,
        theme: "🛠️ BookingLockManager - Day 3",
        focus: "project",
        tasks: [
            { id: "m2d10-1", title: "Implement ReentrantLock cho critical sections", category: "project", duration: "45m", priority: "high" },
            { id: "m2d10-2", title: "Viết test cases cho concurrent scenarios", category: "project", duration: "1h", priority: "high" },
            { id: "m2d10-3", title: "Benchmark với JMH", category: "project", duration: "30m", priority: "medium" },
            { id: "m2d10-4", title: "Kth Largest Element in a Stream", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 703, leetcodeLink: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
        ]
    },
    {
        day: 11, month: 2,
        theme: "Fork/Join Framework",
        focus: "theory",
        tasks: [
            { id: "m2d11-1", title: "ForkJoinPool: work-stealing algorithm", category: "theory", duration: "45m", priority: "medium" },
            { id: "m2d11-2", title: "RecursiveTask vs RecursiveAction", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d11-3", title: "Implement parallel merge sort với Fork/Join", category: "practice", duration: "1h", priority: "medium" },
            { id: "m2d11-4", title: "Last Stone Weight", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 1046, leetcodeLink: "https://leetcode.com/problems/last-stone-weight/" },
        ]
    },
    {
        day: 12, month: 2,
        theme: "Semaphores & CountDownLatch",
        focus: "theory",
        tasks: [
            { id: "m2d12-1", title: "Semaphore: permits, fairness, use cases", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d12-2", title: "CountDownLatch: waiting for multiple threads", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d12-3", title: "CyclicBarrier cho batch processing", category: "practice", duration: "30m", priority: "medium" },
            { id: "m2d12-4", title: "K Closest Points to Origin", category: "dsa", duration: "35m", priority: "high", leetcodeId: 973, leetcodeLink: "https://leetcode.com/problems/k-closest-points-to-origin/" },
        ]
    },
    {
        day: 13, month: 2,
        theme: "Thread-Local Storage",
        focus: "theory",
        tasks: [
            { id: "m2d13-1", title: "ThreadLocal: per-thread instances", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d13-2", title: "InheritableThreadLocal cho child threads", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d13-3", title: "Use case: Request context in web apps", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d13-4", title: "Kth Largest Element in an Array", category: "dsa", duration: "35m", priority: "high", leetcodeId: 215, leetcodeLink: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        ]
    },
    {
        day: 14, month: 2,
        theme: "📝 Review Tuần 2 + Heap/PQ",
        focus: "review",
        tasks: [
            { id: "m2d14-1", title: "Review BookingLockManager project", category: "review", duration: "45m", priority: "high" },
            { id: "m2d14-2", title: "Document lessons learned về concurrency", category: "review", duration: "30m", priority: "medium" },
            { id: "m2d14-3", title: "Task Scheduler", category: "dsa", duration: "45m", priority: "high", leetcodeId: 621, leetcodeLink: "https://leetcode.com/problems/task-scheduler/" },
            { id: "m2d14-4", title: "Find Median from Data Stream", category: "dsa", duration: "50m", priority: "high", leetcodeId: 295, leetcodeLink: "https://leetcode.com/problems/find-median-from-data-stream/" },
        ]
    },

    // ========== TUẦN 3: Testing & Debugging + Backtracking ==========
    {
        day: 15, month: 2,
        theme: "Unit Testing với JUnit 5",
        focus: "practice",
        tasks: [
            { id: "m2d15-1", title: "JUnit 5: @Test, @BeforeEach, @AfterEach", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d15-2", title: "Assertions: assertEquals, assertThrows, assertAll", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d15-3", title: "Parameterized tests với @ValueSource, @CsvSource", category: "practice", duration: "45m", priority: "medium" },
            { id: "m2d15-4", title: "Combination Sum", category: "dsa", duration: "40m", priority: "high", leetcodeId: 39, leetcodeLink: "https://leetcode.com/problems/combination-sum/" },
        ]
    },
    {
        day: 16, month: 2,
        theme: "Mocking với Mockito",
        focus: "practice",
        tasks: [
            { id: "m2d16-1", title: "Mockito basics: mock(), when(), verify()", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d16-2", title: "@Mock, @InjectMocks, @Spy annotations", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d16-3", title: "ArgumentCaptor và custom matchers", category: "practice", duration: "30m", priority: "medium" },
            { id: "m2d16-4", title: "Word Search", category: "dsa", duration: "45m", priority: "high", leetcodeId: 79, leetcodeLink: "https://leetcode.com/problems/word-search/" },
        ]
    },
    {
        day: 17, month: 2,
        theme: "Testing Concurrency",
        focus: "practice",
        tasks: [
            { id: "m2d17-1", title: "Challenges khi test concurrent code", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d17-2", title: "Awaitility library cho async testing", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d17-3", title: "Viết test cases cho BookingLockManager", category: "practice", duration: "1h", priority: "high" },
            { id: "m2d17-4", title: "Number of Islands", category: "dsa", duration: "35m", priority: "high", leetcodeId: 200, leetcodeLink: "https://leetcode.com/problems/number-of-islands/" },
        ]
    },
    {
        day: 18, month: 2,
        theme: "Debugging Techniques",
        focus: "practice",
        tasks: [
            { id: "m2d18-1", title: "IntelliJ Debugger: breakpoints, watches, evaluate", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d18-2", title: "Remote debugging với JVM parameters", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d18-3", title: "Thread dump analysis", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d18-4", title: "Clone Graph", category: "dsa", duration: "40m", priority: "high", leetcodeId: 133, leetcodeLink: "https://leetcode.com/problems/clone-graph/" },
        ]
    },
    {
        day: 19, month: 2,
        theme: "Profiling & Performance",
        focus: "practice",
        tasks: [
            { id: "m2d19-1", title: "CPU profiling với VisualVM", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d19-2", title: "Memory profiling và heap analysis", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d19-3", title: "JMH microbenchmarking basics", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d19-4", title: "Pacific Atlantic Water Flow", category: "dsa", duration: "45m", priority: "medium", leetcodeId: 417, leetcodeLink: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
        ]
    },
    {
        day: 20, month: 2,
        theme: "Code Quality Tools",
        focus: "practice",
        tasks: [
            { id: "m2d20-1", title: "SonarQube: code smells, bugs, vulnerabilities", category: "theory", duration: "45m", priority: "medium" },
            { id: "m2d20-2", title: "Checkstyle và SpotBugs integration", category: "practice", duration: "30m", priority: "medium" },
            { id: "m2d20-3", title: "Code coverage với JaCoCo", category: "practice", duration: "30m", priority: "medium" },
            { id: "m2d20-4", title: "Course Schedule", category: "dsa", duration: "40m", priority: "high", leetcodeId: 207, leetcodeLink: "https://leetcode.com/problems/course-schedule/" },
        ]
    },
    {
        day: 21, month: 2,
        theme: "📝 Review Tuần 3 + Graphs",
        focus: "review",
        tasks: [
            { id: "m2d21-1", title: "Tổng hợp testing strategies", category: "review", duration: "30m", priority: "high" },
            { id: "m2d21-2", title: "Setup testing pipeline cho mini project", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d21-3", title: "Course Schedule II", category: "dsa", duration: "45m", priority: "high", leetcodeId: 210, leetcodeLink: "https://leetcode.com/problems/course-schedule-ii/" },
        ]
    },

    // ========== TUẦN 4: Advanced Topics + DP Intro ==========
    {
        day: 22, month: 2,
        theme: "Virtual Threads (Java 21)",
        focus: "theory",
        tasks: [
            { id: "m2d22-1", title: "Virtual Threads vs Platform Threads", category: "theory", duration: "45m", priority: "medium" },
            { id: "m2d22-2", title: "Structured Concurrency concepts", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d22-3", title: "Migrating existing code to virtual threads", category: "practice", duration: "45m", priority: "low" },
            { id: "m2d22-4", title: "Climbing Stairs", category: "dsa", duration: "20m", priority: "high", leetcodeId: 70, leetcodeLink: "https://leetcode.com/problems/climbing-stairs/" },
            { id: "m2d22-5", title: "Min Cost Climbing Stairs", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 746, leetcodeLink: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
        ]
    },
    {
        day: 23, month: 2,
        theme: "Reactive Programming Intro",
        focus: "theory",
        tasks: [
            { id: "m2d23-1", title: "Reactive Streams specification", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d23-2", title: "Project Reactor: Mono, Flux basics", category: "theory", duration: "45m", priority: "medium" },
            { id: "m2d23-3", title: "Khi nào dùng reactive vs imperative?", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d23-4", title: "House Robber", category: "dsa", duration: "30m", priority: "high", leetcodeId: 198, leetcodeLink: "https://leetcode.com/problems/house-robber/" },
        ]
    },
    {
        day: 24, month: 2,
        theme: "Logging & Monitoring",
        focus: "practice",
        tasks: [
            { id: "m2d24-1", title: "SLF4J + Logback configuration", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d24-2", title: "MDC (Mapped Diagnostic Context) cho request tracing", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d24-3", title: "Structured logging với JSON format", category: "practice", duration: "30m", priority: "medium" },
            { id: "m2d24-4", title: "House Robber II", category: "dsa", duration: "35m", priority: "high", leetcodeId: 213, leetcodeLink: "https://leetcode.com/problems/house-robber-ii/" },
        ]
    },
    {
        day: 25, month: 2,
        theme: "🛠️ Enhance BookingLockManager",
        focus: "project",
        tasks: [
            { id: "m2d25-1", title: "Add logging với MDC request tracking", category: "project", duration: "45m", priority: "high" },
            { id: "m2d25-2", title: "Implement metrics với Micrometer", category: "project", duration: "45m", priority: "medium" },
            { id: "m2d25-3", title: "Performance testing và optimization", category: "project", duration: "30m", priority: "high" },
            { id: "m2d25-4", title: "Longest Palindromic Substring", category: "dsa", duration: "40m", priority: "high", leetcodeId: 5, leetcodeLink: "https://leetcode.com/problems/longest-palindromic-substring/" },
        ]
    },
    {
        day: 26, month: 2,
        theme: "🛠️ Documentation & Best Practices",
        focus: "project",
        tasks: [
            { id: "m2d26-1", title: "JavaDoc cho public APIs", category: "project", duration: "45m", priority: "medium" },
            { id: "m2d26-2", title: "README với architecture diagram", category: "project", duration: "45m", priority: "high" },
            { id: "m2d26-3", title: "Concurrency best practices checklist", category: "review", duration: "30m", priority: "medium" },
            { id: "m2d26-4", title: "Palindromic Substrings", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 647, leetcodeLink: "https://leetcode.com/problems/palindromic-substrings/" },
        ]
    },
    {
        day: 27, month: 2,
        theme: "Interview Prep - Concurrency",
        focus: "review",
        tasks: [
            { id: "m2d27-1", title: "Common concurrency interview questions", category: "review", duration: "1h", priority: "high" },
            { id: "m2d27-2", title: "Practice explaining race conditions, deadlocks", category: "review", duration: "45m", priority: "high" },
            { id: "m2d27-3", title: "Decode Ways", category: "dsa", duration: "40m", priority: "high", leetcodeId: 91, leetcodeLink: "https://leetcode.com/problems/decode-ways/" },
        ]
    },
    {
        day: 28, month: 2,
        theme: "📝 Tổng Kết Tháng 2",
        focus: "review",
        tasks: [
            { id: "m2d28-1", title: "Review toàn bộ kiến thức Concurrency", category: "review", duration: "1h", priority: "high" },
            { id: "m2d28-2", title: "Self-assessment và gap analysis", category: "review", duration: "30m", priority: "high" },
            { id: "m2d28-3", title: "Chuẩn bị cho Tháng 3: Database", category: "review", duration: "30m", priority: "medium" },
            { id: "m2d28-4", title: "Coin Change", category: "dsa", duration: "40m", priority: "high", leetcodeId: 322, leetcodeLink: "https://leetcode.com/problems/coin-change/" },
        ]
    },
];

export const month2Stats = {
    totalDays: 28,
    totalTasks: month2Plans.reduce((acc, day) => acc + day.tasks.length, 0),
    dsaTasks: month2Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'dsa').length, 0),
    theoryTasks: month2Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'theory').length, 0),
    practiceTasks: month2Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'practice').length, 0),
    projectTasks: month2Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'project').length, 0),
    reviewTasks: month2Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'review').length, 0),
};
