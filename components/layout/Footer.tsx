import { cn } from "@/lib/utils";
import { navLinks, footerLinks } from "@/data/navigation";
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
    <footer className="bg-bg-primary border-t border-white/5 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-xl font-bold tracking-tight mb-5"
            >
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-bright/10 to-electric/10 border border-bright/20 flex items-center justify-center">
                <PixelClusterLogo />
              </span>
              <span>
                <span className="text-bright">Bright</span>
                <span className="text-text-primary">Byte</span>
                <span className="text-text-muted font-normal ml-1">Berlin</span>
              </span>
            </Link>
            <p className="text-text-secondary max-w-sm leading-relaxed mb-4">
              Putting small businesses in the spotlight with websites that get found
              and convert visitors into customers.
            </p>
            <p className="text-text-muted text-sm">
              Based in Berlin, serving clients worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-5 text-text-primary">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-bright transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-5 text-text-primary">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 rounded-xl",
                    "bg-white/5 hover:bg-bright hover:text-bg-primary",
                    "transition-all duration-300 text-text-secondary"
                  )}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            &copy; {currentYear} BrightByte Berlin. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
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
