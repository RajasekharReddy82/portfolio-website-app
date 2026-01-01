"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone, Linkedin, CheckCircle, Award, ExternalLink, Calendar, Building2 } from "lucide-react";
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

export default function About() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <AnimatedGradient />
      <Navbar />

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
                      <Linkedin size={18} className="text-cyan-400" />
                      <a
                        href={`https://${resumeData.personal.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                        data-cursor="LinkedIn"
                      >
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>

              {/* Summary */}
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

        {/* Education */}
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
                <TextReveal>Education</TextReveal>
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlowCard className="h-full">
                    <div className="text-sm text-cyan-400 mb-2">{edu.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                    <p className="text-white/50 mb-2">{edu.institution}</p>
                    <p className="text-white/40 text-sm">{edu.grade}</p>
                  </GlowCard>
                </motion.div>
              ))}
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

      <Footer />
    </>
  );
}
