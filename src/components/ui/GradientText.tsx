"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface GradientTextProps {
  children: string;
  className?: string;
  animate?: boolean;
}

export const GradientText = ({ children, className = "", animate = true }: GradientTextProps) => {
  return (
    <motion.span
      className={cn(
        "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto]",
        className
      )}
      animate={
        animate
          ? {
              backgroundPosition: ["0% center", "100% center", "0% center"],
            }
          : {}
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
};
