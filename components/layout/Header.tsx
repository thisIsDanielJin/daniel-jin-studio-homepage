"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HiBars3, HiXMark, HiBolt } from "react-icons/hi2";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOnBrightSection, setIsOnBrightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Check if we're on the bright contact section
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        setIsOnBrightSection(rect.top <= 80 && rect.bottom > 80);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-500 ease-out",
          isScrolled ? "py-3 px-4" : "py-5 px-0"
        )}
      >
        <div
          className={cn(
            "transition-all duration-500 ease-out mx-auto",
            isScrolled
              ? cn(
                  "max-w-5xl rounded-2xl border shadow-lg",
                  isOnBrightSection
                    ? "bg-white/80 backdrop-blur-xl border-black/5 shadow-black/10"
                    : "bg-bg-secondary/80 backdrop-blur-xl border-white/10 shadow-black/20"
                )
              : "max-w-7xl bg-transparent"
          )}
        >
          <Container className={cn(isScrolled && "px-4")}>
            <nav className="flex items-center justify-between py-2">
              {/* Logo - BBB (Triple B) */}
              <Link
                href="/"
                className="flex items-center gap-2.5 text-xl font-bold tracking-tight transition-all hover:opacity-80 group"
              >
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-bright to-electric flex items-center justify-center shadow-lg group-hover:shadow-bright/30 transition-all">
                  <HiBolt className="w-5 h-5 text-bg-primary" />
                </span>
                <span className={cn(
                  "transition-colors",
                  isOnBrightSection && isScrolled ? "text-bg-primary" : "text-text-primary"
                )}>
                  <span className="text-bright">Bright</span>
                  <span>Byte</span>
                  <span className="text-text-muted font-normal ml-1">Berlin</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-all",
                      isOnBrightSection && isScrolled
                        ? "text-text-dark/70 hover:text-text-dark"
                        : "text-text-secondary hover:text-text-primary",
                      "relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0",
                      "after:bg-bright after:transition-all after:duration-300",
                      "hover:after:w-full"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:block">
                <Button
                  size="sm"
                  className={cn(
                    isOnBrightSection && isScrolled && "bg-bg-primary text-white hover:bg-bg-secondary"
                  )}
                  asChild
                >
                  <Link href="#contact">
                    Get Started
                  </Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden p-2.5 -mr-2 rounded-xl transition-colors",
                  isOnBrightSection && isScrolled
                    ? "text-text-dark hover:bg-black/5"
                    : "text-text-primary hover:bg-white/10"
                )}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <HiXMark className="h-6 w-6" />
                ) : (
                  <HiBars3 className="h-6 w-6" />
                )}
              </button>
            </nav>
          </Container>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-bg-secondary/95 backdrop-blur-xl shadow-2xl border-l border-white/10"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-8">
                <nav className="flex-1 space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 text-lg font-semibold text-text-primary hover:text-bright transition-colors border-b border-white/5"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="pt-6">
                  <Button
                    className="w-full"
                    onClick={() => setIsMobileMenuOpen(false)}
                    asChild
                  >
                    <Link href="#contact">
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
