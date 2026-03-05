"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { GradualBlurOnScroll } from "@/components/animations/GradualBlur";
import {
    HiEnvelope,
    HiArrowTopRightOnSquare,
    HiSparkles,
} from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa";

// Dynamically import LightRays to avoid SSR issues with WebGL
const LightRays = dynamic(() => import("@/components/reactbits/LightRays"), {
    ssr: false,
});

export function ContactSection() {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center relative overflow-hidden bg-[#0A0A0C]"
        >
            {/* Gradient transition from previous section */}
            <div
                className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, var(--color-bg-secondary) 0%, #0A0A0C 100%)'
                }}
            />

            {/* ReactBits LightRays Background */}
            <div className="absolute inset-0 pointer-events-none">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#FFD54F"
                    raysSpeed={0.6}
                    lightSpread={1}
                    rayLength={9}
                    pulsating={false}
                    fadeDistance={10}
                    saturation={2.5}
                    followMouse={false}
                    mouseInfluence={0}
                />
            </div>

            {/* Fallback gradient for when WebGL fails */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `
            radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.15) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 30% 20%, rgba(251, 191, 36, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 40% 30% at 70% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 50%)
          `,
                }}
            />

            {/* Subtle vignette for depth */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, rgba(0,0,0,0.4) 100%)",
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
                    <motion.div
                        variants={fadeInUp}
                        className="flex justify-center mb-8"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-bright to-electric flex items-center justify-center shadow-xl shadow-bright/30">
                            <HiSparkles className="w-8 h-8 text-white" />
                        </div>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-bright font-semibold text-lg mb-4"
                    >
                        Now it&apos;s your turn
                    </motion.p>

                    {/* Main headline with Gradual Blur */}
                    <motion.h2
                        variants={fadeInUp}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white"
                    >
                        <span className="block">
                            <GradualBlurOnScroll text="Time to" delay={0.1} />
                        </span>
                        <span className="block text-bright">
                            <GradualBlurOnScroll
                                text="shine"
                                delay={0.3}
                                blur="lg"
                            />
                        </span>
                    </motion.h2>

                    {/* Subheadline */}
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-white/70 mb-12 max-w-xl mx-auto leading-relaxed"
                    >
                        Let&apos;s build a website that puts your business in
                        the spotlight and turns visitors into loyal customers.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-5 justify-center"
                    >
                        <Button
                            size="lg"
                            className="bg-bright text-text-dark hover:bg-bright-hover shadow-xl shadow-bright/30"
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
                            className="border-white/30 text-white hover:bg-white/10"
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
                        <p className="text-white/50 text-sm font-medium">
                            Based in Berlin, Germany &bull; Available worldwide
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
