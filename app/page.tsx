"use client";

import React, { useState, useCallback } from "react";
import { HeroSection } from "../components/HeroSection";
import { Projects } from "../components/Projects";
import { TechPhilosophy } from "../components/TechPhilosophy";
import { AboutStats } from "../components/AboutStats";
import { ContactFooter } from "../components/ContactFooter";
import { Navbar } from "../components/Navbar";
import { ScrollHUD } from "../components/ScrollHUD";
import { CursorGlow } from "../components/CursorGlow";

export default function Home() {
  const [currentFrame, setCurrentFrame] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const handleFrameChange = useCallback((frameIndex: number, progress: number) => {
    setCurrentFrame(frameIndex);
    setScrollProgress(progress);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#050505] text-zinc-100 selection:bg-white/20 selection:text-white">
      {/* Ambient Cursor Light */}
      <CursorGlow />

      {/* Floating Glass Navigation */}
      <Navbar currentFrame={currentFrame} totalFrames={150} />

      {/* Scrollytelling Telemetry HUD */}
      <ScrollHUD currentFrame={currentFrame} totalFrames={150} />

      {/* Scrollytelling Core Container (500vh with Sticky Canvas & Parallax Overlay) */}
      <HeroSection onFrameChange={handleFrameChange} />

      {/* Component 3: The Work Grid (Placed after the 500vh container) */}
      <Projects />

      {/* Component 4: Architecture & Engineering Principles Bento */}
      <TechPhilosophy />

      {/* Component 5: Experience, Metrics & Awards */}
      <AboutStats />

      {/* Component 6: Kinetic Contact Footer */}
      <ContactFooter />
    </main>
  );
}
