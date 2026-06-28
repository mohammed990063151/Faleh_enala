"use client";

import { useEffect, useState } from "react";
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
  const { t, setLocale, locale } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLocale = () => setLocale(locale === "ar" ? "en" : "ar");

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-gold/10 bg-[#030014]/95 sm:bg-[#030014]/85 sm:backdrop-blur-xl"
          : "bg-[#030014]/50 sm:bg-transparent"
      )}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-1 px-2 py-2 sm:gap-2 sm:px-6 sm:py-4">
        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1 justify-self-start xl:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={t.nav.menu}
          aria-expanded={mobileOpen}
        >
          <span
            className={cn(
              "block h-0.5 w-5 bg-gold transition-transform duration-200",
              mobileOpen && "translate-y-[5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-gold transition-opacity duration-200",
              mobileOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-5 bg-gold transition-transform duration-200",
              mobileOpen && "-translate-y-[5px] -rotate-45"
            )}
          />
        </button>

        <a
          href="#hero"
          className="col-start-2 justify-self-center truncate text-center font-display text-sm font-bold text-gold sm:text-base xl:col-start-1 xl:justify-self-start xl:text-lg md:text-xl"
        >
          {t.nav.brand}
        </a>

        <ul className="hidden items-center justify-center gap-5 xl:col-start-2 xl:flex xl:gap-6">
          {navHrefs.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-cream/60 transition-colors hover:text-gold">
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleLocale}
          className="col-start-3 justify-self-end rounded-full border border-gold/30 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-gold transition-colors hover:border-gold/50 hover:bg-gold/10 sm:px-4 sm:py-1.5 sm:text-xs"
        >
          {t.nav.langSwitch}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden transition-[max-height,opacity] duration-300 xl:hidden",
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="border-t border-gold/10 bg-[#030014]/98 px-4 py-3 text-center sm:px-6 sm:py-4">
          {navHrefs.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2.5 text-sm text-cream/70 transition-colors hover:text-gold sm:py-3"
                onClick={() => setMobileOpen(false)}
              >
                {t.nav[link.key]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
