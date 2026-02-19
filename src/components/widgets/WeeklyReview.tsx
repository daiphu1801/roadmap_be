"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Calendar, TrendingUp, CheckCircle2,
    BookOpen, Brain, Target, ChevronDown, ChevronUp
} from "lucide-react";
import { format, startOfWeek, endOfWeek, eachDayOfInterval, subWeeks, addWeeks } from "date-fns";
import { vi } from "date-fns/locale";
import { useRoadmapStore } from "@/lib/store";

interface WeekStats {
    daysActive: number;
    reflectionsWritten: number;
    conceptsToReview: string[];
}

const weeklyConceptsToReview: Record<number, string[]> = {
    1: ["Java syntax basics", "Variables & Data types", "Control flow"],
    2: ["OOP principles", "Classes & Objects", "Constructors"],
    3: ["Inheritance", "Polymorphism", "Interfaces vs Abstract"],
    4: ["Collections framework", "ArrayList vs LinkedList", "HashMap"],
    5: ["Exception handling", "Try-catch-finally", "Custom exceptions"],
    6: ["File I/O", "Streams", "Serialization"],
    7: ["Multithreading", "Synchronization", "ExecutorService"],
    8: ["Spring Boot basics", "Dependency Injection", "Beans"],
    9: ["REST API", "HTTP methods", "ResponseEntity"],
    10: ["JPA", "Entity relationships", "JPQL"],
};

export default function WeeklyReview() {
    const [currentViewWeek, setCurrentViewWeek] = useState(new Date());
    const [expanded, setExpanded] = useState(false);
    const [reviewedConcepts, setReviewedConcepts] = useState<string[]>([]);

    const { currentStudyDay } = useRoadmapStore();
    const weekStart = startOfWeek(currentViewWeek, { weekStartsOn: 1 });
    const weekEnd = endOfWeek(currentViewWeek, { weekStartsOn: 1 });
    const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });

    const currentWeekNumber = Math.max(1, Math.ceil(currentStudyDay / 7));

    useEffect(() => {
        const saved = localStorage.getItem(`reviewed-week-${currentWeekNumber}`);
        if (saved) {
            setReviewedConcepts(JSON.parse(saved));
        }
    }, [currentWeekNumber]);

    const toggleConcept = (concept: string) => {
        const updated = reviewedConcepts.includes(concept)
            ? reviewedConcepts.filter(c => c !== concept)
            : [...reviewedConcepts, concept];
        setReviewedConcepts(updated);
        localStorage.setItem(`reviewed-week-${currentWeekNumber}`, JSON.stringify(updated));
    };

    const navigateWeek = (direction: "prev" | "next") => {
        setCurrentViewWeek(prev =>
            direction === "prev" ? subWeeks(prev, 1) : addWeeks(prev, 1)
        );
    };

    // Calculate stats
    const getWeekStats = (): WeekStats => {
        let daysActive = 0;
        let reflectionsWritten = 0;

        if (typeof window !== 'undefined') {
            daysInWeek.forEach(day => {
                const dateKey = format(day, "yyyy-MM-dd");
                const reflection = localStorage.getItem(`reflection-${dateKey}`);
                if (reflection) {
                    const parsed = JSON.parse(reflection);
                    if (parsed.learned || parsed.struggled || parsed.tomorrow) {
                        reflectionsWritten++;
                        daysActive++;
                    }
                }
            });
        }

        return {
            daysActive,
            reflectionsWritten,
            conceptsToReview: weeklyConceptsToReview[currentWeekNumber] || []
        };
    };

    const isCurrentWeek = format(new Date(), "yyyy-ww") === format(currentViewWeek, "yyyy-ww");

    const stats = getWeekStats();
    const reviewProgress = stats.conceptsToReview.length > 0
        ? Math.round((reviewedConcepts.length / stats.conceptsToReview.length) * 100)
        : 0;

    return (
        <div className="card p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[var(--accent-cyan)]" />
                    Weekly Review
                </h3>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => navigateWeek("prev")}
                        className="p-1 rounded hover:bg-[var(--bg-secondary)] text-[var(--text-muted)] cursor-pointer"
                    >
                        <ChevronDown className="w-4 h-4 rotate-90" />
                    </button>
                    <span className="text-xs text-[var(--text-muted)]">
                        {isCurrentWeek ? "Tuần này" : `Tuần ${currentWeekNumber}`}
                    </span>
                    <button
                        onClick={() => navigateWeek("next")}
                        disabled={isCurrentWeek}
                        className="p-1 rounded hover:bg-[var(--bg-secondary)] text-[var(--text-muted)] disabled:opacity-30 cursor-pointer"
                    >
                        <ChevronDown className="w-4 h-4 -rotate-90" />
                    </button>
                </div>
            </div>

            {/* Week Range */}
            <p className="text-xs text-[var(--text-muted)] mb-4">
                {format(weekStart, "dd/MM", { locale: vi })} - {format(weekEnd, "dd/MM", { locale: vi })}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] text-center">
                    <TrendingUp className="w-4 h-4 text-[var(--accent-green)] mx-auto mb-1" />
                    <p className="text-lg font-bold text-[var(--text-primary)]">{stats.daysActive}</p>
                    <p className="text-xs text-[var(--text-muted)]">ngày active</p>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] text-center">
                    <BookOpen className="w-4 h-4 text-[var(--accent-primary)] mx-auto mb-1" />
                    <p className="text-lg font-bold text-[var(--text-primary)]">{stats.reflectionsWritten}</p>
                    <p className="text-xs text-[var(--text-muted)]">reflections</p>
                </div>
                <div className="p-3 rounded-xl bg-[var(--bg-secondary)] text-center">
                    <Brain className="w-4 h-4 text-[var(--accent-amber)] mx-auto mb-1" />
                    <p className="text-lg font-bold text-[var(--text-primary)]">{reviewProgress}%</p>
                    <p className="text-xs text-[var(--text-muted)]">ôn tập</p>
                </div>
            </div>

            {/* Concepts to Review */}
            {stats.conceptsToReview.length > 0 && (
                <div>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="w-full flex items-center justify-between py-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                    >
                        <span className="text-xs flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            Concepts cần ôn tuần {currentWeekNumber}
                        </span>
                        {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            className="space-y-2 pt-2"
                        >
                            {stats.conceptsToReview.map((concept, index) => (
                                <button
                                    key={index}
                                    onClick={() => toggleConcept(concept)}
                                    className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors text-left cursor-pointer"
                                >
                                    <CheckCircle2
                                        className={`w-4 h-4 ${reviewedConcepts.includes(concept) ? 'text-[var(--accent-green)]' : 'text-[var(--text-muted)]'}`}
                                    />
                                    <span className={`text-sm ${reviewedConcepts.includes(concept) ? 'text-[var(--text-muted)] line-through' : 'text-[var(--text-primary)]'}`}>
                                        {concept}
                                    </span>
                                </button>
                            ))}
                        </motion.div>
                    )}
                </div>
            )}
        </div>
    );
}
