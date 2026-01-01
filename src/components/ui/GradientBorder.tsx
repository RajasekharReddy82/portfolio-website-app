"use client";

import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  borderRadius?: number;
}

export const GradientBorder = ({
  children,
  className = "",
  borderWidth = 1,
  borderRadius = 16,
}: GradientBorderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderRadius }}
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          borderRadius,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.4), rgba(139, 92, 246, 0.2) 40%, transparent 60%)`,
          padding: borderWidth,
        }}
      >
        <div
          className="h-full w-full bg-[#0a0a0f]"
          style={{ borderRadius: borderRadius - borderWidth }}
        />
      </div>

      {/* Static border */}
      <div
        className="absolute inset-0 border border-white/10 transition-colors duration-300"
        style={{
          borderRadius,
          borderColor: isHovered ? "rgba(6, 182, 212, 0.3)" : "rgba(255, 255, 255, 0.1)",
        }}
      />

      {/* Content */}
      <div className="relative">{children}</div>
    </motion.div>
  );
};

