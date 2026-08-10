"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, ArrowUp, Sparkles, Clock } from "lucide-react";
import confetti from "canvas-confetti";

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  const email = "mayanktr127@gmail.com";
  const githubUrl = "https://github.com/mayanktr127";
  const linkedinUrl = "https://www.linkedin.com/in/mayanktr127";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.85 },
        colors: ["#ffffff", "#e4e4e7", "#a1a1aa", "#71717a", "#27272a"],
      });
    } catch (e) {
      // Confetti fallback
    }

    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#030303] pt-28 pb-16 px-6 md:px-16 lg:px-24 border-t border-white/10 overflow-hidden">
      {/* Subtle Monochrome Lighting Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.03] blur-[180px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Massive Kinetic CTA Box */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 md:p-16 backdrop-blur-2xl text-center flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-mono text-zinc-300 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-zinc-300" />
            <span>Open to Remote Opportunities &amp; AI Projects</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-3xl leading-tight">
            Building AI systems that <span className="text-gradient-silver">ship</span>.
          </h2>

          <p className="mt-6 max-w-xl text-sm sm:text-base text-zinc-400">
            Open to remote opportunities in AI automation and full-stack development. Let&apos;s talk about RAG pipelines, multi-tenant architectures, or n8n workflow systems.
          </p>

          {/* Interactive Copy Email Pill */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="group relative flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-6 py-4 text-sm md:text-base font-mono text-white transition-all hover:border-white/40 hover:bg-white/[0.08] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <Mail className="h-4 w-4 text-zinc-300" />
              <span>{email}</span>
              <div className="p-1 rounded-md bg-white/10 text-zinc-200 group-hover:bg-white/20 transition-colors">
                {copied ? <Check className="h-4 w-4 text-white" /> : <Copy className="h-4 w-4" />}
              </div>
            </button>

            <a
              href={`mailto:${email}`}
              className="rounded-full bg-white px-8 py-4 text-sm md:text-base font-bold font-mono text-black hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              Send Direct Email
            </a>
          </div>

          {/* Copied Toast Alert */}
          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-zinc-900/90 px-4 py-1.5 text-xs font-mono text-white backdrop-blur-md shadow-2xl"
              >
                <Check className="h-3.5 w-3.5 text-white" />
                <span>Email copied to clipboard!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Meta Grid */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-zinc-400">
          
          {/* Brand & Local Time */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-white font-bold">
              <span>Mayank</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400">AI Automation &amp; Full-Stack</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <Clock className="h-3.5 w-3.5 text-zinc-300" />
              <span>Bangalore Time (IST): {time || "Live"}</span>
            </div>
          </div>

          {/* Social Links with exact user profiles */}
          <div className="flex items-center gap-6">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-300 hover:text-white hover:border-white/20 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5 text-zinc-300" />
          </button>

        </div>

      </div>
    </footer>
  );
};
