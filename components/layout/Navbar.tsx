"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

const navHrefs = [
  { href: "#hero", key: "home" as const },
  { href: "#about", key: "about" as const },
  { href: "#roles", key: "roles" as const },
  { href: "#journey", key: "journey" as const },
  { href: "#vision", key: "vision" as const },
  { href: "#portfolio", key: "portfolio" as const },
  { href: "#contact", key: "contact" as const },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { t, locale, setLocale } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const toggleLocale = () => setLocale(locale === "ar" ? "en" : "ar");

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#030014]/85 backdrop-blur-2xl border-b border-gold/10 shadow-[0_4px_30px_rgba(0,0,0,0.4),0_1px_0_rgba(201,169,98,0.06)_inset]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
        <motion.a
          href="#hero"
          className="font-display text-base font-bold text-gold shrink-0 sm:text-lg md:text-xl"
          whileHover={{ scale: 1.05 }}
        >
          {t.nav.brand}
        </motion.a>

        <ul className="hidden items-center gap-4 xl:gap-6 xl:flex">
          {navHrefs.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className="relative text-sm text-cream/60 hover:text-gold transition-colors"
                whileHover={{ y: -2 }}
              >
                {t.nav[link.key]}
              </motion.a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-gold/30 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-gold backdrop-blur-md shadow-[0_0_20px_rgba(201,169,98,0.1)] hover:bg-gold/10 hover:border-gold/50 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            {t.nav.langSwitch}
          </motion.button>

          <button
            className="flex flex-col gap-1.5 xl:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.nav.menu}
          >
            <motion.span
              className="block h-0.5 w-6 bg-gold"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-gold"
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="block h-0.5 w-6 bg-gold"
              animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="overflow-hidden xl:hidden"
      >
        <ul className="border-t border-gold/10 bg-navy-950/95 px-6 py-4 backdrop-blur-xl">
          {navHrefs.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-3 text-cream/60 hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
}
