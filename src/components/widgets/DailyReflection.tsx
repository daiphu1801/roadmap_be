"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PenLine, Save, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { format, subDays, addDays } from "date-fns";
import { vi } from "date-fns/locale";

interface Reflection {
    date: string;
    learned: string;
    struggled: string;
    tomorrow: string;
}

export default function DailyReflection() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [reflection, setReflection] = useState<Reflection>({
        date: "",
        learned: "",
        struggled: "",
        tomorrow: ""
    });
    const [saved, setSaved] = useState(false);

    const dateKey = format(selectedDate, "yyyy-MM-dd");
    const isToday = dateKey === format(new Date(), "yyyy-MM-dd");

    useEffect(() => {
        // Load reflection for selected date
        const savedReflection = localStorage.getItem(`reflection-${dateKey}`);
        if (savedReflection) {
            setReflection(JSON.parse(savedReflection));
        } else {
            setReflection({
                date: dateKey,
                learned: "",
                struggled: "",
                tomorrow: ""
            });
        }
        setSaved(false);
    }, [dateKey]);

    const handleSave = () => {
        const toSave = { ...reflection, date: dateKey };
        localStorage.setItem(`reflection-${dateKey}`, JSON.stringify(toSave));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const navigateDate = (direction: "prev" | "next") => {
        setSelectedDate(prev =>
            direction === "prev" ? subDays(prev, 1) : addDays(prev, 1)
        );
    };

    const hasContent = reflection.learned || reflection.struggled || reflection.tomorrow;

    return (
        <div className="card p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2">
                    <PenLine className="w-4 h-4 text-[var(--accent-secondary)]" />
                    Daily Reflection
                </h3>
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => navigateDate("prev")}
                        className="p-1 rounded hover:bg-[var(--bg-secondary)] text-[var(--text-muted)] cursor-pointer"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs text-[var(--text-muted)] min-w-[80px] text-center">
                        {isToday ? "Hôm nay" : format(selectedDate, "dd/MM", { locale: vi })}
                    </span>
                    <button
                        onClick={() => navigateDate("next")}
                        disabled={isToday}
                        className="p-1 rounded hover:bg-[var(--bg-secondary)] text-[var(--text-muted)] disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Reflection Form */}
            <div className="space-y-3">
                {/* What I learned */}
                <div>
                    <label className="text-xs text-[var(--text-muted)] mb-1 block">
                        📖 Hôm nay học được gì?
                    </label>
                    <textarea
                        value={reflection.learned}
                        onChange={(e) => setReflection(prev => ({ ...prev, learned: e.target.value }))}
                        placeholder="VD: Hiểu cách HashMap hoạt động..."
                        className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] resize-none"
                        rows={2}
                    />
                </div>

                {/* What was hard */}
                <div>
                    <label className="text-xs text-[var(--text-muted)] mb-1 block">
                        🤔 Khó khăn gặp phải?
                    </label>
                    <textarea
                        value={reflection.struggled}
                        onChange={(e) => setReflection(prev => ({ ...prev, struggled: e.target.value }))}
                        placeholder="VD: Confused về generics..."
                        className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] resize-none"
                        rows={2}
                    />
                </div>

                {/* Tomorrow plan */}
                <div>
                    <label className="text-xs text-[var(--text-muted)] mb-1 block">
                        🎯 Ngày mai sẽ làm gì?
                    </label>
                    <textarea
                        value={reflection.tomorrow}
                        onChange={(e) => setReflection(prev => ({ ...prev, tomorrow: e.target.value }))}
                        placeholder="VD: Hoàn thành bài tập Collections..."
                        className="w-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-lg px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] resize-none"
                        rows={2}
                    />
                </div>
            </div>

            {/* Save Button */}
            <motion.button
                onClick={handleSave}
                disabled={!hasContent}
                className={`w-full mt-4 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all cursor-pointer ${saved
                        ? "bg-[var(--accent-green)] text-white"
                        : hasContent
                            ? "bg-[var(--accent-primary)] text-white hover:opacity-90"
                            : "bg-[var(--bg-secondary)] text-[var(--text-muted)] cursor-not-allowed"
                    }`}
                whileTap={hasContent ? { scale: 0.98 } : {}}
            >
                {saved ? (
                    <>
                        <Sparkles className="w-4 h-4" />
                        Đã lưu!
                    </>
                ) : (
                    <>
                        <Save className="w-4 h-4" />
                        Lưu reflection
                    </>
                )}
            </motion.button>

            {/* Tip */}
            <p className="text-xs text-[var(--text-muted)] text-center mt-3">
                💡 Viết mỗi ngày giúp não consolidate kiến thức tốt hơn
            </p>
        </div>
    );
}
