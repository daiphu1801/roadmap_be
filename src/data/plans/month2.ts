// ============================================
// THÁNG 2: MÃ ĐĂNG & ĐA LUỒNG + DSA TRUNG BÌNH (Graphs, Backtracking, Heaps)
// Mục tiêu: ThreadPool, Executor, Locks nâng cao, JUnit, Mockito, DP 1D
// Phương pháp: Mỗi unit lý thuyết Đa Luồng ĐỀU đi kèm 1 bài mô phỏng lỗi thực tế
// ============================================

import { DailyPlan, DailyPlanTask } from './types';

export const month2Plans: DailyPlan[] = [
    // ========== TUẦN 1: Hiểu Cặn Kẽ ThreadPool & Advanced Concurrency ==========
    {
        day: 1, month: 2,
        theme: "Buổi 1: Executor Framework & Hiệu năng Thread Pool",
        focus: "theory",
        tasks: [
            { id: "m2d1-1", title: "Lý thuyết: Điểm mù của OS Thread độc lập & Tại sao cần Pool", category: "theory", duration: "25m", priority: "high" },
            { id: "m2d1-2", title: "⚙️ Thực hành 1: Benchmark (So sánh thời gian) Manual Thread vs ThreadPool cho 10,000 requests", category: "practice", duration: "30m", priority: "high" },
            { id: "m2d1-3", title: "Lý thuyết: Cấu tạo xương sống của ThreadPoolExecutor (CoreSize, MaxSize, Queue)", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d1-4", title: "⚙️ Thực hành 2: Giả lập DDoS nhỏ ép Pool văng RejectedExecutionException", category: "practice", duration: "35m", priority: "high" },
            { id: "m2d1-5", title: "Lý thuyết: Runnable vs Callable & Trả về Tương lai (Future)", category: "theory", duration: "25m", priority: "medium" },
            { id: "m2d1-6", title: "⚙️ Thực hành 3: Tạo 3 luồng Callable fetch delay data, tổng hợp bằng Future.get()", category: "practice", duration: "40m", priority: "high" },
            { id: "m2d1-7", title: "DSA: Count Good Nodes in Binary Tree", category: "dsa", duration: "35m", priority: "high", leetcodeId: 1448, leetcodeLink: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/" },
            { id: "m2d1-8", title: "DSA: Validate Binary Search Tree", category: "dsa", duration: "35m", priority: "high", leetcodeId: 98, leetcodeLink: "https://leetcode.com/problems/validate-binary-search-tree/" }
        ]
    },
    {
        day: 2, month: 2,
        theme: "Buổi 2: CompletableFuture & Cấu trúc Tập hợp Đồng bộ (Concurrent Collections)",
        focus: "theory",
        tasks: [
            { id: "m2d2-1", title: "Lý thuyết: Hạn chế tắt nghẽn của Future.get() & Sức mạnh Non-blocking CompletableFuture", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d2-2", title: "⚙️ Thực hành 1: Chuỗi nối Pipeline bất đồng bộ với thenApply(), thenCombine()", category: "practice", duration: "40m", priority: "high" },
            { id: "m2d2-3", title: "Lý thuyết: Cơ chế sụp đổ của HashMap thông thường dưới trướng Multi-threading", category: "theory", duration: "25m", priority: "high" },
            { id: "m2d2-4", title: "⚙️ Thực hành 2: Ép xung put() trên HashMap bằng 50 luồng để sinh lỗi lặp vô hạn / hất dữ liệu", category: "practice", duration: "30m", priority: "medium" },
            { id: "m2d2-5", title: "Lý thuyết: ConcurrentHashMap (CAS Node) vs Collections.synchronizedMap()", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d2-6", title: "⚙️ Thực hành 3: Vượt qua ConcurrentModificationException bằng CopyOnWriteArrayList", category: "practice", duration: "30m", priority: "high" },
            { id: "m2d2-7", title: "DSA: Kth Smallest Element in a BST", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 230, leetcodeLink: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
            { id: "m2d2-8", title: "DSA: Binary Tree Maximum Path Sum (Hard)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 124, leetcodeLink: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" }
        ]
    },
    {
        day: 3, month: 2,
        theme: "Buổi 3: BlockingQueue, Compare-And-Swap & Kháng Race-Condition",
        focus: "theory",
        tasks: [
            { id: "m2d3-1", title: "Lý thuyết: Pattern kinh điển Ngành IT - Producer-Consumer bằng BlockingQueue", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d3-2", title: "⚙️ Thực hành 1: Xây dựng Worker Điều phối Message phân tách Sản Xuất & Chế Biến", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d3-3", title: "Lý thuyết: Khai mở Kỹ thuật CAS (Compare-and-Swap) Cấp Độ CPU Non-blocking", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d3-4", title: "⚙️ Thực hành 2: Giải bài toán Đếm PageView đa luồng bằng AtomicInteger cực nhanh", category: "practice", duration: "25m", priority: "medium" },
            { id: "m2d3-5", title: "Lý thuyết: Cách Atomic Objects Wrap Data (Reference/Boolean) an toàn lock-free", category: "theory", duration: "25m", priority: "medium" },
            { id: "m2d3-6", title: "⚙️ Thực hành 3: Xây dựng SpinLock do-while tay thủ công bằng AtomicReference", category: "practice", duration: "30m", priority: "high" },
            { id: "m2d3-7", title: "DSA: Construct Binary Tree from Preorder and Inorder Traversal", category: "dsa", duration: "50m", priority: "high", leetcodeId: 105, leetcodeLink: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
            { id: "m2d3-8", title: "DSA: Serialize and Deserialize Binary Tree", category: "dsa", duration: "50m", priority: "high", leetcodeId: 297, leetcodeLink: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" }
        ]
    },
    {
        day: 4, month: 2,
        theme: "Buổi 4: Khơi mào Trie (Prefix Tree) & Tóm Lược Cơ Sở Concurrency",
        focus: "practice",
        tasks: [
            { id: "m2d4-1", title: "Lý thuyết: Cấu trúc Trie - Khắc tinh của Bài Tập Tìm Kiếm Chuỗi Hậu Tố/Tiền Tố", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d4-2", title: "⚙️ Thực hành 1: Tự implement Map<Character, TrieNode> thủ công không dùng Leetcode", category: "practice", duration: "30m", priority: "medium" },
            { id: "m2d4-3", title: "Review: Checkpoint Ôn tập Tính Vận Hành của Queue, Pools, Futures căn bản", category: "review", duration: "25m", priority: "high" },
            { id: "m2d4-4", title: "⚙️ Thực hành 2: Debug một hệ thống Thread bị treo cứng (Hung thread problem)", category: "practice", duration: "40m", priority: "high" },
            { id: "m2d4-5", title: "DSA Lý thuyết: Tối ưu Không Gian cho Trie (Radix Tree)", category: "theory", duration: "20m", priority: "medium" },
            { id: "m2d4-6", title: "DSA: Implement Trie (Prefix Tree)", category: "dsa", duration: "35m", priority: "high", leetcodeId: 208, leetcodeLink: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
            { id: "m2d4-7", title: "DSA: Design Add and Search Words Data Structure", category: "dsa", duration: "45m", priority: "high", leetcodeId: 211, leetcodeLink: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" }
        ]
    },
    {
        day: 5, month: 2,
        theme: "Buổi 5: Trie Hard & Tổng kết Tree",
        focus: "review",
        tasks: [
            { id: "m2d5-1", title: "Lý thuyết: Ghép nối Trie + Backtracking (DFS) trên một Ma Trận để vét cạn Chữ cái", category: "theory", duration: "25m", priority: "high" },
            { id: "m2d5-2", title: "⚙️ Thực hành: Vẽ Map Tree cho Bài toán Word Search cực khó để nắm chiến lược duyệt", category: "practice", duration: "40m", priority: "high" },
            { id: "m2d5-3", title: "DSA: Word Search II (Trie + DFS Bảng Chữ Cái Mở Khóa Đỉnh Cao)", category: "dsa", duration: "60m", priority: "high", leetcodeId: 212, leetcodeLink: "https://leetcode.com/problems/word-search-ii/" },
            { id: "m2d5-4", title: "DSA: Khởi động - Củng cố Tree thông qua Lowest Common Ancestor / Subtree", category: "dsa", duration: "30m", priority: "medium" },
            { id: "m2d5-5", title: "Review: Hệ thống so sánh tốc độ Hash, ConcurrentHash, HashTable", category: "review", duration: "30m", priority: "medium" },
            { id: "m2d5-6", title: "Review: Hoàn tất trắc nghiệm Tránh Livelock & Ám Ảnh Thread", category: "review", duration: "25m", priority: "medium" }
        ]
    },
    {
        day: 6, month: 2, theme: "Nghỉ ngơi / Tự do", focus: "review", tasks: []
    },
    {
        day: 7, month: 2, theme: "Nghỉ ngơi / Tự do", focus: "review", tasks: []
    },

    // ========== TUẦN 2: Project Concurrency, Semaphore & Heaps Nền Tảng ==========
    {
        day: 8, month: 2,
        theme: "Buổi 1: Project Booking Multi-Thread & Nhập môn Heap",
        focus: "project",
        tasks: [
            { id: "m2d8-1", title: "Project Theory: Thiết kế Hệ thống Đặt Vé Online Chống Trùng (Booking Entities & Slots)", category: "project", duration: "30m", priority: "high" },
            { id: "m2d8-2", title: "⚙️ Project Code: Tạo Mô hình Dịch vụ (Không xài CSDL) - 1 Slot / 1000 Người Đặt Giao Thức", category: "project", duration: "35m", priority: "high" },
            { id: "m2d8-3", title: "⚙️ Project Lỗi: Kích hoạt Overbooking Data (Bán chênh 100 vé) hiển thị bằng Log Tự Viết", category: "project", duration: "35m", priority: "high" },
            { id: "m2d8-4", title: "Project Theory: Phương hướng @Version (Khoá Lạc Quan - Optimistic Locking) Bề Nổi", category: "theory", duration: "20m", priority: "high" },
            { id: "m2d8-5", title: "⚙️ Project Xử Lí: Code chặn Overbook bằng Exception văng ra liên tục", category: "practice", duration: "25m", priority: "high" },
            { id: "m2d8-6", title: "DSA Lý thuyết: Cây Đống (Binary Heap - Max/Min Heap) trong Hàng Đợi Ưu Tiên JAVA", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d8-7", title: "DSA: Kth Largest Element in a Stream", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 703, leetcodeLink: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
            { id: "m2d8-8", title: "DSA: Last Stone Weight", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 1046, leetcodeLink: "https://leetcode.com/problems/last-stone-weight/" }
        ]
    },
    {
        day: 9, month: 2,
        theme: "Buổi 2: Khoá Cứng Pessimistic & CountDownLatch Đồng Bộ",
        focus: "project",
        tasks: [
            { id: "m2d9-1", title: "Lý thuyết: Nỗ lực lãng phí của Optimistic Lock khi Tỉ lệ Tranh chấp cực khủng", category: "theory", duration: "20m", priority: "high" },
            { id: "m2d9-2", title: "⚙️ Thực hành 1: Sửa Project Booking Lock sang dùng ReentrantLock (Tuyệt đổi không lố vé, Không lỗi)", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d9-3", title: "Lý thuyết: Kĩ nghệ Đợi Xong - CountDownLatch & CyclicBarrier", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d9-4", title: "⚙️ Thực hành 2: Yêu cầu Thread gửi vé phải ĐỢI xong tiến trình Thanh Toán và Hoá Đơn qua Latch", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d9-5", title: "DSA Lý thuyết: Tự Custom Comparator trong Priority Queue", category: "theory", duration: "20m", priority: "medium" },
            { id: "m2d9-6", title: "DSA: K Closest Points to Origin", category: "dsa", duration: "35m", priority: "high", leetcodeId: 973, leetcodeLink: "https://leetcode.com/problems/k-closest-points-to-origin/" },
            { id: "m2d9-7", title: "DSA: Top K Frequent Elements", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 347, leetcodeLink: "https://leetcode.com/problems/top-k-frequent-elements/" }
        ]
    },
    {
        day: 10, month: 2,
        theme: "Buổi 3: Người Gác Cửa Semaphore & Mảnh Kí Ức Thread",
        focus: "theory",
        tasks: [
            { id: "m2d10-1", title: "Lý thuyết: Semaphore - Áp dụng cơ chế Thẻ Phiếu Giới Hạn Limit", category: "theory", duration: "25m", priority: "high" },
            { id: "m2d10-2", title: "⚙️ Thực hành 1: Simulate Connection Pool CSDL tối đa 5 luồng cho 100 User Bằng Sempahore", category: "practice", duration: "40m", priority: "high" },
            { id: "m2d10-3", title: "Lý thuyết: Sự kì diệu của ThreadLocal lưu trữ bộ nhớ riêng cho Từng Yêu cầu", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d10-4", title: "⚙️ Thực hành 2: Thiết lập UserContext Holder gán JWT/Mã Request xài 1 lần bằng ThreadLocal", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d10-5", title: "Project Review: Đóng Gói API Booking Đa Luồng Toàn Ký", category: "review", duration: "25m", priority: "medium" },
            { id: "m2d10-6", title: "DSA: Kth Largest Element in an Array", category: "dsa", duration: "30m", priority: "high", leetcodeId: 215, leetcodeLink: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
            { id: "m2d10-7", title: "DSA: Task Scheduler", category: "dsa", duration: "45m", priority: "medium", leetcodeId: 621, leetcodeLink: "https://leetcode.com/problems/task-scheduler/" }
        ]
    },
    {
        day: 11, month: 2,
        theme: "Buổi 4: Đóng Code Project & Median Đỉnh Cao",
        focus: "practice",
        tasks: [
            { id: "m2d11-1", title: "Lý thuyết: Bẫy UncaughtException làm crash Server ngầm", category: "theory", duration: "20m", priority: "high" },
            { id: "m2d11-2", title: "⚙️ Thực hành 1: Wrap Exception bằng ThreadFactory & Đặt tên Thread Pool Cho Dễ Khám Nghiệm", category: "practice", duration: "30m", priority: "high" },
            { id: "m2d11-3", title: "Project: Xây dựng System Báo cáo Check vé Cuối JMH Benchmark System Throughput", category: "project", duration: "45m", priority: "medium" },
            { id: "m2d11-4", title: "DSA Lý thuyết: Khi bài toán luồng thời gian thực xuất hiện Data Stream vô biên", category: "theory", duration: "25m", priority: "medium" },
            { id: "m2d11-5", title: "DSA Hard: Find Median from Data Stream (Kĩ Thuật Max-Min Dual Heap Định Vị Giữa)", category: "dsa", duration: "60m", priority: "high", leetcodeId: 295, leetcodeLink: "https://leetcode.com/problems/find-median-from-data-stream/" },
            { id: "m2d11-6", title: "Review: Vẽ Tình Trang Heap/Memory Mapping Sau Các Task Khủng", category: "review", duration: "25m", priority: "medium" }
        ]
    },
    {
        day: 12, month: 2,
        theme: "Buổi 5 (Nâng cao): Fork/Join Phân rã dữ liệu Lớn",
        focus: "theory",
        tasks: [
            { id: "m2d12-1", title: "Lý thuyết: Thuật toán Divide and Conquer (Chia để Trị) trong CPU thông qua Fork/Join", category: "theory", duration: "35m", priority: "high" },
            { id: "m2d12-2", title: "Lý thuyết bổ sung: Ăn Cắp Việc Làm (Work-Stealing) Algorithm để tối đa hoá Thread rảnh rỗi", category: "theory", duration: "25m", priority: "medium" },
            { id: "m2d12-3", title: "⚙️ Thực hành: Viết 1 thuật phân luồng đọc File 2GB cắt nửa thành RecursiveTask để Parse cực nhanh", category: "practice", duration: "60m", priority: "high" },
            { id: "m2d12-4", title: "Review Tổng: Sơ đồ hoá TẤT CẢ TỪ KHOÁ Concurrency", category: "review", duration: "30m", priority: "medium" },
            { id: "m2d12-5", title: "DSA Review: Merge K Sorted Lists BẰNG CÁCH GỌI PRIORITY QUEUE", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 23, leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/" },
            { id: "m2d12-6", title: "DSA: Reorganize String (Heap/Greedy Medium)", category: "dsa", duration: "40m", priority: "high", leetcodeId: 767, leetcodeLink: "https://leetcode.com/problems/reorganize-string/" }
        ]
    },
    {
        day: 13, month: 2, theme: "Nghỉ ngơi giãn cơ não", focus: "review", tasks: []
    },
    {
        day: 14, month: 2, theme: "Nghỉ ngơi nạp năng lượng", focus: "review", tasks: []
    },

    // ========== TUẦN 3: Đỉnh Cao Testing Code / Gỡ Lỗi & Graphs (Đồ thị) ==========
    {
        day: 15, month: 2,
        theme: "Buổi 1: Spring Boot Unit Testing Nền & Backtracking Core",
        focus: "practice",
        tasks: [
            { id: "m2d15-1", title: "Lý thuyết: Nền tảng TDD/BDD & Khác Biệt Unit Test vs Integration Tests", category: "theory", duration: "25m", priority: "high" },
            { id: "m2d15-2", title: "⚙️ Thực hành 1: Cấu trúc cơ bản JUnit 5 (@BeforeEach, @Test, AssertJ Chuyên nghiệp)", category: "practice", duration: "35m", priority: "high" },
            { id: "m2d15-3", title: "Lý thuyết: Khái niệm Cắt Nhánh Database bằng Mockito (Mock, Spy, Stub)", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d15-4", title: "⚙️ Thực hành 2: Cô lập Tầng DB, giả lập Kết Quả hàm với @Mock, thenReturn() cho Service Booking", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d15-5", title: "DSA Lý thuyết: Triết lý Giải Thuật Quay Lui (Backtracking) với Select - DFS - Undo", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d15-6", title: "DSA: Combinations", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 77, leetcodeLink: "https://leetcode.com/problems/combinations/" },
            { id: "m2d15-7", title: "DSA: Subsets", category: "dsa", duration: "30m", priority: "high", leetcodeId: 78, leetcodeLink: "https://leetcode.com/problems/subsets/" }
        ]
    },
    {
        day: 16, month: 2,
        theme: "Buổi 2: Test Tham Số, Test Mù Kì Dị & Backtracking 2",
        focus: "practice",
        tasks: [
            { id: "m2d16-1", title: "Lý thuyết: Kĩ Thuật Nén Code Parameterized Test quét chục biên Edge-case Tự động", category: "theory", duration: "20m", priority: "high" },
            { id: "m2d16-2", title: "⚙️ Thực hành 1: Test Logic Kiểm duyệt Độ Tuổi/Tồn Số qua nguồn CSV (@CsvSource)", category: "practice", duration: "40m", priority: "high" },
            { id: "m2d16-3", title: "Lý thuyết: Tại sao Lệnh Assert kinh điển thất bại khi Test Thread Pool/Bất Đồng Bộ?", category: "theory", duration: "25m", priority: "high" },
            { id: "m2d16-4", title: "⚙️ Thực hành 2: Áp dụng thư viện Siêu cường Awaitility để Tóm Tiến trình", category: "practice", duration: "40m", priority: "medium" },
            { id: "m2d16-5", title: "DSA: Permutations", category: "dsa", duration: "35m", priority: "high", leetcodeId: 46, leetcodeLink: "https://leetcode.com/problems/permutations/" },
            { id: "m2d16-6", title: "DSA: Combination Sum", category: "dsa", duration: "35m", priority: "high", leetcodeId: 39, leetcodeLink: "https://leetcode.com/problems/combination-sum/" },
            { id: "m2d16-7", title: "DSA: Combination Sum II", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 40, leetcodeLink: "https://leetcode.com/problems/combination-sum-ii/" }
        ]
    },
    {
        day: 17, month: 2,
        theme: "Buổi 3: IntelliJ Kẻ Đào Lỗi Lõi & Nhập Môn Ma Trận Graph",
        focus: "practice",
        tasks: [
            { id: "m2d17-1", title: "Lý thuyết: Ngừng xài System.out.println() - Sức mạnh Conditional BreakPoint IntelliJ", category: "theory", duration: "25m", priority: "high" },
            { id: "m2d17-2", title: "⚙️ Thực hành 1: Đổi mã logic nóng khi Ứng Dụng Nửa Chạy Nửa Dừng với Evaluate Expression", category: "practice", duration: "35m", priority: "medium" },
            { id: "m2d17-3", title: "Lý thuyết: Phân tích File Thread Dump (Căn cước của Deadlock) từ jstack OS", category: "theory", duration: "35m", priority: "high" },
            { id: "m2d17-4", title: "⚙️ Thực hành 2: Bơm Code Cố Tình gây Livelock Ngã Khụy Server - Tải file dump và Phân tích dòng Code Lỗi", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d17-5", title: "DSA Lý thuyết: Ma Trận Tuyết Tính Đồ Thị & Adjacency List (Biểu Cảnh)", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d17-6", title: "DSA: Number of Islands (Làm quen Graph Ma trận Đơn Kênh)", category: "dsa", duration: "40m", priority: "high", leetcodeId: 200, leetcodeLink: "https://leetcode.com/problems/number-of-islands/" },
            { id: "m2d17-7", title: "DSA: Max Area of Island", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 695, leetcodeLink: "https://leetcode.com/problems/max-area-of-island/" }
        ]
    },
    {
        day: 18, month: 2,
        theme: "Buổi 4: Graph Nâng Cao & Tấn Công Độ Phủ",
        focus: "practice",
        tasks: [
            { id: "m2d18-1", title: "Lý thuyết: Hệ Đo Lường Code Coverage - Bội Số JaCoCo", category: "theory", duration: "25m", priority: "high" },
            { id: "m2d18-2", title: "⚙️ Thực hành 1: Run JaCoCo Test suite trên Project tháng -> Đánh dấu Vạch lỗi nhánh If chưa test tới", category: "practice", duration: "40m", priority: "high" },
            { id: "m2d18-3", title: "Lý thuyết: Tổng quát Tư duy Cognitive Complexity Khuyên Dùng Bởi SonarQube", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d18-4", title: "Review: Rút gọn Hàm Khổng Lồ xuống Điểm Complexity Xanh", category: "review", duration: "35m", priority: "medium" },
            { id: "m2d18-5", title: "DSA Lý thuyết: Nắm Được Đảo Graph Dưới Biển Mảng Mở Rộng - Chìa Khoá Arrays Khác Node Object", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d18-6", title: "DSA: Clone Graph (Đồ Thị Khép Kín Rời)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 133, leetcodeLink: "https://leetcode.com/problems/clone-graph/" },
            { id: "m2d18-7", title: "DSA: Pacific Atlantic Water Flow", category: "dsa", duration: "50m", priority: "medium", leetcodeId: 417, leetcodeLink: "https://leetcode.com/problems/pacific-atlantic-water-flow/" }
        ]
    },
    {
        day: 19, month: 2,
        theme: "Buổi 5: Topological Sort (Kahn's Algo) & Quét Tuần",
        focus: "practice",
        tasks: [
            { id: "m2d19-1", title: "Lý thuyết: Ý Nghĩa Thâm Sâu Topological Sorting - Nút Nào Phải Định Hình Trước Mới Ra Luồng", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d19-2", title: "⚙️ Thực hành: Mô phỏng Bằng List Giả lập Thuật Toán KAHN'S (Mảng Bậc Vào Định Tuyến)", category: "practice", duration: "40m", priority: "high" },
            { id: "m2d19-3", title: "DSA: Course Schedule (Kiểm Tra Chu Trình Ràng Buộc)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 207, leetcodeLink: "https://leetcode.com/problems/course-schedule/" },
            { id: "m2d19-4", title: "DSA: Course Schedule II (Output Lộ Trình - Bằng DFS/Kahn)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 210, leetcodeLink: "https://leetcode.com/problems/course-schedule-ii/" },
            { id: "m2d19-5", title: "Review: Quiz Tổng Quát Biển Đồ Mô Hình Đồ Thị (Khi Bfs Khi Dfs)", category: "review", duration: "30m", priority: "high" },
            { id: "m2d19-6", title: "Review: Draw Workflow Khung Test Case Căn Bản Một Doanh Nghiệp Cần", category: "review", duration: "30m", priority: "medium" }
        ]
    },
    {
        day: 20, month: 2, theme: "Nghỉ ngơi giãn cơ não", focus: "review", tasks: []
    },
    {
        day: 21, month: 2, theme: "Nghỉ ngơi nạp năng lượng", focus: "review", tasks: []
    },

    // ========== TUẦN 4: SLF4J (Log Lõi), Loom 21, Chuyên đề Dynamic Quy Hoạch Động 1D ==========
    {
        day: 22, month: 2,
        theme: "Buổi 1: Nghiệp Vụ Log Chuẩn Backend & Bước Đi Đầu DP",
        focus: "practice",
        tasks: [
            { id: "m2d22-1", title: "Lý thuyết: Từ giã Console. Bức Tranh Logback / Log4j / SLF4J Interface Framework", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d22-2", title: "⚙️ Thực hành 1: Khai báo Log XML cắt File Theo Ngày (RollingFileAppender) và chặn File Error Tách Biên", category: "practice", duration: "40m", priority: "high" },
            { id: "m2d22-3", title: "Lý thuyết: Mapped Diagnostic Context (MDC) Tách rạch Request Đa luồng Web Của Spring", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d22-4", title: "⚙️ Thực hành 2: Tạo Interceptor gắn Transaction UUID Cho Mọi Request và Nhìn Vết Flow Log", category: "practice", duration: "45m", priority: "high" },
            { id: "m2d22-5", title: "DSA Lý thuyết: Quy Hoạch Động (DP) Gọi Tên Hàm Transition State - Top Down vs Bottom Up", category: "theory", duration: "30m", priority: "medium" },
            { id: "m2d22-6", title: "DSA: Climbing Stairs", category: "dsa", duration: "20m", priority: "high", leetcodeId: 70, leetcodeLink: "https://leetcode.com/problems/climbing-stairs/" },
            { id: "m2d22-7", title: "DSA: Min Cost Climbing Stairs", category: "dsa", duration: "30m", priority: "high", leetcodeId: 746, leetcodeLink: "https://leetcode.com/problems/min-cost-climbing-stairs/" }
        ]
    },
    {
        day: 23, month: 2,
        theme: "Buổi 2: Tương Lai Concurrency Virtual Threads & Khắc Thể DP Đơn",
        focus: "theory",
        tasks: [
            { id: "m2d23-1", title: "Lý thuyết: Lỗ hỏng mô hình Blocking I/O Web Tới Cơn Ác Mộng Callback Hell Reactor", category: "theory", duration: "35m", priority: "high" },
            { id: "m2d23-2", title: "Lý thuyết: Lối Cứu Cánh Java 21 - Project Loom (Virtual Threads Định Tuyến Mount/Unmount)", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d23-3", title: "⚙️ Thực hành 1: Thiết lập cờ Compiler JDK 21+ , Mở vòng lặp Tạo Điên Cuồng 1 Triệu Virtual Luồng Cùng Lúc", category: "practice", duration: "40m", priority: "high" },
            { id: "m2d23-4", title: "⚙️ Thực hành 2: Thay thế Executor cũ bằng StructuredTaskScope quản lí Lỗi Luồng Mới", category: "practice", duration: "35m", priority: "medium" },
            { id: "m2d23-5", title: "DSA Lý thuyết: Trạng Thái Độc Lập Trọng Tâm Trong Phương Trình DP 1 Chiều Kế Vị", category: "theory", duration: "20m", priority: "medium" },
            { id: "m2d23-6", title: "DSA: House Robber", category: "dsa", duration: "30m", priority: "high", leetcodeId: 198, leetcodeLink: "https://leetcode.com/problems/house-robber/" },
            { id: "m2d23-7", title: "DSA: House Robber II", category: "dsa", duration: "40m", priority: "high", leetcodeId: 213, leetcodeLink: "https://leetcode.com/problems/house-robber-ii/" }
        ]
    },
    {
        day: 24, month: 2,
        theme: "Buổi 3: Lướt DP 1D & JVM Memory Tuning Sơ Cấp",
        focus: "practice",
        tasks: [
            { id: "m2d24-1", title: "Lý thuyết: Nắm Được Thông Số Hệ Thống Cơ Bản Của JVM Params Server Xmx (-Xmx -Xms)", category: "theory", duration: "30m", priority: "high" },
            { id: "m2d24-2", title: "⚙️ Thực hành 1: VisualVM Chart Dọn Rác PermGen GC Kích Cầu Tự GC Khi Lắp Lỗi Code", category: "practice", duration: "40m", priority: "medium" },
            { id: "m2d24-3", title: "DSA Luyện Đề: Giải Thích Hàng Lớp Code Cho DP Cả Trên Board Trước Khi Test", category: "theory", duration: "25m", priority: "high" },
            { id: "m2d24-4", title: "DSA: Decode Ways", category: "dsa", duration: "45m", priority: "high", leetcodeId: 91, leetcodeLink: "https://leetcode.com/problems/decode-ways/" },
            { id: "m2d24-5", title: "DSA: Coin Change (Knapsack Biến Thể Rút Cạn)", category: "dsa", duration: "50m", priority: "high", leetcodeId: 322, leetcodeLink: "https://leetcode.com/problems/coin-change/" },
            { id: "m2d24-6", title: "DSA: Word Break", category: "dsa", duration: "50m", priority: "high", leetcodeId: 139, leetcodeLink: "https://leetcode.com/problems/word-break/" }
        ]
    },
    {
        day: 25, month: 2,
        theme: "Buổi 4: Phỏng Vấn Backend Tới Bến & DP Sợi Mảnh",
        focus: "review",
        tasks: [
            { id: "m2d25-1", title: "Review Interview: Lập Luận Sự Bất Lợi Của Node.js & Go Trong Memory Bằng Lợi Thế Của ConcurrentHashMap/Locks Đã Học", category: "review", duration: "35m", priority: "high" },
            { id: "m2d25-2", title: "Review Interview: Microservices sẽ Load Balance Đồng Bộ Trạng Thái Biến Khóa Cứng (Lock Node) Như Thế Nào?", category: "review", duration: "35m", priority: "high" },
            { id: "m2d25-3", title: "⚙️ Thực hành: Mock Interview với Đối Tác (Bằng Lệnh Voice GPT) Mạch Rời Thuật Giải JVM", category: "practice", duration: "30m", priority: "medium" },
            { id: "m2d25-4", title: "DSA: Longest Palindromic Substring (DP 2D nén hoặc Manacher Thống Trị)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 5, leetcodeLink: "https://leetcode.com/problems/longest-palindromic-substring/" },
            { id: "m2d25-5", title: "DSA: Palindromic Substrings", category: "dsa", duration: "40m", priority: "high", leetcodeId: 647, leetcodeLink: "https://leetcode.com/problems/palindromic-substrings/" },
            { id: "m2d25-6", title: "Review Graph Core: Mapping Node BFS VS DFS Bằng Mắt Trên Tờ Giấy Trắng Lại Cấu Trúc Khác", category: "review", duration: "30m", priority: "medium" }
        ]
    },
    {
        day: 26, month: 2,
        theme: "Buổi 5: Thắng Cuộc Đa Luồng Đỉnh Đạt - Chuẩn Bị Tàn Cục RDBMS",
        focus: "review",
        tasks: [
            { id: "m2d26-1", title: "Review Hành Trình: Viết ra Note Lợi Điểm của CountDownLatch Kẹp Semaphore Dành Cho API Giao Dịch", category: "review", duration: "30m", priority: "high" },
            { id: "m2d26-2", title: "Review Mã Đăng: Sự Hiện Đại JUnit, Mockito Xâm Nhập Mã Nguồn Backend Của Công Ty Lớn (Mộc Mạc To)", category: "review", duration: "30m", priority: "medium" },
            { id: "m2d26-3", title: "Lý thuyết Mở Đường: Lệnh RabbitMQ vs Luồng Queue Nội tại Java Memory Lúc Nào Dùng Nào", category: "theory", duration: "25m", priority: "high" },
            { id: "m2d26-4", title: "DSA: Maximum Product Subarray (Khó - Phức Tượng Về Âm Dương / Trick DP Mảng X)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 152, leetcodeLink: "https://leetcode.com/problems/maximum-product-subarray/" },
            { id: "m2d26-5", title: "Sẵn Sàng Hệ Thống Máy Chủ Thiết Kế - Giới Thiệu Chặng Mốc Database / ACID Cơ Bản Tháng 3 Rực Rỡ", category: "review", duration: "30m", priority: "high" }
        ]
    },
    {
        day: 27, month: 2, theme: "Nghỉ ngơi giãn cơ não", focus: "review", tasks: []
    },
    {
        day: 28, month: 2, theme: "Nghỉ ngơi nạp năng lượng", focus: "review", tasks: []
    }
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
