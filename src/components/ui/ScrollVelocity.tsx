"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

interface ScrollVelocityProps {
  children: ReactNode;
  baseVelocity?: number;
  className?: string;
}

export const ScrollVelocity = ({
  children,
  baseVelocity = 5,
  className = "",
}: ScrollVelocityProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(velocityFactor, (v) => `${-v * baseVelocity}%`);
  const skewX = useTransform(velocityFactor, (v) => `${v * 0.5}deg`);

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <motion.div className="flex whitespace-nowrap" style={{ x, skewX }}>
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};
