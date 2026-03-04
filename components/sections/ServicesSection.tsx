"use client";

import { Section, SectionHeader } from "@/components/layout/Section";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { services } from "@/data/services";
import { IconType } from "react-icons";
import {
  HiCode,
  HiTemplate,
  HiDatabase,
  HiLightBulb,
} from "react-icons/hi";

const iconMap: Record<string, IconType> = {
  HiCode,
  HiTemplate,
  HiDatabase,
  HiLightBulb,
};

export function ServicesSection() {
  return (
    <Section id="services" background="primary">
      <SectionHeader
        title="How I Help You Shine"
        subtitle="Everything you need to stand out online and convert visitors into customers"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || HiCode;

          return (
            <StaggerItem key={service.id}>
              <div className="group relative h-full bg-bg-card rounded-2xl p-8 border border-white/5 hover:border-bright/20 transition-all duration-300 hover:shadow-lg hover:shadow-bright/5">
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-bright/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-col h-full">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-bright/10 flex items-center justify-center group-hover:bg-bright/20 transition-colors">
                      <Icon className="w-6 h-6 text-bright" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-bright transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  {service.features && (
                    <div className="mt-6 pt-6 border-t border-white/5">
                      <ul className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-text-muted font-medium border border-white/5"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
