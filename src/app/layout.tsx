import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { GlobalEffects } from "@/components/providers/GlobalEffects";
import { AppShell } from "@/components/layout/AppShell";
import { siteConfig } from "@/config/site";
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
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.metadata.name} | ${siteConfig.metadata.role}`,
    template: `%s | ${siteConfig.metadata.name}`,
  },
  description: siteConfig.metadata.description,
  keywords: [
    "React",
    "TypeScript",
    "Technical Lead",
    "Frontend Developer",
    "Accessibility",
    "Performance Optimization",
  ],
  authors: [{ name: siteConfig.metadata.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.baseUrl,
    title: siteConfig.metadata.name,
    description: siteConfig.metadata.description,
    siteName: "Rajasekhar Reddy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metadata.name,
    description: siteConfig.metadata.description,
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
          <AppShell>{children}</AppShell>
        </GlobalEffects>
      </body>
    </html>
  );
}
