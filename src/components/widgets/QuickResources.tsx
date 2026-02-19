"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { quickResources } from "@/data/gamification";

interface QuickResourcesProps {
    category?: string;
}

export default function QuickResources({ category }: QuickResourcesProps) {
    const resources = category
        ? quickResources.filter(r => r.category === category || r.category === 'general')
        : quickResources;

    return (
        <div className="card p-5">
            <h3 className="text-sm font-medium text-[var(--text-primary)] mb-4 flex items-center gap-2">
                🔗 Tài liệu nhanh
            </h3>

            <div className="grid grid-cols-2 gap-2">
                {resources.slice(0, 6).map((resource, index) => (
                    <motion.a
                        key={resource.id}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-[var(--bg-secondary)]/50 hover:bg-[var(--bg-secondary)] transition-all group"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <span className="text-lg">{resource.icon}</span>
                        <span className="text-sm text-[var(--text-primary)] truncate flex-1">
                            {resource.title}
                        </span>
                        <ExternalLink className="w-3 h-3 text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
