"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "accent";
  animated?: boolean;
}

export const Badge = ({
  className,
  variant = "default",
  animated = false,
  children,
  ...props
}: BadgeProps) => {
  const variants = {
    default: "bg-white/5 border-white/10 text-white/70",
    primary: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    secondary: "bg-purple-500/10 border-purple-500/30 text-purple-400",
    accent: "bg-green-500/10 border-green-500/30 text-green-400",
  };

  const content = (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );

  if (animated) {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {content}
      </motion.span>
    );
  }

  return content;
};
