"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Link from "next/link";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const duration = 1000;
        const steps = 30;
        const increment = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setDisplayValue(value);
                clearInterval(timer);
            } else {
                setDisplayValue(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [value]);

    return <span>{displayValue}{suffix}</span>;
}

interface HeroSectionProps {
    started: boolean;
    dayCount: number;
    daysUntilStart: number;
    currentTime: Date;
}

export default function HeroSection({ started, dayCount, daysUntilStart, currentTime }: HeroSectionProps) {
    // Pre-compute random values for waveform animation (avoid Math.random in render)
    const [waveformHeights] = useState(() => Array.from({ length: 20 }, () => ({
        initial: 8 + Math.random() * 16,
        animate: 8 + Math.random() * 16,
        duration: 0.6 + Math.random() * 0.4
    })));
    return (
        <div className="relative min-h-[70vh] flex items-center">
            {/* Floating Audio Player Preview - Right Side */}
            <motion.div
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-20"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                <div className="bg-[var(--bg-card)]/90 backdrop-blur-md rounded-2xl p-5 w-72 shadow-2xl border border-white/10">
                    {/* Now Playing Badge */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-5 h-5 rounded-full bg-[var(--accent-primary)] flex items-center justify-center">
                            <span className="text-[10px] text-black font-bold">♪</span>
                        </div>
                        <span className="text-xs text-[var(--text-secondary)]">Đang học</span>
                    </div>

                    {/* Album Art & Info */}
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0">
                            <span className="text-2xl">☕</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-[var(--text-primary)] truncate">Java Core</h4>
                            <p className="text-sm text-[var(--text-muted)] truncate">Tháng 1 • DSA Nền Tảng</p>
                        </div>
                        <div className="text-[var(--accent-primary)]">♥</div>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-3">
                        <div className="flex justify-between text-xs text-[var(--text-muted)] mb-1">
                            <span>3:24</span>
                            <span>8:45</span>
                        </div>
                        <div className="h-1 bg-[var(--bg-elevated)] rounded-full">
                            <div className="h-full w-[40%] bg-[var(--accent-primary)] rounded-full" />
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-6">
                        <button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" /></svg>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform">
                            <Play className="w-5 h-5 text-black ml-0.5" fill="currentColor" />
                        </button>
                        <button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" /></svg>
                        </button>
                    </div>

                    {/* Waveform */}
                    <div className="flex items-center justify-center gap-0.5 mt-4">
                        {waveformHeights.map((wave, i) => (
                            <motion.div
                                key={i}
                                className="w-1 bg-[var(--accent-primary)] rounded-full"
                                style={{ height: `${wave.initial}px` }}
                                animate={{ height: [8, wave.animate, 8] }}
                                transition={{ duration: wave.duration, repeat: Infinity, repeatType: "reverse" }}
                            />
                        ))}
                    </div>
                </div>

                {/* Ad-free badge */}
                <motion.div
                    className="absolute -bottom-4 -right-4 bg-[var(--bg-card)] rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg border border-white/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <div className="w-4 h-4 rounded-full bg-[var(--accent-secondary)] flex items-center justify-center">
                        <span className="text-[8px] text-white">✓</span>
                    </div>
                    <span className="text-xs font-medium text-[var(--text-primary)]">Không quảng cáo</span>
                </motion.div>
            </motion.div>

            {/* Left Content */}
            <div className="max-w-xl">
                {/* Countdown or Current Time Display */}
                {!started ? (
                    <motion.p className="text-sm text-[var(--text-secondary)] mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        ⏰ Bắt đầu: Thứ 4, 01/04/2026 lúc 7:00 sáng • Còn <span className="font-bold text-[var(--accent-primary)]">{daysUntilStart} ngày</span>
                    </motion.p>
                ) : (
                    <motion.p className="text-sm text-[var(--text-secondary)] mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        📅 {currentTime.toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' })} • {currentTime.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                    </motion.p>
                )}

                {/* Chart Badge */}
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-elevated)] border border-white/10 mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex items-end gap-0.5 h-4">
                        <div className="w-1 h-2 bg-[var(--accent-primary)] rounded-sm" />
                        <div className="w-1 h-3 bg-[var(--accent-primary)] rounded-sm" />
                        <div className="w-1 h-4 bg-[var(--accent-primary)] rounded-sm" />
                        <div className="w-1 h-2.5 bg-[var(--accent-primary)] rounded-sm" />
                    </div>
                    <span className="text-sm text-[var(--text-primary)]">
                        {started ? `${dayCount} ngày học tập` : "Chương trình 6 tháng"}
                    </span>
                </motion.div>

                {/* Large Headline */}
                <motion.h1
                    className="text-5xl sm:text-7xl font-black leading-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="text-[var(--text-primary)]">Học </span>
                    <span className="gradient-text-pink">Backend</span>
                    <br />
                    <span className="gradient-text-pink">Engineer</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    className="text-lg text-[var(--text-secondary)] mb-8 max-w-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {started
                        ? "Tiếp tục hành trình của bạn. Mỗi ngày một tiến bộ mới, xây dựng nền tảng vững chắc."
                        : "Bắt đầu hành trình Backend SE chuyên nghiệp. Java, Spring Boot, DSA và Cloud trong 6 tháng."}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-wrap gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link href="/tasks" className="btn-primary">
                        Bắt đầu học miễn phí
                    </Link>
                    <Link href="/roadmap" className="btn-secondary">
                        <Play className="w-4 h-4" fill="currentColor" />
                        Xem lộ trình
                    </Link>
                </motion.div>

                {/* Big Stats */}
                <motion.div
                    className="flex gap-8 sm:gap-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div>
                        <div className="text-3xl sm:text-4xl font-black text-[var(--text-primary)]">
                            <AnimatedNumber value={180} suffix="+" />
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">Bài học</div>
                    </div>
                    <div>
                        <div className="text-3xl sm:text-4xl font-black text-[var(--text-primary)]">
                            <AnimatedNumber value={75} suffix="+" />
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">DSA Problems</div>
                    </div>
                    <div>
                        <div className="text-3xl sm:text-4xl font-black text-[var(--text-primary)]">
                            <AnimatedNumber value={6} />
                        </div>
                        <div className="text-sm text-[var(--text-muted)]">Tháng học</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
