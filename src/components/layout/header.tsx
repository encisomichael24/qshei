"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when user starts scrolling
  React.useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Scrolled state logic
    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Direction-aware Hide/Reveal logic
    if (latest > previous && latest > 120) {
      setHidden(true); // Scrolling down past 120px
    } else {
      setHidden(false); // Scrolling up or near top
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: "0%" },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 lg:px-12"
    >
      {/* Background layer decoupled from motion.header to avoid transition jitter */}
      <div 
        className={`absolute inset-0 transition-all duration-300 ${
          !isHome || isScrolled 
            ? "bg-[#F9F9F7]/85 backdrop-blur-md shadow-sm border-b border-stone-200/60" 
            : "bg-transparent border-transparent"
        }`} 
      />

      {/* Content Layer */}
      <div 
        className={`w-full max-w-[1440px] mx-auto flex items-center justify-between relative z-10 transition-[padding] duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <Link href="/" className="font-serif text-3xl font-bold tracking-tight text-[var(--color-navy)]">
          QSHEI
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-[var(--color-navy)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`relative transition-colors ${
                  isActive 
                    ? "text-[var(--color-terracotta)] font-semibold" 
                    : "hover:text-[var(--color-terracotta)]"
                }`}
              >
                {link.name}
                {/* Gold-standard sliding indicator */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="primary" className="hidden md:inline-flex" onClick={() => window.open("https://www.hotdoc.com.au/medical-centres/yeppoon-QLD-4703/queensland-sexual-health-education-institute/doctors", "_blank")}>Book Now</Button>
          
          <button 
            className="md:hidden p-2 text-[var(--color-navy)] focus:outline-none hover:bg-[var(--color-sage)]/20 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-[#F9F9F7] border-b border-stone-200/60 shadow-xl md:hidden flex flex-col px-6 py-8 gap-6 z-40"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl font-medium transition-colors ${
                      isActive 
                        ? "text-[var(--color-terracotta)]" 
                        : "text-[var(--color-navy)] hover:text-[var(--color-terracotta)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-4 border-t border-[var(--color-sage)]">
              <Button 
                variant="primary" 
                size="lg" 
                className="w-full" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open("https://www.hotdoc.com.au/medical-centres/yeppoon-QLD-4703/queensland-sexual-health-education-institute/doctors", "_blank");
                }}
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
