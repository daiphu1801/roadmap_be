// ============================================
// THÁNG 1: JAVA CORE + DSA NỀN TẢNG
// Mục tiêu: OOP, Memory, Collections + Blind 75 (Easy-Medium)
// Phương pháp: Mỗi unit lý thuyết đều áp dụng thực hành Code ngay lập tức để nhớ sâu. Định mức 6-8 task/ngày.
// ============================================

import { DailyPlan, DailyPlanTask } from './types';

export const month1Plans: DailyPlan[] = [
    // ========== TUẦN 1: Tư duy OOP & Áp dụng Design Patterns ==========
    {
        day: 1, month: 1,
        theme: "Buổi 1: Deep Dive OOP & SOLID (Tư duy thiết kế)",
        focus: "theory",
        tasks: [
            { id: "m1d1-1", title: "Lý thuyết: Abstraction & Encapsulation ở mức độ System", category: "theory", duration: "30m", priority: "high", resources: ["https://docs.oracle.com/javase/tutorial/java/concepts/"] },
            { id: "m1d1-2", title: "⚙️ Thực hành 1: Thiết kế class BankAccount bảo mật dữ liệu tuyệt đối (Encapsulation)", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d1-3", title: "Lý thuyết: Inheritance vs Composition & Polymorphism", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d1-4", title: "⚙️ Thực hành 2: Điểm mù của Kế thừa - Refactor code Lạm dụng Kế thừa sang Composition", category: "practice", duration: "40m", priority: "high" },
            { id: "m1d1-5", title: "Lý thuyết: Phân tích sâu Single Responsibility (SRP) & Open-Closed (OCP)", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d1-6", title: "⚙️ Thực hành 3: Tách cấu trúc một 'God Class' xử lý Order cồng kềnh", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d1-7", title: "DSA Lý thuyết: Phân tích Big-O Notation & Arrays", category: "theory", duration: "20m", priority: "medium" },
            { id: "m1d1-8", title: "DSA Thực hành: Remove Duplicates from Sorted Array", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 26, leetcodeLink: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" }
        ]
    },
    {
        day: 2, month: 1,
        theme: "Buổi 2: Core SOLID & Creational Patterns",
        focus: "theory",
        tasks: [
            { id: "m1d2-1", title: "Lý thuyết: Liskov Substitution (LSP) & Interface Segregation (ISP)", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d2-2", title: "⚙️ Thực hành 1: Tạo hệ thống giao diện chuẩn ISP cho hệ thống Worker (Robot & Human)", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d2-3", title: "Lý thuyết: Dependency Inversion (DIP) cốt lõi của Spring", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d2-4", title: "⚙️ Thực hành 2: Áp dụng Dependency Injection Constructor Pattern thay vì new Object()", category: "practice", duration: "40m", priority: "high" },
            { id: "m1d2-5", title: "Lý thuyết: Singleton, Factory Method & Builder Pattern", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d2-6", title: "⚙️ Thực hành 3: Triển khai Builder cho API Response Object phức tạp", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d2-7", title: "DSA: Two Sum (Hash Map tối ưu)", category: "dsa", duration: "30m", priority: "high", leetcodeId: 1, leetcodeLink: "https://leetcode.com/problems/two-sum/" },
            { id: "m1d2-8", title: "DSA: Contains Duplicate", category: "dsa", duration: "20m", priority: "high", leetcodeId: 217, leetcodeLink: "https://leetcode.com/problems/contains-duplicate/" }
        ]
    },
    {
        day: 3, month: 1,
        theme: "Buổi 3: Tối ưu kiến trúc bằng Patterns",
        focus: "theory",
        tasks: [
            { id: "m1d3-1", title: "Lý thuyết: Strategy Pattern chuyển đổi hành vi động", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d3-2", title: "⚙️ Thực hành 1: Implement Payment System đa cổng thanh toán dùng Strategy", category: "practice", duration: "40m", priority: "high" },
            { id: "m1d3-3", title: "Lý thuyết: Adapter & Decorator Pattern tích hợp legacy code", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d3-4", title: "⚙️ Thực hành 2: Dùng Decorator thêm tính năng Ghi log động cho Core Service", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d3-5", title: "Lý thuyết: Observer Pattern cho hệ thống sự kiện", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d3-6", title: "⚙️ Thực hành 3: Tạo mini Event Notification System (Pub/Sub)", category: "practice", duration: "40m", priority: "high" },
            { id: "m1d3-7", title: "DSA: Valid Anagram", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 242, leetcodeLink: "https://leetcode.com/problems/valid-anagram/" },
            { id: "m1d3-8", title: "DSA: Group Anagrams", category: "dsa", duration: "40m", priority: "high", leetcodeId: 49, leetcodeLink: "https://leetcode.com/problems/group-anagrams/" }
        ]
    },
    {
        day: 4, month: 1,
        theme: "Buổi 4: Review Kiến Trúc & Tối Ưu Code",
        focus: "review",
        tasks: [
            { id: "m1d4-1", title: "Lý thuyết: Cách nhận diện 'Code Smells' phổ biến", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d4-2", title: "⚙️ Thực hành 1: Phân tích & Tìm lỗi mảng kiến trúc trong 1 dự án mã nguồn mở", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d4-3", title: "⚙️ Thực hành 2: Refactor (Tái cấu trúc) đoạn code xấu đó dùng Design Pattern phù hợp", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d4-4", title: "Review: Quiz hệ thống hóa kiến thức OOP & SOLID (20 câu)", category: "review", duration: "30m", priority: "high" },
            { id: "m1d4-5", title: "DSA Thuật toán: Valid Sudoku", category: "dsa", duration: "45m", priority: "medium", leetcodeId: 36, leetcodeLink: "https://leetcode.com/problems/valid-sudoku/" },
            { id: "m1d4-6", title: "DSA Thuật toán: Top K Frequent Elements", category: "dsa", duration: "40m", priority: "high", leetcodeId: 347, leetcodeLink: "https://leetcode.com/problems/top-k-frequent-elements/" }
        ]
    },
    {
        day: 5, month: 1,
        theme: "Buổi 5: Đào Sâu Arrays & Hashing Tricks",
        focus: "practice",
        tasks: [
            { id: "m1d5-1", title: "Lý thuyết: Giới hạn Time/Space trong Array & Frequency Array vs HashMap", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d5-2", title: "⚙️ Thực hành: Chuyển đổi mã O(N^2) về O(N) bằng Hashing & Tracking trạng thái", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d5-3", title: "Review: Hệ thống hoá lại các pattern giải bài tập Mảng", category: "review", duration: "30m", priority: "medium" },
            { id: "m1d5-4", title: "DSA: Product of Array Except Self", category: "dsa", duration: "40m", priority: "high", leetcodeId: 238, leetcodeLink: "https://leetcode.com/problems/product-of-array-except-self/" },
            { id: "m1d5-5", title: "DSA: Longest Consecutive Sequence", category: "dsa", duration: "45m", priority: "high", leetcodeId: 128, leetcodeLink: "https://leetcode.com/problems/longest-consecutive-sequence/" },
            { id: "m1d5-6", title: "DSA: Encode and Decode Strings (Premium Leetcode/Lintcode)", category: "dsa", duration: "40m", priority: "high", leetcodeId: 271, leetcodeLink: "https://leetcode.com/problems/encode-and-decode-strings/" }
        ]
    },
    {
        day: 6, month: 1, theme: "Nghỉ ngơi giãn cơ não", focus: "review", tasks: []
    },
    {
        day: 7, month: 1, theme: "Nghỉ ngơi nạp năng lượng", focus: "review", tasks: []
    },

    // ========== TUẦN 2: Hiểu Sâu JVM & Cuộc Chiến Performance ==========
    {
        day: 8, month: 1,
        theme: "Buổi 1: JVM Memory Model & Rò Rỉ Bộ Nhớ",
        focus: "theory",
        tasks: [
            { id: "m1d8-1", title: "Lý thuyết: Kiến trúc JVM - Đấu trường Stack vs Heap", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d8-2", title: "⚙️ Thực hành 1: Cố tình viết code sinh ra StackOverflowError & Phân tích trace", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d8-3", title: "Lý thuyết: Vùng nhớ Metaspace & PC Register & Native Method", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d8-4", title: "⚙️ Thực hành 2: Dùng JVisualVM để soi heap dump một ứng dụng Hello World", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d8-5", title: "Lý thuyết: Garbage Collection Basics (Mark-and-Sweep, Phân mảnh)", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d8-6", title: "DSA Lý thuyết: Mẫu giải thuật Two Pointers (Đồng hướng & Ngược Hướng)", category: "theory", duration: "20m", priority: "high" },
            { id: "m1d8-7", title: "DSA: Two Sum II - Input Array Is Sorted", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 167, leetcodeLink: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
            { id: "m1d8-8", title: "DSA: Valid Palindrome (Two Pointers Easy)", category: "dsa", duration: "20m", priority: "medium", leetcodeId: 125, leetcodeLink: "https://leetcode.com/problems/valid-palindrome/" }
        ]
    },
    {
        day: 9, month: 1,
        theme: "Buổi 2: Sát Thủ Immutability & Pass by Value",
        focus: "theory",
        tasks: [
            { id: "m1d9-1", title: "Lý thuyết: Memory Leaks trong Java (Loại OutOfMemoryError phổ biến)", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d9-2", title: "⚙️ Thực hành 1: Mô phỏng Dò rỉ bộ nhớ (Leak) với static List và Sửa lỗi", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d9-3", title: "Lý thuyết: String Pool tối ưu tĩnh, Tính Immutability của String", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d9-4", title: "⚙️ Thực hành 2: Benchmark String concat (+) so với StringBuilder/Buffer ở 1 triệu vòng lặp", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d9-5", title: "Review: Bẫy Pass-by-value vs Reference kinh điển trong Core Java", category: "review", duration: "20m", priority: "medium" },
            { id: "m1d9-6", title: "DSA: 3Sum (Mở rộng Two Pointers)", category: "dsa", duration: "50m", priority: "high", leetcodeId: 15, leetcodeLink: "https://leetcode.com/problems/3sum/" },
            { id: "m1d9-7", title: "DSA: Container With Most Water", category: "dsa", duration: "40m", priority: "high", leetcodeId: 11, leetcodeLink: "https://leetcode.com/problems/container-with-most-water/" }
        ]
    },
    {
        day: 10, month: 1,
        theme: "Buổi 3: Danh sách Phức Tạp & Khung Trượt Cửa Sổ",
        focus: "theory",
        tasks: [
            { id: "m1d10-1", title: "Lý thuyết: Cấu trúc bên trong ArrayList & Cơ chế Growth/Resize Mảng O(N)", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d10-2", title: "⚙️ Thực hành 1: Tự viết một CustomArrayList clone behavior cơ bản", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d10-3", title: "Lý thuyết: LinkedList trade-offs, Queue & PriorityQueue", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d10-4", title: "⚙️ Thực hành 2: Triển khai LRU Cache Engine lõi bằng LinkedList & HashMap", category: "practice", duration: "50m", priority: "high" },
            { id: "m1d10-5", title: "DSA Lý thuyết: Kỹ thuật Sliding Window Cố định & Co dãn", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d10-6", title: "DSA: Best Time to Buy and Sell Stock (O(N))", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 121, leetcodeLink: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
            { id: "m1d10-7", title: "DSA: Longest Substring Without Repeating Characters", category: "dsa", duration: "45m", priority: "high", leetcodeId: 3, leetcodeLink: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" }
        ]
    },
    {
        day: 11, month: 1,
        theme: "Buổi 4: Ma Thuật Core Map/Set",
        focus: "theory",
        tasks: [
            { id: "m1d11-1", title: "Lý thuyết: Hash function, Băm và Cơ chế xử lý Hash Collision (Java 8+ TreeMap Node)", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d11-2", title: "⚙️ Thực hành 1: Đọc và phân tích trực tiếp file source code put() của HashMap Jdk", category: "practice", duration: "40m", priority: "medium" },
            { id: "m1d11-3", title: "Lý thuyết: TreeMap, TreeSet & Sức mạnh của Cây Đỏ Đen (Red-Black)", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d11-4", title: "⚙️ Thực hành 2: Dùng Comparable & Comparator để Sort mảng Object Phức hợp đa chiều", category: "practice", duration: "40m", priority: "high" },
            { id: "m1d11-5", title: "Lý thuyết: Hợp đồng bất thành văn equals() & hashCode()", category: "theory", duration: "20m", priority: "high" },
            { id: "m1d11-6", title: "⚙️ Thực hành 3: Tạo lỗi mất sạch dữ liệu Map vì Override sai equals()", category: "practice", duration: "30m", priority: "high" },
            { id: "m1d11-7", title: "DSA: Longest Repeating Character Replacement", category: "dsa", duration: "45m", priority: "high", leetcodeId: 424, leetcodeLink: "https://leetcode.com/problems/longest-repeating-character-replacement/" }
        ]
    },
    {
        day: 12, month: 1,
        theme: "Buổi 5: Thực Chiến 2 Pointers Chuyên Sâu",
        focus: "practice",
        tasks: [
            { id: "m1d12-1", title: "Lý thuyết: Kỹ thuật đếm mảng tần suất Char[256] tối ưu so với HashMap", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d12-2", title: "⚙️ Thực hành: Trực quan hoá luồng trượt của Sliding Window trên bảng trắng/console", category: "practice", duration: "30m", priority: "medium" },
            { id: "m1d12-3", title: "Review: Pattern chung của mọi bài Toán Sliding Window", category: "review", duration: "25m", priority: "high" },
            { id: "m1d12-4", title: "DSA Hard: Trapping Rain Water", category: "dsa", duration: "50m", priority: "high", leetcodeId: 42, leetcodeLink: "https://leetcode.com/problems/trapping-rain-water/" },
            { id: "m1d12-5", title: "DSA Hard: Minimum Window Substring", category: "dsa", duration: "60m", priority: "high", leetcodeId: 76, leetcodeLink: "https://leetcode.com/problems/minimum-window-substring/" },
            { id: "m1d12-6", title: "DSA: Permutation in String", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 567, leetcodeLink: "https://leetcode.com/problems/permutation-in-string/" }
        ]
    },
    {
        day: 13, month: 1, theme: "Nghỉ ngơi giãn cơ não", focus: "review", tasks: []
    },
    {
        day: 14, month: 1, theme: "Nghỉ ngơi nạp năng lượng", focus: "review", tasks: []
    },

    // ========== TUẦN 3: Generics Đa Hình & Tốc Độ Của Concurrency ==========
    {
        day: 15, month: 1,
        theme: "Buổi 1: Bí Ấn Generic Type & Linked List",
        focus: "theory",
        tasks: [
            { id: "m1d15-1", title: "Lý thuyết: Generic Type an toàn & Type Erasure (Xoá Kiểu khi Compile)", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d15-2", title: "⚙️ Thực hành 1: Dùng command javac và javap xem Type Erasure đã làm gì bytecode", category: "practice", duration: "30m", priority: "medium" },
            { id: "m1d15-3", title: "Lý thuyết: Bouncer Wildcards - PECS (Producer Extends, Consumer Super)", category: "theory", duration: "40m", priority: "high" },
            { id: "m1d15-4", title: "⚙️ Thực hành 2: Viết hệ thống Utils Class giới hạn đa hình an toàn bằng PECS", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d15-5", title: "DSA Lý thuyết: Cấu tạo Node và Cơ chế Fast-Slow Pointers trong Linked List", category: "theory", duration: "25m", priority: "medium" },
            { id: "m1d15-6", title: "DSA: Reverse Linked List (Giải bằng Iterative & Recursive)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 206, leetcodeLink: "https://leetcode.com/problems/reverse-linked-list/" },
            { id: "m1d15-7", title: "DSA: Merge Two Sorted Lists", category: "dsa", duration: "30m", priority: "high", leetcodeId: 21, leetcodeLink: "https://leetcode.com/problems/merge-two-sorted-lists/" }
        ]
    },
    {
        day: 16, month: 1,
        theme: "Buổi 2: Hỗn Loạn Đa Luồng & Tìm Kiếm Nhị Phân",
        focus: "theory",
        tasks: [
            { id: "m1d16-1", title: "Lý thuyết: Phân biệt Thread vs OS Process, Vòng đời Thread", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d16-2", title: "⚙️ Thực hành 1: 3 Cách khởi tạo Thread (Thread, Runnable, Callable Lamba)", category: "practice", duration: "30m", priority: "medium" },
            { id: "m1d16-3", title: "Lý thuyết: Tệ nạn Race Condition & Khóa 'synchronized' method vs block", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d16-4", title: "⚙️ Thực hành 2: Xây dụng Máy Đếm View bị sai kết quả và fix lại bằng Lock", category: "practice", duration: "40m", priority: "high" },
            { id: "m1d16-5", title: "DSA Lý thuyết: Tư duy Thu hẹp Không Gian với Tìm kiếm Nhị phân", category: "theory", duration: "20m", priority: "medium" },
            { id: "m1d16-6", title: "DSA: Binary Search Cơ Bản (Tìm Mid an toàn chống tràn int)", category: "dsa", duration: "20m", priority: "high", leetcodeId: 704, leetcodeLink: "https://leetcode.com/problems/binary-search/" },
            { id: "m1d16-7", title: "DSA: Find Minimum in Rotated Sorted Array", category: "dsa", duration: "40m", priority: "high", leetcodeId: 153, leetcodeLink: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" }
        ]
    },
    {
        day: 17, month: 1,
        theme: "Buổi 3: Quản Lí Lock Cứng Ngoan Cố",
        focus: "theory",
        tasks: [
            { id: "m1d17-1", title: "Lý thuyết: Lock Explicit (ReentrantLock) so găng Monitor Implicit", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d17-2", title: "⚙️ Thực hành 1: Refactor hệ thống Đếm View bằng ReentrantLock & tryLock", category: "practice", duration: "40m", priority: "high" },
            { id: "m1d17-3", title: "Lý thuyết: Từ khoá 'volatile' & Lỗi hiển thị biến đa lõi (Visibility Condition)", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d17-4", title: "⚙️ Thực hành 2: Giả lập 1 Thread rớt vào vòng lặp vô hạn vì Thread Caching (CPU L1 cache)", category: "practice", duration: "35m", priority: "medium" },
            { id: "m1d17-5", title: "Review: Checked / Unchecked Error Flow Exceptions & try-with-resources", category: "review", duration: "25m", priority: "medium" },
            { id: "m1d17-6", title: "DSA: Search in Rotated Sorted Array", category: "dsa", duration: "45m", priority: "high", leetcodeId: 33, leetcodeLink: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
            { id: "m1d17-7", title: "DSA: Linked List Cycle (Thỏ & Rùa)", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 141, leetcodeLink: "https://leetcode.com/problems/linked-list-cycle/" }
        ]
    },
    {
        day: 18, month: 1,
        theme: "Buổi 4: Stream API - Code Sang Choảnh",
        focus: "practice",
        tasks: [
            { id: "m1d18-1", title: "Lý thuyết: Tư duy Functional Declarative so với Code Vòng lặp Truyền thống", category: "theory", duration: "20m", priority: "medium" },
            { id: "m1d18-2", title: "Lý thuyết: Map, Filter, Reduce, Collect - Trái tim của Java 8 Streams API", category: "theory", duration: "35m", priority: "high" },
            { id: "m1d18-3", title: "⚙️ Thực hành 1: Xử lý dữ liệu List<User> khổng lồ sang DTO gọn gàng bằng Stream 1 Dòng", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d18-4", title: "Lý thuyết: Sự lừa dối của Parallel Stream - Nhanh hơn hay Tai hại hơn?", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d18-5", title: "⚙️ Thực hành 2: Benchmark thời gian Map xử lý Array dài 1M for loop vs parallelStream", category: "practice", duration: "40m", priority: "high" },
            { id: "m1d18-6", title: "DSA: Reorder List", category: "dsa", duration: "50m", priority: "high", leetcodeId: 143, leetcodeLink: "https://leetcode.com/problems/reorder-list/" },
            { id: "m1d18-7", title: "DSA: Remove Nth Node From End of List", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 19, leetcodeLink: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" }
        ]
    },
    {
        day: 19, month: 1,
        theme: "Buổi 5: Đỉnh cao Linked List & BS",
        focus: "practice",
        tasks: [
            { id: "m1d19-1", title: "Lý thuyết: Binary Search On Answer - Mở rộng vượt giới hạn không gian Vector", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d19-2", title: "⚙️ Thực hành: Viết Boilerplate pattern tiêu chuẩn chống lặp Binary Search", category: "practice", duration: "20m", priority: "medium" },
            { id: "m1d19-3", title: "DSA: Koko Eating Bananas (Ứng dụng BS On Answer)", category: "dsa", duration: "50m", priority: "high", leetcodeId: 875, leetcodeLink: "https://leetcode.com/problems/koko-eating-bananas/" },
            { id: "m1d19-4", title: "DSA: Merge K Sorted Lists (Hard List Pattern)", category: "dsa", duration: "50m", priority: "high", leetcodeId: 23, leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/" },
            { id: "m1d19-5", title: "DSA: Find the Duplicate Number (Biển đổi Array thành Cycle List)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 287, leetcodeLink: "https://leetcode.com/problems/find-the-duplicate-number/" },
            { id: "m1d19-6", title: "Review: Vẽ Mindmap Hệ thống hoá Các kĩ năng List và Concurrency Đã học", category: "review", duration: "45m", priority: "medium" }
        ]
    },
    {
        day: 20, month: 1, theme: "Nghỉ ngơi giãn cơ não", focus: "review", tasks: []
    },
    {
        day: 21, month: 1, theme: "Nghỉ ngơi nạp năng lượng", focus: "review", tasks: []
    },

    // ========== TUẦN 4: Dọn Cỗ System Design & Cây Lệnh Nhị Phân ==========
    {
        day: 22, month: 1,
        theme: "Buổi 1: Stack LIFO Nhớ Kí Ức & Lambda Bí Ẩn",
        focus: "theory",
        tasks: [
            { id: "m1d22-1", title: "Lý thuyết: Cơ chế Lambda dưới nắp capo (invokedynamic & SAM Interface)", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d22-2", title: "⚙️ Thực hành 1: Tự định nghĩa Annotation @FunctionalInterface & Lambda cho Callback Api", category: "practice", duration: "35m", priority: "high" },
            { id: "m1d22-3", title: "Lý thuyết: Method References (Khuôn mặt Rút gọn ::)", category: "theory", duration: "20m", priority: "medium" },
            { id: "m1d22-4", title: "⚙️ Thực hành 2: Cắt gọt toàn bộ Lambda thừa thải của 1 script Data Processor cho gọn", category: "practice", duration: "30m", priority: "medium" },
            { id: "m1d22-5", title: "DSA Lý thuyết: Cơ chế Stack trong OS & Ưu điểm giải toán Đóng/Mở", category: "theory", duration: "25m", priority: "high" },
            { id: "m1d22-6", title: "DSA: Valid Parentheses (Hello World Stack)", category: "dsa", duration: "25m", priority: "high", leetcodeId: 20, leetcodeLink: "https://leetcode.com/problems/valid-parentheses/" },
            { id: "m1d22-7", title: "DSA: Min Stack (Design Stack với thao tác getMin O(1))", category: "dsa", duration: "40m", priority: "high", leetcodeId: 155, leetcodeLink: "https://leetcode.com/problems/min-stack/" },
            { id: "m1d22-8", title: "DSA: Evaluate Reverse Polish Notation", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 150, leetcodeLink: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" }
        ]
    },
    {
        day: 23, month: 1,
        theme: "Buổi 2: Java Đỉnh Cao Mới & Kiến Trúc OOP Tree",
        focus: "theory",
        tasks: [
            { id: "m1d23-1", title: "Lý thuyết: Cú vạch mặt Java Boilerplate - Records, Sealed Classes & Pattern Matching", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d23-2", title: "⚙️ Thực hành 1: Tái sinh 1 khối class DTO/POJO cũ kĩ 200 dòng thành Record 20 dòng", category: "practice", duration: "35m", priority: "high" },
            { id: "m1d23-3", title: "Lý thuyết: Sơ lược về Virtual Threads (Loom 21) - Phá vỡ ranh giới Performance", category: "theory", duration: "30m", priority: "medium" },
            { id: "m1d23-4", title: "DSA Lý thuyết: Cấu trúc Cây Nhị Phân & Thuật Duyệt Sâu/Rộng (DFS - BFS)", category: "theory", duration: "30m", priority: "high" },
            { id: "m1d23-5", title: "⚙️ Thực hành 2: Viết thô 3 Đệ quy Pre-In-Post order tree traversal trên IDE Sandbox", category: "practice", duration: "45m", priority: "high" },
            { id: "m1d23-6", title: "DSA: Invert Binary Tree (Meme của Max Howell)", category: "dsa", duration: "20m", priority: "medium", leetcodeId: 226, leetcodeLink: "https://leetcode.com/problems/invert-binary-tree/" },
            { id: "m1d23-7", title: "DSA: Maximum Depth & Same Tree", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 104, leetcodeLink: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" }
        ]
    },
    {
        day: 24, month: 1,
        theme: "Buổi 3: Triển khai Nền Tảng Library System",
        focus: "project",
        tasks: [
            { id: "m1d24-1", title: "Lý thuyết Project: Kĩ năng Phân tách Yêu cầu Dự án Mini OOP Library", category: "project", duration: "30m", priority: "high" },
            { id: "m1d24-2", title: "⚙️ Code Project: Thiết kế Entities, Domains model chuẩn Clean Architecture", category: "project", duration: "45m", priority: "high" },
            { id: "m1d24-3", title: "⚙️ Code Project: Định hình các Interface API Service mượn/trả độc lập Data source", category: "project", duration: "45m", priority: "high" },
            { id: "m1d24-4", title: "DSA: Binary Tree Level Order Traversal (Kĩ thuật lặp Queue BFS cho Level)", category: "dsa", duration: "40m", priority: "high", leetcodeId: 102, leetcodeLink: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
            { id: "m1d24-5", title: "DSA: Diameter of Binary Tree", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 543, leetcodeLink: "https://leetcode.com/problems/diameter-of-binary-tree/" },
            { id: "m1d24-6", title: "DSA: Balanced Binary Tree", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 110, leetcodeLink: "https://leetcode.com/problems/balanced-binary-tree/" }
        ]
    },
    {
        day: 25, month: 1,
        theme: "Buổi 4: Core Engine của Library System & BST",
        focus: "project",
        tasks: [
            { id: "m1d25-1", title: "Lý thuyết Project: State Manager an toàn mà Không cần Database", category: "project", duration: "25m", priority: "medium" },
            { id: "m1d25-2", title: "⚙️ Code Project: Map kho In-Memory Mock Database tĩnh với Thread-safe ConcurrentHashMap", category: "project", duration: "45m", priority: "high" },
            { id: "m1d25-3", title: "⚙️ Code Project: Build Service Logic Check Overdue Penalty & Giới hạn Account Mượn", category: "project", duration: "50m", priority: "high" },
            { id: "m1d25-4", title: "DSA Lý thuyết: Cây Tìm Kiếm Nhị Phân (BST) - Vẻ đẹp của Sự Có Quy Trình", category: "theory", duration: "25m", priority: "high" },
            { id: "m1d25-5", title: "DSA: Lowest Common Ancestor of a BST", category: "dsa", duration: "35m", priority: "high", leetcodeId: 235, leetcodeLink: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
            { id: "m1d25-6", title: "DSA: Subtree of Another Tree", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 572, leetcodeLink: "https://leetcode.com/problems/subtree-of-another-tree/" }
        ]
    },
    {
        day: 26, month: 1,
        theme: "Buổi 5: Ngăn Xếp Đơn Điệu (Monotonic) & Chuẩn bị Level 2",
        focus: "review",
        tasks: [
            { id: "m1d26-1", title: "Lý thuyết: Sự phi phàm của Monotonic Stack (Ngăn xếp Đóng Băng Khối)", category: "theory", duration: "35m", priority: "high" },
            { id: "m1d26-2", title: "⚙️ Thực hành: Giải logic vẽ đồ thị Ngăn xếp đơn điệu bằng giấy trước khi code", category: "practice", duration: "30m", priority: "medium" },
            { id: "m1d26-3", title: "DSA: Daily Temperatures", category: "dsa", duration: "45m", priority: "high", leetcodeId: 739, leetcodeLink: "https://leetcode.com/problems/daily-temperatures/" },
            { id: "m1d26-4", title: "DSA: Binary Tree Right Side View", category: "dsa", duration: "45m", priority: "high", leetcodeId: 199, leetcodeLink: "https://leetcode.com/problems/binary-tree-right-side-view/" },
            { id: "m1d26-5", title: "DSA: Count Good Nodes in Binary Tree", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 1448, leetcodeLink: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
            { id: "m1d26-6", title: "Review: Đánh giá độ rơ và Hổng kiến thức Tháng 1 của bản thân", category: "review", duration: "30m", priority: "medium" },
            { id: "m1d26-7", title: "Review: Kick-off Roadmap Tháng 2 - Multithreading Cấp cao & Spring Boot Starter", category: "review", duration: "30m", priority: "high" }
        ]
    },
    {
        day: 27, month: 1, theme: "Nghỉ ngơi giãn cơ não", focus: "review", tasks: []
    },
    {
        day: 28, month: 1, theme: "Nghỉ ngơi nạp năng lượng", focus: "review", tasks: []
    }
];

export const month1Stats = {
    totalDays: 28,
    totalTasks: month1Plans.reduce((acc, day) => acc + day.tasks.length, 0),
    dsaTasks: month1Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'dsa').length, 0),
    theoryTasks: month1Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'theory').length, 0),
    practiceTasks: month1Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'practice').length, 0),
    projectTasks: month1Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'project').length, 0),
    reviewTasks: month1Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'review').length, 0),
};
