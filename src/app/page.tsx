"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowUpRight, Download, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { MorphingBlob } from "@/components/ui/MorphingBlob";
import { SplitText } from "@/components/ui/SplitText";
import { TypeWriter } from "@/components/ui/TypeWriter";
import { NumberCounter } from "@/components/ui/NumberCounter";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { TextScramble } from "@/components/ui/TextScramble";
import { HorizontalScroll } from "@/components/ui/HorizontalScroll";
import { TiltCard } from "@/components/ui/TiltCard";
import { Marquee } from "@/components/ui/Marquee";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { resumeData } from "@/data/resumeData";

const roles = [
  "Frontend Technical Lead",
  "React Developer",
  "TypeScript Developer",
  "JavaScript Developer",
  "Web Performance Optimizer",
];

const stats = [
  { value: 6, label: "Years Experience", suffix: "+" },
  { value: 10, label: "Projects Delivered", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 40, label: "Code Reduction", suffix: "%" },
];

const techStack = [
  "React 19", "TypeScript", "Next.js", "Redux", "TanStack Query", "Tailwind CSS",
  "Cypress", "Jest", "Azure DevOps", "Performance", "Accessibility", "Vite",
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const featuredProjects = resumeData.projects.filter((p) => p.featured);

  const handleScrollDown = () => {
    if (heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight;
      window.scrollTo({
        top: heroHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Morphing blobs */}
          <MorphingBlob color="cyan" size="xl" className="-left-64 top-20 opacity-60" />
          <MorphingBlob color="purple" size="xl" className="-right-64 bottom-20 opacity-60" />

          <motion.div
            className="container mx-auto px-6 text-center relative z-10"
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-sm text-green-400 backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                <span className="font-medium">Available for new opportunities</span>
              </span>
            </motion.div>

            {/* Main name with split text animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <h1 className="mb-8 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                <SplitText
                  text="Rajasekhar"
                  className="text-white"
                  delay={1.7}
                  animation="wave"
                />{" "}
                <SplitText
                  text="Reddy"
                  className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  delay={2}
                  animation="wave"
                />
              </h1>
            </motion.div>

            {/* Dynamic role with typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
              className="mb-8"
            >
              <span className="text-xl md:text-2xl text-white/60">
                I&apos;m a{" "}
                <TypeWriter
                  texts={roles}
                  className="text-cyan-400 font-semibold"
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2000}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 }}
              className="mx-auto max-w-2xl text-lg text-white/50 mb-12"
            >
              Building premium, accessible, and performant web experiences with{" "}
              <span className="text-cyan-400 font-medium">6.5+ years</span> of expertise
              in modern frontend development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.9 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
              <Link href="/projects">
                <motion.button
                  className="group relative overflow-hidden rounded-full bg-white px-8 py-4 font-semibold text-black transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>

              <Link href="/resume">
                <motion.button
                  className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:bg-white/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="h-4 w-4" />
                  Resume
                </motion.button>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.1 }}
              className="flex items-center justify-center gap-6"
            >
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="group flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm hidden sm:inline">Email</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm hidden sm:inline">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator - at section level */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2"
          >
            <motion.button
              onClick={handleScrollDown}
              className="group flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to next section"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </motion.div>
            </motion.button>
          </motion.div>
        </section>

        {/* Tech Stack Marquee */}
        <section className="py-4 border-y border-white/5">
          <Marquee speed={40}>
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="mx-8 text-lg font-medium text-white/20 hover:text-cyan-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </Marquee>
        </section>

        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <GradientBorder className="p-6 text-center group hover:border-cyan-400/30 transition-colors">
                    <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                      <NumberCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        className="text-white"
                      />
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wider group-hover:text-cyan-400/80 transition-colors">
                      {stat.label}
                    </div>
                  </GradientBorder>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-12 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-cyan-400 text-xs uppercase tracking-widest mb-3 block font-medium">
                  About Me
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5">
                  Crafting digital{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    experiences
                  </span>
                </h2>
                <p className="text-base text-white/60 mb-6 leading-relaxed">
                  {resumeData.personal.summary.slice(0, 2).join(". ")}.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React 19", "TypeScript", "Next.js", "Performance", "Accessibility"].map((skill) => (
                    <Badge key={skill} variant="accent" className="px-3 py-1.5 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Link href="/about">
                  <motion.span
                    className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 hover:gap-3 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Learn more about me
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <GradientBorder className="p-6 hover:border-cyan-400/30 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400/80 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                    </div>
                    <pre className="font-mono text-xs text-white/80 overflow-x-auto">
                      <code>
                        <span className="text-purple-400/90">const</span>{" "}
                        <span className="text-cyan-400">developer</span> = {"{"}
                        {"\n"}  name: <span className="text-emerald-400">&quot;Rajasekhar Reddy&quot;</span>,
                        {"\n"}  role: <span className="text-emerald-400">&quot;Technical Lead&quot;</span>,
                        {"\n"}  experience: <span className="text-yellow-400 font-semibold">6.5</span>,
                        {"\n"}  skills: [
                        {"\n"}    <span className="text-emerald-400">&quot;React&quot;</span>,
                        {"\n"}    <span className="text-emerald-400">&quot;TypeScript&quot;</span>,
                        {"\n"}    <span className="text-emerald-400">&quot;JavaScript&quot;</span>,
                        {"\n"}    <span className="text-emerald-400">&quot;Performance Optimization & Scalability&quot;</span>
                        {"\n"}  ],
                        {"\n"}  passion: <span className="text-emerald-400">&quot;Building amazing UIs&quot;</span>
                        {"\n"}{"}"};
                      </code>
                    </pre>
                  </div>
                </GradientBorder>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16">
          <div className="container mx-auto px-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-end justify-between"
            >
              <div>
                <span className="text-cyan-400 text-sm uppercase tracking-widest mb-4 block">
                  Portfolio
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                  Featured{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Work
                  </span>
                </h2>
              </div>
              <Link
                href="/projects"
                className="hidden md:flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-colors"
              >
                View all
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <HorizontalScroll>
            {featuredProjects.map((project, i) => (
              <Link key={project.id} href={`/projects/${project.slug}`} className="flex-shrink-0">
                <TiltCard>
                  <motion.div
                    className="group relative h-[450px] w-[380px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    {/* Project number */}
                    <div className="absolute right-4 top-4 font-display text-8xl font-bold text-white/5 select-none">
                      0{i + 1}
                    </div>

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div>
                        <TextScramble
                          text={project.duration}
                          className="text-xs text-cyan-400 mb-4"
                          delay={0.5 + i * 0.1}
                        />
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-4">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/50 line-clamp-3 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <div className="mb-6 flex flex-wrap gap-2">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="primary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.techStack.length > 3 && (
                            <Badge variant="default" className="text-xs">
                              +{project.techStack.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/40 group-hover:text-cyan-400 transition-colors">
                          <span>View case study</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </TiltCard>
              </Link>
            ))}

            {/* View all card */}
            <Link href="/projects" className="flex-shrink-0">
              <motion.div
                className="flex h-[450px] w-[200px] items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-4xl mb-3"
                  >
                    →
                  </motion.div>
                  <div className="text-sm font-medium text-white/60">View all projects</div>
                </div>
              </motion.div>
            </Link>
          </HorizontalScroll>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          <MorphingBlob color="cyan" size="xl" className="absolute -left-64 top-1/2 -translate-y-1/2 opacity-40" />
          <MorphingBlob color="purple" size="lg" className="absolute -right-32 top-0 opacity-30" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
                Let&apos;s work{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  together
                </span>
              </h2>
              <p className="text-base md:text-lg text-white/50 mb-8 max-w-xl mx-auto">
                Ready to build something exceptional? Let&apos;s discuss your next project.
              </p>
              <Link href="/contact">
                <motion.button
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2 text-base">
                    Get in touch
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
