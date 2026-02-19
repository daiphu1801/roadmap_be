import { Month } from '@/lib/types';

export const roadmapData: Month[] = [
    {
        id: 1,
        title: "THÁNG 1: JAVA CORE + DSA NỀN TẢNG",
        shortTitle: "Java Core",
        goal: "Sửa gốc yếu DSA, hiểu sâu bản chất vận hành của ngôn ngữ Java",
        topics: [
            {
                id: "java-core",
                name: "Java Core Deep Dive",
                icon: "☕",
                items: [
                    { id: "oop", title: "OOP thực chất - Composition over Inheritance, Design Patterns", completed: false },
                    { id: "memory", title: "Memory Model - Heap vs Stack, Garbage Collection", completed: false },
                    { id: "internals", title: "Internals - equals(), hashCode() trong HashMap", completed: false },
                    { id: "collections", title: "Collections - ArrayList, LinkedList, HashMap internals", completed: false },
                ]
            },
            {
                id: "dsa-month1",
                name: "DSA Daily Routine",
                icon: "🧮",
                items: [
                    { id: "arrays", title: "Arrays (10 bài)", completed: false },
                    { id: "string", title: "String (10 bài)", completed: false },
                    { id: "hashmap", title: "HashMap (10 bài)", completed: false },
                    { id: "two-pointers", title: "Two Pointers (10 bài)", completed: false },
                    { id: "sliding-window", title: "Sliding Window (10 bài)", completed: false },
                ]
            }
        ]
    },
    {
        id: 2,
        title: "THÁNG 2: CONCURRENCY + DSA TRUNG BÌNH",
        shortTitle: "Concurrency",
        goal: "Hiểu cách hệ thống xử lý song song và tranh chấp tài nguyên",
        topics: [
            {
                id: "concurrency",
                name: "Java Concurrency",
                icon: "⚡",
                items: [
                    { id: "thread-basic", title: "Thread vs Runnable, vòng đời của Thread", completed: false },
                    { id: "sync", title: "synchronized, volatile, Race condition, Deadlock", completed: false },
                    { id: "executor", title: "ExecutorService, ThreadPool, Atomic classes", completed: false },
                ]
            },
            {
                id: "mini-project",
                name: "Engineering Practice",
                icon: "🛠️",
                items: [
                    { id: "booking-lock", title: "BookingLockManager - Quản lý đặt chỗ concurrent", completed: false },
                ]
            },
            {
                id: "dsa-month2",
                name: "DSA Trung Bình",
                icon: "🧮",
                items: [
                    { id: "stack", title: "Stack (8 bài)", completed: false },
                    { id: "queue", title: "Queue (8 bài)", completed: false },
                    { id: "linked-list", title: "Linked List (10 bài)", completed: false },
                    { id: "binary-search", title: "Binary Search (10 bài)", completed: false },
                    { id: "tree-traversal", title: "Tree traversal (10 bài)", completed: false },
                ]
            }
        ]
    },
    {
        id: 3,
        title: "THÁNG 3: DATABASE + SYSTEM THINKING",
        shortTitle: "Database",
        goal: "Nắm giữ 'trái tim' của hệ thống - Cách dữ liệu được lưu trữ và bảo vệ",
        topics: [
            {
                id: "database",
                name: "Database Mastery",
                icon: "🗃️",
                items: [
                    { id: "sql-advanced", title: "SQL chuyên sâu - JOIN, INDEX, EXPLAIN ANALYZE", completed: false },
                    { id: "acid", title: "ACID, Transaction Isolation Levels", completed: false },
                    { id: "locking", title: "Optimistic vs Pessimistic locking", completed: false },
                ]
            },
            {
                id: "project-db",
                name: "Project: Pickleball Booking",
                icon: "🏓",
                items: [
                    { id: "schema-design", title: "Thiết kế Schema cho hệ thống Booking", completed: false },
                    { id: "double-booking", title: "Logic ngăn chặn Double Booking", completed: false },
                    { id: "benchmark", title: "Benchmark với 1000 concurrent requests", completed: false },
                ]
            },
            {
                id: "dsa-month3",
                name: "DSA",
                icon: "🧮",
                items: [
                    { id: "bst", title: "Binary Search Tree (10 bài)", completed: false },
                    { id: "recursion", title: "Basic Recursion (10 bài)", completed: false },
                    { id: "heap", title: "Heap / PriorityQueue (10 bài)", completed: false },
                ]
            }
        ]
    },
    {
        id: 4,
        title: "THÁNG 4: SPRING BOOT – TƯ DUY KỸ SƯ",
        shortTitle: "Spring Boot",
        goal: "Sử dụng Framework như một công cụ, không bị lệ thuộc",
        topics: [
            {
                id: "spring-internals",
                name: "Spring Internals",
                icon: "🍃",
                items: [
                    { id: "ioc-di", title: "IoC và DI - Constructor-based injection", completed: false },
                    { id: "lifecycle", title: "Bean lifecycle, Global Exception Handler", completed: false },
                    { id: "rest-api", title: "API chuẩn REST, Validation, Pagination", completed: false },
                ]
            },
            {
                id: "testing",
                name: "Testing (Phẩm chất SE)",
                icon: "🧪",
                items: [
                    { id: "unit-test", title: "JUnit 5 + Mockito cho Service layer", completed: false },
                    { id: "concurrent-test", title: "Concurrency Test cases", completed: false },
                ]
            }
        ]
    },
    {
        id: 5,
        title: "THÁNG 5: PERFORMANCE, SECURITY & ASYNC",
        shortTitle: "Security",
        goal: "Đảm bảo hệ thống chịu tải tốt và bảo mật",
        topics: [
            {
                id: "security",
                name: "Security & Performance",
                icon: "🔐",
                items: [
                    { id: "jwt", title: "JWT (Stateless Auth), RBAC, BCrypt", completed: false },
                    { id: "caching", title: "Redis caching, Cache Invalidation", completed: false },
                ]
            },
            {
                id: "async",
                name: "Asynchronous Processing",
                icon: "📨",
                items: [
                    { id: "message-queue", title: "RabbitMQ/Kafka - Email/Log Async", completed: false },
                ]
            },
            {
                id: "dsa-month5",
                name: "DSA Advanced",
                icon: "🧮",
                items: [
                    { id: "bfs", title: "Graph BFS (8 bài)", completed: false },
                    { id: "dfs", title: "Graph DFS (8 bài)", completed: false },
                    { id: "backtracking", title: "Backtracking cơ bản (10 bài)", completed: false },
                ]
            }
        ]
    },
    {
        id: 6,
        title: "THÁNG 6: DEVOPS + HOÀN THIỆN SẢN PHẨM",
        shortTitle: "DevOps",
        goal: "Quy trình từ code đến triển khai thực tế",
        topics: [
            {
                id: "devops",
                name: "Containerization & CI/CD",
                icon: "🐳",
                items: [
                    { id: "docker", title: "Dockerfile tối ưu, Docker Compose", completed: false },
                    { id: "cicd", title: "GitHub Actions CI/CD", completed: false },
                ]
            },
            {
                id: "deliverables",
                name: "Portfolio & Documentation",
                icon: "📝",
                items: [
                    { id: "portfolio", title: "GitHub repo sạch sẽ, module rõ ràng", completed: false },
                    { id: "readme", title: "README chi tiết: Architecture, Trade-offs", completed: false },
                ]
            }
        ]
    }
];

// DSA Topics based on NeetCode Blind 75 categories
export const dsaTopics = [
    { id: "arrays-hashing", name: "Mảng & Hash", target: 9, icon: "🔢" },
    { id: "two-pointers", name: "Hai Con Trỏ", target: 5, icon: "👆" },
    { id: "sliding-window", name: "Cửa Sổ Trượt", target: 4, icon: "🪟" },
    { id: "stack", name: "Ngăn Xếp", target: 1, icon: "📚" },
    { id: "binary-search", name: "Tìm Kiếm Nhị Phân", target: 2, icon: "🔍" },
    { id: "linked-list", name: "Danh Sách Liên Kết", target: 6, icon: "🔗" },
    { id: "trees", name: "Cây", target: 15, icon: "🌳" },
    { id: "tries", name: "Cây Tiền Tố", target: 3, icon: "🔤" },
    { id: "heap", name: "Heap / Hàng Đợi Ưu Tiên", target: 6, icon: "⛰️" },
    { id: "backtracking", name: "Quay Lui", target: 2, icon: "↩️" },
    { id: "graphs", name: "Đồ Thị", target: 7, icon: "🕸️" },
    { id: "advanced-graphs", name: "Đồ Thị Nâng Cao", target: 1, icon: "🌐" },
    { id: "dp-1d", name: "Quy Hoạch Động 1D", target: 11, icon: "📈" },
    { id: "dp-2d", name: "Quy Hoạch Động 2D", target: 2, icon: "📊" },
    { id: "greedy", name: "Tham Lam", target: 2, icon: "💰" },
    { id: "intervals", name: "Khoảng", target: 5, icon: "📅" },
    { id: "math-geometry", name: "Toán & Hình Học", target: 3, icon: "📐" },
    { id: "bit-manipulation", name: "Thao Tác Bit", target: 6, icon: "🔢" },
];

export const navItems = [
    { name: "Dashboard", href: "/", icon: "LayoutDashboard" },
    { name: "Roadmap", href: "/roadmap", icon: "Map" },
    { name: "Tasks", href: "/tasks", icon: "CheckSquare" },
    { name: "DSA", href: "/dsa", icon: "Code2" },
    { name: "Notes", href: "/notes", icon: "FileText" },
];
