"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { HiEnvelope, HiArrowTopRightOnSquare, HiSparkles } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa";

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center relative overflow-hidden bg-bg-bright section-bright">
      {/* Radial gradient background - blue glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(59, 130, 246, 0.15) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 30% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 70% 70%, rgba(37, 99, 235, 0.08) 0%, transparent 50%)
          `
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container-max relative z-10 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bright to-electric flex items-center justify-center shadow-xl shadow-bright/30">
              <HiSparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p variants={fadeInUp} className="text-bright font-semibold text-lg mb-4">
            Now it&apos;s your turn
          </motion.p>

          {/* Main headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-text-dark"
          >
            Time to
            <br />
            <span className="text-bright">shine</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl text-text-dark/70 mb-12 max-w-xl mx-auto leading-relaxed"
          >
            Let&apos;s build a website that puts your business in the spotlight
            and turns visitors into loyal customers.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="lg"
              className="bg-text-dark text-white hover:bg-text-dark/90 shadow-xl"
              asChild
            >
              <a href="mailto:hello@brightbyte.berlin">
                <HiEnvelope className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-text-dark/20 text-text-dark hover:bg-text-dark/5"
              asChild
            >
              <a
                href="https://linkedin.com/in/danieljinwodke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="w-5 h-5" />
                Connect on LinkedIn
                <HiArrowTopRightOnSquare className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>

          {/* Location */}
          <motion.div variants={fadeInUp} className="mt-20">
            <p className="text-text-dark/50 text-sm font-medium">
              Based in Berlin, Germany &bull; Available worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
