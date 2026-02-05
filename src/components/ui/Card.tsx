"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";
import { forwardRef } from "react";

interface CardProps extends Omit<
  HTMLMotionProps<"div">,
  "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "children"
> {
  hover?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, glow = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative rounded-2xl border border-border bg-glass/50 backdrop-blur-xl p-6 transition-all duration-300",
          hover && "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
          glow && "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
          className
        )}
        whileHover={hover ? { y: -8, scale: 1.02 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        {...props}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";
