"use client";

import Link from "next/link";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { resumeData } from "@/data/resumeData";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0f]" suppressHydrationWarning>
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 font-display text-4xl font-bold tracking-tight md:text-5xl">
              <TextReveal>Ready to start</TextReveal>
              <br />
              <span className="text-white/40">
                <TextReveal delay={0.1}>a project?</TextReveal>
              </span>
            </h2>
            <Link href="/contact">
              <MagneticButton className="group bg-white text-black hover:bg-white/90">
                <span className="flex items-center gap-2">
                  Get in touch
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </MagneticButton>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid gap-8 sm:grid-cols-2"
          >
            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/40">
                Navigation
              </h3>
              <nav className="flex flex-col gap-3">
                {[
                  { href: "/about", label: "About" },
                  { href: "/projects", label: "Projects" },
                  { href: "/resume", label: "Resume" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-white/60 transition-colors hover:text-cyan-400"
                    data-cursor={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-white/40">
                Connect
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${resumeData.personal.email}`}
                  className="flex items-center gap-2 text-white/60 transition-colors hover:text-cyan-400"
                  data-cursor="Email"
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>
                <a
                  href={`https://${resumeData.personal.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 transition-colors hover:text-cyan-400"
                  data-cursor="LinkedIn"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row"
        >
          <p className="text-sm text-white/40">
            © {currentYear} {resumeData.personal.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Built with Next.js, Framer Motion & ♥
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
