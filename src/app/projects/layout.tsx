import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | D. Rajasekhar Reddy",
  description:
    "Showcasing premium React applications with modern architecture, performance optimization, and accessibility best practices.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

