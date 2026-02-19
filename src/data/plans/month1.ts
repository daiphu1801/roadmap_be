// ============================================
// THÁNG 1: JAVA CORE + DSA NỀN TẢNG
// Mục tiêu: OOP, Memory, Collections + Blind 75 (Easy-Medium)
// DSA Focus: Arrays & Hashing, Two Pointers, Sliding Window, Stack
// ============================================

import { DailyPlan, DailyPlanTask } from './types';

export const month1Plans: DailyPlan[] = [
    // ========== TUẦN 1: OOP Deep Dive + Arrays & Hashing ==========
    {
        day: 1, month: 1,
        theme: "Khởi động - OOP Fundamentals",
        focus: "theory",
        tasks: [
            { id: "m1d1-1", title: "Ôn lại 4 trụ cột OOP: Encapsulation, Inheritance, Polymorphism, Abstraction", category: "theory", duration: "1h30m", priority: "high", resources: ["https://docs.oracle.com/javase/tutorial/java/concepts/"] },
            { id: "m1d1-2", title: "Viết code ví dụ minh hoạ cho từng trụ cột OOP", category: "practice", duration: "1h", priority: "high" },
            { id: "m1d1-3", title: "Two Sum", category: "dsa", duration: "30m", priority: "high", leetcodeId: 1, leetcodeLink: "https://leetcode.com/problems/two-sum/" },
            { id: "m1d1-4", title: "Contains Duplicate", category: "dsa", duration: "20m", priority: "medium", leetcodeId: 217, leetcodeLink: "https://leetcode.com/problems/contains-duplicate/" },
        ]
    },
    {
        day: 2, month: 1,
        theme: "SOLID Principles - Phần 1",
        focus: "theory",
        tasks: [
            { id: "m1d2-1", title: "Single Responsibility Principle (SRP) - Một class, một lý do thay đổi", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d2-2", title: "Open-Closed Principle (OCP) - Mở để mở rộng, đóng để sửa đổi", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d2-3", title: "Viết code demo SRP và OCP với ví dụ thực tế", category: "practice", duration: "1h", priority: "high" },
            { id: "m1d2-4", title: "Valid Anagram", category: "dsa", duration: "25m", priority: "high", leetcodeId: 242, leetcodeLink: "https://leetcode.com/problems/valid-anagram/" },
        ]
    },
    {
        day: 3, month: 1,
        theme: "SOLID Principles - Phần 2",
        focus: "theory",
        tasks: [
            { id: "m1d3-1", title: "Liskov Substitution Principle (LSP) - Thay thế class con không làm vỡ logic", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d3-2", title: "Interface Segregation & Dependency Inversion", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d3-3", title: "Refactor code cũ áp dụng SOLID", category: "practice", duration: "1h", priority: "medium" },
            { id: "m1d3-4", title: "Group Anagrams", category: "dsa", duration: "40m", priority: "high", leetcodeId: 49, leetcodeLink: "https://leetcode.com/problems/group-anagrams/" },
        ]
    },
    {
        day: 4, month: 1,
        theme: "Design Patterns - Creational",
        focus: "theory",
        tasks: [
            { id: "m1d4-1", title: "Singleton Pattern - Đảm bảo chỉ có 1 instance", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d4-2", title: "Factory Method & Abstract Factory", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d4-3", title: "Builder Pattern - Xây dựng object phức tạp", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d4-4", title: "Implement 3 patterns trong mini project", category: "practice", duration: "1h", priority: "high" },
            { id: "m1d4-5", title: "Top K Frequent Elements", category: "dsa", duration: "40m", priority: "high", leetcodeId: 347, leetcodeLink: "https://leetcode.com/problems/top-k-frequent-elements/" },
        ]
    },
    {
        day: 5, month: 1,
        theme: "Design Patterns - Structural",
        focus: "theory",
        tasks: [
            { id: "m1d5-1", title: "Adapter Pattern - Chuyển đổi interface", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d5-2", title: "Decorator Pattern - Thêm tính năng động", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d5-3", title: "Facade Pattern - Đơn giản hóa interface phức tạp", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d5-4", title: "Code demo và so sánh các patterns", category: "practice", duration: "1h", priority: "high" },
            { id: "m1d5-5", title: "Product of Array Except Self", category: "dsa", duration: "35m", priority: "high", leetcodeId: 238, leetcodeLink: "https://leetcode.com/problems/product-of-array-except-self/" },
        ]
    },
    {
        day: 6, month: 1,
        theme: "Design Patterns - Behavioral",
        focus: "theory",
        tasks: [
            { id: "m1d6-1", title: "Observer Pattern - Notify khi state thay đổi", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d6-2", title: "Strategy Pattern - Đổi algorithm runtime", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d6-3", title: "Template Method Pattern", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d6-4", title: "Áp dụng patterns vào Library Management System", category: "practice", duration: "1h", priority: "high" },
            { id: "m1d6-5", title: "Valid Sudoku", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 36, leetcodeLink: "https://leetcode.com/problems/valid-sudoku/" },
        ]
    },
    {
        day: 7, month: 1,
        theme: "📝 Review Tuần 1 + Two Pointers Intro",
        focus: "review",
        tasks: [
            { id: "m1d7-1", title: "Quiz tự đánh giá: OOP + SOLID + Design Patterns", category: "review", duration: "30m", priority: "high" },
            { id: "m1d7-2", title: "Tổng hợp notes và cheatsheet", category: "review", duration: "30m", priority: "medium" },
            { id: "m1d7-3", title: "Longest Consecutive Sequence", category: "dsa", duration: "40m", priority: "high", leetcodeId: 128, leetcodeLink: "https://leetcode.com/problems/longest-consecutive-sequence/" },
            { id: "m1d7-4", title: "Valid Palindrome", category: "dsa", duration: "20m", priority: "high", leetcodeId: 125, leetcodeLink: "https://leetcode.com/problems/valid-palindrome/" },
        ]
    },

    // ========== TUẦN 2: Memory Model + Two Pointers & Sliding Window ==========
    {
        day: 8, month: 1,
        theme: "JVM Memory - Stack vs Heap",
        focus: "theory",
        tasks: [
            { id: "m1d8-1", title: "Stack Memory: primitive types, method calls, LIFO", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d8-2", title: "Heap Memory: objects, instance variables, GC eligible", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d8-3", title: "Vẽ diagram memory allocation cho các scenarios", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d8-4", title: "Two Sum II - Input Array Is Sorted", category: "dsa", duration: "25m", priority: "high", leetcodeId: 167, leetcodeLink: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
        ]
    },
    {
        day: 9, month: 1,
        theme: "Garbage Collection Deep Dive",
        focus: "theory",
        tasks: [
            { id: "m1d9-1", title: "Mark-and-Sweep algorithm", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d9-2", title: "Generational GC: Young, Old, Permanent Gen", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d9-3", title: "JVM flags: -Xms, -Xmx, GC tuning basics", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d9-4", title: "Monitor GC với VisualVM", category: "practice", duration: "45m", priority: "medium" },
            { id: "m1d9-5", title: "3Sum", category: "dsa", duration: "50m", priority: "high", leetcodeId: 15, leetcodeLink: "https://leetcode.com/problems/3sum/" },
        ]
    },
    {
        day: 10, month: 1,
        theme: "Memory Leaks & Profiling",
        focus: "practice",
        tasks: [
            { id: "m1d10-1", title: "Nguyên nhân Memory Leak: static collections, listeners, caches", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d10-2", title: "Phát hiện leak với Heap Dump Analysis", category: "practice", duration: "1h", priority: "high" },
            { id: "m1d10-3", title: "Best practices để tránh memory leak", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d10-4", title: "Container With Most Water", category: "dsa", duration: "35m", priority: "high", leetcodeId: 11, leetcodeLink: "https://leetcode.com/problems/container-with-most-water/" },
        ]
    },
    {
        day: 11, month: 1,
        theme: "String Pool & Immutability",
        focus: "theory",
        tasks: [
            { id: "m1d11-1", title: "String Pool: intern(), == vs equals()", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d11-2", title: "Tại sao String immutable? Security, Caching, Thread-safety", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d11-3", title: "StringBuilder vs StringBuffer - benchmark", category: "practice", duration: "45m", priority: "medium" },
            { id: "m1d11-4", title: "Trapping Rain Water", category: "dsa", duration: "1h", priority: "high", leetcodeId: 42, leetcodeLink: "https://leetcode.com/problems/trapping-rain-water/" },
        ]
    },
    {
        day: 12, month: 1,
        theme: "Collections - List Interface",
        focus: "theory",
        tasks: [
            { id: "m1d12-1", title: "ArrayList internals: dynamic array, resize, amortized O(1)", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d12-2", title: "LinkedList internals: nodes, O(1) add/remove", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d12-3", title: "Khi nào dùng ArrayList vs LinkedList?", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d12-4", title: "Best Time to Buy and Sell Stock", category: "dsa", duration: "25m", priority: "high", leetcodeId: 121, leetcodeLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        ]
    },
    {
        day: 13, month: 1,
        theme: "Collections - Set & Map",
        focus: "theory",
        tasks: [
            { id: "m1d13-1", title: "HashSet vs TreeSet vs LinkedHashSet", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d13-2", title: "HashMap internals: buckets, load factor, collision", category: "theory", duration: "1h", priority: "high" },
            { id: "m1d13-3", title: "equals() và hashCode() contract", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d13-4", title: "Longest Substring Without Repeating Characters", category: "dsa", duration: "35m", priority: "high", leetcodeId: 3, leetcodeLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        ]
    },
    {
        day: 14, month: 1,
        theme: "📝 Review Tuần 2 + Sliding Window",
        focus: "review",
        tasks: [
            { id: "m1d14-1", title: "Quiz tự đánh giá: Memory Model + Collections", category: "review", duration: "30m", priority: "high" },
            { id: "m1d14-2", title: "Viết blog tổng hợp tuần 2", category: "review", duration: "45m", priority: "medium" },
            { id: "m1d14-3", title: "Longest Repeating Character Replacement", category: "dsa", duration: "40m", priority: "high", leetcodeId: 424, leetcodeLink: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
            { id: "m1d14-4", title: "Valid Parentheses", category: "dsa", duration: "20m", priority: "high", leetcodeId: 20, leetcodeLink: "https://leetcode.com/problems/valid-parentheses/" },
        ]
    },

    // ========== TUẦN 3: Generics, Concurrency Basics + Binary Search & Linked List ==========
    {
        day: 15, month: 1,
        theme: "Generics Deep Dive",
        focus: "theory",
        tasks: [
            { id: "m1d15-1", title: "Generic Types: class, interface, method", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d15-2", title: "Wildcards: ?, extends, super (PECS rule)", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d15-3", title: "Type Erasure và hạn chế", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d15-4", title: "Minimum Window Substring", category: "dsa", duration: "1h", priority: "high", leetcodeId: 76, leetcodeLink: "https://leetcode.com/problems/minimum-window-substring/" },
        ]
    },
    {
        day: 16, month: 1,
        theme: "Concurrency - Thread Basics",
        focus: "theory",
        tasks: [
            { id: "m1d16-1", title: "Thread vs Runnable, cách tạo thread", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d16-2", title: "Thread lifecycle: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d16-3", title: "sleep(), join(), interrupt()", category: "practice", duration: "45m", priority: "medium" },
            { id: "m1d16-4", title: "Find Minimum in Rotated Sorted Array", category: "dsa", duration: "35m", priority: "high", leetcodeId: 153, leetcodeLink: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
        ]
    },
    {
        day: 17, month: 1,
        theme: "Concurrency - Synchronization",
        focus: "theory",
        tasks: [
            { id: "m1d17-1", title: "synchronized keyword: method, block", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d17-2", title: "volatile keyword và visibility", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d17-3", title: "Race condition demo và cách fix", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d17-4", title: "Search in Rotated Sorted Array", category: "dsa", duration: "40m", priority: "high", leetcodeId: 33, leetcodeLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
        ]
    },
    {
        day: 18, month: 1,
        theme: "Concurrency - Locks & Deadlock",
        focus: "theory",
        tasks: [
            { id: "m1d18-1", title: "ReentrantLock vs synchronized", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d18-2", title: "Deadlock: conditions, detection, prevention", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d18-3", title: "Demo và fix deadlock scenario", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d18-4", title: "Reverse Linked List", category: "dsa", duration: "25m", priority: "high", leetcodeId: 206, leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/" },
        ]
    },
    {
        day: 19, month: 1,
        theme: "Exception Handling",
        focus: "theory",
        tasks: [
            { id: "m1d19-1", title: "Checked vs Unchecked exceptions", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d19-2", title: "Custom exceptions best practices", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d19-3", title: "try-with-resources (AutoCloseable)", category: "practice", duration: "30m", priority: "medium" },
            { id: "m1d19-4", title: "Merge Two Sorted Lists", category: "dsa", duration: "25m", priority: "high", leetcodeId: 21, leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/" },
            { id: "m1d19-5", title: "Linked List Cycle", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 141, leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/" },
        ]
    },
    {
        day: 20, month: 1,
        theme: "Java 8+ Streams API",
        focus: "practice",
        tasks: [
            { id: "m1d20-1", title: "Stream creation và basic operations (map, filter)", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d20-2", title: "reduce, collect, groupingBy", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d20-3", title: "Parallel streams và khi nào nên dùng", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d20-4", title: "Reorder List", category: "dsa", duration: "40m", priority: "high", leetcodeId: 143, leetcodeLink: "https://leetcode.com/problems/reorder-list/" },
        ]
    },
    {
        day: 21, month: 1,
        theme: "📝 Review Tuần 3 + Linked List",
        focus: "review",
        tasks: [
            { id: "m1d21-1", title: "Quiz: Generics + Concurrency + Streams", category: "review", duration: "30m", priority: "high" },
            { id: "m1d21-2", title: "Code review mini projects tuần 1-3", category: "review", duration: "45m", priority: "medium" },
            { id: "m1d21-3", title: "Remove Nth Node From End of List", category: "dsa", duration: "30m", priority: "high", leetcodeId: 19, leetcodeLink: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
            { id: "m1d21-4", title: "Merge K Sorted Lists", category: "dsa", duration: "50m", priority: "high", leetcodeId: 23, leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/" },
        ]
    },

    // ========== TUẦN 4: Functional Programming + Trees (Intro) ==========
    {
        day: 22, month: 1,
        theme: "Functional Programming - Lambda",
        focus: "theory",
        tasks: [
            { id: "m1d22-1", title: "Lambda expressions syntax và use cases", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d22-2", title: "Method references: static, instance, constructor", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d22-3", title: "Refactor code sang functional style", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d22-4", title: "Invert Binary Tree", category: "dsa", duration: "20m", priority: "high", leetcodeId: 226, leetcodeLink: "https://leetcode.com/problems/invert-binary-tree/" },
            { id: "m1d22-5", title: "Maximum Depth of Binary Tree", category: "dsa", duration: "20m", priority: "medium", leetcodeId: 104, leetcodeLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        ]
    },
    {
        day: 23, month: 1,
        theme: "Functional Interfaces & Optional",
        focus: "theory",
        tasks: [
            { id: "m1d23-1", title: "Predicate, Function, Consumer, Supplier", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d23-2", title: "Optional: avoiding null, methods & best practices", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d23-3", title: "Viết utility class sử dụng functional interfaces", category: "practice", duration: "30m", priority: "medium" },
            { id: "m1d23-4", title: "Diameter of Binary Tree", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 543, leetcodeLink: "https://leetcode.com/problems/diameter-of-binary-tree/" },
        ]
    },
    {
        day: 24, month: 1,
        theme: "Records, Sealed Classes & Pattern Matching",
        focus: "theory",
        tasks: [
            { id: "m1d24-1", title: "Java Records: immutable data carriers", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d24-2", title: "Sealed classes: kiểm soát inheritance", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d24-3", title: "Pattern matching với instanceof và switch", category: "practice", duration: "30m", priority: "medium" },
            { id: "m1d24-4", title: "Balanced Binary Tree", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 110, leetcodeLink: "https://leetcode.com/problems/balanced-binary-tree/" },
            { id: "m1d24-5", title: "Same Tree", category: "dsa", duration: "20m", priority: "medium", leetcodeId: 100, leetcodeLink: "https://leetcode.com/problems/same-tree/" },
        ]
    },
    {
        day: 25, month: 1,
        theme: "🛠️ Mini Project Day 1 - Library System",
        focus: "project",
        tasks: [
            { id: "m1d25-1", title: "Thiết kế class diagram cho Library System", category: "project", duration: "45m", priority: "high" },
            { id: "m1d25-2", title: "Implement entities: Book, Member, Loan", category: "project", duration: "1h", priority: "high" },
            { id: "m1d25-3", title: "Áp dụng OOP principles và Design Patterns", category: "project", duration: "45m", priority: "high" },
            { id: "m1d25-4", title: "Subtree of Another Tree", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 572, leetcodeLink: "https://leetcode.com/problems/subtree-of-another-tree/" },
        ]
    },
    {
        day: 26, month: 1,
        theme: "🛠️ Mini Project Day 2 - Service Layer",
        focus: "project",
        tasks: [
            { id: "m1d26-1", title: "Implement BookService, MemberService với business logic", category: "project", duration: "1h", priority: "high" },
            { id: "m1d26-2", title: "Xử lý exceptions với custom exception classes", category: "project", duration: "45m", priority: "high" },
            { id: "m1d26-3", title: "Unit tests với JUnit 5", category: "project", duration: "45m", priority: "high" },
            { id: "m1d26-4", title: "Lowest Common Ancestor of a BST", category: "dsa", duration: "30m", priority: "high", leetcodeId: 235, leetcodeLink: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
        ]
    },
    {
        day: 27, month: 1,
        theme: "🛠️ Mini Project Day 3 - Polish & Document",
        focus: "project",
        tasks: [
            { id: "m1d27-1", title: "Refactor và clean code", category: "project", duration: "45m", priority: "high" },
            { id: "m1d27-2", title: "Viết README với class diagram và usage", category: "project", duration: "45m", priority: "high" },
            { id: "m1d27-3", title: "Push lên GitHub với proper commit messages", category: "project", duration: "30m", priority: "medium" },
            { id: "m1d27-4", title: "Binary Tree Level Order Traversal", category: "dsa", duration: "35m", priority: "high", leetcodeId: 102, leetcodeLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        ]
    },
    {
        day: 28, month: 1,
        theme: "📝 Tổng Kết Tháng 1",
        focus: "review",
        tasks: [
            { id: "m1d28-1", title: "Review toàn bộ kiến thức tháng 1", category: "review", duration: "1h", priority: "high" },
            { id: "m1d28-2", title: "Self-assessment: điểm mạnh/yếu, cần cải thiện gì", category: "review", duration: "30m", priority: "high" },
            { id: "m1d28-3", title: "Lập kế hoạch ôn tập cho tháng 2", category: "review", duration: "30m", priority: "medium" },
            { id: "m1d28-4", title: "Binary Tree Right Side View", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 199, leetcodeLink: "https://leetcode.com/problems/binary-tree-right-side-view/" },
        ]
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
