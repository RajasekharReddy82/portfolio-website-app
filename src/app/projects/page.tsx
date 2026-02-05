"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ArrowUpRight, X } from "lucide-react";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowingOrb } from "@/components/ui/GlowingOrb";
import { Badge } from "@/components/ui/Badge";
import { resumeData } from "@/data/resumeData";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechStack = useMemo(() => {
    const techSet = new Set<string>();
    resumeData.projects.forEach((project) => {
      project.techStack.forEach((tech) => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return resumeData.projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTech = selectedTech === null || project.techStack.includes(selectedTech);
      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTech]);

  const clientProjects = useMemo(() => {
    return filteredProjects.filter((project) => !project.isPersonal);
  }, [filteredProjects]);

  const personalProjects = useMemo(() => {
    return filteredProjects.filter((project) => project.isPersonal);
  }, [filteredProjects]);

  return (
    <>
      <AnimatedGradient />
      <main id="main-content" className="relative z-10 min-h-screen pt-20">
        {/* Ambient glow */}
        <GlowingOrb color="cyan" size="lg" className="fixed top-20 -left-32 opacity-50" />
        <GlowingOrb color="purple" size="md" className="fixed bottom-20 -right-32 opacity-50" />

        {/* Hero */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                <TextReveal>Selected</TextReveal>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  <TextReveal delay={0.2}>work</TextReveal>
                </span>
              </h1>
              <p className="text-lg text-white/50 max-w-xl">
                <TextReveal delay={0.3}>
                  Premium React applications with modern architecture and best practices
                </TextReveal>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="pb-8">
          <div className="container mx-auto px-6">
            {/* Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mb-8"
            >
              <Search
                size={20}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30"
                aria-hidden="true"
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-14 py-4 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                aria-label="Search projects"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </motion.div>

            {/* Tech filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              <button
                onClick={() => setSelectedTech(null)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  selectedTech === null
                    ? "border-cyan-400 bg-cyan-400/20 text-cyan-400"
                    : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white"
                }`}
              >
                All
              </button>
              {allTechStack.slice(0, 8).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech === selectedTech ? null : tech)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    selectedTech === tech
                      ? "border-cyan-400 bg-cyan-400/20 text-cyan-400"
                      : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-16">
          <div className="container mx-auto px-6 space-y-16">
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <>
                  {/* Client Projects Section */}
                  {clientProjects.length > 0 && (
                    <motion.div
                      key="client-projects"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-display font-bold text-white mb-8"
                      >
                        <TextReveal>Client Projects</TextReveal>
                      </motion.h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        {clientProjects.map((project, index) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                          >
                            <Link href={`/projects/${project.slug}`}>
                              <GlowCard>
                                <div className="group relative">
                                  {/* Project number */}
                                  <div className="absolute -right-2 -top-2 font-display text-7xl font-bold text-white/5">
                                    0{index + 1}
                                  </div>

                                  <div className="relative z-10">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                      <div>
                                        <div className="text-sm text-cyan-400 mb-2">
                                          {project.duration}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                          {project.title}
                                        </h3>
                                        <p className="text-sm text-white/40">{project.role}</p>
                                      </div>
                                      <ArrowUpRight className="h-6 w-6 text-white/20 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>

                                    <p className="text-white/50 line-clamp-2 mb-6">
                                      {project.problem}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                      {project.techStack.slice(0, 4).map((tech) => (
                                        <Badge key={tech} variant="primary" className="text-xs">
                                          {tech}
                                        </Badge>
                                      ))}
                                      {project.techStack.length > 4 && (
                                        <Badge variant="default" className="text-xs">
                                          +{project.techStack.length - 4}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </GlowCard>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Personal Projects Section */}
                  {personalProjects.length > 0 && (
                    <motion.div
                      key="personal-projects"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl md:text-3xl font-display font-bold text-white mb-8"
                      >
                        <TextReveal>Personal Projects</TextReveal>
                      </motion.h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        {personalProjects.map((project, index) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                          >
                            <Link href={`/projects/${project.slug}`}>
                              <GlowCard>
                                <div className="group relative">
                                  {/* Project number */}
                                  <div className="absolute -right-2 -top-2 font-display text-7xl font-bold text-white/5">
                                    0{index + 1}
                                  </div>

                                  <div className="relative z-10">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                      <div>
                                        <div className="text-sm text-cyan-400 mb-2">
                                          {project.duration}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                          {project.title}
                                        </h3>
                                        <p className="text-sm text-white/40">{project.role}</p>
                                      </div>
                                      <ArrowUpRight className="h-6 w-6 text-white/20 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </div>

                                    <p className="text-white/50 line-clamp-2 mb-6">
                                      {project.problem}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                      {project.techStack.slice(0, 4).map((tech) => (
                                        <Badge key={tech} variant="primary" className="text-xs">
                                          {tech}
                                        </Badge>
                                      ))}
                                      {project.techStack.length > 4 && (
                                        <Badge variant="default" className="text-xs">
                                          +{project.techStack.length - 4}
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </GlowCard>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-20 text-center"
                >
                  <p className="text-xl text-white/40">No projects found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedTech(null);
                    }}
                    className="mt-4 text-cyan-400 hover:underline"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </>
  );
}
