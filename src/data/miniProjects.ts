// Weekly Mini-Projects data
// Mỗi tuần có 1 mini-project thực hành

export interface MiniProject {
    week: number;
    title: string;
    description: string;
    skills: string[];
    difficulty: "Easy" | "Medium" | "Hard";
    estimatedHours: number;
    requirements: string[];
    bonusChallenges?: string[];
}

export const weeklyMiniProjects: MiniProject[] = [
    // Tháng 1: Java Core
    {
        week: 1,
        title: "CLI Task Manager",
        description: "Xây dựng ứng dụng quản lý công việc bằng command line. Thêm, sửa, xóa, liệt kê tasks.",
        skills: ["Java Basics", "OOP", "Collections"],
        difficulty: "Easy",
        estimatedHours: 4,
        requirements: [
            "CRUD operations cho tasks",
            "Lưu data vào file text/JSON",
            "Menu điều hướng bằng Scanner",
            "Validate input"
        ],
        bonusChallenges: [
            "Thêm priority levels",
            "Filter tasks theo status",
            "Search tasks theo keyword"
        ]
    },
    {
        week: 2,
        title: "Student Grade Calculator",
        description: "Hệ thống tính điểm sinh viên với nhiều môn học, tính GPA.",
        skills: ["OOP", "Inheritance", "Polymorphism"],
        difficulty: "Easy",
        estimatedHours: 5,
        requirements: [
            "Class Student, Subject, Grade",
            "Tính điểm trung bình theo hệ số",
            "Xếp loại học lực",
            "Export kết quả ra file"
        ],
        bonusChallenges: [
            "Thêm biểu đồ ASCII cho điểm",
            "So sánh điểm giữa các sinh viên",
            "Import data từ CSV"
        ]
    },
    {
        week: 3,
        title: "Library Management System",
        description: "Quản lý thư viện: sách, độc giả, mượn/trả sách.",
        skills: ["Collections", "Exception Handling", "File I/O"],
        difficulty: "Medium",
        estimatedHours: 6,
        requirements: [
            "Quản lý Book, Member, Loan",
            "Check available copies",
            "Track overdue books",
            "Persistence với serialization"
        ],
        bonusChallenges: [
            "Fine calculation cho sách quá hạn",
            "Reservation system",
            "Report thống kê"
        ]
    },
    {
        week: 4,
        title: "Multi-threaded File Downloader",
        description: "Ứng dụng download file với multiple threads, progress tracking.",
        skills: ["Multithreading", "Concurrency", "I/O Streams"],
        difficulty: "Hard",
        estimatedHours: 8,
        requirements: [
            "Split file thành chunks",
            "Download parallel với ExecutorService",
            "Progress bar cho mỗi thread",
            "Resume failed downloads"
        ],
        bonusChallenges: [
            "Bandwidth limiting",
            "Queue multiple downloads",
            "Checksum verification"
        ]
    },

    // Tháng 2: Spring Boot
    {
        week: 5,
        title: "RESTful Todo API",
        description: "REST API cho ứng dụng Todo với Spring Boot.",
        skills: ["Spring Boot", "REST API", "JPA"],
        difficulty: "Easy",
        estimatedHours: 5,
        requirements: [
            "CRUD endpoints cho todos",
            "Validation với Bean Validation",
            "H2 database setup",
            "Proper HTTP status codes"
        ],
        bonusChallenges: [
            "Pagination & sorting",
            "Search by title",
            "Due date filtering"
        ]
    },
    {
        week: 6,
        title: "User Authentication System",
        description: "Hệ thống đăng ký, đăng nhập với JWT.",
        skills: ["Spring Security", "JWT", "BCrypt"],
        difficulty: "Medium",
        estimatedHours: 7,
        requirements: [
            "Register/Login endpoints",
            "JWT token generation",
            "Password hashing",
            "Protected routes"
        ],
        bonusChallenges: [
            "Refresh token",
            "Email verification",
            "Password reset flow"
        ]
    },
    {
        week: 7,
        title: "Blog API with Comments",
        description: "API cho blog có posts và comments, relationships.",
        skills: ["JPA Relationships", "DTOs", "Validation"],
        difficulty: "Medium",
        estimatedHours: 6,
        requirements: [
            "Post & Comment entities",
            "One-to-Many relationship",
            "Author tracking",
            "Soft delete"
        ],
        bonusChallenges: [
            "Like/Unlike feature",
            "Tags/Categories",
            "Full-text search"
        ]
    },
    {
        week: 8,
        title: "E-commerce Product Service",
        description: "Microservice quản lý sản phẩm cho e-commerce.",
        skills: ["Microservices", "Docker", "API Design"],
        difficulty: "Hard",
        estimatedHours: 10,
        requirements: [
            "Product CRUD với categories",
            "Inventory management",
            "Image upload (S3/local)",
            "Dockerize application"
        ],
        bonusChallenges: [
            "Redis caching",
            "OpenAPI documentation",
            "Integration tests"
        ]
    },

    // Thêm các tuần tiếp theo...
    {
        week: 9,
        title: "URL Shortener",
        description: "Clone bit.ly - shorten URLs với analytics.",
        skills: ["Spring Boot", "Redis", "Analytics"],
        difficulty: "Medium",
        estimatedHours: 6,
        requirements: [
            "Generate short URLs",
            "Redirect to original",
            "Click tracking",
            "Expiration dates"
        ],
        bonusChallenges: [
            "Custom aliases",
            "QR code generation",
            "Analytics dashboard"
        ]
    },
    {
        week: 10,
        title: "Real-time Chat API",
        description: "WebSocket-based chat với rooms.",
        skills: ["WebSocket", "Spring", "Real-time"],
        difficulty: "Hard",
        estimatedHours: 8,
        requirements: [
            "WebSocket connection",
            "Chat rooms",
            "Message history",
            "User presence"
        ],
        bonusChallenges: [
            "File sharing",
            "Message reactions",
            "Typing indicators"
        ]
    }
];

// Helper functions
export const getMiniProjectForWeek = (week: number): MiniProject | undefined => {
    return weeklyMiniProjects.find(p => p.week === week);
};

export const getCurrentWeekProject = (startDate: Date): MiniProject | undefined => {
    const now = new Date();
    const diffTime = now.getTime() - startDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const currentWeek = Math.ceil(diffDays / 7);
    return getMiniProjectForWeek(currentWeek);
};

export const getDifficultyColor = (difficulty: MiniProject["difficulty"]) => {
    switch (difficulty) {
        case "Easy": return "var(--accent-green)";
        case "Medium": return "var(--accent-amber)";
        case "Hard": return "var(--accent-red)";
    }
};
