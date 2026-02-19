"use client";

import { motion } from "framer-motion";
import { Blind75Category } from "@/data/blind75";

interface DSACategoryGridProps {
    categories: Blind75Category[];
    selectedCategoryId: string | null;
    getCategorySolvedCount: (categoryId: string) => number;
    onSelect: (categoryId: string | null) => void;
}

export default function DSACategoryGrid({ categories, selectedCategoryId, getCategorySolvedCount, onSelect }: DSACategoryGridProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {categories.map((category, index) => {
                const solved = getCategorySolvedCount(category.id);
                const total = category.problems.length;
                const progress = Math.round((solved / total) * 100);

                return (
                    <motion.button
                        key={category.id}
                        onClick={() => onSelect(selectedCategoryId === category.id ? null : category.id)}
                        className={`card p-4 text-left transition-all cursor-pointer ${selectedCategoryId === category.id ? 'ring-2 ring-[var(--accent-primary)]' : 'hover:bg-[var(--bg-elevated)]'}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="text-2xl mb-2">{category.icon}</div>
                        <div className="text-sm font-medium text-[var(--text-primary)] mb-1 line-clamp-2">
                            {category.nameVi}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mb-2">
                            {solved}/{total} đã giải
                        </div>
                        <div className="progress-bar h-1.5">
                            <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
                        </div>
                    </motion.button>
                );
            })}
        </div>
    );
}
