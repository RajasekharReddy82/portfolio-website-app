"use client";

import { ReactNode } from "react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
