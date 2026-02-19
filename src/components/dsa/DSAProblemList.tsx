"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Plus, CheckCircle2, Circle, Crown } from "lucide-react";
import { Blind75Problem, Blind75Category } from "@/data/blind75";

const difficultyColors = {
    Easy: "text-[var(--accent-green)] bg-[var(--accent-green)]/10",
    Medium: "text-[var(--accent-amber)] bg-[var(--accent-amber)]/10",
    Hard: "text-[var(--accent-red)] bg-[var(--accent-red)]/10",
};

const difficultyLabels = {
    Easy: "Dễ",
    Medium: "Trung bình",
    Hard: "Khó",
};

interface DSAProblemListProps {
    category: Blind75Category | null;
    filteredProblems: Blind75Problem[];
    getStoreProblem: (problem: Blind75Problem) => { solved: boolean } | undefined;
    onToggle: (problem: Blind75Problem) => void;
    onAddClick: () => void;
}

export default function DSAProblemList({ category, filteredProblems, getStoreProblem, onToggle, onAddClick }: DSAProblemListProps) {
    if (!category) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="card p-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
            >
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">{category.icon}</span>
                        <div>
                            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                                {category.nameVi}
                            </h2>
                            <p className="text-sm text-[var(--text-muted)]">
                                {category.name} • {category.problems.length} bài
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={onAddClick}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--accent-primary)] text-white text-sm hover:bg-[var(--accent-primary)]/80 transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Thêm bài
                    </button>
                </div>

                <div className="space-y-2">
                    {filteredProblems.length === 0 ? (
                        <div className="text-center py-8 text-[var(--text-muted)]">
                            Không có bài nào với độ khó đã chọn
                        </div>
                    ) : (
                        filteredProblems.map((problem, index) => {
                            const storeProblem = getStoreProblem(problem);
                            const isSolved = storeProblem?.solved || false;

                            return (
                                <motion.div
                                    key={problem.id}
                                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 group ${isSolved ? 'bg-[var(--accent-green)]/10' : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)]'}`}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.03 }}
                                    onClick={() => onToggle(problem)}
                                >
                                    {isSolved ? (
                                        <CheckCircle2 className="w-5 h-5 text-[var(--accent-green)] flex-shrink-0" />
                                    ) : (
                                        <Circle className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--accent-primary)] flex-shrink-0" />
                                    )}

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className={`text-sm ${isSolved ? 'text-[var(--text-secondary)] line-through' : 'text-[var(--text-primary)]'}`}>
                                                {problem.leetcodeId}. {problem.name}
                                            </span>
                                            {problem.isPremium && (
                                                <Crown className="w-4 h-4 text-[var(--accent-amber)]" />
                                            )}
                                        </div>
                                    </div>

                                    <span className={`text-xs px-2 py-0.5 rounded ${difficultyColors[problem.difficulty]}`}>
                                        {difficultyLabels[problem.difficulty]}
                                    </span>

                                    <a
                                        href={problem.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[var(--accent-cyan)] hover:text-[var(--accent-cyan)]/80 p-1"
                                        onClick={(e) => e.stopPropagation()}
                                        title="Mở trên LeetCode"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </motion.div>
                            );
                        })
                    )}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
