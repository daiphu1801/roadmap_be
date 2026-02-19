export interface Note {
    id: string;
    title: string;
    content: string;
    tags: string[];
    category: 'java' | 'spring' | 'database' | 'dsa' | 'devops' | 'general';
    createdAt: string;
    updatedAt: string;
}

export const categories: Record<Note['category'], { label: string; color: string }> = {
    java: { label: '☕ Java Core', color: 'var(--accent-amber)' },
    spring: { label: '🌱 Spring Boot', color: 'var(--accent-green)' },
    database: { label: '🗃️ Database', color: 'var(--accent-cyan)' },
    dsa: { label: '🧮 DSA', color: 'var(--accent-red)' },
    devops: { label: '🚀 DevOps', color: 'var(--accent-primary)' },
    general: { label: '📝 Chung', color: 'var(--text-secondary)' },
};

export const noteTemplates: Record<string, string> = {
    'concept': `## Khái niệm chính
[Mô tả ngắn gọn concept]

## Ví dụ
\`\`\`java
// Code example here
\`\`\`

## Key Points
- Point 1
- Point 2

## Liên quan
- [Topic liên quan 1]
- [Topic liên quan 2]`,
    'dsa': `## Bài toán
[Mô tả bài toán]

## Approach
1. Bước 1
2. Bước 2

## Complexity
- Time: O(?)
- Space: O(?)

## Code
\`\`\`java
// Solution
\`\`\`

## Edge Cases
- Case 1
- Case 2`,
    'interview': `## Câu hỏi
[Câu hỏi phỏng vấn]

## Trả lời ngắn gọn
[1-2 câu tóm tắt]

## Trả lời chi tiết
[Giải thích đầy đủ]

## Follow-up Questions
- Q1?
- Q2?`,
};

export const allTags = ["Collections", "OOP", "Design", "Arrays", "Blind75", "Transactions", "Month1", "Month2", "Month3"];

export const mockNotes: Note[] = [
    {
        id: "1",
        title: "HashMap Internals - How it works",
        content: `## Khái niệm chính
HashMap sử dụng array of linked lists (buckets) để lưu trữ key-value pairs.

## Key Points
- hashCode() xác định bucket index
- equals() giải quyết collisions
- Load factor = 0.75 triggers resize
- Java 8+: TreeBins for performance (chuyển linked list → red-black tree khi bucket > 8)

## Complexity
- get/put: O(1) average, O(n) worst
- Với TreeBins: O(log n) worst

## Ví dụ
\`\`\`java
Map<String, Integer> map = new HashMap<>();
map.put("key", 1);
int value = map.get("key");
\`\`\``,
        tags: ["Collections", "Month1"],
        category: "java",
        createdAt: "2026-02-09",
        updatedAt: "2026-02-09"
    },
    {
        id: "2",
        title: "SOLID Principles Summary",
        content: `## 5 Nguyên tắc SOLID

### S - Single Responsibility
Mỗi class chỉ nên có MỘT lý do để thay đổi.

### O - Open/Closed
Open for extension, closed for modification.

### L - Liskov Substitution
Subclass phải có thể thay thế parent class mà không break functionality.

### I - Interface Segregation
Nhiều interfaces nhỏ tốt hơn 1 interface lớn.

### D - Dependency Inversion
Depend on abstractions, not concretions.

## Interview Tip
Chuẩn bị ví dụ code cụ thể cho mỗi principle!`,
        tags: ["OOP", "Design", "Month1"],
        category: "java",
        createdAt: "2026-02-10",
        updatedAt: "2026-02-10"
    },
    {
        id: "3",
        title: "Two Pointers Pattern",
        content: `## Bài toán mẫu
Two Sum (sorted array), 3Sum, Container With Most Water

## Approach
1. Khởi tạo 2 pointers (left = 0, right = n-1)
2. Di chuyển pointers dựa trên điều kiện
3. Thường dùng với sorted array

## Template Code
\`\`\`java
int left = 0, right = arr.length - 1;
while (left < right) {
    int sum = arr[left] + arr[right];
    if (sum == target) return true;
    else if (sum < target) left++;
    else right--;
}
\`\`\`

## Complexity
- Time: O(n)
- Space: O(1)`,
        tags: ["Arrays", "Blind75", "Month1"],
        category: "dsa",
        createdAt: "2026-02-11",
        updatedAt: "2026-02-11"
    },
    {
        id: "4",
        title: "ACID Properties",
        content: `## 4 Tính chất ACID

### Atomicity
All or nothing - transaction hoàn thành hoặc rollback toàn bộ.

### Consistency
Database luôn ở valid state.

### Isolation
Transactions không ảnh hưởng lẫn nhau.

### Durability
Committed = permanent, survive crashes.

## Isolation Levels
1. READ UNCOMMITTED - Dirty reads possible
2. READ COMMITTED - Default PostgreSQL
3. REPEATABLE READ - Default MySQL
4. SERIALIZABLE - Full isolation, slowest`,
        tags: ["Transactions", "Month3"],
        category: "database",
        createdAt: "2026-02-12",
        updatedAt: "2026-02-12"
    },
];
