// ============================================
// THÁNG 1: JAVA CORE + DSA NỀN TẢNG
// Mục tiêu: OOP, Memory, Collections + Blind 75 (Easy-Medium)
// Nguyên tắc: Học lý thuyết DSA trước → mới làm LeetCode
// DSA lộ trình: Big O + Arrays → HashMap → Two Pointers → Sliding Window
//               → Linked List → Binary Search → Stack → Binary Tree
// ============================================

import { DailyPlan, DailyPlanTask } from './types';

export const month1Plans: DailyPlan[] = [
    // ========== TUẦN 1: OOP Deep Dive + Arrays & Hashing ==========
    {
        day: 1, month: 1,
        theme: "Buổi 1: OOP Fundamentals & SOLID (Phần 1)",
        focus: "theory",
        tasks: [
            { id: "m1d1-1", title: "Ôn lại 4 trụ cột OOP & code minh hoạ", category: "theory", duration: "1h", priority: "high", resources: ["https://docs.oracle.com/javase/tutorial/java/concepts/"] },
            { id: "m1d1-2", title: "SOLID: Single Responsibility & Open-Closed Principle", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d1-3", title: "DSA Theory: Big O Notation & Array", category: "theory", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 2, month: 1,
        theme: "Buổi 2: SOLID (Phần 2) & Creational Patterns",
        focus: "theory",
        tasks: [
            { id: "m1d2-1", title: "SOLID: Liskov, Interface Segregation & Dependency Inversion", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d2-2", title: "Singleton, Factory Method & Builder Pattern", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d2-3", title: "DSA Theory: HashMap & HashSet", category: "theory", duration: "30m", priority: "high", resources: ["https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html"] },
            { id: "m1d2-4", title: "Two Sum & Contains Duplicate", category: "dsa", duration: "30m", priority: "high", leetcodeId: 1, leetcodeLink: "https://leetcode.com/problems/two-sum/" },
        ]
    },
    {
        day: 3, month: 1,
        theme: "Buổi 3: Structural & Behavioral Patterns",
        focus: "theory",
        tasks: [
            { id: "m1d3-1", title: "Adapter, Decorator & Facade Pattern", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d3-2", title: "Observer, Strategy Pattern", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d3-3", title: "Valid Anagram & Group Anagrams", category: "dsa", duration: "45m", priority: "high", leetcodeId: 242, leetcodeLink: "https://leetcode.com/problems/valid-anagram/" },
        ]
    },
    {
        day: 4, month: 1,
        theme: "Buổi 4: Review Tuần 1 & Thực hành",
        focus: "review",
        tasks: [
            { id: "m1d4-1", title: "Refactor code cũ áp dụng SOLID & Patterns", category: "practice", duration: "1h", priority: "high" },
            { id: "m1d4-2", title: "Valid Sudoku", category: "dsa", duration: "40m", priority: "high", leetcodeId: 36, leetcodeLink: "https://leetcode.com/problems/valid-sudoku/" },
            { id: "m1d4-3", title: "Top K Frequent Elements", category: "dsa", duration: "40m", priority: "high", leetcodeId: 347, leetcodeLink: "https://leetcode.com/problems/top-k-frequent-elements/" },
        ]
    },
    {
        day: 5, month: 1,
        theme: "Buổi 5 (Tùy chọn): Nâng cao Arrays & Hashing",
        focus: "practice",
        tasks: [
            { id: "m1d5-1", title: "Product of Array Except Self", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 238, leetcodeLink: "https://leetcode.com/problems/product-of-array-except-self/" },
            { id: "m1d5-2", title: "Longest Consecutive Sequence", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 128, leetcodeLink: "https://leetcode.com/problems/longest-consecutive-sequence/" },
            { id: "m1d5-3", title: "Encode and Decode Strings", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 271, leetcodeLink: "https://leetcode.com/problems/encode-and-decode-strings/" },
        ]
    },
    {
        day: 6, month: 1,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 7, month: 1,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },

    // ========== TUẦN 2: Memory Model + Two Pointers & Sliding Window ==========
    {
        day: 8, month: 1,
        theme: "Buổi 1: JVM Memory & Two Pointers",
        focus: "theory",
        tasks: [
            { id: "m1d8-1", title: "JVM Memory: Stack vs Heap & Memory Allocation", category: "theory", duration: "1h", priority: "high" },
            { id: "m1d8-2", title: "Garbage Collection Basics (Mark-and-Sweep, Generational)", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d8-3", title: "DSA Theory: Two Pointers", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d8-4", title: "Two Sum II", category: "dsa", duration: "25m", priority: "high", leetcodeId: 167, leetcodeLink: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
        ]
    },
    {
        day: 9, month: 1,
        theme: "Buổi 2: Memory Leaks, String Pool & 3Sum",
        focus: "theory",
        tasks: [
            { id: "m1d9-1", title: "Memory Leaks trong Java & Cách phòng tránh", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d9-2", title: "String Pool, Immutability & StringBuilder", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d9-3", title: "3Sum", category: "dsa", duration: "50m", priority: "high", leetcodeId: 15, leetcodeLink: "https://leetcode.com/problems/3sum/" },
            { id: "m1d9-4", title: "Container With Most Water", category: "dsa", duration: "35m", priority: "high", leetcodeId: 11, leetcodeLink: "https://leetcode.com/problems/container-with-most-water/" },
        ]
    },
    {
        day: 10, month: 1,
        theme: "Buổi 3: Collections (List, Queue) & Sliding Window",
        focus: "theory",
        tasks: [
            { id: "m1d10-1", title: "ArrayList vs LinkedList, Queue & PriorityQueue", category: "theory", duration: "1h", priority: "high" },
            { id: "m1d10-2", title: "DSA Theory: Sliding Window", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d10-3", title: "Best Time to Buy and Sell Stock", category: "dsa", duration: "25m", priority: "high", leetcodeId: 121, leetcodeLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
            { id: "m1d10-4", title: "Longest Substring Without Repeating Characters", category: "dsa", duration: "35m", priority: "high", leetcodeId: 3, leetcodeLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        ]
    },
    {
        day: 11, month: 1,
        theme: "Buổi 4: Collections (Set, Map) & Review",
        focus: "review",
        tasks: [
            { id: "m1d11-1", title: "HashSet/TreeSet & HashMap/TreeMap", category: "theory", duration: "1h", priority: "high" },
            { id: "m1d11-2", title: "Comparable vs Comparator", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d11-3", title: "Longest Repeating Character Replacement", category: "dsa", duration: "40m", priority: "high", leetcodeId: 424, leetcodeLink: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
        ]
    },
    {
        day: 12, month: 1,
        theme: "Buổi 5 (Tùy chọn): Thuật toán nâng cao",
        focus: "practice",
        tasks: [
            { id: "m1d12-1", title: "Trapping Rain Water", category: "dsa", duration: "50m", priority: "medium", leetcodeId: 42, leetcodeLink: "https://leetcode.com/problems/trapping-rain-water/" },
            { id: "m1d12-2", title: "Minimum Window Substring", category: "dsa", duration: "1h", priority: "medium", leetcodeId: 76, leetcodeLink: "https://leetcode.com/problems/minimum-window-substring/" },
        ]
    },
    {
        day: 13, month: 1,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 14, month: 1,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },

    // ========== TUẦN 3: Generics, Concurrency + Linked List & Binary Search ==========
    {
        day: 15, month: 1,
        theme: "Buổi 1: Generics & Linked List",
        focus: "theory",
        tasks: [
            { id: "m1d15-1", title: "Generics: Types, Wildcards (PECS) & Type Erasure", category: "theory", duration: "1h", priority: "high" },
            { id: "m1d15-2", title: "DSA Theory: Linked List (Singly, Doubly)", category: "theory", duration: "30m", priority: "high", resources: ["https://visualgo.net/en/list"] },
            { id: "m1d15-3", title: "Reverse Linked List", category: "dsa", duration: "25m", priority: "high", leetcodeId: 206, leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/" },
            { id: "m1d15-4", title: "Merge Two Sorted Lists", category: "dsa", duration: "25m", priority: "high", leetcodeId: 21, leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        ]
    },
    {
        day: 16, month: 1,
        theme: "Buổi 2: Concurrency Basics & Binary Search",
        focus: "theory",
        tasks: [
            { id: "m1d16-1", title: "Thread vs Runnable, Lifecycle & synchronized", category: "theory", duration: "1h", priority: "high" },
            { id: "m1d16-2", title: "DSA Theory: Binary Search", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d16-3", title: "Find Minimum in Rotated Sorted Array", category: "dsa", duration: "35m", priority: "high", leetcodeId: 153, leetcodeLink: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
        ]
    },
    {
        day: 17, month: 1,
        theme: "Buổi 3: Concurrency Locks & Exceptions",
        focus: "theory",
        tasks: [
            { id: "m1d17-1", title: "ReentrantLock, Deadlocks & volatile", category: "theory", duration: "1h", priority: "high" },
            { id: "m1d17-2", title: "Checked vs Unchecked exceptions", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d17-3", title: "Search in Rotated Sorted Array", category: "dsa", duration: "40m", priority: "high", leetcodeId: 33, leetcodeLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
            { id: "m1d17-4", title: "Linked List Cycle", category: "dsa", duration: "25m", priority: "high", leetcodeId: 141, leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/" },
        ]
    },
    {
        day: 18, month: 1,
        theme: "Buổi 4: Java Streams & Review",
        focus: "review",
        tasks: [
            { id: "m1d18-1", title: "Java 8 Streams API (map, filter, reduce, collect)", category: "theory", duration: "1h", priority: "high" },
            { id: "m1d18-2", title: "Reorder List", category: "dsa", duration: "40m", priority: "high", leetcodeId: 143, leetcodeLink: "https://leetcode.com/problems/reorder-list/" },
            { id: "m1d18-3", title: "Remove Nth Node From End of List", category: "dsa", duration: "30m", priority: "high", leetcodeId: 19, leetcodeLink: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
        ]
    },
    {
        day: 19, month: 1,
        theme: "Buổi 5 (Tùy chọn): Harder Linked List",
        focus: "practice",
        tasks: [
            { id: "m1d19-1", title: "Find the Duplicate Number", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 287, leetcodeLink: "https://leetcode.com/problems/find-the-duplicate-number/" },
            { id: "m1d19-2", title: "Merge K Sorted Lists", category: "dsa", duration: "50m", priority: "medium", leetcodeId: 23, leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/" },
        ]
    },
    {
        day: 20, month: 1,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 21, month: 1,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },

    // ========== TUẦN 4: Functional Programming + Stack & Binary Tree ==========
    {
        day: 22, month: 1,
        theme: "Buổi 1: Functional Programming & Stack",
        focus: "theory",
        tasks: [
            { id: "m1d22-1", title: "Lambdas, Method References & Functional Interfaces", category: "theory", duration: "1h", priority: "high" },
            { id: "m1d22-2", title: "DSA Theory: Stack", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d22-3", title: "Valid Parentheses", category: "dsa", duration: "25m", priority: "high", leetcodeId: 20, leetcodeLink: "https://leetcode.com/problems/valid-parentheses/" },
            { id: "m1d22-4", title: "Min Stack", category: "dsa", duration: "30m", priority: "high", leetcodeId: 155, leetcodeLink: "https://leetcode.com/problems/min-stack/" },
        ]
    },
    {
        day: 23, month: 1,
        theme: "Buổi 2: Java Records & Binary Tree",
        focus: "theory",
        tasks: [
            { id: "m1d23-1", title: "Java Records, Sealed Classes & Pattern Matching", category: "theory", duration: "1h", priority: "high" },
            { id: "m1d23-2", title: "DSA Theory: Binary Tree & BST", category: "theory", duration: "40m", priority: "high", resources: ["https://visualgo.net/en/bst"] },
            { id: "m1d23-3", title: "Invert Binary Tree", category: "dsa", duration: "20m", priority: "high", leetcodeId: 226, leetcodeLink: "https://leetcode.com/problems/invert-binary-tree/" },
            { id: "m1d23-4", title: "Maximum Depth of Binary Tree", category: "dsa", duration: "20m", priority: "high", leetcodeId: 104, leetcodeLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        ]
    },
    {
        day: 24, month: 1,
        theme: "Buổi 3: Mini Project Khởi Động & Tree Traversals",
        focus: "project",
        tasks: [
            { id: "m1d24-1", title: "Mini Project: Library System (Entities, Logic)", category: "project", duration: "1h", priority: "high" },
            { id: "m1d24-2", title: "Binary Tree Level Order Traversal", category: "dsa", duration: "35m", priority: "high", leetcodeId: 102, leetcodeLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
            { id: "m1d24-3", title: "Balanced Binary Tree", category: "dsa", duration: "30m", priority: "high", leetcodeId: 110, leetcodeLink: "https://leetcode.com/problems/balanced-binary-tree/" },
        ]
    },
    {
        day: 25, month: 1,
        theme: "Buổi 4: Hoàn thiện Project & LCA",
        focus: "project",
        tasks: [
            { id: "m1d25-1", title: "Mini Project: Service Layer & Exception Handling", category: "project", duration: "1h", priority: "high" },
            { id: "m1d25-2", title: "Thử viết 2-3 Unit Tests với JUnit", category: "project", duration: "30m", priority: "high" },
            { id: "m1d25-3", title: "Lowest Common Ancestor of a BST", category: "dsa", duration: "30m", priority: "high", leetcodeId: 235, leetcodeLink: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
        ]
    },
    {
        day: 26, month: 1,
        theme: "Buổi 5 (Tùy chọn): Thuật toán & Tổng kết",
        focus: "review",
        tasks: [
            { id: "m1d26-1", title: "Daily Temperatures", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 739, leetcodeLink: "https://leetcode.com/problems/daily-temperatures/" },
            { id: "m1d26-2", title: "Binary Tree Right Side View", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 199, leetcodeLink: "https://leetcode.com/problems/binary-tree-right-side-view/" },
            { id: "m1d26-3", title: "Review Điểm yếu tháng 1 & Lên Plan Tháng 2", category: "review", duration: "45m", priority: "high" },
        ]
    },
    {
        day: 27, month: 1,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
    {
        day: 28, month: 1,
        theme: "Nghỉ ngơi / Tự do",
        focus: "review",
        tasks: []
    },
];

// Statistics
export const month1Stats = {
    totalDays: 28,
    totalTasks: month1Plans.reduce((acc, day) => acc + day.tasks.length, 0),
    dsaTasks: month1Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'dsa').length, 0),
    theoryTasks: month1Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'theory').length, 0),
    practiceTasks: month1Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'practice').length, 0),
    projectTasks: month1Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'project').length, 0),
    reviewTasks: month1Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'review').length, 0),
};
