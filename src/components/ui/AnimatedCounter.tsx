"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter = ({ value, suffix = "", className = "" }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  // Check if value is a number
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const isNumeric = !isNaN(numericValue) && numericValue > 0;
  const prefix = value.replace(/[0-9]/g, "").trim();

  useEffect(() => {
    if (!isInView) return;

    if (!isNumeric) {
      // For non-numeric values like "Zero", just set immediately
      setDisplayValue(value);
      return;
    }

    // Animate numeric values
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(numericValue * easeOutQuart);
      setDisplayValue(prefix + currentValue.toString());

      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(value);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value, isNumeric, numericValue, prefix]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {displayValue}
      <span className="text-cyan-400">{suffix}</span>
    </motion.span>
  );
};
