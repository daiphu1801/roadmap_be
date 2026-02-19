# 🚀 Backend SE Roadmap Tracker - Implementation Plan

## Tổng Quan Dự Án

Xây dựng website theo dõi tiến độ học tập lộ trình **"Chiến Binh Backend SE: 6 Tháng"** với giao diện hiện đại, phối màu đen chuyên nghiệp.

### Tech Stack
| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| **Next.js** | 16.1.6 | Framework React với App Router |
| **React** | 19.2.3 | UI Library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Styling utility-first |
| **Framer Motion** | 11.x | Animations |
| **Lucide React** | - | Icon library |
| **Zustand** | - | State management |
| **date-fns** | - | Date manipulation |

---

## 🎨 Design System

### Color Palette - Navy Blue Professional

```css
/* Primary Colors - Navy Blue Gradient Theme */
--bg-primary: #141e30;        /* Deep Navy - Main background */
--bg-secondary: #1a2640;      /* Navy Surface */
--bg-card: #1f2f4a;           /* Card background */
--bg-elevated: #243654;       /* Elevated surfaces */

/* Accent Colors */
--accent-primary: #3f5e96;    /* Primary Blue - Main accent */
--accent-green: #22C55E;      /* Success/Progress */
--accent-cyan: #06B6D4;       /* Info/Links */
--accent-amber: #F59E0B;      /* Warning/Pending */
--accent-red: #EF4444;        /* Error/Incomplete */

/* Text Colors */
--text-primary: #F8FAFC;      /* White - Headers */
--text-secondary: #94A3B8;    /* Slate - Body text */
--text-muted: #64748B;        /* Muted text */

/* Border & Glow */
--border-default: #2a3f5f;    /* Navy borders */
--border-hover: #3f5e96;      /* Accent on hover */
--glow-primary: rgba(63, 94, 150, 0.4);
--glow-green: rgba(34, 197, 94, 0.3);
```

**Gradient Background Option:**
```css
background: linear-gradient(135deg, #141e30 0%, #243b55 100%);
```

### Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| **Display** | Fira Code | 700 | 48px |
| **H1** | Inter | 700 | 36px |
| **H2** | Inter | 600 | 28px |
| **H3** | Inter | 600 | 20px |
| **Body** | Inter | 400 | 16px |
| **Code** | Fira Code | 400 | 14px |
| **Caption** | Inter | 400 | 12px |

### Spacing System (8px base)

```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
```

### Effects

| Effect | CSS |
|--------|-----|
| **Card shadow** | `0 4px 24px rgba(0, 0, 0, 0.4)` |
| **Glow effect** | `0 0 20px var(--glow-green)` |
| **Glass** | `backdrop-filter: blur(12px); background: rgba(26, 26, 36, 0.8)` |
| **Border radius** | Cards: `16px`, Buttons: `12px`, Badges: `8px` |
| **Transitions** | `all 0.2s ease-out` |

---

## 📐 Page Layouts (Header Navigation)

### Header Component Design

```
┌─────────────────────────────────────────────────────────────────────────┐
│  🚀 LEARNTRACK          Dashboard  Roadmap  Tasks  DSA  Notes    🔥 15 │
│  ───────────────────────────────────────────────────────────────────────│
│  Month 2: Concurrency + DSA          ████████████░░░░░░░░░░░░░░    45%  │
└─────────────────────────────────────────────────────────────────────────┘
```

**Header Features:**
- Logo + Brand name bên trái
- Navigation links ở giữa
- Streak counter bên phải
- Sub-header: Current month + Overall progress bar

---

### 1. Dashboard (Trang chính)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [=== HEADER ===]                                                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  Welcome back! 👋  Day 35 of your Backend SE journey                    │
│                                                                         │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌───────────────┐│
│  │    ╭───╮      │ │     🔥        │ │     📊        │ │     📅        ││
│  │   │ 42% │     │ │               │ │               │ │               ││
│  │    ╰───╯      │ │     15        │ │     45        │ │     32        ││
│  │               │ │    days       │ │    solved     │ │    active     ││
│  │  Overall      │ │   streak      │ │     DSA       │ │    days       ││
│  │  Progress     │ │               │ │               │ │               ││
│  └───────────────┘ └───────────────┘ └───────────────┘ └───────────────┘│
│                                                                         │
│  📅 Roadmap Overview                                                    │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐│
│  │ MONTH 1 │ │ MONTH 2 │ │ MONTH 3 │ │ MONTH 4 │ │ MONTH 5 │ │ MONTH 6 ││
│  │ Java    │ │Concur-  │ │Database │ │ Spring  │ │Security │ │ DevOps  ││
│  │ Core    │ │ rency   │ │  + SQL  │ │  Boot   │ │  Async  │ │  CI/CD  ││
│  │ ████░░  │ │ ███░░░  │ │ ░░░░░░  │ │ ░░░░░░  │ │ ░░░░░░  │ │ ░░░░░░  ││
│  │  70%    │ │  45%    │ │   0%    │ │   0%    │ │   0%    │ │   0%    ││
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘│
│                                                                         │
│  📈 Learning Activity (Last 6 months)                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │  Jan    Feb    Mar    Apr    May    Jun                             ││
│  │  ░▓█░░  ░░▓█░  ░░░░░  ░░░░░  ░░░░░  ░░░░░                          ││
│  │  ░▓██░  ░▓▓█░  ░░░░░  ░░░░░  ░░░░░  ░░░░░                          ││
│  │  ▓▓██▓  ░▓██░  ░░░░░  ░░░░░  ░░░░░  ░░░░░                          ││
│  │  █████  ▓▓██░  ░░░░░  ░░░░░  ░░░░░  ░░░░░                          ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 2. Roadmap View (Chi tiết tháng)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [=== HEADER ===]                                                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ← Back to Dashboard                                                    │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │  📅 THÁNG 1: JAVA CORE + DSA NỀN TẢNG                               ││
│  │  Mục tiêu: Sửa gốc yếu DSA, hiểu sâu bản chất Java                  ││
│  │  Progress: ██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  70%  ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐       │
│  │  🔥 Java Core Deep Dive     │  │  🧮 DSA Daily Routine       │       │
│  │  ─────────────────────────  │  │  ─────────────────────────  │       │
│  │  ████████░░░░░░░░  60%      │  │  ██████████████░░  80%      │       │
│  │                             │  │                             │       │
│  │  ☑ OOP (Composition...)     │  │  ☑ Arrays (10/10)           │       │
│  │  ☑ Memory Model             │  │  ☑ String (10/10)          │       │
│  │  ☐ Internals (equals...)    │  │  ☑ HashMap (8/10)          │       │
│  │  ☐ Collections              │  │  ☐ Two Pointers (2/10)      │       │
│  │                             │  │  ☐ Sliding Window (0/10)    │       │
│  └─────────────────────────────┘  └─────────────────────────────┘       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 3. Daily Tasks View

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [=== HEADER ===]                                                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  📅 Today: Monday, Feb 3, 2026                                          │
│  Week 5 of Month 2 - Concurrency                                        │
│                                                                         │
│  ┌───────────────────────────────────┐ ┌───────────────────────────────┐│
│  │  🎯 Today's Tasks                 │ │  📊 This Week                 ││
│  │  ───────────────────────────────  │ │  ───────────────────────────  ││
│  │                                   │ │                               ││
│  │  ☑ Solve 2 DSA (Easy/Medium)      │ │   Mon  Tue  Wed  Thu  Fri    ││
│  │  ☐ Read: Thread vs Runnable       │ │   [✓]  [✓]  [ ]  [ ]  [ ]    ││
│  │  ☐ Practice: ExecutorService      │ │                               ││
│  │  ☐ Review: Yesterday's notes      │ │   2/5 days completed          ││
│  │  ☐ Mini-project: 30 mins          │ │                               ││
│  │                                   │ │   Streak: 🔥 15 days          ││
│  │  ─────────────────────────────    │ │                               ││
│  │  [+ Add Task]                     │ │                               ││
│  └───────────────────────────────────┘ └───────────────────────────────┘│
│                                                                         │
│  📝 Quick Notes                                                         │
│  ┌─────────────────────────────────────────────────────────────────────┐│
│  │  Today I learned about synchronized blocks and why volatile...      ││
│  └─────────────────────────────────────────────────────────────────────┘│
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 4. DSA Progress View

```
┌─────────────────────────────────────────────────────────────────────────┐
│  [=== HEADER ===]                                                       │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  🧮 DSA Progress                                                        │
│  Total: 45/180 solved (25%)  ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ Arrays   │ │ String   │ │ HashMap  │ │Two Point │ │ Sliding  │       │
│  │ 10/10 ✓  │ │ 10/10 ✓  │ │  8/10    │ │  2/10    │ │  0/10    │       │
│  │ ████████ │ │ ████████ │ │ ██████░░ │ │ ██░░░░░░ │ │ ░░░░░░░░ │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
│                                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │  Stack   │ │  Queue   │ │LinkedList│ │ BinSearch│ │  Trees   │       │
│  │  4/8     │ │  3/8     │ │  5/10    │ │  2/10    │ │  1/10    │       │
│  │ ████░░░░ │ │ ███░░░░░ │ │ █████░░░ │ │ ██░░░░░░ │ │ █░░░░░░░ │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
│                                                                         │
│  📋 Recent Problems                     📊 By Difficulty                │
│  ┌─────────────────────────────┐       ┌─────────────────────────────┐  │
│  │ • Two Sum - Easy ✓          │       │ Easy:   ████████░░  25/35   │  │
│  │ • Valid Parentheses - Easy  │       │ Medium: ████░░░░░░  15/40   │  │
│  │ • Merge Intervals - Medium  │       │ Hard:   █░░░░░░░░░   5/25   │  │
│  │ • LRU Cache - Medium        │       │                             │  │
│  │ [+ Add Problem]             │       │                             │  │
│  └─────────────────────────────┘       └─────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 🧩 Component Structure (Header-based)

### Directory Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout với Header
│   ├── page.tsx             # Dashboard
│   ├── roadmap/
│   │   ├── page.tsx         # Roadmap overview
│   │   └── [month]/page.tsx # Monthly detail
│   ├── tasks/page.tsx       # Daily tasks
│   ├── dsa/page.tsx         # DSA progress
│   └── notes/page.tsx       # Notes
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Main navigation header
│   │   ├── ProgressBar.tsx      # Sub-header progress
│   │   ├── PageContainer.tsx    # Content wrapper
│   │   └── MobileMenu.tsx       # Hamburger menu for mobile
│   │
│   ├── dashboard/
│   │   ├── WelcomeBanner.tsx    # Day count welcome
│   │   ├── StatsGrid.tsx        # 4 stat cards
│   │   ├── ProgressRing.tsx     # Circular progress
│   │   ├── StreakCounter.tsx    # Fire streak
│   │   ├── MonthlyCards.tsx     # 6 month grid
│   │   └── ContributionHeatmap.tsx
│   │
│   ├── roadmap/
│   │   ├── MonthHeader.tsx      # Month title + goal
│   │   ├── TopicCard.tsx        # Category card
│   │   ├── TaskCheckbox.tsx     # Individual task
│   │   └── BackButton.tsx       # Navigation back
│   │
│   ├── tasks/
│   │   ├── TodayTasks.tsx       # Today's checklist
│   │   ├── WeekProgress.tsx     # Week days tracker
│   │   ├── AddTaskModal.tsx     # Add custom task
│   │   └── QuickNotes.tsx       # Notes textarea
│   │
│   ├── dsa/
│   │   ├── DSAOverview.tsx      # Total progress
│   │   ├── TopicGrid.tsx        # Topic cards grid
│   │   ├── RecentProblems.tsx   # Latest solved
│   │   ├── DifficultyStats.tsx  # Easy/Medium/Hard
│   │   └── AddProblemModal.tsx  # Log new problem
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Checkbox.tsx
│       ├── Modal.tsx
│       ├── ProgressBar.tsx
│       └── Tooltip.tsx
│
├── lib/
│   ├── store.ts            # Zustand store
│   ├── types.ts            # TypeScript types
│   ├── utils.ts            # Helpers
│   └── constants.ts        # Colors, roadmap data
│
└── data/
    ├── roadmap.ts          # 6 months roadmap structure
    └── dsa-topics.ts       # DSA topics & targets
```

---

## 📊 Data Model

### Types Definition

```typescript
// Roadmap Structure
interface Month {
  id: number;
  title: string;
  goal: string;
  topics: Topic[];
  startDate: Date;
  endDate: Date;
}

interface Topic {
  id: string;
  name: string;
  items: TaskItem[];
}

interface TaskItem {
  id: string;
  title: string;
  completed: boolean;
  completedAt?: Date;
  notes?: string;
}

// DSA Tracking
interface DSATopic {
  id: string;
  name: string;
  target: number;
  problems: Problem[];
}

interface Problem {
  id: string;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  solvedAt: Date;
  link?: string;
  notes?: string;
}

// Daily Activity
interface DailyLog {
  date: string; // YYYY-MM-DD
  tasksCompleted: string[];
  dsaSolved: number;
  hoursStudied: number;
  notes?: string;
}

// User Progress State
interface ProgressState {
  currentStreak: number;
  longestStreak: number;
  totalDsaSolved: number;
  activeDays: string[];
  completedTopics: string[];
}
```

---

## 📚 NỘI DUNG LỘ TRÌNH 6 THÁNG (CHI TIẾT)

### 📅 THÁNG 1: JAVA CORE + DSA NỀN TẢNG (RE-BOOT)

**Mục tiêu:** Sửa gốc yếu DSA, hiểu sâu bản chất vận hành của ngôn ngữ Java.

#### 1. Java Core Deep Dive
| Task | Nội dung chi tiết | Status |
|------|-------------------|--------|
| OOP thực chất | Composition over Inheritance, Design Patterns (Singleton, Factory) | ☐ |
| Memory Model | Phân biệt Heap vs Stack, Garbage Collection vận hành thực tế | ☐ |
| Internals | equals(), hashCode() hoạt động trong HashMap, HashSet | ☐ |
| Collections | Cấu trúc dữ liệu bên dưới ArrayList, LinkedList, HashMap | ☐ |

#### 2. DSA (Daily Routine)
| Chủ đề | Target | Status |
|--------|--------|--------|
| Arrays | 10 bài | ☐ |
| String | 10 bài | ☐ |
| HashMap | 10 bài | ☐ |
| Two Pointers | 10 bài | ☐ |
| Sliding Window | 10 bài | ☐ |

**Quy tắc:** Giải ít nhất 2 bài/ngày. Luôn tự giải trước khi xem đáp án.

---

### 📅 THÁNG 2: CONCURRENCY + DSA TRUNG BÌNH

**Mục tiêu:** Hiểu cách hệ thống xử lý song song và tranh chấp tài nguyên.

#### 1. Java Concurrency
| Task | Nội dung chi tiết | Status |
|------|-------------------|--------|
| Cơ bản | Thread vs Runnable, vòng đời của Thread | ☐ |
| Xử lý tranh chấp | synchronized, volatile, Race condition, Deadlock | ☐ |
| Advanced | ExecutorService, ThreadPool, Atomic classes | ☐ |

#### 2. Mini-Task (Engineering Practice)
| Project | Yêu cầu | Status |
|---------|---------|--------|
| BookingLockManager | Viết module quản lý đặt chỗ, giả lập hàng trăm request, đảm bảo chỉ 1 người đặt thành công (không dùng Framework) | ☐ |

#### 3. DSA
| Chủ đề | Target | Status |
|--------|--------|--------|
| Stack | 8 bài | ☐ |
| Queue | 8 bài | ☐ |
| Linked List | 10 bài | ☐ |
| Binary Search | 10 bài | ☐ |
| Tree traversal | 10 bài | ☐ |

---

### 📅 THÁNG 3: DATABASE + SYSTEM THINKING

**Mục tiêu:** Nắm giữ "trái tim" của hệ thống - Cách dữ liệu được lưu trữ và bảo vệ.

#### 1. Database Mastery
| Task | Nội dung chi tiết | Status |
|------|-------------------|--------|
| SQL chuyên sâu | JOIN, INDEX, EXPLAIN ANALYZE để tối ưu truy vấn | ☐ |
| Độ tin cậy | ACID, Transaction Isolation Levels | ☐ |
| Locking | Optimistic vs Pessimistic locking | ☐ |

#### 2. Project Milestone (Pickleball Booking)
| Task | Yêu cầu | Status |
|------|---------|--------|
| Thiết kế | Xây dựng Schema cho hệ thống Booking | ☐ |
| Xử lý | Viết logic ngăn chặn "Double Booking" ở tầng Database | ☐ |
| Benchmark | Viết script giả lập 1000 requests để kiểm tra độ ổn định | ☐ |

#### 3. DSA
| Chủ đề | Target | Status |
|--------|--------|--------|
| Binary Search Tree | 10 bài | ☐ |
| Basic Recursion | 10 bài | ☐ |
| Heap (PriorityQueue) | 10 bài | ☐ |

---

### 📅 THÁNG 4: SPRING BOOT – TƯ DUY KỸ SƯ (NON-CRUD)

**Mục tiêu:** Sử dụng Framework như một công cụ, không bị lệ thuộc.

#### 1. Spring Internals
| Task | Nội dung chi tiết | Status |
|------|-------------------|--------|
| Bản chất | IoC và DI (Ưu tiên Constructor-based injection) | ☐ |
| Lifecycle | Quản lý vòng đời Bean, Global Exception Handler | ☐ |
| Standard | API chuẩn REST, Validation, Pagination & Filtering | ☐ |

#### 2. Testing (Phẩm chất SE)
| Task | Yêu cầu | Status |
|------|---------|--------|
| Unit Test | Viết Test cho Service layer bằng JUnit 5 + Mockito | ☐ |
| Concurrency Test | Viết các case kiểm thử cho xử lý đồng thời | ☐ |

---

### 📅 THÁNG 5: PERFORMANCE, SECURITY & ASYNC

**Mục tiêu:** Đảm bảo hệ thống chịu tải tốt và bảo mật.

#### 1. Security & Performance
| Task | Nội dung chi tiết | Status |
|------|-------------------|--------|
| Security | JWT (Stateless Auth), RBAC, Hashing password BCrypt | ☐ |
| Caching | Redis cho read-heavy endpoints, Invalidate Cache | ☐ |

#### 2. Asynchronous (Xử lý bất đồng bộ)
| Task | Yêu cầu | Status |
|------|---------|--------|
| Message Queue | RabbitMQ hoặc Kafka để gửi Email/Log Async | ☐ |

#### 3. DSA
| Chủ đề | Target | Status |
|--------|--------|--------|
| Graph BFS | 8 bài | ☐ |
| Graph DFS | 8 bài | ☐ |
| Backtracking cơ bản | 10 bài | ☐ |

---

### 📅 THÁNG 6: DEVOPS + HOÀN THIỆN SẢN PHẨM

**Mục tiêu:** Quy trình từ code đến triển khai thực tế.

#### 1. Containerization & CI/CD
| Task | Nội dung chi tiết | Status |
|------|-------------------|--------|
| Docker | Viết Dockerfile tối ưu, Docker Compose (App + DB + Redis) | ☐ |
| Automation | GitHub Actions tự động kiểm tra code khi push | ☐ |

#### 2. Deliverables (Sản phẩm bàn giao)
| Task | Yêu cầu | Status |
|------|---------|--------|
| Portfolio | Repo GitHub sạch sẽ, phân chia module rõ ràng | ☐ |
| Documentation | README chi tiết: Architecture, Trade-offs, System Diagram | ☐ |

---

### 💡 QUY TẮC VÀNG (SE PRINCIPLES)

| Quy tắc | Mô tả |
|---------|-------|
| **Code chay trước** | Luôn hiểu cách giải quyết bằng Java thuần trước khi dùng thư viện/framework |
| **Trade-off** | Luôn tự hỏi "Tại sao chọn cách này mà không chọn cách kia?" |
| **No Magic** | Không dùng @Annotation nếu không biết nó thực sự làm gì bên dưới |

---

## 🔧 Features Breakdown

### Phase 1: Core MVP
| Feature | Priority | Complexity |
|---------|----------|------------|
| Dashboard với overview | 🔴 High | Medium |
| 6-month roadmap cards | 🔴 High | Low |
| Monthly detail view | 🔴 High | Medium |
| Task checkbox toggle | 🔴 High | Low |
| LocalStorage persistence | 🔴 High | Low |

### Phase 2: Tracking
| Feature | Priority | Complexity |
|---------|----------|------------|
| Streak counter | 🟡 Medium | Low |
| DSA progress tracker | 🟡 Medium | Medium |
| Contribution heatmap | 🟡 Medium | High |
| Progress calculations | 🟡 Medium | Medium |

### Phase 3: Enhanced
| Feature | Priority | Complexity |
|---------|----------|------------|
| Notes per topic | 🟢 Low | Low |
| Export/Import data | 🟢 Low | Medium |
| Dark/Light toggle | 🟢 Low | Low |
| Animations | 🟢 Low | Medium |

---

## 🎯 UI Mockup Preview

### Dashboard Cards Preview

```
┌────────────────────────────────────────────────┐
│  ┌──────────────┐  ┌──────────────┐            │
│  │    ╭───╮     │  │    🔥        │            │
│  │   ╱     ╲    │  │              │            │
│  │  │  42%  │   │  │    15        │            │
│  │   ╲     ╱    │  │   days       │            │
│  │    ╰───╯     │  │   streak     │            │
│  │              │  │              │            │
│  │ Overall      │  │ Current      │            │
│  │ Progress     │  │ Streak       │            │
│  └──────────────┘  └──────────────┘            │
│                                                │
│  ┌──────────────┐  ┌──────────────┐            │
│  │   📊 45      │  │   📅 32      │            │
│  │   DSA        │  │   Active     │            │
│  │   Solved     │  │   Days       │            │
│  └──────────────┘  └──────────────┘            │
└────────────────────────────────────────────────┘
```

### Month Card Design

```
┌────────────────────────────────────────┐
│  THÁNG 1                          70%  │
│  ─────────────────────────────────────│
│  Java Core + DSA Nền Tảng              │
│                                        │
│  ████████████████░░░░░░░░░░░░░░░░░░░░  │
│                                        │
│  ☑ OOP Deep Dive                       │
│  ☑ Memory Model                        │
│  ☐ Internals                           │
│  ☐ Collections                         │
│                                        │
│  [View Details →]                      │
└────────────────────────────────────────┘
```

---

## 📝 Proposed Changes (Gợi ý thay đổi lộ trình)

> [!TIP]
> Dựa trên lộ trình gốc, tôi đề xuất một số bổ sung để tối ưu hơn:

### Tháng 1 - Bổ sung
- **Git Workflow**: Branching, merging, rebasing - kỹ năng dùng hàng ngày

### Tháng 2 - Bổ sung  
- **Debugging Skills**: Cách debug multi-threaded code với IDE

### Tháng 3 - Bổ sung
- **NoSQL Basics**: Redis/MongoDB overview để hiểu database landscape

### Tháng 4 - Bổ sung
- **API Documentation**: Swagger/OpenAPI - quan trọng trong enterprise

### Tháng 5 - Bổ sung
- **Monitoring Basics**: Prometheus, Grafana concepts

### DSA Schedule Đề Xuất

| Tuần | Chủ đề | Target |
|------|--------|--------|
| 1-4 | Arrays, String, HashMap | 40 bài |
| 5-8 | Two Pointers, Sliding Window | 30 bài |
| 9-12 | Stack, Queue, Linked List | 30 bài |
| 13-16 | Binary Search, Trees | 30 bài |
| 17-20 | Recursion, Backtracking | 25 bài |
| 21-24 | Graph (BFS/DFS), DP basics | 25 bài |

---

## ✅ Verification Plan

### Automated Tests
- Component renders correctly
- State management works
- LocalStorage persistence

### Manual Verification
- UI responsive trên mobile/tablet/desktop
- Dark mode contrast đảm bảo readability
- Animations smooth (60fps)
- Data persists sau reload

---

## 🚀 Estimated Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Phase 1 | 2-3 ngày | Dashboard + Roadmap view |
| Phase 2 | 2-3 ngày | Task tracking + DSA progress |
| Phase 3 | 1-2 ngày | Animations + Polish |

**Total: ~7-8 ngày**

---

## ❓ Questions for Review

1. **Layout**: Sidebar cố định bên trái có phù hợp không?
2. **Features**: Có cần thêm tính năng export data không?
3. **Roadmap**: Bạn muốn giữ nguyên hay áp dụng gợi ý bổ sung?
4. **Mobile**: Ưu tiên responsive cho mobile không?
