"use client";

import { useEffect, useRef } from "react";

export const SpotlightEffect = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;

      spotlightRef.current.style.setProperty("--x", `${e.clientX}px`);
      spotlightRef.current.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-500 hover:opacity-100"
      style={{
        background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(6, 182, 212, 0.06), transparent 40%)`,
      }}
      aria-hidden="true"
    />
  );
};
