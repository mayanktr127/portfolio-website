"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, Database, Layers, Terminal, Sparkles, Server, Zap, Cpu } from "lucide-react";

export const TechPhilosophy: React.FC = () => {
  const principles = [
    {
      title: "I ship, don't prototype",
      desc: "Every project runs in production or is built to. No mock slideware or fragile proof-of-concepts.",
      icon: Zap,
    },
    {
      title: "I test adversarially",
      desc: "Tenant isolation, auth boundaries, and data integrity get attacked and stress-tested before they get trusted.",
      icon: ShieldCheck,
    },
    {
      title: "I verify, not assume",
      desc: "Model names, vector dimensions (like pgvector's HNSW cap at 2000-dim), and API behaviors are independently tested.",
      icon: CheckCircle,
    },
    {
      title: "I build in phases",
      desc: "Complex systems get built one verified phase at a time, manually checked before moving to the next layer.",
      icon: Layers,
    },
  ];

  const skillGroups = [
    {
      category: "Automation & AI",
      skills: [
        "n8n (Self-Hosted)",
        "LangChain",
        "AI Agent Workflows",
        "RAG Pipelines",
        "Google Gemini API",
        "OpenRouter",
        "Tavily API",
        "Firecrawl",
      ],
    },
    {
      category: "Backend & Data",
      skills: [
        "Supabase (Postgres & pgvector)",
        "Supabase Auth & Storage",
        "BullMQ & Redis (Upstash)",
        "Pinecone",
        "Node.js",
        "Socket.io",
      ],
    },
    {
      category: "Frontend & Full-Stack",
      skills: [
        "Next.js (App Router)",
        "TypeScript",
        "Tailwind CSS",
        "React Hook Form",
        "Zod Validation",
        "Framer Motion",
      ],
    },
    {
      category: "Infrastructure & Tools",
      skills: [
        "Cloudflare Tunnel",
        "Vercel",
        "Netlify",
        "Razorpay",
        "GitHub Actions",
        "Docker",
      ],
    },
  ];

  return (
    <section id="philosophy" className="relative w-full bg-[#050505] py-28 px-6 md:px-16 lg:px-24 border-t border-white/10">
      {/* Subtle ambient background blur */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[300px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 text-zinc-400 font-mono text-xs tracking-widest uppercase mb-3">
            <Terminal className="h-3.5 w-3.5 text-zinc-300" />
            <span>How I Work &amp; Engineering Differentiators</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Engineering Methodology<span className="text-zinc-500">.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-zinc-400">
            A discipline focused on reliable execution: building iteratively, testing adversarially, and verifying assumptions rather than trusting stale documentation.
          </p>
        </div>

        {/* Principles 4-Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl hover:border-white/30 transition-all group"
              >
                <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/15 text-white w-fit">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Bento Groups */}
        <div className="mt-16 border-t border-white/10 pt-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Verified Production Stack
            </h3>
            <span className="text-xs font-mono text-zinc-500">
              Battle-Tested In Production
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, gIdx) => (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gIdx * 0.1 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider mb-4 border-b border-white/10 pb-2.5">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs font-mono text-zinc-300 hover:border-white/20 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
