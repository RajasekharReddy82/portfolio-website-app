import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | D. Rajasekhar Reddy",
  description:
    "Get in touch with D. Rajasekhar Reddy. Let's discuss how I can help bring your ideas to life.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
