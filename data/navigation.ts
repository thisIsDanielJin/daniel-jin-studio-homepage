import { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks = {
  main: navLinks,
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Imprint", href: "/imprint" },
  ],
};
