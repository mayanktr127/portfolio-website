"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hammer, Terminal, MapPin, Radio, Clock, ArrowUpRight } from "lucide-react";

export const AboutStats: React.FC = () => {
  const activeBuilds = [
    {
      title: "MessageFlow — Real-Time Team Chat (Phase 7)",
      status: "Active Build",
      description:
        "Adding Socket.io-powered team chat to MessageFlow, split into two builds: team member management and live messaging. Actively in development.",
      stack: ["Socket.io", "Next.js", "Supabase", "BullMQ", "Redis"],
    },
    {
      title: "Mutual Fund Report Tracker",
      status: "In Progress",
      description:
        "Gmail backfill + ongoing trigger pipeline that extracts mutual fund data from report emails using AI, deduplicated through Supabase. Currently working through a flagged blocker — CAS PDF password-unlocking via PAN — before scaling the extraction logic further.",
      stack: ["n8n", "Gmail API", "AI Extraction", "Supabase"],
    },
    {
      title: "AI Code Review Bot",
      status: "Planned 4-Week Build",
      description:
        "A GitHub Action & CLI tool that posts LLM-generated inline PR comments. Planned as a 4-week build: CLI first, then GitHub Action packaging, severity logic, and finally a publishable marketplace tool.",
      stack: ["GitHub Actions", "LLM", "CLI", "TypeScript"],
    },
  ];

  return (
    <section id="about" className="relative w-full bg-[#050505] py-28 px-6 md:px-16 lg:px-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Bio & Key Attributes (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">
                <MapPin className="h-3.5 w-3.5 text-zinc-300" />
                <span>Bangalore · Remote-First</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                About Mayank<span className="text-zinc-500">.</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                I&apos;m an AI automation developer based in Bangalore. I build systems that solve real operational problems — automating dealership paperwork, running RAG chatbots on production vector stores, and shipping multi-tenant SaaS with verified tenant isolation.
              </p>
              <p className="mt-3 text-sm md:text-base text-zinc-400 leading-relaxed">
                My focus isn&apos;t demos. It&apos;s working software: I test adversarially, verify assumptions instead of trusting docs, and build iteratively — one phase at a time, manually checked before moving to the next.
              </p>
              <p className="mt-3 text-xs md:text-sm text-zinc-400 leading-relaxed font-mono">
                I share what I build in public — workflow breakdowns, node annotations, and the real failures along the way.
              </p>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
                <div className="text-2xl font-extrabold font-mono text-white">Bangalore</div>
                <div className="text-xs text-zinc-400 mt-1">Open to Remote Roles</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
                <div className="text-2xl font-extrabold font-mono text-zinc-200">Production AI</div>
                <div className="text-xs text-zinc-400 mt-1">RAG &amp; Agent Workflows</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
                <div className="text-2xl font-extrabold font-mono text-zinc-200">Adversarial</div>
                <div className="text-xs text-zinc-400 mt-1">Verified Tenant Isolation</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md">
                <div className="text-2xl font-extrabold font-mono text-white">In Public</div>
                <div className="text-xs text-zinc-400 mt-1">Annotated Workflows</div>
              </div>
            </div>
          </div>

          {/* Right Column: Currently Building Active Bench (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Hammer className="h-4 w-4 text-zinc-300" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  Currently Building // On The Bench
                </h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-500">
                Active Momentum
              </span>
            </div>

            <p className="text-xs text-zinc-400 font-mono">
              A look at what&apos;s on the bench right now — because a portfolio that only shows finished work looks static.
            </p>

            <div className="space-y-5 mt-4">
              {activeBuilds.map((build, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl hover:border-white/30 hover:bg-white/[0.04] transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
                      {build.title}
                    </h4>
                    <span className="text-xs font-mono text-zinc-300 bg-white/[0.04] px-3 py-1 rounded-full border border-white/15 w-fit">
                      {build.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {build.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {build.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-0.5 text-xs font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
