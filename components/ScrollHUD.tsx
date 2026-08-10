"use client";

import React, { useState, useEffect } from "react";
import { Activity, ChevronDown } from "lucide-react";

interface ScrollHUDProps {
  currentFrame?: number;
  totalFrames?: number;
}

export const ScrollHUD: React.FC<ScrollHUDProps> = ({
  currentFrame = 0,
  totalFrames = 150,
}) => {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [fps, setFps] = useState<number>(60);

  useEffect(() => {
    let lastTime = performance.now();
    let frameCounter = 0;
    let animId: number;

    const calcFps = (time: number) => {
      frameCounter++;
      if (time - lastTime >= 1000) {
        setFps(Math.min(frameCounter, 60));
        frameCounter = 0;
        lastTime = time;
      }
      animId = requestAnimationFrame(calcFps);
    };

    animId = requestAnimationFrame(calcFps);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const p = Math.round((window.scrollY / totalScroll) * 100);
        setScrollPercent(Math.min(p, 100));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animId);
    };
  }, []);

  const isScrollySection = scrollPercent <= 75;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-30 pointer-events-none hidden sm:flex items-center justify-between text-xs font-mono text-zinc-400">
      
      {/* Left HUD: Current Frame Index & FPS Indicator */}
      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-black/75 px-4 py-2 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center gap-1.5 text-zinc-200">
          <Activity className="h-3.5 w-3.5 animate-pulse text-white" />
          <span className="font-bold text-white">{fps} FPS</span>
        </div>
        <span className="text-zinc-600">|</span>
        <div className="text-zinc-300">
          {isScrollySection ? (
            <>
              <span>FRAME </span>
              <span className="font-bold text-white">
                {currentFrame.toString().padStart(3, "0")}
              </span>
              <span className="text-zinc-500"> / {totalFrames}</span>
            </>
          ) : (
            <span className="text-zinc-200 font-medium tracking-wide">ARCHIVE VIEW</span>
          )}
        </div>
      </div>

      {/* Center Micro Scroller Hint */}
      {isScrollySection && (
        <div className="pointer-events-auto hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-black/75 px-4 py-2 backdrop-blur-xl">
          <span className="text-[11px] text-zinc-400">SCROLL INTERACTIVE CANVAS</span>
          <ChevronDown className="h-3.5 w-3.5 text-zinc-300 animate-bounce" />
        </div>
      )}

      {/* Right HUD: Global Timeline Progress */}
      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/10 bg-black/75 px-4 py-2 backdrop-blur-xl shadow-2xl">
        <div className="text-zinc-300">
          <span>PROGRESS </span>
          <span className="font-bold text-white">{scrollPercent}%</span>
        </div>

        {/* Mini progress track */}
        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-zinc-400 to-white transition-all duration-150"
            style={{ width: `${scrollPercent}%` }}
          />
        </div>
      </div>

    </div>
  );
};
