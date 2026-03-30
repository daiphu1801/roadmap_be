"use client";


import { Clock } from "lucide-react";

interface CountdownViewProps {
    daysSinceStart: number;
}

export default function CountdownView({ daysSinceStart }: CountdownViewProps) {
    return (
        <div className="card p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/20 to-[var(--accent-secondary)]/20 flex items-center justify-center">
                <Clock className="w-10 h-10 text-[var(--accent-primary)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                Hành trình sắp bắt đầu!
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
                Lộ trình học Backend Engineer sẽ chính thức bắt đầu vào
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--accent-primary)]/30 mb-6">
                <span className="text-lg">📅</span>
                <div className="text-left">
                    <p className="font-bold text-[var(--text-primary)]">Thứ 4, 01/04/2026</p>
                    <p className="text-sm text-[var(--text-muted)]">7:00 sáng (giờ Việt Nam)</p>
                </div>
            </div>
            <div className="flex items-center justify-center gap-2">
                <div className="px-4 py-3 rounded-lg bg-[var(--accent-primary)] text-white">
                    <p className="text-3xl font-black">{Math.abs(daysSinceStart) + 1}</p>
                    <p className="text-xs opacity-80">ngày</p>
                </div>
            </div>
            <p className="text-sm text-[var(--text-muted)] mt-6">
                Trong thời gian chờ đợi, bạn có thể thêm task tự do ở tab &quot;Tự thêm&quot; 📝
            </p>
        </div>
    );
}
