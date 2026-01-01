import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | D. Rajasekhar Reddy",
  description:
    "6.5+ years of progressive experience in frontend development and technical leadership at Evoke Technologies and GetOnGrey.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

