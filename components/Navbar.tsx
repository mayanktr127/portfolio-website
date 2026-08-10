"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, ArrowUpRight, Menu, X, Terminal } from "lucide-react";

interface NavbarProps {
  currentFrame?: number;
  totalFrames?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentFrame = 0, totalFrames = 150 }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(soundEnabled ? 300 : 600, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
      // AudioContext not allowed or unsupported
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 ${
          scrolled
            ? "border-white/15 bg-black/85 shadow-[0_8px_32px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-white/10 bg-black/50 backdrop-blur-md"
        }`}
      >
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] font-mono text-xs font-bold text-white transition-transform group-hover:scale-105">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors">
              Mayank
            </span>
            <span className="text-[10px] font-mono text-zinc-400">
              AI Automation &amp; Full-Stack
            </span>
          </div>
        </a>

        {/* Live Status Pill */}
        <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1 text-[11px] font-mono text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-200"></span>
          </span>
          <span>Bangalore · Open to Remote Work</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-zinc-400">
          <a href="#hero-scroll" className="hover:text-white transition-colors">
            01 // Overview
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            02 // Systems
          </a>
          <a href="#philosophy" className="hover:text-white transition-colors">
            03 // Methodology
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            04 // Active Builds
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            05 // Contact
          </a>
        </div>

        {/* Right CTAs: Sound toggle + Contact button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSound}
            aria-label="Toggle Sound"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
            title={soundEnabled ? "Mute Ambient Cues" : "Enable Ambient Haptics"}
          >
            {soundEnabled ? <Volume2 className="h-3.5 w-3.5 text-white" /> : <VolumeX className="h-3.5 w-3.5" />}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-black hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-20 left-4 right-4 rounded-2xl border border-white/15 bg-black/95 p-6 backdrop-blur-2xl md:hidden shadow-2xl flex flex-col gap-4 text-sm font-mono text-zinc-300"
        >
          <a
            href="#hero-scroll"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white py-1"
          >
            01 // Overview
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white py-1"
          >
            02 // Systems &amp; SaaS
          </a>
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white py-1"
          >
            03 // Methodology &amp; Stack
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white py-1"
          >
            04 // Active Builds &amp; Bio
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-white py-1 text-white font-semibold"
          >
            05 // Get in Touch
          </a>
        </motion.div>
      )}
    </header>
  );
};
