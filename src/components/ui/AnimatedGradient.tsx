"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useCallback, useState } from "react";

export const AnimatedGradient = () => {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);

  const springConfig = { damping: 100, stiffness: 30 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    setIsMounted(true);
    
    let rafId: number;
    let lastX = 0;
    let lastY = 0;

    const throttledMove = (e: MouseEvent) => {
      if (Math.abs(e.clientX - lastX) > 20 || Math.abs(e.clientY - lastY) > 20) {
        lastX = e.clientX;
        lastY = e.clientY;
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => handleMouseMove(e));
      }
    };

    window.addEventListener("mousemove", throttledMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", throttledMove);
      cancelAnimationFrame(rafId);
    };
  }, [handleMouseMove]);

  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Cursor-following gradient - subtle */}
      <motion.div
        className="absolute h-[500px] w-[500px] rounded-full opacity-15 blur-[120px] will-change-transform"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Static gradient - top left */}
      <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]" />
      
      {/* Static gradient - bottom right */}
      <div className="absolute -right-48 -bottom-48 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" />
    </div>
  );
};
