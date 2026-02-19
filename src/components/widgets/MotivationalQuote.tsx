"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getRandomQuote } from "@/data/gamification";

export default function MotivationalQuote() {
    const [quote] = useState(() => getRandomQuote());

    return (
        <motion.div
            className="card p-5 bg-gradient-to-br from-[var(--accent-primary)]/10 to-transparent border-l-2 border-l-[var(--accent-primary)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <p className="text-sm italic text-[var(--text-primary)] mb-2">
                &ldquo;{quote.text}&rdquo;
            </p>
            <p className="text-xs text-[var(--text-muted)] text-right">
                — {quote.author}
            </p>
        </motion.div>
    );
}
