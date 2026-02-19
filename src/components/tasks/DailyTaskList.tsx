"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Circle, Plus, Target, Trash2, Edit2, X, Check } from "lucide-react";

interface DailyTask {
    id: string;
    title: string;
    completed: boolean;
    date: string;
}

interface DailyTaskListProps {
    tasks: DailyTask[];
    onToggle: (id: string) => void;
    onAdd: (title: string) => void;
    onDelete: (id: string) => void;
    onUpdate: (id: string, title: string) => void;
}

export default function DailyTaskList({ tasks, onToggle, onAdd, onDelete, onUpdate }: DailyTaskListProps) {
    const [newTask, setNewTask] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingTitle, setEditingTitle] = useState("");

    const completedCount = tasks.filter(t => t.completed).length;

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTask.trim()) return;
        onAdd(newTask.trim());
        setNewTask("");
    };

    const startEditing = (id: string, title: string) => {
        setEditingId(id);
        setEditingTitle(title);
    };

    const saveEdit = (id: string) => {
        if (!editingTitle.trim()) {
            setEditingId(null);
            return;
        }
        onUpdate(id, editingTitle.trim());
        setEditingId(null);
        setEditingTitle("");
    };

    const cancelEdit = () => {
        setEditingId(null);
        setEditingTitle("");
    };

    return (
        <motion.div
            className="card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-[var(--accent-green)]" />
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                        Công việc hôm nay
                    </h2>
                </div>
                <span className="text-sm text-[var(--text-secondary)]">
                    {completedCount}/{tasks.length} hoàn thành
                </span>
            </div>

            {/* Thanh tiến độ */}
            <div className="progress-bar mb-6">
                <motion.div
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: tasks.length > 0 ? `${(completedCount / tasks.length) * 100}%` : '0%' }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Danh sách Task */}
            <ul className="space-y-3 mb-6">
                <AnimatePresence mode="popLayout">
                    {tasks.length === 0 ? (
                        <motion.li
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-8 text-[var(--text-muted)]"
                        >
                            Chưa có công việc nào. Thêm mới bên dưới! 👇
                        </motion.li>
                    ) : (
                        tasks.map((task) => (
                            <motion.li
                                key={task.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20, height: 0 }}
                                className={`
                                    flex items-center gap-3 p-3 rounded-lg group
                                    transition-all duration-200
                                    ${task.completed
                                        ? 'bg-[var(--accent-green)]/10'
                                        : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)]'
                                    }
                                `}
                            >
                                {/* Checkbox */}
                                <button
                                    onClick={() => onToggle(task.id)}
                                    className="flex-shrink-0 focus:outline-none"
                                >
                                    {task.completed ? (
                                        <CheckCircle2 className="w-6 h-6 text-[var(--accent-green)]" />
                                    ) : (
                                        <Circle className="w-6 h-6 text-[var(--text-muted)] hover:text-[var(--accent-primary)]" />
                                    )}
                                </button>

                                {/* Tiêu đề Task */}
                                {editingId === task.id ? (
                                    <div className="flex-1 flex items-center gap-2">
                                        <input
                                            type="text"
                                            value={editingTitle}
                                            onChange={(e) => setEditingTitle(e.target.value)}
                                            className="flex-1 px-2 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--accent-primary)] text-[var(--text-primary)] focus:outline-none"
                                            autoFocus
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') saveEdit(task.id);
                                                if (e.key === 'Escape') cancelEdit();
                                            }}
                                        />
                                        <button
                                            onClick={() => saveEdit(task.id)}
                                            className="p-1 text-[var(--accent-green)] hover:bg-[var(--accent-green)]/20 rounded"
                                        >
                                            <Check className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={cancelEdit}
                                            className="p-1 text-[var(--text-muted)] hover:bg-[var(--bg-elevated)] rounded"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <span
                                            className={`
                                                flex-1 text-sm cursor-pointer
                                                ${task.completed
                                                    ? 'text-[var(--text-secondary)] line-through'
                                                    : 'text-[var(--text-primary)]'
                                                }
                                            `}
                                            onClick={() => onToggle(task.id)}
                                        >
                                            {task.title}
                                        </span>

                                        {/* Nút hành động */}
                                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => startEditing(task.id, task.title)}
                                                className="p-1.5 text-[var(--text-muted)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)] rounded"
                                                title="Sửa"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => onDelete(task.id)}
                                                className="p-1.5 text-[var(--text-muted)] hover:text-red-500 hover:bg-red-500/10 rounded"
                                                title="Xóa"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </motion.li>
                        ))
                    )}
                </AnimatePresence>
            </ul>

            {/* Form thêm Task */}
            <form onSubmit={handleAddTask} className="flex gap-2">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Thêm công việc mới..."
                    className="
                        flex-1 px-4 py-2 rounded-lg
                        bg-[var(--bg-secondary)] border border-[var(--border-default)]
                        text-[var(--text-primary)] placeholder-[var(--text-muted)]
                        focus:outline-none focus:border-[var(--accent-primary)]
                        transition-colors
                    "
                />
                <button
                    type="submit"
                    className="
                        px-4 py-2 rounded-lg
                        bg-[var(--accent-primary)] text-white
                        hover:bg-[var(--accent-primary)]/80
                        transition-colors flex items-center gap-2
                    "
                >
                    <Plus className="w-4 h-4" />
                    <span className="hidden sm:inline">Thêm</span>
                </button>
            </form>
        </motion.div>
    );
}
