// ============================================
// THÁNG 3: ĐÁY BIỂN SÂU CỦA RDBMS & CACHE NODE CƠ BẢN
// Mục tiêu: PostgreSQL, Isolation, Deadlocks, SQL Tuning, Flyway, NoSQL/Redis
// Định mức: 6-8 micro-tasks/ngày (Lý thuyết đi liền Thực hành Console/JPA)
// ============================================

import { DailyPlan, DailyPlanTask } from './types';

export const month3Plans: DailyPlan[] = [
    // ========== TUẦN 1: Từ SQL Cơ Bản đến Khắc Tinh Chậm Chạp (Performance Index) ==========
    {
        day: 1, month: 3,
        theme: "Buổi 1: RDBMS Cơ Bản & JOIN Bí Ẩn",
        focus: "theory",
        tasks: [
            { id: "m3d1-1", title: "Lý thuyết: Nền tảng Quan hệ CSDL & Các loại Khoá (PK, FK, Composite)", category: "theory", duration: "25m", priority: "high" },
            { id: "m3d1-2", title: "⚙️ Thực hành 1: Setup Docker Compose pull Image Postgres 16 up siêu tốc", category: "practice", duration: "30m", priority: "high" },
            { id: "m3d1-3", title: "Lý thuyết: Phẫu tích sức mạnh 6 loại JOIN (INNER, LEFT/RIGHT, FULL, CROSS, SELF)", category: "theory", duration: "35m", priority: "high" },
            { id: "m3d1-4", title: "⚙️ Thực hành 2: Sinh 10,000 dòng Data mẫu Book/Author và Query JOIN gom Data", category: "practice", duration: "40m", priority: "high" },
            { id: "m3d1-5", title: "Lý thuyết: Aggregate Filter (WHERE vs HAVING) - Khi nào Tối Đa Ngược", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d1-6", title: "DSA Lý thuyết: Khởi động Dynamic Programming 1 Chiều bằng Mảng nhớ (Memoization)", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d1-7", title: "DSA: Maximum Product Subarray (Hard 1D)", category: "dsa", duration: "40m", priority: "high", leetcodeId: 152, leetcodeLink: "https://leetcode.com/problems/maximum-product-subarray/" },
            { id: "m3d1-8", title: "DSA: Word Break (1D DP Array Check)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 139, leetcodeLink: "https://leetcode.com/problems/word-break/" }
        ]
    },
    {
        day: 2, month: 3,
        theme: "Buổi 2: Các Thiết Kế Truy Vấn Cấp Cao",
        focus: "practice",
        tasks: [
            { id: "m3d2-1", title: "Lý thuyết: Correlated vs Non-Correlated Subqueries - Tại sao Truy Vấn Phụ Lại Kém?", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d2-2", title: "⚙️ Thực hành 1: Refactor Truy vấn lồng vòng lặp (O(N^2)) sang JOIN (O(N LogN))", category: "practice", duration: "35m", priority: "high" },
            { id: "m3d2-3", title: "Lý thuyết: Hàm Cửa Sổ (Window Functions - OVER, PARTITION BY, RANK)", category: "theory", duration: "35m", priority: "medium" },
            { id: "m3d2-4", title: "⚙️ Thực hành 2: Viết Query tìm ra Top 3 User Mua Hàng Cao Nhất Mỗi Tháng P1", category: "practice", duration: "45m", priority: "medium" },
            { id: "m3d2-5", title: "Review: Vẽ Entity Relationship Diagram (ERD) bằng DBDesigner cho bài toán Booking", category: "review", duration: "30m", priority: "high" },
            { id: "m3d2-6", title: "DSA: Longest Increasing Subsequence (O(N^2) Basis)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 300, leetcodeLink: "https://leetcode.com/problems/longest-increasing-subsequence/" },
            { id: "m3d2-7", title: "DSA: Unique Paths (Học Toạ Độ Cờ DP)", category: "dsa", duration: "30m", priority: "high", leetcodeId: 62, leetcodeLink: "https://leetcode.com/problems/unique-paths/" }
        ]
    },
    {
        day: 3, month: 3,
        theme: "Buổi 3: Đứt Gãy Động Cơ - Indexes (B-Tree)",
        focus: "theory",
        tasks: [
            { id: "m3d3-1", title: "Lý thuyết: Tại sao Dữ liệu Lớn Query chậm? Full Table Scan là gì?", category: "theory", duration: "25m", priority: "high" },
            { id: "m3d3-2", title: "Lý thuyết: Cấu trúc Index B-Tree - Vị Cứu Tinh (O(Log N)) so với Array/Hash Index", category: "theory", duration: "35m", priority: "high" },
            { id: "m3d3-3", title: "⚙️ Thực hành 1: Sinh bảng 1 triệu Rows PSQL. Tìm kiếm thô KHÔNG INDEX xem tốn bao nhiêu MS", category: "practice", duration: "30m", priority: "high" },
            { id: "m3d3-4", title: "⚙️ Thực hành 2: CREATE INDEX. Bắn lại Query và đo đạc lại tốc độ Xuyên Không", category: "practice", duration: "30m", priority: "high" },
            { id: "m3d3-5", title: "Lý thuyết: Composite Index (Chỉ mục kép) và Sai lầm Left-Most Prefix", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d3-6", title: "⚙️ Thực hành 3: Tạo Index (A, B) nhưng Query (B, A) để xem Bộ tối ưu DB tự xoay sở ntn", category: "practice", duration: "35m", priority: "high" },
            { id: "m3d3-7", title: "DSA: Longest Common Subsequence (DP 2D Intro)", category: "dsa", duration: "40m", priority: "high", leetcodeId: 1143, leetcodeLink: "https://leetcode.com/problems/longest-common-subsequence/" },
            { id: "m3d3-8", title: "DSA: Maximum Subarray (Mảng con Kadane)", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 53, leetcodeLink: "https://leetcode.com/problems/maximum-subarray/" }
        ]
    },
    {
        day: 4, month: 3,
        theme: "Buổi 4: Query Tuning & Lược Đồ Chuẩn Hóa",
        focus: "practice",
        tasks: [
            { id: "m3d4-1", title: "Lý thuyết: Ma Thuật EXPLAIN & EXPLAIN ANALYZE (Cost, Rows, Planner)", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d4-2", title: "⚙️ Thực hành 1: Đọc Kế hoạch Truy vấn (Query Plan) Của PostgreSQL và Tối ưu", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d4-3", title: "Lý thuyết: Bao nhiêu Index là Phù Hợp? Sức nặng của Việc Ghi (Insert Update)", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d4-4", title: "Lý thuyết: Database Normalization (Chuẩn hoá CSDL 1NF, 2NF, 3NF)", category: "theory", duration: "35m", priority: "high" },
            { id: "m3d4-5", title: "⚙️ Thực hành 2: De-Normalize (Thiết kế phi chuẩn) bảng User Info để Tăng Tốc Nhìn", category: "practice", duration: "30m", priority: "high" },
            { id: "m3d4-6", title: "Review: Quiz Nhanh Nhận diện Index nào chưa được tận dụng qua Analyze", category: "review", duration: "25m", priority: "medium" },
            { id: "m3d4-7", title: "DSA: Unique Paths II (Có Trở Ngại)", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 63, leetcodeLink: "https://leetcode.com/problems/unique-paths-ii/" }
        ]
    },
    {
        day: 5, month: 3,
        theme: "Buổi 5: The Rules of ACID & DP 2D Tiếp theo",
        focus: "theory",
        tasks: [
            { id: "m3d5-1", title: "Lý thuyết: Nền tảng ACID Nghĩa là Cấm Cãi (Atomicity, Consistency, Isolation, Durability)", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d5-2", title: "⚙️ Thực hành 1: Viết 1 kịch bản Transaction Chuyển Tiền bị Crash Máy Chủ Sinh Rollback (A-Atomicity)", category: "practice", duration: "35m", priority: "high" },
            { id: "m3d5-3", title: "Lý thuyết: Transaction Log / WAL (Write-Ahead Logging) để Đảm bảo D-Durability", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d5-4", title: "Review: Trả lời Câu Phỏng vấn: 'Tại sao ACID Lại cản Bước Tính Mở Rộng Hệ Thống?'", category: "review", duration: "30m", priority: "high" },
            { id: "m3d5-5", title: "DSA Lý thuyết: Ma Trận Bàn Cờ Của Dynamic Programming", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d5-6", title: "DSA: Minimum Path Sum", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 64, leetcodeLink: "https://leetcode.com/problems/minimum-path-sum/" },
            { id: "m3d5-7", title: "DSA: Edit Distance (2D DP Đại Pháp Nghệ)", category: "dsa", duration: "45m", priority: "high", leetcodeId: 72, leetcodeLink: "https://leetcode.com/problems/edit-distance/" }
        ]
    },
    {
        day: 6, month: 3, theme: "Nghỉ ngơi giãn cơ não", focus: "review", tasks: []
    },
    {
        day: 7, month: 3, theme: "Nghỉ ngơi nạp năng lượng", focus: "review", tasks: []
    },

    // ========== TUẦN 2: Thâm Cung Transaction Isolation & Data Locks ==========
    {
        day: 8, month: 3,
        theme: "Buổi 1: Bóng Ma, Đọc Dơ & 4 Cấp Độ Isolation",
        focus: "theory",
        tasks: [
            { id: "m3d8-1", title: "Lý thuyết: Vấn nạn của Data Đa Luồng DB (Dirty Read, Non-repeatable Read, Phantom Read)", category: "theory", duration: "35m", priority: "high" },
            { id: "m3d8-2", title: "Lý thuyết: 4 Cấp độ ANSI SQL ISOLATION (Read Uncommitted, Read Committed, Repeatable Read, Serializable)", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d8-3", title: "⚙️ Thực hành 1: Bật 2 Session PSQL, Bắn SQL sinh và nhìn Bằng Mắt 'Dirty Read' Nguy kịch (Trên Mysql)", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d8-4", title: "⚙️ Thực hành 2: Ép hệ thống lên Serializable và Chạy Thử Lệnh Chồng Chéo Xem Deadlock Khoá", category: "practice", duration: "40m", priority: "high" },
            { id: "m3d8-5", title: "Review: Postgres Default Commit là Gì (Read Committed)? Còn MySQL là Gì (RR)?", category: "review", duration: "20m", priority: "medium" },
            { id: "m3d8-6", title: "DSA Lý thuyết: Kiến thức Đoạn Thời Gian Giao Nhau (Intervals)", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d8-7", title: "DSA: Insert Interval", category: "dsa", duration: "35m", priority: "high", leetcodeId: 57, leetcodeLink: "https://leetcode.com/problems/insert-interval/" },
            { id: "m3d8-8", title: "DSA: Merge Intervals", category: "dsa", duration: "40m", priority: "high", leetcodeId: 56, leetcodeLink: "https://leetcode.com/problems/merge-intervals/" }
        ]
    },
    {
        day: 9, month: 3,
        theme: "Buổi 2: Database Locking Cơ Khí Thật Sự",
        focus: "theory",
        tasks: [
            { id: "m3d9-1", title: "Lý thuyết: Khoá Hàng (Row-level lock) vs Khoá Bảng (Table-level lock)", category: "theory", duration: "25m", priority: "high" },
            { id: "m3d9-2", title: "⚙️ Thực hành 1: Viết script làm sụp Table bằng cách ALTER ADD COLUMN khoá cứng Data", category: "practice", duration: "30m", priority: "medium" },
            { id: "m3d9-3", title: "Lý thuyết: Cơ chế Pessimistic Locking với SELECT ... FOR UPDATE cực ngầu", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d9-4", title: "⚙️ Thực hành 2: Cố định mua Vé bằng SELECT FOR UPDATE qua 2 Session Terminal song song đụng hàng", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d9-5", title: "Lý thuyết: Khoá Chia Sẻ (Shared Locks - FOR SHARE) là gì?", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d9-6", title: "Review: Sự Khác Biệt Giữa Optimistic Lock Tầng APP và Pessimistic Lock Tầng DB", category: "review", duration: "25m", priority: "high" },
            { id: "m3d9-7", title: "DSA: Non-overlapping Intervals (Sắp xếp Điểm Cuối Lạ Kì)", category: "dsa", duration: "40m", priority: "high", leetcodeId: 435, leetcodeLink: "https://leetcode.com/problems/non-overlapping-intervals/" }
        ]
    },
    {
        day: 10, month: 3,
        theme: "Buổi 3: Thế Lực HikariCP & Tuning Pool Bậc Cao",
        focus: "practice",
        tasks: [
            { id: "m3d10-1", title: "Lý thuyết: Tại sao Phải Kết Nối Hồ (Connection Pooling) Không Dùng Mới Bỏ Đi Nhỉ?", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d10-2", title: "Lý thuyết: Các Tham Số Sinh Tử HikariCP (maximumPoolSize, connectionTimeout, idleTimeout)", category: "theory", duration: "35m", priority: "high" },
            { id: "m3d10-3", title: "⚙️ Thực hành 1: Set Hikari Size=5 nhưng gọi 10 Thread truy cập DB. Đón lõi ConnectionTimeoutException", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d10-4", title: "⚙️ Thực hành 2: Quên close() Connection Cố ý Để Gây Connection Starvation (Đói Pool)", category: "practice", duration: "35m", priority: "high" },
            { id: "m3d10-5", title: "Review: Công thức Nút Thắt - DB Connections nên setup là Toán Tử Cứng (Thread / Lõi)", category: "review", duration: "30m", priority: "medium" },
            { id: "m3d10-6", title: "DSA Lý thuyết: Ma Trận Hình Học 2 Chiều Cơ Bản", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d10-7", title: "DSA: Set Matrix Zeroes (Dùng Hàng/Cột 0 làm cờ hiệu In-place)", category: "dsa", duration: "40m", priority: "medium", leetcodeId: 73, leetcodeLink: "https://leetcode.com/problems/set-matrix-zeroes/" }
        ]
    },
    {
        day: 11, month: 3,
        theme: "Buổi 4: Matrices & DB Review Trọn Bộ",
        focus: "review",
        tasks: [
            { id: "m3d11-1", title: "Lý thuyết: B+ Tree cấu trúc Index cho Data Hiện Đại so với B-Tree Nhánh ra sao?", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d11-2", title: "⚙️ Thực hành 1: EXPLAIN ANALYZE Truy vấn Bị Thiếu Cột Trong Composite Index dẫn Lỗi Chậm Rì", category: "practice", duration: "40m", priority: "high" },
            { id: "m3d11-3", title: "Review: Nhắc bài 3 Nút Sập Lỗi Mạng: JDBC Timeout, Trì Hoãn Log, Hikari Out", category: "review", duration: "30m", priority: "medium" },
            { id: "m3d11-4", title: "Review: Viết Báo Cáo Giải Quyết Phantom Read Trong RDBMS (Đọc Bật)", category: "review", duration: "30m", priority: "medium" },
            { id: "m3d11-5", title: "DSA: Rotate Image", category: "dsa", duration: "35m", priority: "high", leetcodeId: 48, leetcodeLink: "https://leetcode.com/problems/rotate-image/" },
            { id: "m3d11-6", title: "DSA: Spiral Matrix", category: "dsa", duration: "45m", priority: "medium", leetcodeId: 54, leetcodeLink: "https://leetcode.com/problems/spiral-matrix/" }
        ]
    },
    {
        day: 12, month: 3,
        theme: "Buổi 5: Tự Cường Query & Phỏng vấn Cứng DB",
        focus: "review",
        tasks: [
            { id: "m3d12-1", title: "Review Interview: Giải Quyết Deadlock SQL Bằng Mắt khi 2 Luồng Gắn FOR UPDATE Chéo Chân?", category: "review", duration: "35m", priority: "high" },
            { id: "m3d12-2", title: "Review Interview: Lỗi N+1 Trong Lệnh SQL Ứng Tuyển Khó Như Nên Né Bằng Fetch Gì?", category: "review", duration: "30m", priority: "high" },
            { id: "m3d12-3", title: "⚙️ Thực hành: Truy Cập PGAdmin hoặc DataGrip Viết 5 Query Bốc Tách SubQuery, Trả Report Thời Gian", category: "practice", duration: "45m", priority: "medium" },
            { id: "m3d12-4", title: "DSA: Jump Game", category: "dsa", duration: "35m", priority: "high", leetcodeId: 55, leetcodeLink: "https://leetcode.com/problems/jump-game/" },
            { id: "m3d12-5", title: "DSA: Jump Game II (Cơn Ác Mộng Mở Rộng 2 Cái Bước Nhảy)", category: "dsa", duration: "45m", priority: "medium", leetcodeId: 45, leetcodeLink: "https://leetcode.com/problems/jump-game-ii/" }
        ]
    },
    {
        day: 13, month: 3, theme: "Nghỉ ngơi giãn cơ não", focus: "review", tasks: []
    },
    {
        day: 14, month: 3, theme: "Nghỉ ngơi nạp năng lượng", focus: "review", tasks: []
    },

    // ========== TUẦN 3: Tái Thiết Lập Booking Project với JPA / CSDL THẬT ==========
    {
        day: 15, month: 3,
        theme: "Buổi 1: Trấn Áp JPA Entity & Lỗi N+1 Nhức Nhối",
        focus: "project",
        tasks: [
            { id: "m3d15-1", title: "Project Theory: Giã từ In-Memory Map. Dời Nhà Sang JPA @Entity @Table Thực Sự", category: "project", duration: "30m", priority: "high" },
            { id: "m3d15-2", title: "⚙️ Project Code: Viết cấu hình kết nối Datasource nối thẳng PostgreSQL bằng mã XML/YML", category: "project", duration: "30m", priority: "high" },
            { id: "m3d15-3", title: "Lý thuyết: ORM N+1 Problem là Cục Máu Đông Hệ Thống", category: "theory", duration: "25m", priority: "high" },
            { id: "m3d15-4", title: "⚙️ Thực hành: Cố tình Query List Booking Vòng Lặp Lazy Get Court Lòi Ra 101 Câu SQL Console", category: "practice", duration: "40m", priority: "high" },
            { id: "m3d15-5", title: "⚙️ Project Xử Lí: Dùng JPA Đâm JOIN FETCH / EntityGraph xoá Mù N+1 Gom SQL Nhanh", category: "practice", duration: "35m", priority: "high" },
            { id: "m3d15-6", title: "DSA Lý thuyết: Vượt Biên Giới - Thao Tác Cắn Bit (Bit Manipulation Bậc Thấp)", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d15-7", title: "DSA: Counting Bits", category: "dsa", duration: "30m", priority: "medium", leetcodeId: 338, leetcodeLink: "https://leetcode.com/problems/counting-bits/" },
            { id: "m3d15-8", title: "DSA: Number of 1 Bits", category: "dsa", duration: "20m", priority: "medium", leetcodeId: 191, leetcodeLink: "https://leetcode.com/problems/number-of-1-bits/" }
        ]
    },
    {
        day: 16, month: 3,
        theme: "Buổi 2: Migration Đất Đai CSDL Bằng Flyway",
        focus: "project",
        tasks: [
            { id: "m3d16-1", title: "Lý thuyết: Hibernate DDL-Auto Create-Drop Sự Ngu Ngốc Khi Đưa Lên Production", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d16-2", title: "Lý thuyết: Cấp Phép Git Dành Cho Database? Sự Ra Đời Flyway / Liquibase", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d16-3", title: "⚙️ Project Code: Dập Tắt Hibernate Update. Viết File SQL V1__Init_Tables.sql cho Flyway", category: "project", duration: "40m", priority: "high" },
            { id: "m3d16-4", title: "⚙️ Project Thực hành: Thay đổi Schema Mới Dùng V2__Add_Column.sql Ghi Nhận Lịch Sự DB", category: "practice", duration: "35m", priority: "high" },
            { id: "m3d16-5", title: "Review: Xem xét Bảng flayway_schema_history Khóa Trạng Thái Quản Lý Tới", category: "review", duration: "20m", priority: "medium" },
            { id: "m3d16-6", title: "DSA: Single Number (Khoá Giải XOR Thần Thánh)", category: "dsa", duration: "25m", priority: "high", leetcodeId: 136, leetcodeLink: "https://leetcode.com/problems/single-number/" },
            { id: "m3d16-7", title: "DSA: Reverse Bits", category: "dsa", duration: "35m", priority: "medium", leetcodeId: 190, leetcodeLink: "https://leetcode.com/problems/reverse-bits/" }
        ]
    },
    {
        day: 17, month: 3,
        theme: "Buổi 3: Triển Khai JPA Pessimistic Lock Ngăn Chặn Overbook",
        focus: "project",
        tasks: [
            { id: "m3d17-1", title: "Project Theory: Dời Tính Toán Lock Từ Thread Sang Trách Nhiệm DB Repository", category: "project", duration: "30m", priority: "high" },
            { id: "m3d17-2", title: "⚙️ Project Code: Thêm Annotation @Lock(LockModeType.PESSIMISTIC_WRITE) Nhắm Bắn SQL FOR UPDATE", category: "project", duration: "40m", priority: "high" },
            { id: "m3d17-3", title: "Lý thuyết: Hàm Trợ Khoá Isolation Level cho Interface Transactional Spring (@Transactional)", category: "theory", duration: "30m", priority: "medium" },
            { id: "m3d17-4", title: "⚙️ Project Chữa Lỗi: Test Bơm 500 Giao Dịch Đồng Loạt Xuyên Qua JPA Chặn Bảng Rất Khít", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d17-5", title: "Review: Transaction Propagation - Các nhánh Yêu Cầu Chồng Chéo Lan Toả (REQUIRES_NEW vs REQUIRED)", category: "review", duration: "30m", priority: "medium" },
            { id: "m3d17-6", title: "DSA: Missing Number", category: "dsa", duration: "25m", priority: "medium", leetcodeId: 268, leetcodeLink: "https://leetcode.com/problems/missing-number/" },
            { id: "m3d17-7", title: "DSA: Sum of Two Integers (Cộng Ko Đụng Dấu +)", category: "dsa", duration: "45m", priority: "medium", leetcodeId: 371, leetcodeLink: "https://leetcode.com/problems/sum-of-two-integers/" }
        ]
    },
    {
        day: 18, month: 3,
        theme: "Buổi 4: Benchmark Khủng Thử Thách Server Nặng",
        focus: "practice",
        tasks: [
            { id: "m3d18-1", title: "Lý thuyết: Cách Thống Số Đo Bằng JMeter Bắn Lưu Lượng Tối Đa Xuống REST Controller", category: "theory", duration: "25m", priority: "high" },
            { id: "m3d18-2", title: "⚙️ Thực hành 1: Setup JMeter/Gatling Viết Kịch bản Tấn công 10,000 requests vào API Order", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d18-3", title: "⚙️ Thực hành 2: Mở Xem Log Timeout, Bị Giới Hạn Hikari Cứa Đi Căn Giữa Giao Dịch Thất Bại", category: "practice", duration: "40m", priority: "high" },
            { id: "m3d18-4", title: "Project Xử Lí: Nâng Giới Hạn Pool Hikari Cập Nhập Phản Hồi Từ Database SQL Logs Dài Ngắn", category: "project", duration: "35m", priority: "high" },
            { id: "m3d18-5", title: "Project Code: Thêm Index Trực Tiếp Cho Bảng Đặt Chỗ Booking Giải Quyết Delay Bằng Code", category: "project", duration: "30m", priority: "medium" },
            { id: "m3d18-6", title: "Review: Đánh Giá Phương Trình Mất Giao Việc Thông Tin Lượng Transaction Thử Chạy", category: "review", duration: "30m", priority: "medium" }
        ]
    },
    {
        day: 19, month: 3,
        theme: "Buổi 5: Tu bổ REST Exception & Tóm tắt Khối Database Đa Luồng",
        focus: "project",
        tasks: [
            { id: "m3d19-1", title: "Project Theory: Tách Tín Hiệu Sai Controller @ControllerAdvice Cho Sự Kiện Đã Khoá Mua Hết Thời Gian", category: "theory", duration: "30m", priority: "medium" },
            { id: "m3d19-2", title: "⚙️ Project Code: Bọc Trả Về Custom Exception REST Lịch Sự 409 Conflict Chờ Thử Lại", category: "project", duration: "35m", priority: "high" },
            { id: "m3d19-3", title: "Review Tổng Lãnh: Database SQL, Isolation Cấu Trúc Bọc Mớ JDBC Bằng Spring Data Dễ Đến Khủng Khiếp", category: "review", duration: "35m", priority: "high" },
            { id: "m3d19-4", title: "Lý thuyết Dự bị: Cấu Kiến NoSQL Phía Trước Là Ai Đã Xây?", category: "theory", duration: "25m", priority: "medium" },
            { id: "m3d19-5", title: "Review Interview: Kiến Thức N+1 Cốt Lõi Vẫn Là Ám Ảnh Code Sẵn Entity", category: "review", duration: "30m", priority: "high" }
        ]
    },
    {
        day: 20, month: 3, theme: "Nghỉ ngơi giãn cơ não", focus: "review", tasks: []
    },
    {
        day: 21, month: 3, theme: "Nghỉ ngơi nạp năng lượng", focus: "review", tasks: []
    },

    // ========== TUẦN 4: Vượt Trần Redis Caching & NoSQL Intro ==========
    {
        day: 22, month: 3,
        theme: "Buổi 1: Lãnh Địa Đôi Redis & Caching Lõi Tốc Độ",
        focus: "theory",
        tasks: [
            { id: "m3d22-1", title: "Lý thuyết: Nỗ Bật Không Viết Database Lên Chậm. Vì Sao Sinh Ra Redis In-Memory Ngay Ram", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d22-2", title: "Lý thuyết: Pattern Cache Dạng Cache-Aside Nhập Ngõ Lỗ Phá Giáp Đọc Giữ", category: "theory", duration: "25m", priority: "high" },
            { id: "m3d22-3", title: "⚙️ Thực hành 1: Setup Vùng Chứa Redis Bằng CLI Lấy Dữ liệu GET SET Tạm Lưu Key/Value", category: "practice", duration: "35m", priority: "high" },
            { id: "m3d22-4", title: "⚙️ Thực hành 2: Nhúng Redisson Caching Vòng 1 Vô Gọi Rest Lập List Không Trực Xuống Lỗi Database", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d22-5", title: "Review: Kĩ Năng Tính Toán TTL Cho Dữ liệu Khi Quá Cũ Khỏi Đáy Lớn", category: "review", duration: "20m", priority: "medium" },
            { id: "m3d22-6", title: "DSA Lý thuyết: Tóm Lại 500 Dạng Cần Nhớ Tháng 2/3 - Pattern Hướng Phân Nhóm Cùng Category", category: "theory", duration: "25m", priority: "medium" }
        ]
    },
    {
        day: 23, month: 3,
        theme: "Buổi 2: Thiết Kế MongDB NoSQL (Thiết Phá Ràng Buộc)",
        focus: "practice",
        tasks: [
            { id: "m3d23-1", title: "Lý thuyết: Kẽ Hở Của JOIN RDBMS Lớn Và Chào MongDB Lưu Tập Vỡ Dữ Liệu BSN", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d23-2", title: "Lý thuyết: Luật CAP Theorem Cơ Cấu (Consistency, Availability, Partition Tolerance)", category: "theory", duration: "35m", priority: "high" },
            { id: "m3d23-3", title: "⚙️ Thực hành 1: Xoá Sạch Schema. Quăng Lên Document Lưu Thông Tin Phức Tạp Json MongDB", category: "practice", duration: "40m", priority: "high" },
            { id: "m3d23-4", title: "⚙️ Thực hành 2: Dùng Node Chôn Collection Lưu Không Giới Hạn Nested Vòng Cỡ Ổ Đĩa", category: "practice", duration: "45m", priority: "high" },
            { id: "m3d23-5", title: "Review: Có Nên Lưu Profile App Facebook Lên MySQL Không?", category: "review", duration: "25m", priority: "medium" }
        ]
    },
    {
        day: 24, month: 3,
        theme: "Buổi 3: Sharding & System Design Khái Quát Đầu Tiên",
        focus: "theory",
        tasks: [
            { id: "m3d24-1", title: "Lý thuyết: Nén Lõi Scale Khía Nhỏ - Vertical Kẹp Horizontal Chia Luồng Sharding Bằng Nhau", category: "theory", duration: "35m", priority: "high" },
            { id: "m3d24-2", title: "Lý thuyết: Phân Mảnh Dữ Liệu Lỗi Và Đâm Đụng Master-Slave Cho Ứng Database Replication Dễ Hiểu", category: "theory", duration: "35m", priority: "high" },
            { id: "m3d24-3", title: "⚙️ Thực hành Nghiên Cứu: Vẽ Sơ Đồ Twitter Timeline Xài NoSQL Bằng Push/Pull Fanout Kỹ Tính Nhất", category: "practice", duration: "50m", priority: "high" },
            { id: "m3d24-4", title: "Review: Khoá Nhớ Hồi Hạn Dùng Thuật DB Nào Chạy Móng", category: "review", duration: "25m", priority: "medium" },
            { id: "m3d24-5", title: "DSA: Khảo Sát Báo Cáo DSA Tháng 3 Giải Được 70 Blind Array DP Không Rằng", category: "dsa", duration: "30m", priority: "medium" }
        ]
    },
    {
        day: 25, month: 3,
        theme: "Buổi 4: Vượt Mốc Cánh Cửa Prep Phỏng Vấn (Month 3 DB Core)",
        focus: "review",
        tasks: [
            { id: "m3d25-1", title: "Review Interview: Khi Data Lớn Mà Quá Chậm Không Nới Khởi Thì Tuning Indexes Cấu Trúc Khởi Động?", category: "review", duration: "35m", priority: "high" },
            { id: "m3d25-2", title: "Review Interview: Giải Thêm Quỹ Hành Động Nếu User Bị Cấp Phép Trả Sai Số Tiền Qua ACID 4 Cột Trục Tách?", category: "review", duration: "40m", priority: "high" },
            { id: "m3d25-3", title: "Review Interview: Bóc Trần Hệ Caches Căn Bản - Không Phí Lõi Nâng Thêm RAM. Câu Chốt Rớt Vững", category: "review", duration: "35m", priority: "medium" },
            { id: "m3d25-4", title: "⚙️ Thực hành Nâng Điểm: Code lại Hệ Setup Flyway Cấp Sơ Trên Dự Án Lấp Nghẽn Ở Tuần 3", category: "practice", duration: "45m", priority: "medium" }
        ]
    },
    {
        day: 26, month: 3,
        theme: "Buổi 5: Tự Hào Chặn Áp Lực Database - Đón Khung Lõi Framework 4",
        focus: "review",
        tasks: [
            { id: "m3d26-1", title: "Review Cuối Khóa Căn Bức Hệ Thống Giới Hạn Cứng Lõi RDBMS, Postgres Cấu hình Mở Tầm", category: "review", duration: "40m", priority: "high" },
            { id: "m3d26-2", title: "Ôn Lại DSA Rễ Trăm Trăm Giải Thách Nhành Lớn Quét Bậc Mới Tinh Hoạt Cho Core Gốc", category: "review", duration: "40m", priority: "medium" },
            { id: "m3d26-3", title: "Khởi Đầu Roadmap Nền Tháng 4 Nhẹ Tựa Spring Boot Nhanh Lẹ Tạo Bean Rắn", category: "theory", duration: "30m", priority: "high" },
            { id: "m3d26-4", title: "Gửi Bản Đăng Hoàn Hoạn Bằng Tool Ghi Code Hoạc Tắt Đi Tới Dự Án Tháng Mới Hoành Tráng Hơn Tỉ Mỉ Dễ Thấy Xong", category: "practice", duration: "25m", priority: "medium" }
        ]
    },
    {
        day: 27, month: 3, theme: "Nghỉ ngơi giãn cơ não", focus: "review", tasks: []
    },
    {
        day: 28, month: 3, theme: "Nghỉ ngơi nạp năng lượng", focus: "review", tasks: []
    }
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
