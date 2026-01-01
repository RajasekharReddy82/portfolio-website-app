"use client";

import { ReactNode } from "react";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { GridBackground } from "@/components/ui/GridBackground";
import { ParticleField } from "@/components/ui/ParticleField";
import { Spotlight } from "@/components/ui/Spotlight";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

interface GlobalEffectsProps {
  children: ReactNode;
}

export const GlobalEffects = ({ children }: GlobalEffectsProps) => {
  return (
    <SmoothScrollProvider>
      <ParticleField />
      <GridBackground />
      <Spotlight />
      <NoiseOverlay />
      {children}
    </SmoothScrollProvider>
  );
};

