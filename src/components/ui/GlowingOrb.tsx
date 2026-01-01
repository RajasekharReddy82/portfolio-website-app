"use client";

import { motion } from "framer-motion";

interface GlowingOrbProps {
  color?: "cyan" | "purple" | "mixed";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const colors = {
  cyan: "from-cyan-500/20 to-cyan-500/5",
  purple: "from-purple-500/20 to-purple-500/5",
  mixed: "from-cyan-500/15 via-purple-500/15 to-cyan-500/15",
};

const sizes = {
  sm: "h-32 w-32",
  md: "h-64 w-64",
  lg: "h-96 w-96",
};

export const GlowingOrb = ({
  color = "cyan",
  size = "md",
  className = "",
}: GlowingOrbProps) => {
  return (
    <motion.div
      className={`absolute rounded-full bg-gradient-radial ${colors[color]} ${sizes[size]} blur-3xl ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
};

