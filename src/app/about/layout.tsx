import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | D. Rajasekhar Reddy",
  description:
    "Technical Lead with 6.5+ years of expertise in React and TypeScript. Learn more about my background, skills, and professional journey.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

