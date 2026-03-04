"use client";

import { Section } from "@/components/layout/Section";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { fadeInLeft, fadeInRight } from "@/lib/motion";
import { HiCheckCircle, HiBolt } from "react-icons/hi2";

const highlights = [
  "SAP Developer with enterprise experience",
  "Based in Berlin, working with clients worldwide",
  "Fluent in English and German",
  "Obsessed with results and great UX",
];

export function AboutSection() {
  return (
    <Section id="about" background="secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <ScrollReveal variants={fadeInLeft}>
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-bg-card border border-white/5 overflow-hidden relative">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-bright/10 via-transparent to-electric/10" />

              <div className="w-full h-full flex items-center justify-center relative">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-bright to-electric flex items-center justify-center shadow-lg shadow-bright/20">
                  <span className="text-4xl font-bold text-bg-primary">DJ</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-bright/20 rounded-xl -z-10 blur-xl" />
            <div className="absolute -top-3 -left-3 w-16 h-16 bg-electric/20 rounded-lg -z-10 blur-xl" />

            {/* Floating badge */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-lg bg-bg-card border border-white/10 flex items-center justify-center animate-float">
              <HiBolt className="w-5 h-5 text-bright" />
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal variants={fadeInRight}>
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-text-primary">
              Hi, I&apos;m <span className="text-bright">Daniel</span>
            </h2>

            <div className="space-y-5 text-text-secondary mb-10 text-lg leading-relaxed">
              <p>
                I&apos;m a software developer in Berlin who helps small businesses
                get found online. By day, I work as an SAP developer — and in my
                spare time, I build websites that actually deliver results.
              </p>
              <p>
                I believe your website should work as hard as you do. It&apos;s not
                just about looking good — it&apos;s about being <span className="text-bright">found</span>, building trust,
                and turning visitors into customers.
              </p>
            </div>

            <ul className="space-y-4">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-bright/10 flex items-center justify-center flex-shrink-0">
                    <HiCheckCircle className="w-4 h-4 text-bright" />
                  </div>
                  <span className="text-text-primary font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
