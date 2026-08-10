"use client";

import React, { useRef, useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { ScrollyCanvas } from "./ScrollyCanvas";
import { Overlay } from "./Overlay";

interface HeroSectionProps {
  onFrameChange?: (frameIndex: number, progress: number) => void;
}

interface HydratedScrollyProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  onFrameChange?: (frameIndex: number, progress: number) => void;
}

const HydratedScrolly: React.FC<HydratedScrollyProps> = ({
  containerRef,
  onFrameChange,
}) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {/* Component 1: The Sticky Scroller Canvas */}
      <ScrollyCanvas
        scrollYProgress={scrollYProgress}
        totalFrames={150}
        onFrameChange={onFrameChange}
      />

      {/* Component 2: The Parallax Overlay */}
      <Overlay scrollYProgress={scrollYProgress} />
    </>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onFrameChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-scroll"
      className="relative w-full h-[500vh] bg-[#050505]"
    >
      {isHydrated && containerRef.current ? (
        <HydratedScrolly
          containerRef={containerRef}
          onFrameChange={onFrameChange}
        />
      ) : (
        <div className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#050505]">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/80 border border-white/10 text-xs font-mono text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span>Initializing Scrollytelling Engine...</span>
          </div>
        </div>
      )}
    </div>
  );
};
