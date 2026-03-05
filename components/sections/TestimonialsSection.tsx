"use client";

import { Section, SectionHeader } from "@/components/layout/Section";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { testimonials } from "@/data/testimonials";
import { HiStar } from "react-icons/hi2";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" background="primary">
      <SectionHeader
        title="Results That Speak"
        subtitle="Don't just take my word for it — hear from businesses I've helped"
      />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <StaggerItem key={testimonial.id}>
            <div className="h-full flex flex-col bg-bg-card rounded-2xl p-8 border-[1.5px] border-white/8 hover:border-2 hover:border-bright/30 transition-all duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-bright fill-bright" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-text-secondary mb-8 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                <div className="w-10 h-10 rounded-lg bg-bright/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-bright">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-text-primary text-sm">{testimonial.author}</div>
                  <div className="text-xs text-text-muted">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
