"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { blind75Data, Blind75Problem, blind75Stats } from "@/data/blind75";
import { useRoadmapStore } from "@/lib/store";

// Components
import DSAStats from "@/components/dsa/DSAStats";
import DSACategoryGrid from "@/components/dsa/DSACategoryGrid";
import DSAProblemList from "@/components/dsa/DSAProblemList";
import AddProblemModal from "@/components/dsa/AddProblemModal";

const difficultyLabels = { Easy: "Dễ", Medium: "Trung bình", Hard: "Khó" };

export default function DSAPage() {
    const { solvedProblems, addProblem, toggleProblem, getDsaStats } = useRoadmapStore();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newProblem, setNewProblem] = useState<{ name: string; difficulty: "Easy" | "Medium" | "Hard"; link: string }>({ name: "", difficulty: "Easy", link: "" });
    const [filterDifficulty, setFilterDifficulty] = useState<"all" | "Easy" | "Medium" | "Hard">("all");

    // Seed Blind 75 problems if store is empty
    useEffect(() => {
        if (solvedProblems.length === 0) {
            blind75Data.forEach(category => {
                category.problems.forEach(problem => {
                    addProblem({ name: problem.name, difficulty: problem.difficulty, topicId: category.id, solved: false, link: problem.link });
                });
            });
        }
    }, [solvedProblems.length, addProblem]);

    const getCategorySolvedCount = (categoryId: string): number =>
        solvedProblems.filter(p => p.topicId === categoryId && p.solved).length;

    const getStoreProblem = (blind75Problem: Blind75Problem) =>
        solvedProblems.find(p => p.name === blind75Problem.name && p.topicId === blind75Data.find(c => c.problems.includes(blind75Problem))?.id);

    const stats = getDsaStats();

    const handleToggleProblem = (blind75Problem: Blind75Problem) => {
        const storeProblem = getStoreProblem(blind75Problem);
        if (storeProblem) toggleProblem(storeProblem.id);
    };

    const handleAddProblem = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newProblem.name.trim() || !selectedCategory) return;
        addProblem({ name: newProblem.name.trim(), difficulty: newProblem.difficulty, topicId: selectedCategory, solved: false, link: newProblem.link || undefined });
        setNewProblem({ name: "", difficulty: "Easy", link: "" });
        setShowAddModal(false);
    };

    const getFilteredProblems = (problems: Blind75Problem[]) =>
        filterDifficulty === "all" ? problems : problems.filter(p => p.difficulty === filterDifficulty);

    const selectedCategoryData = selectedCategory ? blind75Data.find(c => c.id === selectedCategory) || null : null;

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <motion.div className="mb-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-3 mb-2">
                    <Code2 className="w-8 h-8 text-[var(--accent-cyan)]" />
                    <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                        NeetCode Blind 75
                    </h1>
                    <span className="px-2 py-1 text-xs rounded-full bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
                        {blind75Stats.total} bài
                    </span>
                </div>
                <p className="text-[var(--text-secondary)]">
                    Danh sách 75+ bài LeetCode quan trọng nhất cho phỏng vấn
                </p>
            </motion.div>

            {/* Stats Overview + Progress */}
            <DSAStats stats={stats} />

            {/* Difficulty Filter */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                {(["all", "Easy", "Medium", "Hard"] as const).map((diff) => (
                    <button
                        key={diff}
                        onClick={() => setFilterDifficulty(diff)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${filterDifficulty === diff
                            ? diff === "Easy" ? "bg-[var(--accent-green)] text-white"
                                : diff === "Medium" ? "bg-[var(--accent-amber)] text-white"
                                    : diff === "Hard" ? "bg-[var(--accent-red)] text-white"
                                        : "bg-[var(--accent-primary)] text-white"
                            : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]"
                            }`}
                    >
                        {diff === "all" ? "Tất cả" : difficultyLabels[diff]}
                    </button>
                ))}
            </div>

            {/* Category Grid */}
            <DSACategoryGrid
                categories={blind75Data}
                selectedCategoryId={selectedCategory}
                getCategorySolvedCount={getCategorySolvedCount}
                onSelect={setSelectedCategory}
            />

            {/* Problem List */}
            {selectedCategoryData && (
                <DSAProblemList
                    category={selectedCategoryData}
                    filteredProblems={getFilteredProblems(selectedCategoryData.problems)}
                    getStoreProblem={getStoreProblem}
                    onToggle={handleToggleProblem}
                    onAddClick={() => setShowAddModal(true)}
                />
            )}

            {/* Add Problem Modal */}
            <AddProblemModal
                visible={showAddModal}
                data={newProblem}
                onChange={setNewProblem}
                onSubmit={handleAddProblem}
                onClose={() => setShowAddModal(false)}
            />
        </div>
    );
}
