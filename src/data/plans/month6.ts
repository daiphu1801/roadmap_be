// ============================================
// THÁNG 6: DEVOPS + HOÀN THIỆN SẢN PHẨM
// Mục tiêu: Docker, CI/CD, Production Readiness
// DSA Focus: Final review, Interview prep
// ============================================

import { DailyPlan, DailyPlanTask } from './types';

export const month6Plans: DailyPlan[] = [
    // ========== TUẦN 1: Docker & Containerization ==========
    {
        day: 1, month: 6,
        theme: "Docker Fundamentals",
        focus: "theory",
        tasks: [
            { id: "m6d1-1", title: "Container vs Virtual Machine", category: "theory", duration: "30m", priority: "high" },
            { id: "m6d1-2", title: "Docker architecture: daemon, images, containers", category: "theory", duration: "45m", priority: "high" },
            { id: "m6d1-3", title: "Basic docker commands: run, ps, exec, logs", category: "practice", duration: "45m", priority: "high" },
        ]
    },
    {
        day: 2, month: 6,
        theme: "Dockerfile Best Practices",
        focus: "practice",
        tasks: [
            { id: "m6d2-1", title: "Dockerfile instructions: FROM, COPY, RUN, CMD, ENTRYPOINT", category: "theory", duration: "45m", priority: "high" },
            { id: "m6d2-2", title: "Multi-stage builds cho Java applications", category: "practice", duration: "45m", priority: "high" },
            { id: "m6d2-3", title: "Layer optimization và caching", category: "theory", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 3, month: 6,
        theme: "Docker Compose",
        focus: "practice",
        tasks: [
            { id: "m6d3-1", title: "docker-compose.yml structure", category: "theory", duration: "30m", priority: "high" },
            { id: "m6d3-2", title: "Multi-container application: app + db + redis", category: "practice", duration: "1h", priority: "high" },
            { id: "m6d3-3", title: "Volumes và networking", category: "practice", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 4, month: 6,
        theme: "🐳 Dockerize Pickleball API",
        focus: "project",
        tasks: [
            { id: "m6d4-1", title: "Create optimized Dockerfile", category: "project", duration: "45m", priority: "high" },
            { id: "m6d4-2", title: "Docker Compose với PostgreSQL và Redis", category: "project", duration: "45m", priority: "high" },
            { id: "m6d4-3", title: "Environment variables và secrets", category: "project", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 5, month: 6,
        theme: "Container Registry",
        focus: "practice",
        tasks: [
            { id: "m6d5-1", title: "Docker Hub: push, pull, tags", category: "practice", duration: "30m", priority: "high" },
            { id: "m6d5-2", title: "Image versioning strategies", category: "theory", duration: "30m", priority: "medium" },
            { id: "m6d5-3", title: "Private registry với GitHub Container Registry", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 6, month: 6,
        theme: "Container Security",
        focus: "theory",
        tasks: [
            { id: "m6d6-1", title: "Non-root user in containers", category: "theory", duration: "30m", priority: "high" },
            { id: "m6d6-2", title: "Image scanning với Trivy", category: "practice", duration: "30m", priority: "medium" },
            { id: "m6d6-3", title: "Secrets management best practices", category: "theory", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 7, month: 6,
        theme: "📝 Review Tuần 1",
        focus: "review",
        tasks: [
            { id: "m6d7-1", title: "Quiz: Docker concepts", category: "review", duration: "30m", priority: "high" },
            { id: "m6d7-2", title: "Run full stack locally với Docker Compose", category: "practice", duration: "1h", priority: "high" },
        ]
    },

    // ========== TUẦN 2: CI/CD ==========
    {
        day: 8, month: 6,
        theme: "CI/CD Concepts",
        focus: "theory",
        tasks: [
            { id: "m6d8-1", title: "Continuous Integration explained", category: "theory", duration: "30m", priority: "high" },
            { id: "m6d8-2", title: "Continuous Delivery vs Continuous Deployment", category: "theory", duration: "30m", priority: "high" },
            { id: "m6d8-3", title: "Pipeline stages: build, test, deploy", category: "theory", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 9, month: 6,
        theme: "GitHub Actions Basics",
        focus: "practice",
        tasks: [
            { id: "m6d9-1", title: "Workflow syntax: on, jobs, steps", category: "theory", duration: "45m", priority: "high" },
            { id: "m6d9-2", title: "First workflow: build and test", category: "practice", duration: "45m", priority: "high" },
            { id: "m6d9-3", title: "Environment variables và secrets", category: "practice", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 10, month: 6,
        theme: "Test Automation in CI",
        focus: "practice",
        tasks: [
            { id: "m6d10-1", title: "Running tests in GitHub Actions", category: "practice", duration: "30m", priority: "high" },
            { id: "m6d10-2", title: "Test reports và coverage badges", category: "practice", duration: "30m", priority: "medium" },
            { id: "m6d10-3", title: "Parallelize tests cho faster feedback", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 11, month: 6,
        theme: "Docker Build in CI",
        focus: "practice",
        tasks: [
            { id: "m6d11-1", title: "Build và push Docker images in CI", category: "practice", duration: "45m", priority: "high" },
            { id: "m6d11-2", title: "Multi-platform builds", category: "theory", duration: "30m", priority: "low" },
            { id: "m6d11-3", title: "Cache Docker layers for faster builds", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 12, month: 6,
        theme: "🚀 Pickleball CI Pipeline",
        focus: "project",
        tasks: [
            { id: "m6d12-1", title: "Create comprehensive CI workflow", category: "project", duration: "1h", priority: "high" },
            { id: "m6d12-2", title: "Build + Test + Docker build stages", category: "project", duration: "45m", priority: "high" },
            { id: "m6d12-3", title: "Push to GitHub Container Registry", category: "project", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 13, month: 6,
        theme: "Deployment Strategies",
        focus: "theory",
        tasks: [
            { id: "m6d13-1", title: "Rolling update vs Blue-Green vs Canary", category: "theory", duration: "45m", priority: "high" },
            { id: "m6d13-2", title: "Feature flags for safe rollouts", category: "theory", duration: "30m", priority: "medium" },
            { id: "m6d13-3", title: "Rollback strategies", category: "theory", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 14, month: 6,
        theme: "📝 Review Tuần 2",
        focus: "review",
        tasks: [
            { id: "m6d14-1", title: "Quiz: CI/CD concepts", category: "review", duration: "30m", priority: "high" },
            { id: "m6d14-2", title: "Complete CI pipeline với all stages", category: "practice", duration: "1h", priority: "high" },
        ]
    },

    // ========== TUẦN 3: Cloud & Kubernetes Basics ==========
    {
        day: 15, month: 6,
        theme: "Cloud Platforms Overview",
        focus: "theory",
        tasks: [
            { id: "m6d15-1", title: "AWS vs Azure vs GCP comparison", category: "theory", duration: "30m", priority: "medium" },
            { id: "m6d15-2", title: "IaaS vs PaaS vs SaaS", category: "theory", duration: "30m", priority: "medium" },
            { id: "m6d15-3", title: "Common cloud services: compute, storage, database", category: "theory", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 16, month: 6,
        theme: "Kubernetes Concepts",
        focus: "theory",
        tasks: [
            { id: "m6d16-1", title: "Kubernetes architecture: master, nodes, pods", category: "theory", duration: "45m", priority: "medium" },
            { id: "m6d16-2", title: "Deployments, Services, ConfigMaps", category: "theory", duration: "45m", priority: "medium" },
            { id: "m6d16-3", title: "kubectl basics", category: "practice", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 17, month: 6,
        theme: "Local Kubernetes với Minikube",
        focus: "practice",
        tasks: [
            { id: "m6d17-1", title: "Minikube installation và setup", category: "practice", duration: "30m", priority: "medium" },
            { id: "m6d17-2", title: "Deploy simple app to Kubernetes", category: "practice", duration: "1h", priority: "medium" },
            { id: "m6d17-3", title: "Service types: ClusterIP, NodePort, LoadBalancer", category: "theory", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 18, month: 6,
        theme: "Cloud Deployment Options",
        focus: "theory",
        tasks: [
            { id: "m6d18-1", title: "Railway, Render, Fly.io for simple deployments", category: "theory", duration: "30m", priority: "high" },
            { id: "m6d18-2", title: "AWS ECS và EKS overview", category: "theory", duration: "30m", priority: "medium" },
            { id: "m6d18-3", title: "Choose right deployment platform", category: "theory", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 19, month: 6,
        theme: "Infrastructure as Code",
        focus: "theory",
        tasks: [
            { id: "m6d19-1", title: "Terraform basics", category: "theory", duration: "45m", priority: "low" },
            { id: "m6d19-2", title: "Infrastructure versioning benefits", category: "theory", duration: "30m", priority: "low" },
            { id: "m6d19-3", title: "GitOps concepts", category: "theory", duration: "30m", priority: "low" },
        ]
    },
    {
        day: 20, month: 6,
        theme: "Monitoring & Logging",
        focus: "practice",
        tasks: [
            { id: "m6d20-1", title: "Centralized logging với ELK Stack", category: "theory", duration: "30m", priority: "medium" },
            { id: "m6d20-2", title: "Application metrics với Prometheus", category: "theory", duration: "30m", priority: "medium" },
            { id: "m6d20-3", title: "Alerting strategies", category: "theory", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 21, month: 6,
        theme: "📝 Review Tuần 3",
        focus: "review",
        tasks: [
            { id: "m6d21-1", title: "Quiz: Cloud và Kubernetes concepts", category: "review", duration: "30m", priority: "high" },
            { id: "m6d21-2", title: "Document deployment architecture", category: "review", duration: "1h", priority: "high" },
        ]
    },

    // ========== TUẦN 4: Portfolio & Interview Prep ==========
    {
        day: 22, month: 6,
        theme: "🎯 GitHub Portfolio Setup",
        focus: "project",
        tasks: [
            { id: "m6d22-1", title: "Organize repository structure", category: "project", duration: "45m", priority: "high" },
            { id: "m6d22-2", title: "Clean commit history và branches", category: "project", duration: "30m", priority: "high" },
            { id: "m6d22-3", title: "Add CI badges và README polish", category: "project", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 23, month: 6,
        theme: "📝 README Excellence",
        focus: "project",
        tasks: [
            { id: "m6d23-1", title: "Architecture diagram với draw.io", category: "project", duration: "45m", priority: "high" },
            { id: "m6d23-2", title: "API documentation summary", category: "project", duration: "30m", priority: "high" },
            { id: "m6d23-3", title: "Getting started guide", category: "project", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 24, month: 6,
        theme: "📝 Technical Writing",
        focus: "project",
        tasks: [
            { id: "m6d24-1", title: "Document trade-offs và design decisions", category: "project", duration: "45m", priority: "high" },
            { id: "m6d24-2", title: "Performance benchmarks documentation", category: "project", duration: "30m", priority: "medium" },
            { id: "m6d24-3", title: "Future improvements section", category: "project", duration: "30m", priority: "medium" },
        ]
    },
    {
        day: 25, month: 6,
        theme: "🎤 System Design Interview Prep",
        focus: "review",
        tasks: [
            { id: "m6d25-1", title: "Common system design questions", category: "review", duration: "1h", priority: "high" },
            { id: "m6d25-2", title: "Design URL Shortener, Rate Limiter", category: "review", duration: "1h", priority: "high" },
        ]
    },
    {
        day: 26, month: 6,
        theme: "🎤 Backend Interview Questions",
        focus: "review",
        tasks: [
            { id: "m6d26-1", title: "Java Core interview questions review", category: "review", duration: "45m", priority: "high" },
            { id: "m6d26-2", title: "Spring Boot interview questions review", category: "review", duration: "45m", priority: "high" },
            { id: "m6d26-3", title: "Database và SQL questions", category: "review", duration: "30m", priority: "high" },
        ]
    },
    {
        day: 27, month: 6,
        theme: "🧮 DSA Final Review",
        focus: "review",
        tasks: [
            { id: "m6d27-1", title: "Review top 20 Blind 75 problems", category: "dsa", duration: "2h", priority: "high" },
            { id: "m6d27-2", title: "Time yourself trên medium problems", category: "dsa", duration: "1h", priority: "high" },
        ]
    },
    {
        day: 28, month: 6,
        theme: "🎉 6-Month Roadmap Complete!",
        focus: "review",
        tasks: [
            { id: "m6d28-1", title: "Self-assessment: skills gained", category: "review", duration: "30m", priority: "high" },
            { id: "m6d28-2", title: "Identify areas for continued learning", category: "review", duration: "30m", priority: "high" },
            { id: "m6d28-3", title: "Update resume với new skills", category: "review", duration: "45m", priority: "high" },
            { id: "m6d28-4", title: "Plan next learning goals", category: "review", duration: "30m", priority: "medium" },
        ]
    },
];

export const month6Stats = {
    totalDays: 28,
    totalTasks: month6Plans.reduce((acc, day) => acc + day.tasks.length, 0),
    dsaTasks: month6Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'dsa').length, 0),
    theoryTasks: month6Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'theory').length, 0),
    practiceTasks: month6Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'practice').length, 0),
    projectTasks: month6Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'project').length, 0),
    reviewTasks: month6Plans.reduce((acc, day) => acc + day.tasks.filter((t: DailyPlanTask) => t.category === 'review').length, 0),
};
