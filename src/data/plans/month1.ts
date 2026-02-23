// ============================================
// THÁNG 1: JAVA CORE + DSA NỀN TẢNG
// Mục tiêu: OOP, Memory, Collections + Blind 75 (Easy-Medium)
// Nguyên tắc: Học lý thuyết DSA trước → mới làm LeetCode
// DSA lộ trình: Big O + Arrays → HashMap → Two Pointers → Sliding Window
//               → Linked List → Binary Search → Stack → Binary Tree
// ============================================

import { DailyPlan, DailyPlanTask } from './types';

export const month1Plans: DailyPlan[] = [
    // ========== TUẦN 1: OOP Deep Dive + Arrays & Hashing Theory ==========
    {
        day: 1, month: 1,
        theme: "Khởi động - OOP Fundamentals",
        focus: "theory",
        tasks: [
            { id: "m1d1-1", title: "Ôn lại 4 trụ cột OOP: Encapsulation, Inheritance, Polymorphism, Abstraction", category: "theory", duration: "1h30m", priority: "high", resources: ["https://docs.oracle.com/javase/tutorial/java/concepts/"] },
            { id: "m1d1-2", title: "Viết code ví dụ minh hoạ cho từng trụ cột OOP", category: "practice", duration: "1h", priority: "high" },
            { id: "m1d1-3", title: "DSA Theory: Big O Notation — O(1), O(n), O(n²), O(log n). Cách đánh giá độ phức tạp thuật toán", category: "theory", duration: "30m", priority: "high", resources: ["https://www.bigocheatsheet.com/"] },
            { id: "m1d1-4", title: "DSA Theory: Array — cấu trúc, truy cập O(1), insert/delete O(n). Khi nào dùng array?", category: "theory", duration: "20m", priority: "high" },
        ]
    },
    {
        day: 2, month: 1,
        theme: "SOLID Principles - Phần 1",
        focus: "theory",
        tasks: [
            { id: "m1d2-1", title: "Single Responsibility Principle (SRP) - Một class, một lý do thay đổi", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d2-2", title: "Open-Closed Principle (OCP) - Mở để mở rộng, đóng để sửa đổi", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d2-3", title: "Viết code demo SRP và OCP với ví dụ thực tế", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d2-4", title: "DSA Theory: HashMap & HashSet — hashing function, bucket, collision, load factor. Tại sao get/put là O(1)?", category: "theory", duration: "35m", priority: "high", resources: ["https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html"] },
        ]
    },
    {
        day: 3, month: 1,
        theme: "SOLID Principles - Phần 2",
        focus: "theory",
        tasks: [
            { id: "m1d3-1", title: "Liskov Substitution Principle (LSP) - Thay thế class con không làm vỡ logic", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d3-2", title: "Interface Segregation & Dependency Inversion", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d3-3", title: "Refactor code cũ áp dụng SOLID", category: "practice", duration: "45m", priority: "medium" },
            { id: "m1d3-4", title: "Two Sum", category: "dsa", duration: "30m", priority: "high", leetcodeId: 1, leetcodeLink: "https://leetcode.com/problems/two-sum/", resources: ["Dùng HashMap để lưu phần bù: complement = target - nums[i]"] },
            { id: "m1d3-5", title: "Contains Duplicate", category: "dsa", duration: "20m", priority: "high", leetcodeId: 217, leetcodeLink: "https://leetcode.com/problems/contains-duplicate/", resources: ["Dùng HashSet: nếu đã tồn tại thì return true"] },
            { id: "m1d3-6", title: "Valid Anagram", category: "dsa", duration: "25m", priority: "high", leetcodeId: 242, leetcodeLink: "https://leetcode.com/problems/valid-anagram/", resources: ["Đếm frequency từng ký tự bằng HashMap hoặc int[26]"] },
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
            { id: "m1d4-4", title: "Implement 3 patterns trong mini project", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d4-5", title: "Group Anagrams", category: "dsa", duration: "40m", priority: "high", leetcodeId: 49, leetcodeLink: "https://leetcode.com/problems/group-anagrams/", resources: ["Sort từng string làm key của HashMap"] },
            { id: "m1d4-6", title: "Top K Frequent Elements", category: "dsa", duration: "40m", priority: "high", leetcodeId: 347, leetcodeLink: "https://leetcode.com/problems/top-k-frequent-elements/", resources: ["Đếm frequency → dùng bucket sort hoặc min-heap"] },
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
            { id: "m1d5-4", title: "Code demo và so sánh các patterns", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d5-5", title: "Product of Array Except Self", category: "dsa", duration: "35m", priority: "high", leetcodeId: 238, leetcodeLink: "https://leetcode.com/problems/product-of-array-except-self/", resources: ["Dùng prefix product và suffix product, không dùng phép chia"] },
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
            { id: "m1d6-4", title: "Áp dụng patterns vào Library Management System", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d6-5", title: "Valid Sudoku", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 36, leetcodeLink: "https://leetcode.com/problems/valid-sudoku/", resources: ["Dùng 3 HashSet: hàng, cột, ô 3x3"] },
        ]
    },
    {
        day: 7, month: 1,
        theme: "📝 Review Tuần 1 + Ôn Arrays & Hashing",
        focus: "review",
        tasks: [
            { id: "m1d7-1", title: "Quiz tự đánh giá: OOP + SOLID + Design Patterns", category: "review", duration: "30m", priority: "high" },
            { id: "m1d7-2", title: "Tổng hợp notes và cheatsheet tuần 1", category: "review", duration: "30m", priority: "medium" },
            { id: "m1d7-3", title: "Longest Consecutive Sequence", category: "dsa", duration: "40m", priority: "high", leetcodeId: 128, leetcodeLink: "https://leetcode.com/problems/longest-consecutive-sequence/", resources: ["Dùng HashSet, với mỗi n chỉ bắt đầu đếm nếu n-1 không có trong set"] },
            { id: "m1d7-4", title: "Encode and Decode Strings", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 271, leetcodeLink: "https://leetcode.com/problems/encode-and-decode-strings/" },
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
            { id: "m1d8-3", title: "Vẽ diagram memory allocation cho các scenarios", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d8-4", title: "DSA Theory: Two Pointers — kỹ thuật dùng 2 con trỏ duyệt mảng. Khi nào dùng? (array đã sort, tìm pair/triplet)", category: "theory", duration: "30m", priority: "high" },
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
            { id: "m1d9-4", title: "Two Sum II - Input Array Is Sorted", category: "dsa", duration: "25m", priority: "high", leetcodeId: 167, leetcodeLink: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", resources: ["left pointer từ đầu, right từ cuối, tổng lớn hơn thì right--, nhỏ hơn thì left++"] },
            { id: "m1d9-5", title: "3Sum", category: "dsa", duration: "50m", priority: "high", leetcodeId: 15, leetcodeLink: "https://leetcode.com/problems/3sum/", resources: ["Sort → fix i, two pointers với l=i+1 và r=n-1"] },
        ]
    },
    {
        day: 10, month: 1,
        theme: "Memory Leaks & Profiling",
        focus: "practice",
        tasks: [
            { id: "m1d10-1", title: "Nguyên nhân Memory Leak: static collections, listeners, caches", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d10-2", title: "Phát hiện leak với Heap Dump Analysis", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d10-3", title: "Best practices để tránh memory leak", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d10-4", title: "Container With Most Water", category: "dsa", duration: "35m", priority: "high", leetcodeId: 11, leetcodeLink: "https://leetcode.com/problems/container-with-most-water/", resources: ["Two pointers: luôn di chuyển phía có bar thấp hơn"] },
        ]
    },
    {
        day: 11, month: 1,
        theme: "String Pool & Immutability",
        focus: "theory",
        tasks: [
            { id: "m1d11-1", title: "String Pool: intern(), == vs equals()", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d11-2", title: "Tại sao String immutable? Security, Caching, Thread-safety", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d11-3", title: "StringBuilder vs StringBuffer - benchmark", category: "practice", duration: "30m", priority: "medium" },
            { id: "m1d11-4", title: "DSA Theory: Sliding Window — Fixed window vs Dynamic window. Khi nào dùng? (subarray/substring liên tục)", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d11-5", title: "Trapping Rain Water", category: "dsa", duration: "50m", priority: "high", leetcodeId: 42, leetcodeLink: "https://leetcode.com/problems/trapping-rain-water/", resources: ["Two pointers: dùng maxLeft và maxRight, nước = min(maxLeft, maxRight) - height[i]"] },
        ]
    },
    {
        day: 12, month: 1,
        theme: "Collections - List Interface",
        focus: "theory",
        tasks: [
            { id: "m1d12-1", title: "ArrayList internals: dynamic array, resize, amortized O(1)", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d12-2", title: "LinkedList internals: nodes, O(1) add/remove at head/tail", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d12-3", title: "Khi nào dùng ArrayList vs LinkedList?", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d12-4", title: "Best Time to Buy and Sell Stock", category: "dsa", duration: "25m", priority: "high", leetcodeId: 121, leetcodeLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", resources: ["Sliding window: track minPrice, cập nhật maxProfit tại mỗi bước"] },
            { id: "m1d12-5", title: "Longest Substring Without Repeating Characters", category: "dsa", duration: "35m", priority: "high", leetcodeId: 3, leetcodeLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", resources: ["Dynamic sliding window: HashSet + left pointer thu hẹp khi gặp duplicate"] },
        ]
    },
    {
        day: 13, month: 1,
        theme: "Collections - Set & Map",
        focus: "theory",
        tasks: [
            { id: "m1d13-1", title: "HashSet vs TreeSet vs LinkedHashSet", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d13-2", title: "HashMap internals: buckets, load factor, collision resolution", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d13-3", title: "equals() và hashCode() contract — tại sao phải override cả hai?", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d13-4", title: "Longest Repeating Character Replacement", category: "dsa", duration: "40m", priority: "high", leetcodeId: 424, leetcodeLink: "https://leetcode.com/problems/longest-repeating-character-replacement/", resources: ["Sliding window: window_size - max_freq <= k"] },
        ]
    },
    {
        day: 14, month: 1,
        theme: "📝 Review Tuần 2 + Two Pointers/Sliding Window",
        focus: "review",
        tasks: [
            { id: "m1d14-1", title: "Quiz tự đánh giá: Memory Model + Collections", category: "review", duration: "30m", priority: "high" },
            { id: "m1d14-2", title: "Tổng hợp notes tuần 2: so sánh Two Pointers vs Sliding Window", category: "review", duration: "30m", priority: "medium" },
            { id: "m1d14-3", title: "Minimum Window Substring", category: "dsa", duration: "1h", priority: "high", leetcodeId: 76, leetcodeLink: "https://leetcode.com/problems/minimum-window-substring/", resources: ["Dynamic sliding window: dùng HashMap đếm ký tự cần, expand right rồi shrink left"] },
            { id: "m1d14-4", title: "Permutation in String", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 567, leetcodeLink: "https://leetcode.com/problems/permutation-in-string/" },
        ]
    },

    // ========== TUẦN 3: Generics, Concurrency + Linked List & Binary Search ==========
    {
        day: 15, month: 1,
        theme: "Generics Deep Dive",
        focus: "theory",
        tasks: [
            { id: "m1d15-1", title: "Generic Types: class, interface, method generics", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d15-2", title: "Wildcards: ?, extends, super (PECS rule)", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d15-3", title: "Type Erasure và hạn chế khi dùng generics", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d15-4", title: "DSA Theory: Linked List — singly/doubly linked list, node, pointer. Traversal, insert head O(1), insert tail O(n). So sánh với Array", category: "theory", duration: "35m", priority: "high", resources: ["https://visualgo.net/en/list"] },
        ]
    },
    {
        day: 16, month: 1,
        theme: "Concurrency - Thread Basics",
        focus: "theory",
        tasks: [
            { id: "m1d16-1", title: "Thread vs Runnable, cách tạo thread", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d16-2", title: "Thread lifecycle: NEW, RUNNABLE, BLOCKED, WAITING, TERMINATED", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d16-3", title: "sleep(), join(), interrupt()", category: "practice", duration: "30m", priority: "medium" },
            { id: "m1d16-4", title: "DSA Theory: Binary Search — điều kiện áp dụng (sorted array), template while(l<=r), khi nào l=mid+1 hay r=mid-1", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d16-5", title: "Reverse Linked List", category: "dsa", duration: "25m", priority: "high", leetcodeId: 206, leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/", resources: ["Iterative: 3 pointers prev, curr, next"] },
        ]
    },
    {
        day: 17, month: 1,
        theme: "Concurrency - Synchronization",
        focus: "theory",
        tasks: [
            { id: "m1d17-1", title: "synchronized keyword: method, block", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d17-2", title: "volatile keyword và visibility", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d17-3", title: "Race condition demo và cách fix", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d17-4", title: "Find Minimum in Rotated Sorted Array", category: "dsa", duration: "35m", priority: "high", leetcodeId: 153, leetcodeLink: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", resources: ["Binary search: so sánh mid với right để xác định side bị rotate"] },
            { id: "m1d17-5", title: "Search in Rotated Sorted Array", category: "dsa", duration: "40m", priority: "high", leetcodeId: 33, leetcodeLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
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
            { id: "m1d18-4", title: "Merge Two Sorted Lists", category: "dsa", duration: "25m", priority: "high", leetcodeId: 21, leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/", resources: ["Dùng dummy head node để đơn giản hóa edge cases"] },
            { id: "m1d18-5", title: "Linked List Cycle", category: "dsa", duration: "25m", priority: "high", leetcodeId: 141, leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/", resources: ["Floyd's algorithm: slow & fast pointer, nếu gặp nhau thì có cycle"] },
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
            { id: "m1d19-4", title: "Reorder List", category: "dsa", duration: "40m", priority: "high", leetcodeId: 143, leetcodeLink: "https://leetcode.com/problems/reorder-list/", resources: ["3 bước: tìm middle, reverse nửa sau, merge xen kẽ"] },
            { id: "m1d19-5", title: "Remove Nth Node From End of List", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 19, leetcodeLink: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", resources: ["Two pointers: fast đi trước n bước rồi cả hai cùng đi"] },
        ]
    },
    {
        day: 20, month: 1,
        theme: "Java 8+ Streams API",
        focus: "practice",
        tasks: [
            { id: "m1d20-1", title: "Stream creation và basic operations (map, filter, sorted)", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d20-2", title: "reduce, collect, groupingBy, partitioningBy", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d20-3", title: "Parallel streams và khi nào nên dùng", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d20-4", title: "Merge K Sorted Lists", category: "dsa", duration: "50m", priority: "high", leetcodeId: 23, leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/", resources: ["Dùng PriorityQueue (min-heap) để luôn lấy node nhỏ nhất"] },
        ]
    },
    {
        day: 21, month: 1,
        theme: "📝 Review Tuần 3 + Linked List & Binary Search",
        focus: "review",
        tasks: [
            { id: "m1d21-1", title: "Quiz: Generics + Concurrency + Streams", category: "review", duration: "30m", priority: "high" },
            { id: "m1d21-2", title: "Tổng hợp notes tuần 3: so sánh Linked List vs Array, Binary Search patterns", category: "review", duration: "30m", priority: "medium" },
            { id: "m1d21-3", title: "Find the Duplicate Number", category: "dsa", duration: "40m", priority: "high", leetcodeId: 287, leetcodeLink: "https://leetcode.com/problems/find-the-duplicate-number/", resources: ["Floyd's cycle detection trên array — giống Linked List Cycle"] },
            { id: "m1d21-4", title: "Copy List with Random Pointer", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 138, leetcodeLink: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
        ]
    },

    // ========== TUẦN 4: Functional Programming + Stack & Binary Tree ==========
    {
        day: 22, month: 1,
        theme: "Functional Programming - Lambda",
        focus: "theory",
        tasks: [
            { id: "m1d22-1", title: "Lambda expressions syntax và use cases", category: "theory", duration: "45m", priority: "high" },
            { id: "m1d22-2", title: "Method references: static, instance, constructor", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d22-3", title: "Refactor code sang functional style", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d22-4", title: "DSA Theory: Stack — LIFO, push/pop O(1). Ứng dụng: undo/redo, parsing, DFS. Cài đặt bằng Deque trong Java", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d22-5", title: "Valid Parentheses", category: "dsa", duration: "25m", priority: "high", leetcodeId: 20, leetcodeLink: "https://leetcode.com/problems/valid-parentheses/", resources: ["Dùng Stack: push khi gặp mở, pop và check khi gặp đóng"] },
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
            { id: "m1d23-4", title: "Min Stack", category: "dsa", duration: "30m", priority: "high", leetcodeId: 155, leetcodeLink: "https://leetcode.com/problems/min-stack/", resources: ["Dùng 2 stacks: một stack thường, một stack track minimum"] },
            { id: "m1d23-5", title: "Daily Temperatures", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 739, leetcodeLink: "https://leetcode.com/problems/daily-temperatures/", resources: ["Monotonic decreasing stack: lưu index, pop khi gặp nhiệt độ cao hơn"] },
        ]
    },
    {
        day: 24, month: 1,
        theme: "Records, Sealed Classes & Pattern Matching",
        focus: "theory",
        tasks: [
            { id: "m1d24-1", title: "Java Records: immutable data carriers", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d24-2", title: "Sealed classes: kiểm soát inheritance hierarchy", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d24-3", title: "Pattern matching với instanceof và switch expression", category: "practice", duration: "30m", priority: "medium" },
            { id: "m1d24-4", title: "DSA Theory: Binary Tree — node, left/right child, height, depth. In-order / Pre-order / Post-order / Level-order traversal. BST property", category: "theory", duration: "40m", priority: "high", resources: ["https://visualgo.net/en/bst"] },
        ]
    },
    {
        day: 25, month: 1,
        theme: "🛠️ Mini Project Day 1 - Library System",
        focus: "project",
        tasks: [
            { id: "m1d25-1", title: "Thiết kế class diagram cho Library System", category: "project", duration: "45m", priority: "high" },
            { id: "m1d25-2", title: "Implement entities: Book, Member, Loan với records/sealed classes", category: "project", duration: "1h", priority: "high" },
            { id: "m1d25-3", title: "Áp dụng OOP principles và Design Patterns", category: "project", duration: "45m", priority: "high" },
            { id: "m1d25-4", title: "Invert Binary Tree", category: "dsa", duration: "20m", priority: "high", leetcodeId: 226, leetcodeLink: "https://leetcode.com/problems/invert-binary-tree/", resources: ["Recursion: swap left/right recursively"] },
            { id: "m1d25-5", title: "Maximum Depth of Binary Tree", category: "dsa", duration: "20m", priority: "high", leetcodeId: 104, leetcodeLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", resources: ["Recursion: 1 + max(depth(left), depth(right))"] },
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
            { id: "m1d26-4", title: "Balanced Binary Tree", category: "dsa", duration: "30m", priority: "high", leetcodeId: 110, leetcodeLink: "https://leetcode.com/problems/balanced-binary-tree/", resources: ["Recursion: trả về height, check abs(left - right) <= 1"] },
            { id: "m1d26-5", title: "Same Tree", category: "dsa", duration: "20m", priority: "medium", leetcodeId: 100, leetcodeLink: "https://leetcode.com/problems/same-tree/" },
            { id: "m1d26-6", title: "Subtree of Another Tree", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 572, leetcodeLink: "https://leetcode.com/problems/subtree-of-another-tree/" },
        ]
    },
    {
        day: 27, month: 1,
        theme: "🛠️ Mini Project Day 3 - Polish & Document",
        focus: "project",
        tasks: [
            { id: "m1d27-1", title: "Refactor và clean code", category: "project", duration: "45m", priority: "high" },
            { id: "m1d27-2", title: "Viết README với class diagram và usage guide", category: "project", duration: "45m", priority: "high" },
            { id: "m1d27-3", title: "Push lên GitHub với proper commit messages", category: "project", duration: "30m", priority: "medium" },
            { id: "m1d27-4", title: "Lowest Common Ancestor of a BST", category: "dsa", duration: "30m", priority: "high", leetcodeId: 235, leetcodeLink: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", resources: ["BST property: nếu cả p và q đều < root thì LCA ở left, ngược lại ở right"] },
            { id: "m1d27-5", title: "Binary Tree Level Order Traversal", category: "dsa", duration: "35m", priority: "high", leetcodeId: 102, leetcodeLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/", resources: ["BFS với Queue: poll node, add children, track level size"] },
        ]
    },
    {
        day: 28, month: 1,
        theme: "📝 Tổng Kết Tháng 1",
        focus: "review",
        tasks: [
            { id: "m1d28-1", title: "Review toàn bộ kiến thức tháng 1: Java Core + 7 DSA topics", category: "review", duration: "1h", priority: "high" },
            { id: "m1d28-2", title: "Self-assessment: điểm mạnh/yếu, cần cải thiện gì trước tháng 2", category: "review", duration: "30m", priority: "high" },
            { id: "m1d28-3", title: "Lập kế hoạch ôn tập và preview tháng 2 (DSA chuyên sâu)", category: "review", duration: "30m", priority: "medium" },
            { id: "m1d28-4", title: "Binary Tree Right Side View", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 199, leetcodeLink: "https://leetcode.com/problems/binary-tree-right-side-view/", resources: ["BFS: lấy phần tử cuối mỗi level"] },
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
