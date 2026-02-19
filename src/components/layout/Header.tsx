"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    Map,
    CheckSquare,
    Code2,
    FileText,
    Flame,
    Menu,
    X,
    Wrench,
    Music2
} from "lucide-react";

const navItems = [
    { name: "Tổng quan", href: "/", icon: LayoutDashboard },
    { name: "Lộ trình", href: "/roadmap", icon: Map },
    { name: "Công việc", href: "/tasks", icon: CheckSquare },
    { name: "DSA", href: "/dsa", icon: Code2 },
    { name: "Ghi chú", href: "/notes", icon: FileText },
    { name: "Công cụ", href: "/tools", icon: Wrench },
];

interface HeaderProps {
    currentMonth?: number;
    monthTitle?: string;
    progress?: number;
    streak?: number;
}

export default function Header({
    currentMonth = 1,
    monthTitle = "Java Core + DSA Nền Tảng",
    progress = 0,
    streak = 3
}: HeaderProps) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Main Header */}
            <motion.div
                className={`
                    transition-all duration-300
                    ${scrolled
                        ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md'
                        : 'bg-[var(--bg-primary)]'
                    }
                `}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-primary-hover)] flex items-center justify-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Music2 className="w-5 h-5 text-black" />
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
                                    LearnTrack
                                </span>
                                <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-widest">
                                    Backend SE
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navItems.map((item, index) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className={`
                                                relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                                                transition-all duration-200
                                                ${isActive
                                                    ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)]'
                                                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
                                                }
                                            `}
                                        >
                                            <Icon size={18} />
                                            <span>{item.name}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        {/* Right Side: Streak */}
                        <div className="hidden sm:flex items-center gap-4">
                            <motion.div
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-elevated)]"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Flame className="w-4 h-4 text-[var(--accent-orange)]" />
                                <span className="font-bold text-sm text-[var(--text-primary)]">{streak}</span>
                                <span className="text-xs text-[var(--text-muted)]">ngày</span>
                            </motion.div>

                            <motion.button
                                className="btn-primary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Bắt đầu học
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="md:hidden p-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-[var(--text-primary)]" />
                            ) : (
                                <Menu className="w-6 h-6 text-[var(--text-primary)]" />
                            )}
                        </motion.button>
                    </div>
                </div>

                {/* Now Playing Bar */}
                <div className="border-t border-[var(--border-default)]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-tertiary)] flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">T{currentMonth}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">Đang học</span>
                                    <span className="text-sm font-medium text-[var(--text-primary)]">{monthTitle}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 flex-1 max-w-md">
                                <div className="flex-1 progress-bar h-1 bg-[var(--bg-elevated)] rounded-full overflow-hidden group cursor-pointer">
                                    <motion.div
                                        className="h-full bg-[var(--accent-primary)] rounded-full group-hover:bg-[var(--accent-primary-hover)]"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                                <span className="text-sm font-bold text-[var(--text-primary)]">{progress}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden absolute top-full left-0 right-0 bg-[var(--bg-secondary)] border-t border-[var(--border-default)]"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <nav className="px-4 py-4 space-y-1">
                            {navItems.map((item, index) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`
                                                flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                                                transition-all duration-200
                                                ${isActive
                                                    ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)]'
                                                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-hover)]'
                                                }
                                            `}
                                        >
                                            <Icon size={20} />
                                            <span>{item.name}</span>
                                        </Link>
                                    </motion.div>
                                );
                            })}

                            {/* Mobile Streak */}
                            <div className="pt-4 mt-4 border-t border-[var(--border-default)]">
                                <div className="flex items-center justify-between px-4 py-2">
                                    <div className="flex items-center gap-2">
                                        <Flame className="w-5 h-5 text-[var(--accent-orange)]" />
                                        <span className="text-[var(--text-secondary)]">Chuỗi ngày</span>
                                    </div>
                                    <span className="font-bold text-[var(--accent-orange)]">{streak} ngày</span>
                                </div>

                                <button className="w-full mt-3 btn-primary">
                                    Bắt đầu học
                                </button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
