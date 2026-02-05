"use client";

import { motion } from "framer-motion";
import { Download, Mail, Phone, Linkedin, MapPin, Briefcase, GraduationCap } from "lucide-react";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { resumeData } from "@/data/resumeData";
import { siteConfig } from "@/config/site";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/D-Rajasekhar-Reddy-Resume.pdf";
    link.download = "D-Rajasekhar-Reddy-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <AnimatedGradient />
      <main id="main-content" className="relative z-10 min-h-screen pt-20">
            {/* Hero */}
            <section className="pb-8">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
            >
              <div>
                <h1 className="mb-6 font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  <TextReveal>Resume</TextReveal>
                </h1>
                <p className="text-xl text-white/50">
                  <TextReveal delay={0.2}>View or download my professional resume</TextReveal>
                </p>
              </div>
              <motion.button
                onClick={handleDownload}
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-cyan-500/10 px-8 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                
                <div className="relative z-10 flex items-center gap-3">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Download className="h-5 w-5 text-cyan-400" />
                  </motion.div>
                  <span className="font-semibold text-white">Download PDF</span>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </section>

            {/* Resume Content */}
            <section className="pb-16">
          <div className="container mx-auto px-6 space-y-8">
            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard>
                <h2 className="mb-6 font-display text-3xl font-bold text-white">
                  {resumeData.personal.name}
                </h2>
                <p className="mb-6 text-xl text-cyan-400">{resumeData.personal.role}</p>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                  <div className="flex items-center gap-2 text-white/60">
                    <MapPin size={18} className="text-cyan-400" />
                    {resumeData.personal.location}
                  </div>
                  <a
                    href={`mailto:${resumeData.personal.email}`}
                    className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors"
                  >
                    <Mail size={18} className="text-cyan-400" />
                    {resumeData.personal.email}
                  </a>
                  <a
                    href={`tel:${resumeData.personal.phone}`}
                    className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors"
                  >
                    <Phone size={18} className="text-cyan-400" />
                    {resumeData.personal.phone}
                  </a>
                  <a
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-cyan-400 transition-colors"
                    aria-label="LinkedIn profile (opens in new tab)"
                  >
                    <Linkedin size={18} className="text-cyan-400" aria-hidden />
                    LinkedIn
                  </a>
                </div>
              </GlowCard>
            </motion.div>

            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/20">
                    <Briefcase size={20} className="text-cyan-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Professional Summary</h3>
                </div>
                <ul className="space-y-2">
                  {resumeData.personal.summary.map((point, index) => (
                    <li key={index} className="text-white/70">• {point}</li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-400/20">
                    <Briefcase size={20} className="text-purple-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Experience</h3>
                </div>
                <div className="space-y-6">
                  {resumeData.experience.map((exp) => (
                    <div key={exp.id} className="border-l-2 border-cyan-400/30 pl-4">
                      <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                      <p className="text-cyan-400">{exp.company}</p>
                      <p className="text-sm text-white/50">{exp.duration}</p>
                      {exp.description && (
                        <p className="mt-2 text-white/70">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard>
                <h3 className="mb-6 font-display text-2xl font-bold text-white">Skills</h3>
                <div className="space-y-6">
                  {resumeData.skills.map((skillCategory) => (
                    <div key={skillCategory.category}>
                      <h4 className="mb-3 font-semibold text-white/70">{skillCategory.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillCategory.items.map((item) => (
                          <Badge key={item} variant="primary">{item}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <GlowCard>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/20">
                    <GraduationCap size={20} className="text-green-400" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-green-400/30 pl-4">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <p className="text-white/70">{edu.institution}</p>
                      <p className="text-sm text-white/50">{edu.year} • {edu.grade}</p>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
