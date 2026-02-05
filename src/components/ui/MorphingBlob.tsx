"use client";

import { motion } from "framer-motion";

interface MorphingBlobProps {
  className?: string;
  color?: "cyan" | "purple" | "mixed";
  size?: "sm" | "md" | "lg" | "xl";
}

const colorVariants = {
  cyan: "from-cyan-500/30 via-cyan-400/20 to-cyan-600/30",
  purple: "from-purple-500/30 via-purple-400/20 to-purple-600/30",
  mixed: "from-cyan-500/20 via-purple-500/20 to-cyan-400/20",
};

const sizeVariants = {
  sm: "h-48 w-48",
  md: "h-72 w-72",
  lg: "h-96 w-96",
  xl: "h-[500px] w-[500px]",
};

export const MorphingBlob = ({
  className = "",
  color = "cyan",
  size = "lg",
}: MorphingBlobProps) => {
  return (
    <motion.div
      className={`absolute bg-gradient-to-br ${colorVariants[color]} ${sizeVariants[size]} rounded-full blur-3xl ${className}`}
      animate={{
        borderRadius: [
          "60% 40% 30% 70% / 60% 30% 70% 40%",
          "30% 60% 70% 40% / 50% 60% 30% 60%",
          "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        scale: [1, 1.1, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      aria-hidden="true"
    />
  );
};
