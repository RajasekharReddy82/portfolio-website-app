import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GlobalEffects } from "@/components/providers/GlobalEffects";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "D. Rajasekhar Reddy | Technical Lead | React + TypeScript",
  description:
    "Technical Lead with 6.5+ years of expertise in React and TypeScript. Specialist in accessibility, performance optimization, and modern frontend architecture.",
  keywords: [
    "React",
    "TypeScript",
    "Technical Lead",
    "Frontend Developer",
    "Accessibility",
    "Performance Optimization",
  ],
  authors: [{ name: "D. Rajasekhar Reddy" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajasekharreddy.dev",
    title: "D. Rajasekhar Reddy | Technical Lead | React + TypeScript",
    description:
      "Technical Lead with 6.5+ years of expertise in React and TypeScript. Specialist in accessibility, performance optimization, and modern frontend architecture.",
    siteName: "Rajasekhar Reddy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "D. Rajasekhar Reddy | Technical Lead | React + TypeScript",
    description:
      "Technical Lead with 6.5+ years of expertise in React and TypeScript. Specialist in accessibility, performance optimization, and modern frontend architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-[#0a0a0f]`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <GlobalEffects>
          {children}
        </GlobalEffects>
      </body>
    </html>
  );
}
