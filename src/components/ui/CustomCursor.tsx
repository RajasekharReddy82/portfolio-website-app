"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use motion values for instant tracking (no spring on position)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Only use spring for the trailing cursor (optional smooth follow)
  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    },
    [cursorX, cursorY, isVisible]
  );

  useEffect(() => {
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [moveCursor]);

  // Don't render on mobile/touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor - NO spring, instant follow */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isClicking ? 8 : 14,
            height: isClicking ? 8 : 14,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 400 }}
        />
      </motion.div>

      {/* Trailing cursor - with smooth spring follow */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 0.4 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className="rounded-full border border-white/40"
          animate={{
            width: 40,
            height: 40,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        />
      </motion.div>
    </>
  );
};
