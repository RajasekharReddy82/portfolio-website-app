"use client";

import { motion } from "framer-motion";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowingOrb } from "@/components/ui/GlowingOrb";
import { Badge } from "@/components/ui/Badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { resumeData } from "@/data/resumeData";

const categoryColors: Record<string, string> = {
  "UI Technologies": "from-cyan-400 to-cyan-600",
  "JavaScript/TypeScript": "from-yellow-400 to-yellow-600",
  "Frameworks": "from-blue-400 to-blue-600",
  "State Management & Data Fetching": "from-purple-400 to-purple-600",
  "Testing": "from-green-400 to-green-600",
  "Tools & Platforms": "from-orange-400 to-orange-600",
};

export default function Skills() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <AnimatedGradient />
      <Navbar />

      <main id="main-content" className="relative z-10 min-h-screen pt-20">
        {/* Ambient glow */}
        <GlowingOrb color="cyan" size="lg" className="fixed top-32 -left-48 opacity-40" />
        <GlowingOrb color="purple" size="lg" className="fixed bottom-32 -right-48 opacity-40" />

            {/* Hero */}
            <section className="pb-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                <TextReveal>Technical</TextReveal>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  <TextReveal delay={0.2}>skills</TextReveal>
                </span>
              </h1>
              <p className="text-xl text-white/50 max-w-2xl">
                <TextReveal delay={0.3}>
                  Comprehensive expertise across modern frontend technologies
                </TextReveal>
              </p>
            </motion.div>
          </div>
        </section>

            {/* Skills Grid */}
            <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resumeData.skills.map((skillCategory, index) => {
                const gradientColor = categoryColors[skillCategory.category] || "from-gray-400 to-gray-600";
                return (
                  <motion.div
                    key={skillCategory.category}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlowCard className="h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`h-12 w-12 rounded-xl bg-gradient-to-br ${gradientColor} flex items-center justify-center text-white font-bold text-lg`}
                        >
                          {skillCategory.category[0]}
                        </div>
                        <h3 className="text-xl font-bold text-white">{skillCategory.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.items.map((item) => (
                          <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge variant="primary">{item}</Badge>
                          </motion.div>
                        ))}
                      </div>
                    </GlowCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
