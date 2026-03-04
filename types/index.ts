// Navigation types
export interface NavLink {
  label: string;
  href: string;
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url?: string;
  github?: string;
  featured?: boolean;
}

// Testimonial types
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company?: string;
  avatar?: string;
}

// Tech stack types
export interface TechItem {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "deployment";
}

// FAQ types
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Social link types
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// Contact info types
export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
}

// Section props
export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

// Button variants
export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
