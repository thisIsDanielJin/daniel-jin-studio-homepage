import { cn } from "@/lib/utils";
import { footerLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { HiEnvelope } from "react-icons/hi2";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

// D1 Pixel Cluster Logo
function PixelClusterLogo({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <rect x="4" y="4" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.3} />
      <rect x="12" y="4" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.5} />
      <rect x="4" y="12" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.6} />
      <rect x="12" y="12" width="6" height="6" rx="1" fill="#FBBF24" />
      <rect x="20" y="12" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.7} />
      <rect x="12" y="20" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.4} />
      <rect x="20" y="20" width="6" height="6" rx="1" fill="#FBBF24" opacity={0.8} />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Email",
    href: "mailto:hello@brightbyte.berlin",
    icon: HiEnvelope,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/danieljinwodke",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/danieljinwodke",
    icon: FaGithub,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary border-t border-white/5">
      <Container>
        <div className="py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand + tagline */}
          <div>
            <a
              href="/"
              className="flex items-center gap-2 text-lg font-bold tracking-tight mb-2"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-bright/10 to-electric/10 border border-bright/20 flex items-center justify-center">
                <PixelClusterLogo />
              </span>
              <span>
                <span className="text-bright">Bright</span>
                <span className="text-text-primary">Byte</span>
                <span className="text-text-muted font-normal ml-1 text-sm">Berlin</span>
              </span>
            </a>
            <p className="text-text-muted text-sm max-w-xs">
              Websites that put your business in the spotlight.
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2.5 rounded-xl",
                  "bg-white/5 hover:bg-bright hover:text-bg-primary",
                  "transition-all duration-300 text-text-muted"
                )}
                aria-label={social.name}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-text-muted text-xs">
            &copy; {currentYear} BrightByte Berlin. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-bright transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
