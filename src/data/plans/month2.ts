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
        theme: "Buổi 1: Executor Framework & Callable",
        focus: "theory",
        tasks: [
            { id: "m2d1-1", title: "ExecutorService & ThreadPoolExecutor", category: "theory", duration: "1h", priority: "high" },
            { id: "m2d1-2", title: "Callable vs Runnable & Future", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d1-3", title: "Count Good Nodes in Binary Tree", category: "dsa", duration: "40m", priority: "high", leetcodeId: 1448, leetcodeLink: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
            { id: "m2d1-4", title: "Validate Binary Search Tree", category: "dsa", duration: "35m", priority: "high", leetcodeId: 98, leetcodeLink: "https://leetcode.com/problems/validate-binary-search-tree/" },
        ]
    },
    {
        day: 2, month: 2,
        theme: "Buổi 2: CompletableFuture & Concurrent Collections",
        focus: "theory",
        tasks: [
            { id: "m2d2-1", title: "CompletableFuture: supplyAsync, thenApply, combining futures", category: "theory", duration: "1h", priority: "high" },
            { id: "m2d2-2", title: "ConcurrentHashMap, CopyOnWriteArrayList", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d2-3", title: "Kth Smallest Element in a BST", category: "dsa", duration: "35m", priority: "high", leetcodeId: 230, leetcodeLink: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
        ]
    },
    {
        day: 3, month: 2,
        theme: "Buổi 3: BlockingQueue & Atomic Classes",
        focus: "theory",
        tasks: [
            { id: "m2d3-1", title: "Producer-Consumer pattern với BlockingQueue", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d3-2", title: "AtomicInteger, AtomicReference & CAS operations", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d3-3", title: "Construct Binary Tree from Preorder and Inorder", category: "dsa", duration: "45m", priority: "high", leetcodeId: 105, leetcodeLink: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
        ]
    },
    {
        day: 4, month: 2,
        theme: "Buổi 4: Advanced Trees & Review Concurrency",
        focus: "practice",
        tasks: [
            { id: "m2d4-1", title: "Debug concurrency issues trong sample code", category: "practice", duration: "45m", priority: "medium" },
            { id: "m2d4-2", title: "Binary Tree Maximum Path Sum", category: "dsa", duration: "50m", priority: "high", leetcodeId: 124, leetcodeLink: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
            { id: "m2d4-3", title: "Implement Trie (Prefix Tree)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 208, leetcodeLink: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
        ]
    },
    {
        day: 5, month: 2,
        theme: "Buổi 5 (Tùy chọn): Tree Hard Problems",
        focus: "practice",
        tasks: [
            { id: "m2d5-1", title: "Serialize and Deserialize Binary Tree", category: "dsa", duration: "1h", priority: "high", leetcodeId: 297, leetcodeLink: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
        ]
    },
    {
        day: 6, month: 2,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 7, month: 2,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },

    // ========== TUẦN 2: Mini Project + Tries & Heap ==========
    {
        day: 8, month: 2,
        theme: "Buổi 1: Project BookingLockManager & Advanced Concurrency",
        focus: "project",
        tasks: [
            { id: "m2d8-1", title: "Thiết kế hệ thống: entities, services, locking strategy", category: "project", duration: "1h", priority: "high" },
            { id: "m2d8-2", title: "ForkJoinPool & Fork/Join Framework", category: "theory", duration: "45m", priority: "medium" },
            { id: "m2d8-3", title: "Design Add and Search Words Data Structure", category: "dsa", duration: "45m", priority: "high", leetcodeId: 211, leetcodeLink: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
        ]
    },
    {
        day: 9, month: 2,
        theme: "Buổi 2: Implement BookingService & Optimistic Locking",
        focus: "project",
        tasks: [
            { id: "m2d9-1", title: "Implement BookingService với optimistic locking", category: "project", duration: "1h", priority: "high" },
            { id: "m2d9-2", title: "Semaphore & CountDownLatch", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d9-3", title: "Word Search II", category: "dsa", duration: "1h", priority: "high", leetcodeId: 212, leetcodeLink: "https://leetcode.com/problems/word-search-ii/" },
        ]
    },
    {
        day: 10, month: 2,
        theme: "Buổi 3: ReentrantLock & Test Cases",
        focus: "project",
        tasks: [
            { id: "m2d10-1", title: "Implement ReentrantLock cho critical sections", category: "project", duration: "1h", priority: "high" },
            { id: "m2d10-2", title: "ThreadLocal Storage", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d10-3", title: "Kth Largest Element in a Stream", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 703, leetcodeLink: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
            { id: "m2d10-4", title: "Last Stone Weight", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 1046, leetcodeLink: "https://leetcode.com/problems/last-stone-weight/" },
        ]
    },
    {
        day: 11, month: 2,
        theme: "Buổi 4: Hoàn thành Project & Intro Heaps",
        focus: "practice",
        tasks: [
            { id: "m2d11-1", title: "Viết test cases cho concurrent scenarios & Benchmark với JMH", category: "project", duration: "1h", priority: "high" },
            { id: "m2d11-2", title: "K Closest Points to Origin", category: "dsa", duration: "35m", priority: "high", leetcodeId: 973, leetcodeLink: "https://leetcode.com/problems/k-closest-points-to-origin/" },
            { id: "m2d11-3", title: "Kth Largest Element in an Array", category: "dsa", duration: "35m", priority: "high", leetcodeId: 215, leetcodeLink: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        ]
    },
    {
        day: 12, month: 2,
        theme: "Buổi 5 (Tùy chọn): Advanced Heap Problems",
        focus: "practice",
        tasks: [
            { id: "m2d12-1", title: "Task Scheduler", category: "dsa", duration: "45m", priority: "high", leetcodeId: 621, leetcodeLink: "https://leetcode.com/problems/task-scheduler/" },
            { id: "m2d12-2", title: "Find Median from Data Stream", category: "dsa", duration: "50m", priority: "high", leetcodeId: 295, leetcodeLink: "https://leetcode.com/problems/find-median-from-data-stream/" },
        ]
    },
    {
        day: 13, month: 2,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 14, month: 2,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },

    // ========== TUẦN 3: Testing & Debugging + Backtracking ==========
    {
        day: 15, month: 2,
        theme: "Buổi 1: Unit Testing & Mockito",
        focus: "practice",
        tasks: [
            { id: "m2d15-1", title: "JUnit 5 Basics & Parameterized tests", category: "theory", duration: "1h", priority: "high" },
            { id: "m2d15-2", title: "Mockito basics: mock(), when(), verify(), @InjectMocks", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d15-3", title: "Combination Sum", category: "dsa", duration: "40m", priority: "high", leetcodeId: 39, leetcodeLink: "https://leetcode.com/problems/combination-sum/" },
        ]
    },
    {
        day: 16, month: 2,
        theme: "Buổi 2: Testing Concurrency & Debugging",
        focus: "practice",
        tasks: [
            { id: "m2d16-1", title: "Testing concurrent code (Awaitility)", category: "theory", duration: "45m", priority: "high" },
            { id: "m2d16-2", title: "IntelliJ Debugger & Thread dump analysis", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d16-3", title: "Word Search", category: "dsa", duration: "45m", priority: "high", leetcodeId: 79, leetcodeLink: "https://leetcode.com/problems/word-search/" },
        ]
    },
    {
        day: 17, month: 2,
        theme: "Buổi 3: Profiling & Code Quality",
        focus: "practice",
        tasks: [
            { id: "m2d17-1", title: "CPU/Memory profiling với VisualVM", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d17-2", title: "SonarQube & JaCoCo Code coverage", category: "theory", duration: "45m", priority: "medium" },
            { id: "m2d17-3", title: "Number of Islands", category: "dsa", duration: "35m", priority: "high", leetcodeId: 200, leetcodeLink: "https://leetcode.com/problems/number-of-islands/" },
            { id: "m2d17-4", title: "Clone Graph", category: "dsa", duration: "40m", priority: "high", leetcodeId: 133, leetcodeLink: "https://leetcode.com/problems/clone-graph/" },
        ]
    },
    {
        day: 18, month: 2,
        theme: "Buổi 4: Intro to Graphs",
        focus: "practice",
        tasks: [
            { id: "m2d18-1", title: "Pacific Atlantic Water Flow", category: "dsa", duration: "45m", priority: "medium", leetcodeId: 417, leetcodeLink: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
            { id: "m2d18-2", title: "Course Schedule", category: "dsa", duration: "40m", priority: "high", leetcodeId: 207, leetcodeLink: "https://leetcode.com/problems/course-schedule/" },
        ]
    },
    {
        day: 19, month: 2,
        theme: "Buổi 5 (Tùy chọn): Hard Graphs & Testing Strategies",
        focus: "practice",
        tasks: [
            { id: "m2d19-1", title: "Setup testing pipeline cho mini project", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d19-2", title: "Course Schedule II", category: "dsa", duration: "45m", priority: "high", leetcodeId: 210, leetcodeLink: "https://leetcode.com/problems/course-schedule-ii/" },
        ]
    },
    {
        day: 20, month: 2,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 21, month: 2,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },

    // ========== TUẦN 4: Advanced Topics + DP Intro ==========
    {
        day: 22, month: 2,
        theme: "Buổi 1: Virtual Threads & Reactive Basics",
        focus: "theory",
        tasks: [
            { id: "m2d22-1", title: "Virtual Threads (Java 21) & Structured Concurrency", category: "theory", duration: "1h", priority: "medium" },
            { id: "m2d22-2", title: "Reactive Streams & Project Reactor Basics", category: "theory", duration: "45m", priority: "medium" },
            { id: "m2d22-3", title: "Climbing Stairs", category: "dsa", duration: "20m", priority: "high", leetcodeId: 70, leetcodeLink: "https://leetcode.com/problems/climbing-stairs/" },
            { id: "m2d22-4", title: "Min Cost Climbing Stairs", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 746, leetcodeLink: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
        ]
    },
    {
        day: 23, month: 2,
        theme: "Buổi 2: Logging, Monitoring & DP 1D",
        focus: "practice",
        tasks: [
            { id: "m2d23-1", title: "Structured logging (SLF4J, Logback, MDC)", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d23-2", title: "Metrics với Micrometer", category: "practice", duration: "30m", priority: "medium" },
            { id: "m2d23-3", title: "House Robber", category: "dsa", duration: "30m", priority: "high", leetcodeId: 198, leetcodeLink: "https://leetcode.com/problems/house-robber/" },
            { id: "m2d23-4", title: "House Robber II", category: "dsa", duration: "35m", priority: "high", leetcodeId: 213, leetcodeLink: "https://leetcode.com/problems/house-robber-ii/" },
        ]
    },
    {
        day: 24, month: 2,
        theme: "Buổi 3: Concurrency Best Practices & Interview",
        focus: "review",
        tasks: [
            { id: "m2d24-1", title: "Concurrency best practices & Common interview questions", category: "review", duration: "1h", priority: "high" },
            { id: "m2d24-2", title: "Document BookingLockManager (README)", category: "project", duration: "45m", priority: "high" },
            { id: "m2d24-3", title: "Longest Palindromic Substring", category: "dsa", duration: "40m", priority: "high", leetcodeId: 5, leetcodeLink: "https://leetcode.com/problems/longest-palindromic-substring/" },
        ]
    },
    {
        day: 25, month: 2,
        theme: "Buổi 4: DP 1D Thêm & Review Cuối Tháng",
        focus: "review",
        tasks: [
            { id: "m2d25-1", title: "Palindromic Substrings", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 647, leetcodeLink: "https://leetcode.com/problems/palindromic-substrings/" },
            { id: "m2d25-2", title: "Decode Ways", category: "dsa", duration: "40m", priority: "high", leetcodeId: 91, leetcodeLink: "https://leetcode.com/problems/decode-ways/" },
            { id: "m2d25-3", title: "Review toàn bộ kiến thức Concurrency tháng 2", category: "review", duration: "45m", priority: "high" },
        ]
    },
    {
        day: 26, month: 2,
        theme: "Buổi 5 (Tùy chọn): Thuật toán nâng cao",
        focus: "review",
        tasks: [
            { id: "m2d26-1", title: "Coin Change", category: "dsa", duration: "40m", priority: "high", leetcodeId: 322, leetcodeLink: "https://leetcode.com/problems/coin-change/" },
            { id: "m2d26-2", title: "Chuẩn bị cho Tháng 3: Database & SQL", category: "review", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 27, month: 2,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 28, month: 2,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
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
