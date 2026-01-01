"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowingOrb } from "@/components/ui/GlowingOrb";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { resumeData } from "@/data/resumeData";

export default function Experience() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <AnimatedGradient />
      <Navbar />

      <main id="main-content" className="relative z-10 min-h-screen pt-20">
        {/* Ambient glow */}
        <GlowingOrb color="mixed" size="lg" className="fixed top-1/3 -right-32 opacity-40" />
        <GlowingOrb color="cyan" size="md" className="fixed bottom-1/3 -left-32 opacity-40" />

            {/* Hero */}
            <section className="pb-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                <TextReveal>Work</TextReveal>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  <TextReveal delay={0.2}>experience</TextReveal>
                </span>
              </h1>
              <p className="text-xl text-white/50 max-w-2xl">
                <TextReveal delay={0.3}>
                  6.5+ years of progressive experience in frontend development and technical leadership
                </TextReveal>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent md:left-1/2" />

              <div className="space-y-12">
                {resumeData.experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className="relative"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div
                      className={`flex flex-col gap-8 md:flex-row ${
                        index % 2 === 0 ? "" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Content */}
                      <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                        <GlowCard>
                          <div className="flex items-center gap-3 mb-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/20">
                              <Briefcase size={20} className="text-cyan-400" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                              <p className="text-cyan-400">{exp.company}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-white/50 mb-4">
                            <span>{exp.duration}</span>
                            {exp.location && (
                              <>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <MapPin size={14} />
                                  {exp.location}
                                </span>
                              </>
                            )}
                          </div>

                          {exp.description && (
                            <p className="text-white/70">{exp.description}</p>
                          )}
                        </GlowCard>
                      </div>

                      {/* Hidden spacer for layout */}
                      <div className="hidden flex-1 md:block" />
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-8 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#0a0a0f] bg-cyan-400 md:left-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
