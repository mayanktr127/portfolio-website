"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useTransform, useMotionValueEvent, motion, MotionValue } from "framer-motion";

interface ScrollyCanvasProps {
  totalFrames?: number;
  scrollYProgress?: MotionValue<number>;
  onFrameChange?: (frameIndex: number, progress: number) => void;
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({
  totalFrames = 150,
  scrollYProgress: externalScrollProgress,
  onFrameChange,
}) => {
  const localContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);

  // Use external scroll progress if provided, otherwise fallback to local
  const { scrollYProgress: localScrollProgress } = useScroll({
    target: localContainerRef,
    offset: ["start start", "end end"],
  });

  const scrollYProgress = externalScrollProgress || localScrollProgress;

  // Transform 0 -> 1 progress to frame index 0 -> totalFrames - 1
  const frameIndexMotion = useTransform(
    scrollYProgress,
    [0, 1],
    [0, totalFrames - 1]
  );

  // Helper to format frame path: frame_000_delay-0.067s.png
  const getFrameSrc = useCallback((index: number) => {
    const padded = index.toString().padStart(3, "0");
    return `/sequence/frame_${padded}_delay-0.067s.png`;
  }, []);

  // Preload all 150 frames to avoid any white flash or stutter during scroll
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let loadCount = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);

      img.onload = () => {
        if (!isMounted) return;
        loadCount++;
        setImagesLoaded(loadCount);
        if (loadCount === totalFrames) {
          setIsReady(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        loadCount++;
        setImagesLoaded(loadCount);
        if (loadCount === totalFrames) {
          setIsReady(true);
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
    };
  }, [totalFrames, getFrameSrc]);

  // Object-fit: cover rendering logic
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;

    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Deep black base clear
    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, cw, ch);

    // Cover math
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let renderW: number;
    let renderH: number;
    let offsetX: number;
    let offsetY: number;

    if (canvasRatio > imgRatio) {
      renderW = cw;
      renderH = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - renderH) / 2;
    } else {
      renderH = ch;
      renderW = ch * imgRatio;
      offsetX = (cw - renderW) / 2;
      offsetY = 0;
    }

    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);

    // Seamless radial vignette for monochrome edge blending
    const gradient = ctx.createRadialGradient(
      cw / 2,
      ch / 2,
      Math.min(cw, ch) * 0.35,
      cw / 2,
      ch / 2,
      Math.max(cw, ch) * 0.75
    );
    gradient.addColorStop(0, "rgba(5, 5, 5, 0)");
    gradient.addColorStop(0.65, "rgba(5, 5, 5, 0.4)");
    gradient.addColorStop(1, "rgba(5, 5, 5, 0.95)");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, cw, ch);

    ctx.restore();
  }, []);

  // Initial draw once ready or resized
  useEffect(() => {
    if (isReady && imagesRef.current.length > 0) {
      renderFrame(currentFrameRef.current);
    }
  }, [isReady, renderFrame]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      if (imagesRef.current.length > 0) {
        renderFrame(currentFrameRef.current);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame]);

  // Frame scrub synced with Framer Motion useScroll
  useMotionValueEvent(frameIndexMotion, "change", (latest) => {
    const index = Math.min(Math.max(Math.round(latest), 0), totalFrames - 1);
    if (index !== currentFrameRef.current) {
      currentFrameRef.current = index;
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      animationFrameId.current = requestAnimationFrame(() => {
        renderFrame(index);
      });
      if (onFrameChange) {
        onFrameChange(index, scrollYProgress.get());
      }
    }
  });

  const loadPercent = Math.round((imagesLoaded / totalFrames) * 100);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
      {/* HTML5 Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover select-none pointer-events-none"
      />

      {/* Ambient Top & Bottom Seamless Monochrome Gradients */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#050505] via-[#050505]/75 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-transparent pointer-events-none" />

      {/* Minimal Preloader Badge while caching images */}
      {!isReady && loadPercent < 100 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-8 right-8 z-50 flex items-center gap-3 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-300 shadow-2xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-300"></span>
          </span>
          <span>Buffering Sequence: {loadPercent}%</span>
        </motion.div>
      )}
    </div>
  );
};
