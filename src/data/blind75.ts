// NeetCode Blind 75 - Complete Problem List
// https://neetcode.io/practice/practice/blind75

export interface Blind75Problem {
    id: string;
    name: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    leetcodeId: number;
    link: string;
    neetcodeLink?: string;
    isPremium?: boolean;
}

export interface Blind75Category {
    id: string;
    name: string;
    nameVi: string;
    icon: string;
    problems: Blind75Problem[];
}

export const blind75Data: Blind75Category[] = [
    // ============================================
    // 1. ARRAYS & HASHING (9 problems)
    // ============================================
    {
        id: "arrays-hashing",
        name: "Arrays & Hashing",
        nameVi: "Mảng & Hash",
        icon: "🔢",
        problems: [
            {
                id: "b75-1",
                name: "Two Sum",
                difficulty: "Easy",
                leetcodeId: 1,
                link: "https://leetcode.com/problems/two-sum/",
            },
            {
                id: "b75-2",
                name: "Contains Duplicate",
                difficulty: "Easy",
                leetcodeId: 217,
                link: "https://leetcode.com/problems/contains-duplicate/",
            },
            {
                id: "b75-3",
                name: "Valid Anagram",
                difficulty: "Easy",
                leetcodeId: 242,
                link: "https://leetcode.com/problems/valid-anagram/",
            },
            {
                id: "b75-4",
                name: "Group Anagrams",
                difficulty: "Medium",
                leetcodeId: 49,
                link: "https://leetcode.com/problems/group-anagrams/",
            },
            {
                id: "b75-5",
                name: "Top K Frequent Elements",
                difficulty: "Medium",
                leetcodeId: 347,
                link: "https://leetcode.com/problems/top-k-frequent-elements/",
            },
            {
                id: "b75-6",
                name: "Product of Array Except Self",
                difficulty: "Medium",
                leetcodeId: 238,
                link: "https://leetcode.com/problems/product-of-array-except-self/",
            },
            {
                id: "b75-7",
                name: "Valid Sudoku",
                difficulty: "Medium",
                leetcodeId: 36,
                link: "https://leetcode.com/problems/valid-sudoku/",
            },
            {
                id: "b75-8",
                name: "Encode and Decode Strings",
                difficulty: "Medium",
                leetcodeId: 271,
                link: "https://leetcode.com/problems/encode-and-decode-strings/",
                isPremium: true,
            },
            {
                id: "b75-9",
                name: "Longest Consecutive Sequence",
                difficulty: "Medium",
                leetcodeId: 128,
                link: "https://leetcode.com/problems/longest-consecutive-sequence/",
            },
        ],
    },

    // ============================================
    // 2. TWO POINTERS (5 problems)
    // ============================================
    {
        id: "two-pointers",
        name: "Two Pointers",
        nameVi: "Hai Con Trỏ",
        icon: "👆",
        problems: [
            {
                id: "b75-10",
                name: "Valid Palindrome",
                difficulty: "Easy",
                leetcodeId: 125,
                link: "https://leetcode.com/problems/valid-palindrome/",
            },
            {
                id: "b75-11",
                name: "Two Sum II - Input Array Is Sorted",
                difficulty: "Medium",
                leetcodeId: 167,
                link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
            },
            {
                id: "b75-12",
                name: "3Sum",
                difficulty: "Medium",
                leetcodeId: 15,
                link: "https://leetcode.com/problems/3sum/",
            },
            {
                id: "b75-13",
                name: "Container With Most Water",
                difficulty: "Medium",
                leetcodeId: 11,
                link: "https://leetcode.com/problems/container-with-most-water/",
            },
            {
                id: "b75-14",
                name: "Trapping Rain Water",
                difficulty: "Hard",
                leetcodeId: 42,
                link: "https://leetcode.com/problems/trapping-rain-water/",
            },
        ],
    },

    // ============================================
    // 3. SLIDING WINDOW (4 problems)
    // ============================================
    {
        id: "sliding-window",
        name: "Sliding Window",
        nameVi: "Cửa Sổ Trượt",
        icon: "🪟",
        problems: [
            {
                id: "b75-15",
                name: "Best Time to Buy and Sell Stock",
                difficulty: "Easy",
                leetcodeId: 121,
                link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            },
            {
                id: "b75-16",
                name: "Longest Substring Without Repeating Characters",
                difficulty: "Medium",
                leetcodeId: 3,
                link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            },
            {
                id: "b75-17",
                name: "Longest Repeating Character Replacement",
                difficulty: "Medium",
                leetcodeId: 424,
                link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
            },
            {
                id: "b75-18",
                name: "Minimum Window Substring",
                difficulty: "Hard",
                leetcodeId: 76,
                link: "https://leetcode.com/problems/minimum-window-substring/",
            },
        ],
    },

    // ============================================
    // 4. STACK (1 problem)
    // ============================================
    {
        id: "stack",
        name: "Stack",
        nameVi: "Ngăn Xếp",
        icon: "📚",
        problems: [
            {
                id: "b75-19",
                name: "Valid Parentheses",
                difficulty: "Easy",
                leetcodeId: 20,
                link: "https://leetcode.com/problems/valid-parentheses/",
            },
        ],
    },

    // ============================================
    // 5. BINARY SEARCH (2 problems)
    // ============================================
    {
        id: "binary-search",
        name: "Binary Search",
        nameVi: "Tìm Kiếm Nhị Phân",
        icon: "🔍",
        problems: [
            {
                id: "b75-20",
                name: "Find Minimum in Rotated Sorted Array",
                difficulty: "Medium",
                leetcodeId: 153,
                link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
            },
            {
                id: "b75-21",
                name: "Search in Rotated Sorted Array",
                difficulty: "Medium",
                leetcodeId: 33,
                link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
            },
        ],
    },

    // ============================================
    // 6. LINKED LIST (6 problems)
    // ============================================
    {
        id: "linked-list",
        name: "Linked List",
        nameVi: "Danh Sách Liên Kết",
        icon: "🔗",
        problems: [
            {
                id: "b75-22",
                name: "Reverse Linked List",
                difficulty: "Easy",
                leetcodeId: 206,
                link: "https://leetcode.com/problems/reverse-linked-list/",
            },
            {
                id: "b75-23",
                name: "Merge Two Sorted Lists",
                difficulty: "Easy",
                leetcodeId: 21,
                link: "https://leetcode.com/problems/merge-two-sorted-lists/",
            },
            {
                id: "b75-24",
                name: "Linked List Cycle",
                difficulty: "Easy",
                leetcodeId: 141,
                link: "https://leetcode.com/problems/linked-list-cycle/",
            },
            {
                id: "b75-25",
                name: "Reorder List",
                difficulty: "Medium",
                leetcodeId: 143,
                link: "https://leetcode.com/problems/reorder-list/",
            },
            {
                id: "b75-26",
                name: "Remove Nth Node From End of List",
                difficulty: "Medium",
                leetcodeId: 19,
                link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
            },
            {
                id: "b75-27",
                name: "Merge K Sorted Lists",
                difficulty: "Hard",
                leetcodeId: 23,
                link: "https://leetcode.com/problems/merge-k-sorted-lists/",
            },
        ],
    },

    // ============================================
    // 7. TREES (15 problems)
    // ============================================
    {
        id: "trees",
        name: "Trees",
        nameVi: "Cây",
        icon: "🌳",
        problems: [
            {
                id: "b75-28",
                name: "Invert Binary Tree",
                difficulty: "Easy",
                leetcodeId: 226,
                link: "https://leetcode.com/problems/invert-binary-tree/",
            },
            {
                id: "b75-29",
                name: "Maximum Depth of Binary Tree",
                difficulty: "Easy",
                leetcodeId: 104,
                link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
            },
            {
                id: "b75-30",
                name: "Diameter of Binary Tree",
                difficulty: "Easy",
                leetcodeId: 543,
                link: "https://leetcode.com/problems/diameter-of-binary-tree/",
            },
            {
                id: "b75-31",
                name: "Balanced Binary Tree",
                difficulty: "Easy",
                leetcodeId: 110,
                link: "https://leetcode.com/problems/balanced-binary-tree/",
            },
            {
                id: "b75-32",
                name: "Same Tree",
                difficulty: "Easy",
                leetcodeId: 100,
                link: "https://leetcode.com/problems/same-tree/",
            },
            {
                id: "b75-33",
                name: "Subtree of Another Tree",
                difficulty: "Easy",
                leetcodeId: 572,
                link: "https://leetcode.com/problems/subtree-of-another-tree/",
            },
            {
                id: "b75-34",
                name: "Lowest Common Ancestor of a BST",
                difficulty: "Medium",
                leetcodeId: 235,
                link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
            },
            {
                id: "b75-35",
                name: "Binary Tree Level Order Traversal",
                difficulty: "Medium",
                leetcodeId: 102,
                link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            },
            {
                id: "b75-36",
                name: "Binary Tree Right Side View",
                difficulty: "Medium",
                leetcodeId: 199,
                link: "https://leetcode.com/problems/binary-tree-right-side-view/",
            },
            {
                id: "b75-37",
                name: "Count Good Nodes in Binary Tree",
                difficulty: "Medium",
                leetcodeId: 1448,
                link: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
            },
            {
                id: "b75-38",
                name: "Validate Binary Search Tree",
                difficulty: "Medium",
                leetcodeId: 98,
                link: "https://leetcode.com/problems/validate-binary-search-tree/",
            },
            {
                id: "b75-39",
                name: "Kth Smallest Element in a BST",
                difficulty: "Medium",
                leetcodeId: 230,
                link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
            },
            {
                id: "b75-40",
                name: "Construct Binary Tree from Preorder and Inorder",
                difficulty: "Medium",
                leetcodeId: 105,
                link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
            },
            {
                id: "b75-41",
                name: "Binary Tree Maximum Path Sum",
                difficulty: "Hard",
                leetcodeId: 124,
                link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
            },
            {
                id: "b75-42",
                name: "Serialize and Deserialize Binary Tree",
                difficulty: "Hard",
                leetcodeId: 297,
                link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
            },
        ],
    },

    // ============================================
    // 8. TRIES (3 problems)
    // ============================================
    {
        id: "tries",
        name: "Tries",
        nameVi: "Cây Tiền Tố",
        icon: "🔤",
        problems: [
            {
                id: "b75-43",
                name: "Implement Trie (Prefix Tree)",
                difficulty: "Medium",
                leetcodeId: 208,
                link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
            },
            {
                id: "b75-44",
                name: "Design Add and Search Words Data Structure",
                difficulty: "Medium",
                leetcodeId: 211,
                link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
            },
            {
                id: "b75-45",
                name: "Word Search II",
                difficulty: "Hard",
                leetcodeId: 212,
                link: "https://leetcode.com/problems/word-search-ii/",
            },
        ],
    },

    // ============================================
    // 9. HEAP / PRIORITY QUEUE (3 problems)
    // ============================================
    {
        id: "heap",
        name: "Heap / Priority Queue",
        nameVi: "Heap / Hàng Đợi Ưu Tiên",
        icon: "⛰️",
        problems: [
            {
                id: "b75-46",
                name: "Kth Largest Element in a Stream",
                difficulty: "Easy",
                leetcodeId: 703,
                link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
            },
            {
                id: "b75-47",
                name: "Last Stone Weight",
                difficulty: "Easy",
                leetcodeId: 1046,
                link: "https://leetcode.com/problems/last-stone-weight/",
            },
            {
                id: "b75-48",
                name: "K Closest Points to Origin",
                difficulty: "Medium",
                leetcodeId: 973,
                link: "https://leetcode.com/problems/k-closest-points-to-origin/",
            },
            {
                id: "b75-49",
                name: "Kth Largest Element in an Array",
                difficulty: "Medium",
                leetcodeId: 215,
                link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
            },
            {
                id: "b75-50",
                name: "Task Scheduler",
                difficulty: "Medium",
                leetcodeId: 621,
                link: "https://leetcode.com/problems/task-scheduler/",
            },
            {
                id: "b75-51",
                name: "Find Median from Data Stream",
                difficulty: "Hard",
                leetcodeId: 295,
                link: "https://leetcode.com/problems/find-median-from-data-stream/",
            },
        ],
    },

    // ============================================
    // 10. BACKTRACKING (2 problems)
    // ============================================
    {
        id: "backtracking",
        name: "Backtracking",
        nameVi: "Quay Lui",
        icon: "↩️",
        problems: [
            {
                id: "b75-52",
                name: "Combination Sum",
                difficulty: "Medium",
                leetcodeId: 39,
                link: "https://leetcode.com/problems/combination-sum/",
            },
            {
                id: "b75-53",
                name: "Word Search",
                difficulty: "Medium",
                leetcodeId: 79,
                link: "https://leetcode.com/problems/word-search/",
            },
        ],
    },

    // ============================================
    // 11. GRAPHS (6 problems)
    // ============================================
    {
        id: "graphs",
        name: "Graphs",
        nameVi: "Đồ Thị",
        icon: "🕸️",
        problems: [
            {
                id: "b75-54",
                name: "Number of Islands",
                difficulty: "Medium",
                leetcodeId: 200,
                link: "https://leetcode.com/problems/number-of-islands/",
            },
            {
                id: "b75-55",
                name: "Clone Graph",
                difficulty: "Medium",
                leetcodeId: 133,
                link: "https://leetcode.com/problems/clone-graph/",
            },
            {
                id: "b75-56",
                name: "Pacific Atlantic Water Flow",
                difficulty: "Medium",
                leetcodeId: 417,
                link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
            },
            {
                id: "b75-57",
                name: "Course Schedule",
                difficulty: "Medium",
                leetcodeId: 207,
                link: "https://leetcode.com/problems/course-schedule/",
            },
            {
                id: "b75-58",
                name: "Course Schedule II",
                difficulty: "Medium",
                leetcodeId: 210,
                link: "https://leetcode.com/problems/course-schedule-ii/",
            },
            {
                id: "b75-59",
                name: "Number of Connected Components in Undirected Graph",
                difficulty: "Medium",
                leetcodeId: 323,
                link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
                isPremium: true,
            },
            {
                id: "b75-60",
                name: "Graph Valid Tree",
                difficulty: "Medium",
                leetcodeId: 261,
                link: "https://leetcode.com/problems/graph-valid-tree/",
                isPremium: true,
            },
        ],
    },

    // ============================================
    // 12. ADVANCED GRAPHS (1 problem)
    // ============================================
    {
        id: "advanced-graphs",
        name: "Advanced Graphs",
        nameVi: "Đồ Thị Nâng Cao",
        icon: "🌐",
        problems: [
            {
                id: "b75-61",
                name: "Alien Dictionary",
                difficulty: "Hard",
                leetcodeId: 269,
                link: "https://leetcode.com/problems/alien-dictionary/",
                isPremium: true,
            },
        ],
    },

    // ============================================
    // 13. 1-D DYNAMIC PROGRAMMING (10 problems)
    // ============================================
    {
        id: "dp-1d",
        name: "1-D Dynamic Programming",
        nameVi: "Quy Hoạch Động 1D",
        icon: "📈",
        problems: [
            {
                id: "b75-62",
                name: "Climbing Stairs",
                difficulty: "Easy",
                leetcodeId: 70,
                link: "https://leetcode.com/problems/climbing-stairs/",
            },
            {
                id: "b75-63",
                name: "Min Cost Climbing Stairs",
                difficulty: "Easy",
                leetcodeId: 746,
                link: "https://leetcode.com/problems/min-cost-climbing-stairs/",
            },
            {
                id: "b75-64",
                name: "House Robber",
                difficulty: "Medium",
                leetcodeId: 198,
                link: "https://leetcode.com/problems/house-robber/",
            },
            {
                id: "b75-65",
                name: "House Robber II",
                difficulty: "Medium",
                leetcodeId: 213,
                link: "https://leetcode.com/problems/house-robber-ii/",
            },
            {
                id: "b75-66",
                name: "Longest Palindromic Substring",
                difficulty: "Medium",
                leetcodeId: 5,
                link: "https://leetcode.com/problems/longest-palindromic-substring/",
            },
            {
                id: "b75-67",
                name: "Palindromic Substrings",
                difficulty: "Medium",
                leetcodeId: 647,
                link: "https://leetcode.com/problems/palindromic-substrings/",
            },
            {
                id: "b75-68",
                name: "Decode Ways",
                difficulty: "Medium",
                leetcodeId: 91,
                link: "https://leetcode.com/problems/decode-ways/",
            },
            {
                id: "b75-69",
                name: "Coin Change",
                difficulty: "Medium",
                leetcodeId: 322,
                link: "https://leetcode.com/problems/coin-change/",
            },
            {
                id: "b75-70",
                name: "Maximum Product Subarray",
                difficulty: "Medium",
                leetcodeId: 152,
                link: "https://leetcode.com/problems/maximum-product-subarray/",
            },
            {
                id: "b75-71",
                name: "Word Break",
                difficulty: "Medium",
                leetcodeId: 139,
                link: "https://leetcode.com/problems/word-break/",
            },
            {
                id: "b75-72",
                name: "Longest Increasing Subsequence",
                difficulty: "Medium",
                leetcodeId: 300,
                link: "https://leetcode.com/problems/longest-increasing-subsequence/",
            },
        ],
    },

    // ============================================
    // 14. 2-D DYNAMIC PROGRAMMING (2 problems)
    // ============================================
    {
        id: "dp-2d",
        name: "2-D Dynamic Programming",
        nameVi: "Quy Hoạch Động 2D",
        icon: "📊",
        problems: [
            {
                id: "b75-73",
                name: "Unique Paths",
                difficulty: "Medium",
                leetcodeId: 62,
                link: "https://leetcode.com/problems/unique-paths/",
            },
            {
                id: "b75-74",
                name: "Longest Common Subsequence",
                difficulty: "Medium",
                leetcodeId: 1143,
                link: "https://leetcode.com/problems/longest-common-subsequence/",
            },
        ],
    },

    // ============================================
    // 15. GREEDY (2 problems)
    // ============================================
    {
        id: "greedy",
        name: "Greedy",
        nameVi: "Tham Lam",
        icon: "💰",
        problems: [
            {
                id: "b75-75",
                name: "Maximum Subarray",
                difficulty: "Medium",
                leetcodeId: 53,
                link: "https://leetcode.com/problems/maximum-subarray/",
            },
            {
                id: "b75-76",
                name: "Jump Game",
                difficulty: "Medium",
                leetcodeId: 55,
                link: "https://leetcode.com/problems/jump-game/",
            },
        ],
    },

    // ============================================
    // 16. INTERVALS (6 problems)
    // ============================================
    {
        id: "intervals",
        name: "Intervals",
        nameVi: "Khoảng",
        icon: "📅",
        problems: [
            {
                id: "b75-77",
                name: "Insert Interval",
                difficulty: "Medium",
                leetcodeId: 57,
                link: "https://leetcode.com/problems/insert-interval/",
            },
            {
                id: "b75-78",
                name: "Merge Intervals",
                difficulty: "Medium",
                leetcodeId: 56,
                link: "https://leetcode.com/problems/merge-intervals/",
            },
            {
                id: "b75-79",
                name: "Non-overlapping Intervals",
                difficulty: "Medium",
                leetcodeId: 435,
                link: "https://leetcode.com/problems/non-overlapping-intervals/",
            },
            {
                id: "b75-80",
                name: "Meeting Rooms",
                difficulty: "Easy",
                leetcodeId: 252,
                link: "https://leetcode.com/problems/meeting-rooms/",
                isPremium: true,
            },
            {
                id: "b75-81",
                name: "Meeting Rooms II",
                difficulty: "Medium",
                leetcodeId: 253,
                link: "https://leetcode.com/problems/meeting-rooms-ii/",
                isPremium: true,
            },
        ],
    },

    // ============================================
    // 17. MATH & GEOMETRY (3 problems)
    // ============================================
    {
        id: "math-geometry",
        name: "Math & Geometry",
        nameVi: "Toán & Hình Học",
        icon: "📐",
        problems: [
            {
                id: "b75-82",
                name: "Rotate Image",
                difficulty: "Medium",
                leetcodeId: 48,
                link: "https://leetcode.com/problems/rotate-image/",
            },
            {
                id: "b75-83",
                name: "Spiral Matrix",
                difficulty: "Medium",
                leetcodeId: 54,
                link: "https://leetcode.com/problems/spiral-matrix/",
            },
            {
                id: "b75-84",
                name: "Set Matrix Zeroes",
                difficulty: "Medium",
                leetcodeId: 73,
                link: "https://leetcode.com/problems/set-matrix-zeroes/",
            },
        ],
    },

    // ============================================
    // 18. BIT MANIPULATION (5 problems)
    // ============================================
    {
        id: "bit-manipulation",
        name: "Bit Manipulation",
        nameVi: "Thao Tác Bit",
        icon: "🔢",
        problems: [
            {
                id: "b75-85",
                name: "Single Number",
                difficulty: "Easy",
                leetcodeId: 136,
                link: "https://leetcode.com/problems/single-number/",
            },
            {
                id: "b75-86",
                name: "Number of 1 Bits",
                difficulty: "Easy",
                leetcodeId: 191,
                link: "https://leetcode.com/problems/number-of-1-bits/",
            },
            {
                id: "b75-87",
                name: "Counting Bits",
                difficulty: "Easy",
                leetcodeId: 338,
                link: "https://leetcode.com/problems/counting-bits/",
            },
            {
                id: "b75-88",
                name: "Reverse Bits",
                difficulty: "Easy",
                leetcodeId: 190,
                link: "https://leetcode.com/problems/reverse-bits/",
            },
            {
                id: "b75-89",
                name: "Missing Number",
                difficulty: "Easy",
                leetcodeId: 268,
                link: "https://leetcode.com/problems/missing-number/",
            },
            {
                id: "b75-90",
                name: "Sum of Two Integers",
                difficulty: "Medium",
                leetcodeId: 371,
                link: "https://leetcode.com/problems/sum-of-two-integers/",
            },
        ],
    },
];

// Helper functions
export function getAllProblems(): Blind75Problem[] {
    return blind75Data.flatMap(category => category.problems);
}

export function getProblemsByCategory(categoryId: string): Blind75Problem[] {
    const category = blind75Data.find(c => c.id === categoryId);
    return category?.problems || [];
}

export function getCategoryById(categoryId: string): Blind75Category | undefined {
    return blind75Data.find(c => c.id === categoryId);
}

export function getTotalProblems(): number {
    return getAllProblems().length;
}

export function getProblemsByDifficulty(difficulty: 'Easy' | 'Medium' | 'Hard'): Blind75Problem[] {
    return getAllProblems().filter(p => p.difficulty === difficulty);
}

// Stats
export const blind75Stats = {
    total: getAllProblems().length,
    easy: getProblemsByDifficulty('Easy').length,
    medium: getProblemsByDifficulty('Medium').length,
    hard: getProblemsByDifficulty('Hard').length,
    categories: blind75Data.length,
};
