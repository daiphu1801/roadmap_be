"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Brain, Lightbulb, Target,
    Code2, MessageSquare, Eye, ChevronDown, ChevronUp,
    Zap, Layers
} from "lucide-react";

interface LearningMethod {
    id: string;
    icon: React.ReactNode;
    title: string;
    titleVi: string;
    description: string;
    howTo: string[];
    color: string;
}

const learningMethods: LearningMethod[] = [
    {
        id: "active-recall",
        icon: <Brain className="w-5 h-5" />,
        title: "Active Recall",
        titleVi: "Nhớ chủ động",
        description: "Não nhớ bằng cách cố gắng nhớ lại, không phải đọc lại.",
        howTo: [
            "Sau mỗi bài, đóng tài liệu và viết ra 3-5 điểm chính",
            "Ngày hôm sau, tự hỏi lại trước khi học tiếp",
            "Dùng flashcards với spaced repetition"
        ],
        color: "var(--accent-primary)"
    },
    {
        id: "feynman",
        icon: <MessageSquare className="w-5 h-5" />,
        title: "Feynman Technique",
        titleVi: "Giải thích đơn giản",
        description: "Nếu không giải thích đơn giản được → bạn chưa hiểu.",
        howTo: [
            "Chọn một concept (VD: Dependency Injection)",
            "Giải thích bằng ngôn ngữ đơn giản nhất",
            "Phát hiện lỗ hổng → quay lại học",
            "Viết blog/ghi chú giải thích bằng tiếng Việt"
        ],
        color: "var(--accent-green)"
    },
    {
        id: "project-based",
        icon: <Code2 className="w-5 h-5" />,
        title: "Project-Based Learning",
        titleVi: "Học qua dự án thực",
        description: "70% làm dự án, 30% lý thuyết. Code thực tế mới nhớ lâu.",
        howTo: [
            "Mỗi tuần có 1 mini-project áp dụng kiến thức",
            "Dự án phải đủ khó để 'đau đầu' một chút",
            "Clone một phần app quen thuộc (Reddit, URL Shortener)"
        ],
        color: "var(--accent-cyan)"
    },
    {
        id: "deliberate-practice",
        icon: <Target className="w-5 h-5" />,
        title: "Deliberate Practice",
        titleVi: "Luyện tập có chủ đích",
        description: "Không random bài, mà tập trung vào điểm yếu.",
        howTo: [
            "Xác định điểm yếu (Recursion? SQL joins?)",
            "Tập trung luyện đúng chỗ yếu đó",
            "DSA: Theo pattern, không random",
            "Làm bài khó hơn năng lực hiện tại một chút"
        ],
        color: "var(--accent-amber)"
    },
    {
        id: "interleaving",
        icon: <Layers className="w-5 h-5" />,
        title: "Interleaving",
        titleVi: "Xen kẽ chủ đề",
        description: "Học A-B-A-B tốt hơn A-A-A-A rồi B-B-B-B.",
        howTo: [
            "Sáng: Java Core (30 phút)",
            "Chiều: DSA (45 phút)",
            "Tối: Review lại + đọc docs (15 phút)",
            "Não phải switch context → nhớ lâu hơn"
        ],
        color: "var(--accent-secondary)"
    },
    {
        id: "rubber-duck",
        icon: <Lightbulb className="w-5 h-5" />,
        title: "Rubber Duck Debugging",
        titleVi: "Giải thích cho con vịt",
        description: "Khi stuck, giải thích problem từng bước cho vật vô tri.",
        howTo: [
            "Đặt một con vịt/đồ vật trên bàn",
            "Giải thích code/vấn đề từng bước",
            "Verbalize buộc não tổ chức logic",
            "Thường tự phát hiện bug trong lúc giải thích"
        ],
        color: "var(--accent-red)"
    },
    {
        id: "code-review",
        icon: <Eye className="w-5 h-5" />,
        title: "Read Quality Code",
        titleVi: "Đọc code chất lượng",
        description: "30% thời gian nên đọc code của người khác.",
        howTo: [
            "Đọc GitHub repos của Spring Framework",
            "Xem LeetCode solutions sau khi tự làm",
            "Hỏi 'Tại sao họ làm thế này?'",
            "Đọc open source projects bạn dùng"
        ],
        color: "var(--accent-primary)"
    }
];

export default function LearningMethodsGuide() {
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [showAll, setShowAll] = useState(false);

    const displayMethods = showAll ? learningMethods : learningMethods.slice(0, 3);

    return (
        <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-[var(--text-primary)] flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[var(--accent-amber)]" />
                    Phương pháp học hiệu quả
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent-green)]/20 text-[var(--accent-green)]">
                    7 methods
                </span>
            </div>

            <div className="space-y-2">
                {displayMethods.map((method) => (
                    <motion.div
                        key={method.id}
                        className="rounded-xl overflow-hidden"
                        initial={false}
                    >
                        <button
                            onClick={() => setExpandedId(expandedId === method.id ? null : method.id)}
                            className="w-full p-3 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-all flex items-center gap-3 text-left cursor-pointer"
                        >
                            <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                style={{ backgroundColor: `${method.color}20`, color: method.color }}
                            >
                                {method.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-[var(--text-primary)] truncate">
                                    {method.title}
                                </p>
                                <p className="text-xs text-[var(--text-muted)] truncate">
                                    {method.titleVi}
                                </p>
                            </div>
                            <motion.div
                                animate={{ rotate: expandedId === method.id ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-[var(--text-muted)]"
                            >
                                <ChevronDown className="w-4 h-4" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {expandedId === method.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-3 pt-0">
                                        <p className="text-sm text-[var(--text-secondary)] mb-3 pl-11">
                                            {method.description}
                                        </p>
                                        <div className="pl-11 space-y-1.5">
                                            {method.howTo.map((step, index) => (
                                                <div key={index} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                                                    <span
                                                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-medium"
                                                        style={{ backgroundColor: `${method.color}20`, color: method.color }}
                                                    >
                                                        {index + 1}
                                                    </span>
                                                    <span>{step}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* Show More/Less Button */}
            <button
                onClick={() => setShowAll(!showAll)}
                className="w-full mt-3 py-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-elevated)] transition-colors text-sm text-[var(--text-secondary)] flex items-center justify-center gap-1 cursor-pointer"
            >
                {showAll ? (
                    <>
                        <ChevronUp className="w-4 h-4" />
                        Thu gọn
                    </>
                ) : (
                    <>
                        <ChevronDown className="w-4 h-4" />
                        Xem thêm {learningMethods.length - 3} phương pháp
                    </>
                )}
            </button>

            {/* Quick Reminder */}
            <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-green)]/10 border border-[var(--accent-primary)]/20">
                <p className="text-xs text-[var(--text-secondary)] text-center">
                    💡 <span className="font-medium text-[var(--text-primary)]">Nhớ:</span> 70% code thực hành, 30% lý thuyết.
                    Giải thích được = Hiểu rồi!
                </p>
            </div>
        </div>
    );
}
