"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone, Linkedin, CheckCircle, Award, ExternalLink, Calendar, Building2, Briefcase } from "lucide-react";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowingOrb } from "@/components/ui/GlowingOrb";
import { Badge } from "@/components/ui/Badge";
import { resumeData } from "@/data/resumeData";
import { siteConfig } from "@/config/site";

export default function About() {
  return (
    <>
      <AnimatedGradient />
      <main id="main-content" className="relative z-10 min-h-screen pt-20">
        {/* Ambient glow */}
        <GlowingOrb color="purple" size="lg" className="fixed top-40 -right-32 opacity-40" />
        <GlowingOrb color="cyan" size="md" className="fixed bottom-40 -left-32 opacity-40" />

        {/* Hero */}
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="mb-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  <TextReveal>About</TextReveal>{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    <TextReveal delay={0.2}>me</TextReveal>
                  </span>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-white/50 max-w-xl"
                >
                  A passionate Technical Lead with 6.5+ years of experience crafting 
                  scalable, accessible, and high-performance web applications.
                </motion.p>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Gradient ring */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-full blur-sm opacity-75 animate-pulse" />
                  
                  {/* Image container */}
                  <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-[#0a0a0f]">
                    <Image
                      src="/profile-pic.jpg"
                      alt="D. Rajasekhar Reddy"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center 20%" }}
                      priority
                    />
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-transparent blur-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-xl"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-8">
                {/* Personal Info */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <GlowCard>
                    <div className="mb-6">
                      <h2 className="font-display text-3xl font-bold text-white">
                        {resumeData.personal.name}
                      </h2>
                      <p className="mt-2 text-lg text-cyan-400">{resumeData.personal.role}</p>
                    </div>

                    <div className="space-y-4 text-white/60">
                      <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-cyan-400" />
                        <span>{resumeData.personal.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail size={18} className="text-cyan-400" />
                        <a
                          href={`mailto:${resumeData.personal.email}`}
                          className="hover:text-cyan-400 transition-colors"
                          data-cursor="Email"
                        >
                          {resumeData.personal.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={18} className="text-cyan-400" />
                        <a
                          href={`tel:${resumeData.personal.phone}`}
                          className="hover:text-cyan-400 transition-colors"
                          data-cursor="Call"
                        >
                          {resumeData.personal.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin size={18} className="text-cyan-400" aria-hidden />
                        <a
                          href={siteConfig.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyan-400 transition-colors"
                          data-cursor="LinkedIn"
                          aria-label="LinkedIn profile (opens in new tab)"
                        >
                          LinkedIn Profile
                        </a>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>

                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <GlowCard>
                    <h3 className="mb-6 font-display text-2xl font-bold text-white">
                      Education
                    </h3>
                    <div className="space-y-4">
                      {resumeData.education.map((edu, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="pb-4 border-b border-white/5 last:border-0 last:pb-0"
                        >
                          <div className="text-sm text-cyan-400 mb-1">{edu.year}</div>
                          <h4 className="text-lg font-semibold text-white mb-1">{edu.degree}</h4>
                          <p className="text-white/50 text-sm mb-1">{edu.institution}</p>
                          <p className="text-white/40 text-xs">{edu.grade}</p>
                        </motion.div>
                      ))}
                    </div>
                  </GlowCard>
                </motion.div>
              </div>

              {/* Right Column - Summary */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <GlowCard className="h-full">
                  <h3 className="mb-6 font-display text-2xl font-bold text-white">
                    Professional Summary
                  </h3>
                  <ul className="space-y-4">
                    {resumeData.personal.summary.map((point, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <CheckCircle
                          size={20}
                          className="mt-0.5 flex-shrink-0 text-cyan-400"
                          aria-hidden="true"
                        />
                        <span className="text-white/70">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI-Assisted Development */}
        <section className="pb-16" aria-labelledby="ai-assisted-heading">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard className="border-cyan-400/10">
                <h2
                  id="ai-assisted-heading"
                  className="mb-6 font-display text-2xl font-bold text-white md:text-3xl"
                >
                  {siteConfig.aiAssistedDevelopment.sectionTitle}
                </h2>
                <p className="mb-6 text-white/70 leading-relaxed">
                  {siteConfig.aiAssistedDevelopment.intro[0]}{" "}
                  {siteConfig.aiAssistedDevelopment.intro[1]}
                </p>

                <h3 className="mb-3 font-display text-lg font-semibold text-white">
                  {siteConfig.aiAssistedDevelopment.howIUseTitle}
                </h3>
                <ul className="mb-6 list-disc space-y-2 pl-5 text-white/70">
                  {siteConfig.aiAssistedDevelopment.howIUse.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <p className="border-t border-white/10 pt-4 text-sm italic text-white/60">
                  {siteConfig.aiAssistedDevelopment.credibilityLine}
                </p>
              </GlowCard>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                <TextReveal>Technical</TextReveal>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  <TextReveal delay={0.2}>Skills</TextReveal>
                </span>
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resumeData.skills.map((skillCategory, index) => {
                const categoryColors: Record<string, string> = {
                  "UI Technologies": "from-cyan-400 to-cyan-600",
                  "JavaScript/TypeScript": "from-yellow-400 to-yellow-600",
                  "Frameworks": "from-blue-400 to-blue-600",
                  "State Management & Data Fetching": "from-purple-400 to-purple-600",
                  "Testing": "from-green-400 to-green-600",
                  "Tools & Platforms": "from-orange-400 to-orange-600",
                };
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

        {/* Experience */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                <TextReveal>Work</TextReveal>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  <TextReveal delay={0.2}>Experience</TextReveal>
                </span>
              </h2>
            </motion.div>

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

        {/* Certificates */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                <TextReveal>Certificates</TextReveal>
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {resumeData.certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <GlowCard className="group relative overflow-hidden h-full">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4 flex-1">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30">
                            <Award className="h-6 w-6 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                              {cert.title}
                            </h3>
                            <div className="flex items-center gap-2 text-cyan-400">
                              <Building2 className="h-3.5 w-3.5" />
                              <span className="text-sm font-medium">{cert.issuer}</span>
                            </div>
                          </div>
                        </div>
                        <motion.a
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-colors flex-shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Verify ${cert.title} certificate`}
                        >
                          <ExternalLink className="h-4 w-4 text-white/70 group-hover:text-cyan-400 transition-colors" />
                        </motion.a>
                      </div>

                      {/* Description */}
                      {cert.description && (
                        <p className="text-white/60 mb-4 text-sm leading-relaxed">
                          {cert.description}
                        </p>
                      )}

                      {/* Date */}
                      <div className="flex items-center gap-2 text-white/50 mb-4">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="text-xs">Issued: {cert.issueDate}</span>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-xs font-semibold text-white/80 mb-2">Skills:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {cert.skills.slice(0, 6).map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-white/5 border-white/10 text-white/70 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-colors text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {cert.skills.length > 6 && (
                            <Badge
                              variant="secondary"
                              className="bg-white/5 border-white/10 text-white/50 text-xs"
                            >
                              +{cert.skills.length - 6} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Verify Link */}
                      <motion.a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        <span>Verify Certificate</span>
                        <ExternalLink className="h-3 w-3" />
                      </motion.a>
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
