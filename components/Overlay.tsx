"use client";

import React from "react";
import { useTransform, motion, MotionValue } from "framer-motion";
import { ArrowDown, Layers, Terminal, Sparkles } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export const Overlay: React.FC<OverlayProps> = ({ scrollYProgress }) => {
  // Section 1 (0% to 12% scroll): Center
  // Fades out fast and switches to display: none by 0.08 to prevent any ghosting or overlap with Section 2
  const opacity1 = useTransform(scrollYProgress, [0, 0.03, 0.08, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.08], [0, -30]);
  const scale1 = useTransform(scrollYProgress, [0, 0.08], [1, 0.96]);
  const pointerEvents1 = useTransform(scrollYProgress, (v) => (v < 0.08 ? "auto" : "none"));
  const display1 = useTransform(scrollYProgress, (v) => (v < 0.08 ? "flex" : "none"));

  // Section 2 (16% to 42% scroll): Left aligned
  // Appears only after Section 1 is completely gone
  const opacity2 = useTransform(scrollYProgress, [0, 0.14, 0.20, 0.36, 0.42, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0.14, 0.20, 0.36, 0.42], [30, 0, 0, -30]);
  const scale2 = useTransform(scrollYProgress, [0.14, 0.20, 0.42], [0.96, 1, 0.96]);
  const pointerEvents2 = useTransform(scrollYProgress, (v) => (v >= 0.15 && v <= 0.41 ? "auto" : "none"));
  const display2 = useTransform(scrollYProgress, (v) => (v >= 0.14 && v <= 0.43 ? "flex" : "none"));

  // Section 3 (46% to 72% scroll): Right aligned
  const opacity3 = useTransform(scrollYProgress, [0, 0.44, 0.50, 0.66, 0.72, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0.44, 0.50, 0.66, 0.72], [30, 0, 0, -30]);
  const scale3 = useTransform(scrollYProgress, [0.44, 0.50, 0.72], [0.96, 1, 0.96]);
  const pointerEvents3 = useTransform(scrollYProgress, (v) => (v >= 0.45 && v <= 0.71 ? "auto" : "none"));
  const display3 = useTransform(scrollYProgress, (v) => (v >= 0.44 && v <= 0.73 ? "flex" : "none"));

  // Section 4 (76% to 98% scroll): Transition to Projects
  const opacity4 = useTransform(scrollYProgress, [0, 0.74, 0.80, 0.94, 0.98, 1], [0, 0, 1, 1, 0, 0]);
  const y4 = useTransform(scrollYProgress, [0.74, 0.80, 0.94, 0.98], [30, 0, 0, -20]);
  const scale4 = useTransform(scrollYProgress, [0.74, 0.80, 0.98], [0.96, 1, 0.98]);
  const pointerEvents4 = useTransform(scrollYProgress, (v) => (v >= 0.75 ? "auto" : "none"));
  const display4 = useTransform(scrollYProgress, (v) => (v >= 0.74 ? "flex" : "none"));

  return (
    <div className="pointer-events-none absolute inset-0 z-20 h-full w-full">
      {/* Sticky Viewport Container with safe padding for navbar & HUD */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden px-6 pt-20 pb-16 md:px-16 lg:px-24">
        
        {/* ================= SECTION 1: 0% SCROLL (CENTER) ================= */}
        <motion.div
          style={{ opacity: opacity1, y: y1, scale: scale1, pointerEvents: pointerEvents1, display: display1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-16 pb-12"
        >
          {/* Status Capsule */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-200"></span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-300 uppercase">
              AI Automation Developer &amp; Full-Stack Builder
            </span>
          </div>

          {/* Main Title - Responsive & Scaled to fit comfortably */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
            Mayank<span className="text-zinc-500">.</span>
          </h1>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-6 bg-white/20"></span>
            <p className="text-sm font-light tracking-wide text-zinc-300 sm:text-lg md:text-xl">
              Building AI systems that ship, not slideware.
            </p>
            <span className="h-px w-6 bg-white/20"></span>
          </div>

          <p className="mt-3 max-w-xl text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            I turn messy manual workflows into automated, tested systems — RAG pipelines, multi-tenant SaaS, and self-hosted n8n workflows. Based in Bangalore, open to remote work.
          </p>

          {/* Core Highlights Strip */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-mono text-zinc-400">
            <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5">n8n</span>
            <span>·</span>
            <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5">RAG pgvector</span>
            <span>·</span>
            <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5">Multi-Tenant SaaS</span>
            <span>·</span>
            <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5">Next.js / TS</span>
          </div>

          {/* Scroll Callout */}
          <div className="mt-6 flex flex-col items-center gap-2 text-zinc-400">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
              Scroll to explore systems
            </span>
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="h-1.5 w-1 rounded-full bg-white"
              />
            </div>
          </div>
        </motion.div>


        {/* ================= SECTION 2: 30% SCROLL (LEFT ALIGNED) ================= */}
        <motion.div
          style={{ opacity: opacity2, y: y2, scale: scale2, pointerEvents: pointerEvents2, display: display2 }}
          className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:px-28 max-w-3xl pt-16 pb-12"
        >
          <div className="inline-flex items-center gap-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-2">
            <Terminal className="h-3.5 w-3.5 text-zinc-400" />
            <span>01 // Core Philosophy</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-snug">
            I build <span className="text-gradient-silver">production-grade AI systems</span> that actually run.
          </h2>

          <p className="mt-4 max-w-xl text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-light">
            My focus isn&apos;t demos. It&apos;s working software: I test adversarially, verify assumptions instead of trusting stale docs, and build iteratively — one phase at a time, manually checked before moving to the next.
          </p>

          {/* Metric Badges */}
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-xl border border-white/10 bg-black/70 backdrop-blur-md px-3.5 py-2.5">
              <div className="text-sm sm:text-base font-bold font-mono text-white">Multi-Tenant SaaS</div>
              <div className="text-[11px] text-zinc-400">Adversarially Verified Auth</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/70 backdrop-blur-md px-3.5 py-2.5">
              <div className="text-sm sm:text-base font-bold font-mono text-zinc-200">pgvector RAG</div>
              <div className="text-[11px] text-zinc-400">3072-Dim Gemini Embeddings</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/70 backdrop-blur-md px-3.5 py-2.5">
              <div className="text-sm sm:text-base font-bold font-mono text-zinc-200">n8n Automation</div>
              <div className="text-[11px] text-zinc-400">Self-Hosted Production Scale</div>
            </div>
          </div>
        </motion.div>


        {/* ================= SECTION 3: 60% SCROLL (RIGHT ALIGNED) ================= */}
        <motion.div
          style={{ opacity: opacity3, y: y3, scale: scale3, pointerEvents: pointerEvents3, display: display3 }}
          className="absolute inset-0 flex flex-col justify-center items-end text-right px-6 sm:px-12 md:px-20 lg:px-28 ml-auto max-w-3xl pt-16 pb-12"
        >
          <div className="inline-flex items-center gap-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-2">
            <span>02 // Verified Engineering Stack</span>
            <Layers className="h-3.5 w-3.5 text-zinc-400" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-snug">
            Bridging <span className="text-gradient-silver">AI workflows</span> and <span className="text-white">real infrastructure</span>.
          </h2>

          <p className="mt-4 max-w-xl text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-light">
            Navigating real infrastructure constraints — like pgvector&apos;s HNSW index cap at 2000 dimensions for 3072-dim embeddings, BullMQ / Redis background queues, and Socket.io live communication.
          </p>

          {/* Interactive Stack Pills */}
          <div className="mt-6 flex flex-wrap justify-end gap-2 max-w-md">
            {[
              "n8n (Self-Hosted)",
              "Supabase pgvector",
              "Google Gemini API",
              "Next.js App Router",
              "TypeScript",
              "LangChain",
              "BullMQ / Redis",
              "Socket.io",
              "Tavily & Firecrawl",
              "Cloudflare Tunnel",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md px-3 py-1 text-[11px] font-mono text-zinc-300 hover:border-white/40 hover:text-white hover:bg-white/[0.08] transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>


        {/* ================= SECTION 4: 85% SCROLL (TRANSITION TO WORK) ================= */}
        <motion.div
          style={{ opacity: opacity4, y: y4, scale: scale4, pointerEvents: pointerEvents4, display: display4 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-16 pb-12"
        >
          <div className="inline-flex items-center gap-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-2">
            <Sparkles className="h-3.5 w-3.5 text-zinc-300" />
            <span>03 // Featured Projects &amp; Active Bench</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Production Systems &amp; Case Studies
          </h2>

          <p className="mt-3 max-w-md text-xs sm:text-sm text-zinc-400">
            Explore MessageFlow SaaS, pgvector RAG engines, dealership workflow automations, and AI agent swarms.
          </p>

          <a
            href="#projects"
            className="mt-6 pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-black hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            <span>Explore Systems &amp; Builds</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </a>
        </motion.div>

      </div>
    </div>
  );
};
