import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ==================== ACHIEVEMENTS ====================
export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    condition: string;
    xpReward: number;
    unlockedAt?: string;
}

export const achievements: Achievement[] = [
    // Streak achievements
    { id: 'first-day', title: 'Khởi Đầu', description: 'Hoàn thành ngày đầu tiên', icon: '🌱', condition: 'streak >= 1', xpReward: 10 },
    { id: 'week-warrior', title: 'Chiến Binh Tuần', description: 'Streak 7 ngày liên tiếp', icon: '⚔️', condition: 'streak >= 7', xpReward: 50 },
    { id: 'consistent', title: 'Kiên Trì', description: 'Streak 30 ngày', icon: '💎', condition: 'streak >= 30', xpReward: 200 },

    // DSA achievements
    { id: 'first-solve', title: 'Solver', description: 'Giải bài DSA đầu tiên', icon: '🧩', condition: 'dsa >= 1', xpReward: 15 },
    { id: 'dsa-10', title: 'Problem Crusher', description: 'Giải 10 bài DSA', icon: '🔥', condition: 'dsa >= 10', xpReward: 75 },
    { id: 'dsa-25', title: 'Algorithm Master', description: 'Giải 25 bài DSA', icon: '🏆', condition: 'dsa >= 25', xpReward: 150 },
    { id: 'blind-75', title: 'Blind 75 Conqueror', description: 'Hoàn thành Blind 75', icon: '👑', condition: 'dsa >= 75', xpReward: 500 },

    // Progress achievements
    { id: 'month-1', title: 'Tháng 1 Done', description: 'Hoàn thành tháng 1', icon: '📅', condition: 'month >= 1', xpReward: 100 },
    { id: 'halfway', title: 'Nửa Đường', description: 'Hoàn thành 50% lộ trình', icon: '🎯', condition: 'progress >= 50', xpReward: 300 },
    { id: 'graduate', title: 'Backend SE', description: 'Hoàn thành lộ trình 6 tháng', icon: '🎓', condition: 'progress >= 100', xpReward: 1000 },

    // Notes achievements
    { id: 'first-note', title: 'Tay Ghi Chép', description: 'Tạo ghi chú đầu tiên', icon: '📝', condition: 'notes >= 1', xpReward: 10 },
    { id: 'note-taker', title: 'Note Master', description: 'Tạo 50 ghi chú', icon: '📚', condition: 'notes >= 50', xpReward: 100 },

    // Special achievements
    { id: 'early-bird', title: 'Early Bird', description: 'Học trước 6 giờ sáng', icon: '🌅', condition: 'special', xpReward: 25 },
    { id: 'night-owl', title: 'Night Owl', description: 'Học sau 11 giờ đêm', icon: '🦉', condition: 'special', xpReward: 25 },
    { id: 'weekend-warrior', title: 'Weekend Warrior', description: 'Học cả 7 ngày trong tuần', icon: '💪', condition: 'special', xpReward: 50 },
];

// ==================== QUOTES ====================
export const motivationalQuotes = [
    { text: "Sự kiên trì đánh bại tài năng khi tài năng không kiên trì.", author: "Anonymous" },
    { text: "Code không hoàn hảo, nhưng code được ship còn hơn code hoàn hảo trong đầu.", author: "Reid Hoffman" },
    { text: "Mỗi expert đều từng là người mới bắt đầu.", author: "Helen Hayes" },
    { text: "Đừng để ngày hôm qua chiếm quá nhiều thời gian của hôm nay.", author: "Will Rogers" },
    { text: "Điều tồi tệ nhất bạn có thể làm là không làm gì cả.", author: "Theodore Roosevelt" },
    { text: "1% mỗi ngày = 37x sau 1 năm.", author: "James Clear" },
    { text: "Học cách học là kỹ năng quan trọng nhất.", author: "Tony Robbins" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
    { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
    { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
    { text: "Đừng so sánh mình với người khác. Hãy so sánh với chính mình ngày hôm qua.", author: "Jordan Peterson" },
    { text: "Consistency beats intensity. 30 phút mỗi ngày > 5 tiếng cuối tuần.", author: "Cal Newport" },
];

// ==================== XP LEVELS ====================
export const levels = [
    { level: 1, title: 'Newbie', minXP: 0, maxXP: 100 },
    { level: 2, title: 'Apprentice', minXP: 100, maxXP: 300 },
    { level: 3, title: 'Developer', minXP: 300, maxXP: 600 },
    { level: 4, title: 'Engineer', minXP: 600, maxXP: 1000 },
    { level: 5, title: 'Senior', minXP: 1000, maxXP: 1500 },
    { level: 6, title: 'Lead', minXP: 1500, maxXP: 2100 },
    { level: 7, title: 'Architect', minXP: 2100, maxXP: 2800 },
    { level: 8, title: 'Principal', minXP: 2800, maxXP: 3600 },
    { level: 9, title: 'Distinguished', minXP: 3600, maxXP: 4500 },
    { level: 10, title: 'Legend', minXP: 4500, maxXP: Infinity },
];

export const getLevelFromXP = (xp: number) => {
    return levels.find(l => xp >= l.minXP && xp < l.maxXP) || levels[0];
};

export const getXPProgress = (xp: number) => {
    const level = getLevelFromXP(xp);
    const progress = ((xp - level.minXP) / (level.maxXP - level.minXP)) * 100;
    return Math.min(progress, 100);
};

// ==================== QUICK RESOURCES ====================
export const quickResources = [
    { id: 'java-docs', title: 'Java Docs', url: 'https://docs.oracle.com/en/java/', icon: '☕', category: 'java' },
    { id: 'spring-docs', title: 'Spring Docs', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/', icon: '🌱', category: 'spring' },
    { id: 'leetcode', title: 'LeetCode', url: 'https://leetcode.com/problemset/', icon: '🧮', category: 'dsa' },
    { id: 'neetcode', title: 'NeetCode', url: 'https://neetcode.io/roadmap', icon: '🎯', category: 'dsa' },
    { id: 'baeldung', title: 'Baeldung', url: 'https://www.baeldung.com/', icon: '📘', category: 'java' },
    { id: 'roadmap-sh', title: 'Roadmap.sh', url: 'https://roadmap.sh/backend', icon: '🗺️', category: 'general' },
    { id: 'github', title: 'GitHub', url: 'https://github.com', icon: '🐙', category: 'general' },
    { id: 'stackoverflow', title: 'StackOverflow', url: 'https://stackoverflow.com', icon: '📚', category: 'general' },
];

// ==================== DAILY CHALLENGES ====================
export const dailyChallenges = [
    // Java
    { id: 'java-1', question: 'JVM là gì?', answer: 'Java Virtual Machine - môi trường runtime để chạy bytecode Java', category: 'java' },
    { id: 'java-2', question: 'Sự khác nhau giữa == và .equals()?', answer: '== so sánh reference, .equals() so sánh giá trị', category: 'java' },
    { id: 'java-3', question: 'ArrayList vs LinkedList?', answer: 'ArrayList: random access O(1), LinkedList: insert/delete O(1)', category: 'java' },

    // Spring
    { id: 'spring-1', question: '@Autowired để làm gì?', answer: 'Dependency Injection tự động', category: 'spring' },
    { id: 'spring-2', question: 'Scope mặc định của Bean?', answer: 'Singleton', category: 'spring' },
    { id: 'spring-3', question: '@Controller vs @RestController?', answer: '@RestController = @Controller + @ResponseBody', category: 'spring' },

    // DSA
    { id: 'dsa-1', question: 'Big O của Binary Search?', answer: 'O(log n)', category: 'dsa' },
    { id: 'dsa-2', question: 'Stack hoạt động theo nguyên tắc?', answer: 'LIFO - Last In First Out', category: 'dsa' },
    { id: 'dsa-3', question: 'Time complexity của QuickSort trung bình?', answer: 'O(n log n)', category: 'dsa' },

    // Database
    { id: 'db-1', question: 'ACID là gì?', answer: 'Atomicity, Consistency, Isolation, Durability', category: 'database' },
    { id: 'db-2', question: 'Index trong database để làm gì?', answer: 'Tăng tốc query bằng cách tạo cấu trúc lookup', category: 'database' },
    { id: 'db-3', question: 'SQL vs NoSQL?', answer: 'SQL: structured/relational, NoSQL: flexible/non-relational', category: 'database' },
];

export const getRandomChallenge = (category?: string) => {
    const filtered = category
        ? dailyChallenges.filter(c => c.category === category)
        : dailyChallenges;
    return filtered[Math.floor(Math.random() * filtered.length)];
};

export const getRandomQuote = () => {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
};

// ==================== GAMIFICATION STORE ====================
interface GamificationState {
    xp: number;
    unlockedAchievements: string[];
    pomodoroSessions: number;
    focusModeEnabled: boolean;

    // Actions
    addXP: (amount: number) => void;
    unlockAchievement: (id: string) => void;
    incrementPomodoro: () => void;
    toggleFocusMode: () => void;
    checkAchievements: (stats: { streak: number; dsa: number; progress: number; notes: number }) => void;
}

export const useGamificationStore = create<GamificationState>()(
    persist(
        (set, get) => ({
            xp: 0,
            unlockedAchievements: [],
            pomodoroSessions: 0,
            focusModeEnabled: false,

            addXP: (amount) => set((state) => ({ xp: state.xp + amount })),

            unlockAchievement: (id) => {
                const state = get();
                if (!state.unlockedAchievements.includes(id)) {
                    const achievement = achievements.find(a => a.id === id);
                    if (achievement) {
                        set({
                            unlockedAchievements: [...state.unlockedAchievements, id],
                            xp: state.xp + achievement.xpReward
                        });
                    }
                }
            },

            incrementPomodoro: () => set((state) => ({
                pomodoroSessions: state.pomodoroSessions + 1,
                xp: state.xp + 5 // 5 XP per pomodoro
            })),

            toggleFocusMode: () => set((state) => ({ focusModeEnabled: !state.focusModeEnabled })),

            checkAchievements: (stats) => {
                const state = get();

                // Check streak achievements
                if (stats.streak >= 1 && !state.unlockedAchievements.includes('first-day')) {
                    get().unlockAchievement('first-day');
                }
                if (stats.streak >= 7 && !state.unlockedAchievements.includes('week-warrior')) {
                    get().unlockAchievement('week-warrior');
                }
                if (stats.streak >= 30 && !state.unlockedAchievements.includes('consistent')) {
                    get().unlockAchievement('consistent');
                }

                // Check DSA achievements
                if (stats.dsa >= 1 && !state.unlockedAchievements.includes('first-solve')) {
                    get().unlockAchievement('first-solve');
                }
                if (stats.dsa >= 10 && !state.unlockedAchievements.includes('dsa-10')) {
                    get().unlockAchievement('dsa-10');
                }
                if (stats.dsa >= 25 && !state.unlockedAchievements.includes('dsa-25')) {
                    get().unlockAchievement('dsa-25');
                }
                if (stats.dsa >= 75 && !state.unlockedAchievements.includes('blind-75')) {
                    get().unlockAchievement('blind-75');
                }

                // Check progress achievements
                if (stats.progress >= 50 && !state.unlockedAchievements.includes('halfway')) {
                    get().unlockAchievement('halfway');
                }
                if (stats.progress >= 100 && !state.unlockedAchievements.includes('graduate')) {
                    get().unlockAchievement('graduate');
                }

                // Check notes achievements
                if (stats.notes >= 1 && !state.unlockedAchievements.includes('first-note')) {
                    get().unlockAchievement('first-note');
                }
                if (stats.notes >= 50 && !state.unlockedAchievements.includes('note-taker')) {
                    get().unlockAchievement('note-taker');
                }
            },
        }),
        { name: 'roadmap-gamification' }
    )
);
