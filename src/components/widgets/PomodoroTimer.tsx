"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Coffee, Brain, Volume2, VolumeX, Zap, Moon } from "lucide-react";

type TimerMode = "focus" | "shortBreak" | "longBreak";

interface PomodoroTimerProps {
    onComplete?: () => void;
}

export default function PomodoroTimer({ onComplete }: PomodoroTimerProps) {
    const [mode, setMode] = useState<TimerMode>("focus");
    const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutes default
    const [isRunning, setIsRunning] = useState(false);
    const [sessions, setSessions] = useState(0);
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [totalFocusTime, setTotalFocusTime] = useState(0); // Track total focus time in seconds

    const focusTime = 45 * 60; // 45 minutes
    const shortBreakTime = 5 * 60; // 5 minutes
    const longBreakTime = 15 * 60; // 15 minutes

    const getTimeForMode = (m: TimerMode) => {
        switch (m) {
            case "focus": return focusTime;
            case "shortBreak": return shortBreakTime;
            case "longBreak": return longBreakTime;
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const formatTotalTime = (seconds: number) => {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        if (hours > 0) return `${hours}h ${mins}m`;
        return `${mins}m`;
    };

    const currentMaxTime = getTimeForMode(mode);
    const progress = ((currentMaxTime - timeLeft) / currentMaxTime) * 100;

    const playNotification = useCallback(() => {
        if (soundEnabled && typeof window !== "undefined") {
            const audioCtx = new (window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();

            // Play a nice melody instead of single beep
            const playTone = (freq: number, startTime: number, duration: number) => {
                const oscillator = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                oscillator.frequency.value = freq;
                oscillator.type = "sine";
                gainNode.gain.value = 0.2;
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + startTime + duration);
                oscillator.start(audioCtx.currentTime + startTime);
                oscillator.stop(audioCtx.currentTime + startTime + duration);
            };

            // Pleasant notification sound
            playTone(523.25, 0, 0.15);    // C5
            playTone(659.25, 0.15, 0.15); // E5
            playTone(783.99, 0.3, 0.3);   // G5
        }
    }, [soundEnabled]);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isRunning && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
                if (mode === "focus") {
                    setTotalFocusTime((prev) => prev + 1);
                }
            }, 1000);
        } else if (timeLeft === 0) {
            playNotification();

            if (mode === "focus") {
                const newSessions = sessions + 1;
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setSessions(newSessions);
                onComplete?.();

                // Every 4 sessions, suggest long break
                if (newSessions % 4 === 0) {
                    setMode("longBreak");
                    setTimeLeft(longBreakTime);
                } else {
                    setMode("shortBreak");
                    setTimeLeft(shortBreakTime);
                }
            } else {
                setMode("focus");
                setTimeLeft(focusTime);
            }
            setIsRunning(false);
        }

        return () => clearInterval(interval);
    }, [isRunning, timeLeft, mode, playNotification, onComplete, sessions, focusTime, shortBreakTime, longBreakTime]);

    const toggleTimer = () => setIsRunning(!isRunning);

    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(getTimeForMode(mode));
    };

    const switchMode = (newMode: TimerMode) => {
        setMode(newMode);
        setTimeLeft(getTimeForMode(newMode));
        setIsRunning(false);
    };

    const getModeColor = () => {
        switch (mode) {
            case "focus": return "var(--accent-primary)";
            case "shortBreak": return "var(--accent-green)";
            case "longBreak": return "var(--accent-cyan)";
        }
    };

    const getModeIcon = () => {
        switch (mode) {
            case "focus": return <Brain className="w-4 h-4" />;
            case "shortBreak": return <Coffee className="w-4 h-4" />;
            case "longBreak": return <Moon className="w-4 h-4" />;
        }
    };

    const getModeLabel = () => {
        switch (mode) {
            case "focus": return "Focus Mode";
            case "shortBreak": return "Short Break";
            case "longBreak": return "Long Break";
        }
    };

    return (
        <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2" style={{ color: getModeColor() }}>
                    {getModeIcon()}
                    {getModeLabel()}
                </h3>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setSoundEnabled(!soundEnabled)}
                        className="p-1.5 rounded-lg hover:bg-[var(--bg-secondary)] text-[var(--text-muted)] transition-colors cursor-pointer"
                    >
                        {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </button>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)]">
                        {sessions} 🍅
                    </span>
                </div>
            </div>

            {/* Mode Toggle - 3 options */}
            <div className="flex gap-1 p-1 rounded-lg bg-[var(--bg-secondary)] mb-4">
                <button
                    onClick={() => switchMode("focus")}
                    className={`flex-1 py-1.5 px-2 rounded-md text-xs font-medium transition-all cursor-pointer ${mode === "focus"
                        ? "bg-[var(--accent-primary)] text-white shadow-lg"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        }`}
                >
                    <Brain className="w-3 h-3 inline mr-1" />
                    45m
                </button>
                <button
                    onClick={() => switchMode("shortBreak")}
                    className={`flex-1 py-1.5 px-2 rounded-md text-xs font-medium transition-all cursor-pointer ${mode === "shortBreak"
                        ? "bg-[var(--accent-green)] text-white shadow-lg"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        }`}
                >
                    <Coffee className="w-3 h-3 inline mr-1" />
                    5m
                </button>
                <button
                    onClick={() => switchMode("longBreak")}
                    className={`flex-1 py-1.5 px-2 rounded-md text-xs font-medium transition-all cursor-pointer ${mode === "longBreak"
                        ? "bg-[var(--accent-cyan)] text-white shadow-lg"
                        : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        }`}
                >
                    <Moon className="w-3 h-3 inline mr-1" />
                    15m
                </button>
            </div>

            {/* Timer Display */}
            <div className="relative flex items-center justify-center mb-4">
                <svg className="w-36 h-36 -rotate-90">
                    <circle
                        cx="72"
                        cy="72"
                        r="64"
                        fill="none"
                        stroke="var(--bg-secondary)"
                        strokeWidth="8"
                    />
                    <motion.circle
                        cx="72"
                        cy="72"
                        r="64"
                        fill="none"
                        stroke={getModeColor()}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${progress * 4.02} 402`}
                        initial={{ strokeDasharray: "0 402" }}
                        animate={{ strokeDasharray: `${progress * 4.02} 402` }}
                        transition={{ duration: 0.5 }}
                        style={{
                            filter: isRunning ? `drop-shadow(0 0 8px ${getModeColor()})` : 'none'
                        }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-[var(--text-primary)]">
                        {formatTime(timeLeft)}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] mt-1">
                        {isRunning ? "đang chạy..." : "tạm dừng"}
                    </span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 mb-4">
                <button
                    onClick={resetTimer}
                    className="p-2.5 rounded-xl bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                >
                    <RotateCcw className="w-5 h-5" />
                </button>
                <motion.button
                    onClick={toggleTimer}
                    className="p-4 rounded-xl text-white transition-all cursor-pointer"
                    style={{
                        backgroundColor: getModeColor(),
                        boxShadow: isRunning ? `0 4px 20px ${getModeColor()}40` : 'none'
                    }}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                >
                    {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
                </motion.button>
            </div>

            {/* Stats Bar */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-secondary)] text-xs">
                <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <Zap className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                    <span>Hôm nay: <span className="text-[var(--text-primary)] font-medium">{formatTotalTime(totalFocusTime)}</span></span>
                </div>
                <div className="text-[var(--text-muted)]">
                    {sessions > 0 && sessions % 4 === 0 && mode !== "longBreak" && (
                        <span className="text-[var(--accent-cyan)]">💆 Nghỉ dài nhé!</span>
                    )}
                </div>
            </div>
        </div>
    );
}

