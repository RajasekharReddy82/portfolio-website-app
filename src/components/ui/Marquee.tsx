"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface MarqueeProps {
  /** When provided, one accessible copy is announced; duplicate is aria-hidden for animation. */
  items?: ReadonlyArray<string>;
  children?: React.ReactNode;
  className?: string;
  speed?: number;
  reverse?: boolean;
}

export const Marquee = ({
  items,
  children,
  className = "",
  speed = 30,
  reverse = false,
}: MarqueeProps) => {
  const content = items ? (
    items.map((item, i) => (
      <span
        key={`${item}-${i}`}
        className="mx-8 text-lg font-medium text-white/20 hover:text-cyan-400 transition-colors cursor-default"
      >
        {item}
      </span>
    ))
  ) : (
    children
  );

  return (
    <div className={cn("overflow-hidden", className)}>
      {/* Single copy for screen readers and SEO – no duplicate text */}
      {items && items.length > 0 && (
        <ul className="sr-only" aria-label="Technologies used">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {/* Looping animation: duplicate content hidden from assistive tech */}
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        aria-hidden="true"
        animate={{
          x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {content}
        {content}
      </motion.div>
    </div>
  );
};
