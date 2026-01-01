"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Send, ArrowUpRight, Sparkles, MessageSquare, CheckCircle2, X } from "lucide-react";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { AnimatedGradient } from "@/components/ui/AnimatedGradient";
import { TextReveal } from "@/components/ui/TextReveal";
import { GlowCard } from "@/components/ui/GlowCard";
import { GlowingOrb } from "@/components/ui/GlowingOrb";
import { MorphingBlob } from "@/components/ui/MorphingBlob";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { resumeData } from "@/data/resumeData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: resumeData.personal.email,
      href: `mailto:${resumeData.personal.email}`,
      color: "cyan",
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: resumeData.personal.phone,
      href: `tel:${resumeData.personal.phone}`,
      color: "purple",
      description: "Call me for urgent matters",
    },
    {
      icon: MapPin,
      label: "Location",
      value: resumeData.personal.location,
      href: "#",
      color: "green",
      description: "Based in Hyderabad, India",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: `https://${resumeData.personal.linkedin}`,
      color: "blue",
      description: "Let's connect professionally",
    },
  ];

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <AnimatedGradient />
      <Navbar />

      <main id="main-content" className="relative z-10 min-h-screen pt-20 overflow-hidden">
        <MorphingBlob color="cyan" size="xl" className="absolute -right-64 top-20 opacity-30" />
        <MorphingBlob color="purple" size="lg" className="absolute -left-48 bottom-20 opacity-30" />
        <GlowingOrb color="mixed" size="lg" className="fixed top-1/3 -right-32 opacity-30" />
        <GlowingOrb color="cyan" size="md" className="fixed bottom-1/3 -left-32 opacity-30" />

        <section className="pb-16 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 mb-8 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-400">Available for new projects</span>
              </motion.div>

              <h1 className="mb-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                <TextReveal>Let&apos;s build</TextReveal>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  <TextReveal delay={0.2}>something amazing</TextReveal>
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed"
              >
                Ready to turn your vision into reality? Let&apos;s discuss how we can create something extraordinary together.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Contact Methods - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                    <TextReveal>Get in touch</TextReveal>
                  </h2>
                  <p className="text-white/50 text-lg">
                    Choose your preferred way to reach out or use the form
                  </p>
                </div>

                <div className="space-y-3">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    const getColorClasses = (color: string) => {
                      switch (color) {
                        case "cyan":
                          return {
                            bg: "bg-cyan-400/10",
                            border: "border-cyan-400/20",
                            hoverBorder: "hover:border-cyan-400/40",
                            iconBg: "bg-gradient-to-br from-cyan-400/20 to-cyan-500/10",
                            iconBorder: "border-cyan-400/30",
                            iconColor: "text-cyan-400",
                            glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
                            gradientOverlay: "via-cyan-400/5",
                          };
                        case "purple":
                          return {
                            bg: "bg-purple-400/10",
                            border: "border-purple-400/20",
                            hoverBorder: "hover:border-purple-400/40",
                            iconBg: "bg-gradient-to-br from-purple-400/20 to-purple-500/10",
                            iconBorder: "border-purple-400/30",
                            iconColor: "text-purple-400",
                            glow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
                            gradientOverlay: "via-purple-400/5",
                          };
                        case "green":
                          return {
                            bg: "bg-green-400/10",
                            border: "border-green-400/20",
                            hoverBorder: "hover:border-green-400/40",
                            iconBg: "bg-gradient-to-br from-green-400/20 to-green-500/10",
                            iconBorder: "border-green-400/30",
                            iconColor: "text-green-400",
                            glow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
                            gradientOverlay: "via-green-400/5",
                          };
                        case "blue":
                          return {
                            bg: "bg-blue-400/10",
                            border: "border-blue-400/20",
                            hoverBorder: "hover:border-blue-400/40",
                            iconBg: "bg-gradient-to-br from-blue-400/20 to-blue-500/10",
                            iconBorder: "border-blue-400/30",
                            iconColor: "text-blue-400",
                            glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]",
                            gradientOverlay: "via-blue-400/5",
                          };
                        default:
                          return {
                            bg: "bg-cyan-400/10",
                            border: "border-cyan-400/20",
                            hoverBorder: "hover:border-cyan-400/40",
                            iconBg: "bg-gradient-to-br from-cyan-400/20 to-cyan-500/10",
                            iconBorder: "border-cyan-400/30",
                            iconColor: "text-cyan-400",
                            glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
                            gradientOverlay: "via-cyan-400/5",
                          };
                      }
                    };

                    const colors = getColorClasses(method.color);

                    return (
                      <motion.a
                        key={method.label}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group block"
                      >
                        <motion.div
                          className={`relative overflow-hidden rounded-2xl border ${colors.border} ${colors.hoverBorder} ${colors.bg} backdrop-blur-sm transition-all duration-500 ${colors.glow}`}
                          whileHover={{ y: -2, scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Animated gradient overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${colors.gradientOverlay} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                          
                          {/* Shine effect */}
                          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000" />

                          <div className="relative z-10 flex items-center gap-4 p-4">
                            {/* Icon container with premium effects */}
                            <motion.div
                              className={`relative flex h-12 w-12 items-center justify-center rounded-xl border ${colors.iconBorder} ${colors.iconBg} flex-shrink-0 overflow-hidden`}
                              whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              {/* Icon glow effect */}
                              <div 
                                className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                  backgroundColor: method.color === "cyan" ? "rgba(6,182,212,0.2)" :
                                                  method.color === "purple" ? "rgba(168,85,247,0.2)" :
                                                  method.color === "green" ? "rgba(34,197,94,0.2)" :
                                                  "rgba(59,130,246,0.2)"
                                }}
                              />
                              <Icon className={`relative z-10 h-5 w-5 ${colors.iconColor} transition-transform group-hover:scale-110`} />
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                                {method.label}
                              </h3>
                              <p className="text-xs text-white/50 mb-1 leading-tight">{method.description}</p>
                              <p className="text-xs font-medium text-white/70 group-hover:text-cyan-400 transition-colors truncate">
                                {method.value}
                              </p>
                            </div>

                            {/* Arrow indicator */}
                            {method.href.startsWith("http") && (
                              <motion.div
                                className="flex-shrink-0"
                                whileHover={{ x: 2, y: -2 }}
                              >
                                <ArrowUpRight className={`h-4 w-4 ${colors.iconColor} opacity-60 group-hover:opacity-100 transition-opacity`} />
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Contact Form - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <motion.div
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border border-cyan-400/30"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <MessageSquare className="h-6 w-6 text-cyan-400" />
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                      Send a message
                    </h2>
                  </div>
                  <p className="text-white/50 text-lg">
                    Fill out the form and I&apos;ll get back to you soon
                  </p>
                </div>

                {/* Success Message */}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6 relative overflow-hidden rounded-2xl border border-green-400/30 bg-gradient-to-br from-green-500/10 via-green-400/5 to-transparent backdrop-blur-sm p-6 shadow-[0_8px_32px_rgba(34,197,94,0.2)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-transparent opacity-50" />
                      <div className="relative z-10 flex items-start gap-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                          className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/20 border border-green-400/30 flex-shrink-0"
                        >
                          <CheckCircle2 className="h-6 w-6 text-green-400" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1">Message Sent Successfully!</h3>
                          <p className="text-sm text-white/70">
                            Thank you for your message. I&apos;ll get back to you as soon as possible.
                          </p>
                        </div>
                        <button
                          onClick={() => setShowSuccess(false)}
                          className="flex-shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors"
                          aria-label="Close success message"
                        >
                          <X className="h-4 w-4 text-white/60 hover:text-white" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-white/[0.03] via-cyan-500/[0.02] to-purple-500/[0.02] backdrop-blur-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent hover:translate-x-full transition-transform duration-2000" />

                  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <motion.div
                        className="group"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-white/90 mb-2.5 group-focus-within:text-cyan-400 transition-colors"
                        >
                          Name <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm hover:border-white/20"
                            placeholder="John Doe"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                      </motion.div>

                      <motion.div
                        className="group"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                      >
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-white/90 mb-2.5 group-focus-within:text-cyan-400 transition-colors"
                        >
                          Email <span className="text-cyan-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm hover:border-white/20"
                            placeholder="john@example.com"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      className="group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-white/90 mb-2.5 group-focus-within:text-cyan-400 transition-colors"
                      >
                        Subject <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 backdrop-blur-sm hover:border-white/20"
                          placeholder="What's this about?"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.25 }}
                    >
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-white/90 mb-2.5 group-focus-within:text-cyan-400 transition-colors"
                      >
                        Message <span className="text-cyan-400">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={8}
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none backdrop-blur-sm hover:border-white/20"
                          placeholder="Tell me about your project, ideas, or just say hello..."
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full overflow-hidden rounded-xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-cyan-500/10 px-8 py-5 font-semibold text-white backdrop-blur-sm transition-all hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                        {/* Animated gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        
                        {/* Shine sweep effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                        
                        {/* Pulsing glow */}
                        <motion.div
                          className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-xl"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        
                        <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              >
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full" />
                              </motion.div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              >
                                <Send className="h-5 w-5" />
                              </motion.div>
                              Send Message
                              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </>
                          )}
                        </span>
                      </motion.button>
                    </motion.div>
                  </form>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
