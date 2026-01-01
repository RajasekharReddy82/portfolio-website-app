"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Target, Lightbulb, Zap, CheckCircle, BookOpen, Trophy, ExternalLink } from "lucide-react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Project } from "@/data/resumeData";

interface ProjectPageClientProps {
  project: Project;
}

export const ProjectPageClient = ({ project }: ProjectPageClientProps) => {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <AnimatedGradient />
      <Navbar />

      <main id="main-content" className="relative z-10 min-h-screen pt-20">
            {/* Back button */}
            <section className="pb-6">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/projects">
                <motion.button
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 hover:text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                  whileHover={{ x: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <motion.div
                    animate={{ x: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </motion.div>
                  <span className="relative z-10">Back to projects</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

            {/* Hero */}
            <section className="pb-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center gap-4 mb-6 text-white/50 text-sm">
                <span className="text-cyan-400 font-medium">{project.client}</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {project.duration}
                </span>
                <span className="hidden sm:inline">•</span>
                <span>{project.role}</span>
              </div>

              <h1 className="mb-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                <TextReveal>{project.title}</TextReveal>
              </h1>

              {project.description && (
                <p className="text-lg text-white/50 max-w-3xl mb-8">
                  {project.description}
                </p>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="primary">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Live URL Button */}
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-cyan-500/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition-all hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Gradient sweep */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                  
                  {/* Animated glow border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-0 blur-sm group-hover:opacity-30 transition-opacity duration-300" />
                  
                  <span className="relative z-10">View Live Site</span>
                  <motion.div
                    animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.div>
                </motion.a>
              )}
            </motion.div>
          </div>
        </section>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section className="pb-12">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GlowCard className="border-cyan-400/30 bg-cyan-400/5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/20">
                      <Trophy size={24} className="text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-4 font-display text-xl font-bold text-white">
                        Key Highlights
                      </h3>
                      <ul className="grid gap-2 md:grid-cols-2">
                        {project.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2 text-white/70">
                            <Zap size={16} className="mt-0.5 text-cyan-400 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </div>
          </section>
        )}

        {/* Content sections */}
        <section className="pb-16">
          <div className="container mx-auto px-6 space-y-8">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-400/20">
                    <Target size={24} className="text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-4 font-display text-2xl font-bold text-white">Problem</h2>
                    <p className="text-white/70 leading-relaxed">{project.problem}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            {/* Approach */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-400/20">
                    <Lightbulb size={24} className="text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-4 font-display text-2xl font-bold text-white">Approach</h2>
                    <p className="text-white/70 leading-relaxed">{project.approach}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            {/* Architecture */}
            {project.architecture && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <GlowCard>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-400/20">
                      <Zap size={24} className="text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="mb-4 font-display text-2xl font-bold text-white">
                        Architecture & Key Decisions
                      </h2>
                      <p className="text-white/70 leading-relaxed">{project.architecture}</p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            )}

            {/* Challenges */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard>
                <h2 className="mb-6 font-display text-2xl font-bold text-white">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/70">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard>
                <h2 className="mb-6 font-display text-2xl font-bold text-white">Results</h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/70">
                      <CheckCircle size={18} className="mt-0.5 text-green-400 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>

            {/* Learnings */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-400/20">
                    <BookOpen size={24} className="text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="mb-4 font-display text-2xl font-bold text-white">Learnings</h2>
                    <ul className="space-y-3">
                      {project.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start gap-3 text-white/70">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

