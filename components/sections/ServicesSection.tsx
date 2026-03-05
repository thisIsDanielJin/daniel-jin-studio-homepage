"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/layout/Section";
import { services } from "@/data/services";
import { IconType } from "react-icons";
import {
  HiCodeBracket,
  HiComputerDesktop,
  HiCircleStack,
  HiSparkles,
} from "react-icons/hi2";
import { cn } from "@/lib/utils";

const iconMap: Record<string, IconType> = {
  HiCode: HiCodeBracket,
  HiTemplate: HiComputerDesktop,
  HiDatabase: HiCircleStack,
  HiSparkles,
};

// Bento grid layout configuration - 2x2 equal grid
const bentoLayout = [
  { colSpan: "md:col-span-1", size: "standard" },
  { colSpan: "md:col-span-1", size: "standard" },
  { colSpan: "md:col-span-1", size: "standard" },
  { colSpan: "md:col-span-1", size: "standard" },
];

interface BentoCardProps {
  service: typeof services[0];
  layout: typeof bentoLayout[0];
  index: number;
}

function BentoCard({ service, layout, index }: BentoCardProps) {
  const Icon = iconMap[service.icon] || HiCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn("group relative", layout.colSpan)}
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-bright/0 via-bright/50 to-bright/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-bright/0 via-bright/30 to-bright/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card content */}
      <div className="relative h-full bg-bg-card rounded-2xl border border-white/5 overflow-hidden p-6 transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:shadow-bright/10">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-bright/5 via-transparent to-electric/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Spotlight effect */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-bright/10 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 h-full flex flex-col">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-bright/20 to-bright/5 flex items-center justify-center border border-bright/20 group-hover:border-bright/40 transition-colors group-hover:shadow-lg group-hover:shadow-bright/20 mb-4"
          >
            <Icon className="w-5 h-5 text-bright" />
          </motion.div>

          {/* Title */}
          <h3 className="text-lg font-bold text-text-primary group-hover:text-bright transition-colors duration-300 mb-2">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary leading-relaxed text-sm flex-1">
            {service.description}
          </p>

          {/* Features */}
          {service.features && (
            <div className="mt-4 pt-4 border-t border-white/5">
              <ul className="flex flex-wrap gap-1.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs px-2.5 py-1 rounded-full font-medium bg-white/5 text-text-muted border border-white/5 group-hover:bg-bright/10 group-hover:text-bright group-hover:border-bright/20 transition-all duration-300"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <Section id="services" background="primary">
      <SectionHeader
        title="How I Help You Shine"
        subtitle="Everything you need to stand out online and convert visitors into customers"
      />

      {/* Magic Bento Grid - 2x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <BentoCard
            key={service.id}
            service={service}
            layout={bentoLayout[index] || bentoLayout[0]}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
