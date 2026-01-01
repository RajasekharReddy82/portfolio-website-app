import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | D. Rajasekhar Reddy",
  description:
    "Comprehensive expertise across modern frontend technologies including React, TypeScript, Redux, TanStack Query, and more.",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

