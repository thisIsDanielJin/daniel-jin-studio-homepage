"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { GradualBlurOnScroll } from "@/components/animations/GradualBlur";
import { LaserFlow, LaserFlowBorder } from "@/components/animations/LaserFlow";
import { HiSparkles, HiBolt, HiRocketLaunch } from "react-icons/hi2";
import { HiTrendingUp } from "react-icons/hi";

const aiFeatures = [
  {
    icon: HiRocketLaunch,
    title: "Faster Delivery",
    description: "AI-assisted development means your project launches sooner — without cutting corners on quality.",
  },
  {
    icon: HiSparkles,
    title: "Smarter Features",
    description: "Add intelligent chatbots, personalization, and automation that engage visitors 24/7.",
  },
  {
    icon: HiTrendingUp,
    title: "Better Conversions",
    description: "Data-driven insights and smart UX that turn more visitors into paying customers.",
  },
];

export function AISection() {
  return (
    <Section id="ai" background="secondary">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bright/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Laser Flow Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <LaserFlow color="#FBBF24" speed="slow" density="sparse" />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bright/10 border border-bright/20 text-bright text-sm font-medium mb-6"
            >
              <HiSparkles className="w-4 h-4" />
              AI-Powered Development
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <GradualBlurOnScroll text="Built Smarter" className="text-text-primary" />
              <br />
              <span className="text-bright">
                <GradualBlurOnScroll text="with AI" delay={0.2} />
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-secondary text-lg max-w-2xl mx-auto"
            >
              I use AI at every step — from writing code to building smart features
              into your website. You get faster results and a site that actually works for you.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Hover glow */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-bright/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative h-full bg-bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-bright/20 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-bright/20 to-bright/5 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-bright/20 transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-bright" />
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-bright transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats with Laser Border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <LaserFlowBorder color="#FBBF24" borderRadius="1rem">
              <div className="flex items-center gap-6 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-bright to-electric flex items-center justify-center">
                    <HiBolt className="w-5 h-5 text-bg-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-bright">10x</div>
                    <div className="text-xs text-text-muted">Faster shipping</div>
                  </div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-sm text-text-secondary">
                  AI-powered workflows for <span className="text-text-primary font-medium">rapid development</span>
                </div>
              </div>
            </LaserFlowBorder>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
