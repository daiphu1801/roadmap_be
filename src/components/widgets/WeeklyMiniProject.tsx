"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Rocket, CheckCircle2, Circle, Clock,
    ChevronDown, ChevronUp, Star, Layers
} from "lucide-react";
import { getMiniProjectForWeek, getDifficultyColor } from "@/data/miniProjects";
import { useRoadmapStore } from "@/lib/store";

export default function WeeklyMiniProject() {
    const [expanded, setExpanded] = useState(false);
    const [checkedRequirements, setCheckedRequirements] = useState<string[]>([]);

    const { currentStudyDay } = useRoadmapStore();
    const currentWeek = Math.ceil(currentStudyDay / 7) || 1;

    const project = getMiniProjectForWeek(currentWeek);

    useEffect(() => {
        // Load saved progress
        const saved = localStorage.getItem(`miniproject-week-${currentWeek}`);
        if (saved) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCheckedRequirements(JSON.parse(saved));
        }
    }, [currentWeek]);

    const toggleRequirement = (req: string) => {
        const newChecked = checkedRequirements.includes(req)
            ? checkedRequirements.filter(r => r !== req)
            : [...checkedRequirements, req];

        setCheckedRequirements(newChecked);
        localStorage.setItem(`miniproject-week-${currentWeek}`, JSON.stringify(newChecked));
    };

    if (!project) {
        return (
            <div className="card p-5">
                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                    <Rocket className="w-4 h-4" />
                    <span className="text-sm">Chưa có project cho tuần này</span>
                </div>
            </div>
        );
    }

    const progress = project.requirements.length > 0
        ? Math.round((checkedRequirements.length / project.requirements.length) * 100)
        : 0;

    return (
        <div className="card p-5">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="text-sm font-medium text-[var(--text-primary)]">
                                Mini Project - Tuần {currentWeek}
                            </h3>
                            <span
                                className="text-xs px-2 py-0.5 rounded-full"
                                style={{
                                    backgroundColor: `${getDifficultyColor(project.difficulty)}20`,
                                    color: getDifficultyColor(project.difficulty)
                                }}
                            >
                                {project.difficulty}
                            </span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3" />
                            ~{project.estimatedHours} giờ
                        </p>
                    </div>
                </div>
                <span className="text-sm font-medium" style={{ color: "#22c55e" }}>
                    {progress}%
                </span>
            </div>

            {/* Project Title */}
            <div className="mb-4">
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                    {project.title}
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                    {project.description}
                </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-lg flex items-center gap-1"
                        style={{ backgroundColor: "rgba(139, 92, 246, 0.15)", color: "#a78bfa" }}
                    >
                        <Layers className="w-3 h-3" />
                        {skill}
                    </span>
                ))}
            </div>

            {/* Progress Bar - High visibility */}
            <div className="mb-4">
                <div
                    className="h-3 rounded-full overflow-hidden"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                >
                    <div
                        className="h-full rounded-full transition-all duration-300 ease-out"
                        style={{
                            width: `${progress}%`,
                            backgroundColor: "#22c55e",
                            boxShadow: progress > 0 ? "0 0 10px rgba(34, 197, 94, 0.5)" : "none"
                        }}
                    />
                </div>
            </div>

            {/* Requirements */}
            <div className="space-y-2 mb-3">
                <p className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Yêu cầu ({checkedRequirements.length}/{project.requirements.length})
                </p>
                {project.requirements.map((req, index) => (
                    <button
                        key={index}
                        onClick={() => toggleRequirement(req)}
                        className="w-full flex items-start gap-2 p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors text-left cursor-pointer"
                    >
                        {checkedRequirements.includes(req) ? (
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#22c55e" }} />
                        ) : (
                            <Circle className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${checkedRequirements.includes(req) ? 'text-[var(--text-muted)] line-through' : 'text-[var(--text-primary)]'}`}>
                            {req}
                        </span>
                    </button>
                ))}
            </div>

            {/* Bonus Challenges - Expandable */}
            {project.bonusChallenges && project.bonusChallenges.length > 0 && (
                <>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="w-full flex items-center justify-between py-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                    >
                        <span className="text-xs flex items-center gap-1">
                            <Star className="w-3 h-3" style={{ color: "#f59e0b" }} />
                            Bonus Challenges
                        </span>
                        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                                    {project.bonusChallenges.map((challenge, index) => (
                                        <div key={index} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                            <Star className="w-3 h-3 flex-shrink-0 mt-1" style={{ color: "#f59e0b" }} />
                                            {challenge}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </div>
    );
}
