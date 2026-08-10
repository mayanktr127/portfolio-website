"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, Sparkles, CheckCircle2, X } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  period: string;
  description: string;
  metrics: string[];
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  highlights: string[];
  visualMockup: {
    stat: string;
    statLabel: string;
    subtag: string;
  };
}

const GITHUB_PROFILE = "https://github.com/mayanktr127";

const PROJECTS_DATA: Project[] = [
  {
    id: "messageflow",
    title: "MessageFlow",
    subtitle: "White-label messaging SaaS platform",
    category: "Multi-Tenant SaaS",
    period: "Production SaaS",
    description:
      "Multi-tenant architecture with isolated auth, campaign management, and background job processing via BullMQ/Redis. Built real-time team chat with Socket.io (Phase 7). Tenant isolation verified adversarially before layering features on top — not just assumed to work.",
    metrics: ["Adversarial Tenant Isolation", "BullMQ / Redis Queue", "Socket.io Real-Time"],
    tags: ["Next.js", "TypeScript", "Supabase", "BullMQ", "Redis", "Socket.io", "Tailwind CSS"],
    demoUrl: GITHUB_PROFILE,
    githubUrl: GITHUB_PROFILE,
    highlights: [
      "Strict multi-tenant architecture with row-level security and isolated organization auth boundaries.",
      "Reliable background campaign dispatch and rate-limited processing orchestrated through BullMQ and Redis.",
      "Live team chat integration using Socket.io split into team member management and real-time event streaming.",
      "Tenant isolation verified adversarially under mock attack scenarios before adding higher-level features."
    ],
    visualMockup: {
      stat: "Phase 7",
      statLabel: "Real-Time Team Chat & Multi-Tenant",
      subtag: "Adversarially Verified Auth",
    },
  },
  {
    id: "rag-chatbot-saas",
    title: "RAG Chatbot SaaS",
    subtitle: "Retrieval-augmented generation pipeline on Supabase pgvector",
    category: "RAG & AI Agents",
    period: "Production Engine",
    description:
      "End-to-end knowledge base ingestion and chat pipeline using Gemini's gemini-embedding-001 (3072-dim) embeddings. Handled real infrastructure constraints — like pgvector's HNSW index cap at 2000 dimensions — that standard docs don't flag for high-dimensional embeddings.",
    metrics: ["3072-Dim Embeddings", "HNSW Index Tuning", "Zero-Slideware Architecture"],
    tags: ["Gemini API", "Supabase pgvector", "RAG", "LangChain", "Next.js", "TypeScript"],
    demoUrl: GITHUB_PROFILE,
    githubUrl: GITHUB_PROFILE,
    highlights: [
      "End-to-end knowledge base parsing, chunking, and vector embedding ingestion pipeline.",
      "Addressed critical pgvector HNSW indexing dimension limits (2000-dim cap) for 3072-dim embeddings.",
      "LangChain agentic orchestration with strict prompt guardrails and conversational memory retention.",
      "Production-tested query latency and retrieval accuracy under varied document structures."
    ],
    visualMockup: {
      stat: "3072-dim",
      statLabel: "Gemini High-Density Embeddings",
      subtag: "HNSW pgvector Search",
    },
  },
  {
    id: "used-car-dealership",
    title: "Used Car Dealership Automation",
    subtitle: "End-to-end operations pipeline replacing manual workflow",
    category: "n8n Automation",
    period: "Enterprise Client",
    description:
      "Built with another developer: appraisal intake, paperwork generation, inventory sync, and automated SMS review requests — all orchestrated through self-hosted n8n and backed by Supabase. Replaced a fragmented, manual dealership process with a single automated pipeline.",
    metrics: ["100% Process Automation", "Zero Manual Paperwork", "Automated SMS Reviews"],
    tags: ["n8n", "Supabase", "Workflow Automation", "SMS Gateway", "PDF Generation"],
    demoUrl: GITHUB_PROFILE,
    githubUrl: GITHUB_PROFILE,
    highlights: [
      "Appraisal intake directly triggers automated vehicle valuation, customer notifications, and status routing.",
      "Dynamic PDF generation for operational contracts, legal forms, and buyer paperwork.",
      "Real-time dealership inventory synchronization across multiple listing channels via webhooks.",
      "Automated post-sale customer follow-up and SMS review requests increasing online reputation."
    ],
    visualMockup: {
      stat: "100%",
      statLabel: "Automated Dealership Operations",
      subtag: "Self-Hosted n8n Engine",
    },
  },
  {
    id: "linkedin-automation",
    title: "LinkedIn Posting Automation",
    subtitle: "AI agent content pipeline & research swarm",
    category: "RAG & AI Agents",
    period: "AI Agent System",
    description:
      "Multi-agent system with parallel specialist agents, Tavily-grounded research, automated image generation, and Google Sheets logging for a full 'build in public' content pipeline — end to end, from idea to published post.",
    metrics: ["Tavily Research Grounding", "Parallel Specialist Agents", "Automated Asset Gen"],
    tags: ["n8n", "AI Agents", "Tavily API", "Google Sheets", "Image Generation", "OpenRouter"],
    demoUrl: GITHUB_PROFILE,
    githubUrl: GITHUB_PROFILE,
    highlights: [
      "Specialist agent hierarchy: research gathering, copywriting drafting, editorial review, and asset generation.",
      "Tavily web grounding prevents hallucinations by pulling current real-world technical context.",
      "Automated custom thumbnail generation and scheduled publishing hooks.",
      "Google Sheets logging for analytics, topic scheduling, and historical post tracking."
    ],
    visualMockup: {
      stat: "End-to-End",
      statLabel: "Idea-to-Publish Agent Swarm",
      subtag: "Tavily Grounded AI",
    },
  },
  {
    id: "invoice-tracker",
    title: "AI Invoice Tracker",
    subtitle: "AI-powered invoice extraction and structured storage",
    category: "Data Extraction",
    period: "Automation Workflow",
    description:
      "n8n workflow with AI-based document parsing and data extraction feeding into Airtable and Supabase for structured invoice tracking, vendor classification, and automated ledger audits.",
    metrics: ["Structured AI Extraction", "Airtable & Supabase Sync", "Multi-Currency Parser"],
    tags: ["n8n", "AI Extraction", "Airtable", "Supabase", "Gemini Vision"],
    demoUrl: GITHUB_PROFILE,
    githubUrl: GITHUB_PROFILE,
    highlights: [
      "Zero-shot optical document analysis extracting invoice numbers, line items, taxes, and due dates.",
      "Automated deduplication and discrepancy alerts before recording to financial databases.",
      "Dual sync to Airtable for collaborative team views and Supabase Postgres for relational querying."
    ],
    visualMockup: {
      stat: "< 2s",
      statLabel: "Invoice Parse & Ingest Latency",
      subtag: "Airtable / Supabase Sync",
    },
  },
  {
    id: "expense-tracker",
    title: "AI Expense Automation",
    subtitle: "Subworkflow-based AI receipt processing",
    category: "Data Extraction",
    period: "Automation Workflow",
    description:
      "Subworkflow-based architecture using OpenRouter for AI processing, logging structured expense data, category allocations, and receipts directly to Google Sheets with automated audit trails.",
    metrics: ["Subworkflow Architecture", "OpenRouter Multi-Model", "Google Sheets Live Log"],
    tags: ["n8n", "OpenRouter", "Google Sheets", "Subworkflows", "AI Vision"],
    demoUrl: GITHUB_PROFILE,
    githubUrl: GITHUB_PROFILE,
    highlights: [
      "Modular subworkflow hierarchy for receipt normalization, tax verification, and ledger posting.",
      "Model routing via OpenRouter to optimize for extraction speed and cost efficiency.",
      "Automated categorization rules mapping receipts to departmental expense accounts."
    ],
    visualMockup: {
      stat: "Modular",
      statLabel: "Subworkflow Architecture",
      subtag: "OpenRouter LLM Routing",
    },
  },
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    "Multi-Tenant SaaS",
    "RAG & AI Agents",
    "n8n Automation",
    "Data Extraction",
  ];

  const filteredProjects =
    filter === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative w-full bg-[#050505] py-28 px-6 md:px-16 lg:px-24">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.02] blur-[160px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">
              <Sparkles className="h-3.5 w-3.5 text-zinc-300" />
              <span>Production Systems &amp; SaaS Platforms</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Featured Systems<span className="text-zinc-500">.</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base text-zinc-400">
              A curated look at production SaaS platforms, pgvector RAG pipelines, and self-hosted n8n enterprise workflows built to ship and run reliably.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs font-mono transition-all ${
                  filter === cat
                    ? "bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    : "border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {cat === "all" ? `All Systems (${PROJECTS_DATA.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            >
              {/* Subtle Monochrome Backlight */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
              />

              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    {project.period}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-zinc-300">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h3>
                <div className="mt-1 text-xs font-mono text-zinc-300">
                  {project.subtitle}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                {/* Interactive Visual Card Mockup */}
                <div className="mt-6 relative overflow-hidden rounded-2xl border border-white/10 bg-black/70 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-extrabold font-mono text-white tracking-tight">
                        {project.visualMockup.stat}
                      </div>
                      <div className="text-xs text-zinc-400 font-mono mt-0.5">
                        {project.visualMockup.statLabel}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[10px] font-mono text-zinc-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                        {project.visualMockup.subtag}
                      </span>
                    </div>
                  </div>

                  {/* Monochrome Audio/Particle Wave graphic */}
                  <div className="mt-5 flex items-end gap-1 h-8">
                    {[40, 65, 85, 30, 95, 50, 70, 90, 45, 60, 100, 75, 40, 80, 55, 90, 65, 35, 75, 50].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-white/10 to-white/70 rounded-t-sm transition-all duration-300 group-hover:opacity-100 opacity-50"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-zinc-400 group-hover:border-white/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white font-semibold transition-colors"
                >
                  <span>Read Technical Breakdown</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                    title="View Source on GitHub"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full border border-white/20 bg-white/[0.06] text-zinc-200 hover:bg-white hover:text-black transition-all"
                    title="Launch System Preview"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/20 bg-[#0a0a0a] p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-zinc-400 font-mono text-xs uppercase tracking-widest">
                    <span>{selectedProject.category}</span>
                    <span>•</span>
                    <span>{selectedProject.period}</span>
                  </div>
                  <h3 className="mt-2 text-3xl font-extrabold text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="mt-1 text-sm font-mono text-zinc-300">
                    {selectedProject.subtitle}
                  </div>
                  <p className="mt-3 text-base text-zinc-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.metrics.map((metric, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-black/60 p-4 text-center">
                      <div className="text-xs md:text-sm font-bold font-mono text-white">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technical Highlights */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                    Architectural &amp; Implementation Details
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-zinc-300 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                    Technologies Deployed
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-4 border-t border-white/10 pt-6">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-mono text-white hover:bg-white/10 transition-all"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>View Repository</span>
                  </a>
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-mono font-bold text-black hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
