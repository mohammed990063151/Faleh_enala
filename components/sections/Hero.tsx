"use client";

import { motion } from "framer-motion";
import { profileImage, roleIds } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SpaceBackground } from "@/components/ui/SpaceBackground";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

function CornerAccent({ className }: { className?: string }) {
  return <div className={cn("absolute h-8 w-8 border-gold/30 sm:h-12 sm:w-12", className)} aria-hidden />;
}

export function Hero() {
  const { t, isRtl } = useLanguage();

  const nameWords = [t.hero.namePrefix, ...t.hero.name.split(/\s+/)];
  const badgeRoles = [roleIds[0], roleIds[1], roleIds[2]] as const;

  return (
    <section
      id="hero"
      className="relative overflow-x-hidden pt-[4.25rem] pb-10 sm:flex sm:min-h-[100svh] sm:items-center sm:pt-24 sm:pb-16"
    >
      <SpaceBackground />
      <div className="spotlight-top" aria-hidden />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,98,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,98,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-3 sm:px-6 lg:px-8">
        <div
          className={cn(
            "luxury-card luxury-card-glow relative overflow-hidden p-3 sm:p-8 md:p-10 lg:p-12",
            "grid items-center gap-4 sm:gap-8 md:gap-10",
            "grid-cols-1 md:grid-cols-[auto_1fr]",
            isRtl ? "md:grid-cols-[1fr_auto]" : ""
          )}
        >
          <CornerAccent className="hidden border-t-2 border-s-2 sm:block sm:top-4 sm:start-4 sm:h-12 sm:w-12" />
          <CornerAccent className="hidden border-t-2 border-e-2 sm:block sm:top-4 sm:end-4 sm:h-12 sm:w-12" />
          <CornerAccent className="hidden border-b-2 border-s-2 sm:block sm:bottom-4 sm:start-4 sm:h-12 sm:w-12" />
          <CornerAccent className="hidden border-b-2 border-e-2 sm:block sm:bottom-4 sm:end-4 sm:h-12 sm:w-12" />

          {/* Portrait column */}
          <motion.div
            className={cn(
              "flex flex-col items-center gap-2.5 sm:gap-4",
              isRtl ? "md:order-2" : "md:order-1"
            )}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProfilePortrait
              src={profileImage}
              alt={t.hero.name}
              size="hero"
              glow="mixed"
              priority
              animated
            />

            {/* Floating role badges */}
            <div className="flex max-w-full flex-wrap justify-center gap-1.5 sm:max-w-xs sm:gap-2">
              {badgeRoles.map((id) => {
                const role = t.roles[id] as { title: string; org: string };
                return (
                  <span
                    key={id}
                    className="rounded-full border border-gold/25 bg-black/30 px-2 py-0.5 text-[9px] text-gold/90 backdrop-blur-sm sm:px-3 sm:py-1 sm:text-xs"
                  >
                    {role.org}
                  </span>
                );
              })}
            </div>
          </motion.div>

          {/* Content column */}
          <div
            className={cn(
              "flex min-w-0 flex-col text-center md:text-start",
              isRtl ? "md:order-1 md:text-right" : "md:order-2"
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="luxury-badge mb-2 inline-flex w-full max-w-full items-center justify-center gap-1.5 self-center rounded-full px-3 py-1.5 sm:mb-4 sm:w-fit sm:gap-2 sm:px-5 sm:py-2.5 md:self-start"
            >
              <span className="h-1 w-1 shrink-0 animate-pulse rounded-full bg-gold shadow-[0_0_8px_rgba(201,169,98,0.8)] sm:h-1.5 sm:w-1.5" />
              <span className="text-[9px] leading-snug text-gold/90 sm:text-xs sm:tracking-[0.2em]">
                {t.hero.location}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mb-0.5 text-[9px] tracking-[0.2em] text-gold/60 sm:mb-2 sm:text-xs sm:tracking-[0.4em]"
            >
              {t.hero.honorific}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.65 }}
              className="mb-2 text-xs font-semibold text-shimmer sm:mb-4 sm:text-base md:text-lg"
            >
              {t.hero.officialTitle}
            </motion.p>

            <div className="mb-1 sm:mb-2">
              <motion.h1
                className="font-display text-[1.35rem] font-bold leading-[1.2] tracking-tight text-cream xs:text-2xl sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-[3.25rem]"
                initial="hidden"
                animate="visible"
              >
                {nameWords.map((word, i) => (
                  <span key={i}>
                    {i > 0 ? "\u00A0" : null}
                    <motion.span
                      className="inline-block"
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.55,
                            delay: 0.45 + i * 0.12,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className={cn(
                "mb-2 text-xs tracking-wide text-gold/75 sm:mb-3 sm:text-base md:tracking-[0.18em]",
                !isRtl && "font-[family-name:var(--font-playfair)] italic"
              )}
            >
              {t.hero.nameSecondary}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.7 }}
              className={cn(
                "mb-3 h-px w-12 origin-left bg-gradient-to-r from-gold/70 to-transparent sm:mb-5 sm:w-20",
                isRtl ? "origin-right md:ms-auto" : "",
                "mx-auto md:mx-0"
              )}
            />

            <ul className="mb-3 w-full space-y-1.5 text-start sm:mb-5 sm:space-y-2 md:mx-0">
              {t.hero.credentials.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-[11px] leading-snug text-cream/60 sm:text-sm sm:leading-relaxed md:gap-3"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold shadow-[0_0_6px_rgba(201,169,98,0.6)]" />
                  <span className="min-w-0 flex-1">{line}</span>
                </li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.45, duration: 0.6 }}
              className="mb-4 hidden max-w-lg text-xs tracking-wide text-gold/50 sm:mb-8 sm:block sm:text-sm"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="flex w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 md:justify-start"
            >
              <Button href="#about" className="w-full px-5 py-2.5 text-xs sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm">
                {t.hero.ctaExplore}
              </Button>
              <Button variant="outline" href="https://enala.sa" className="w-full px-5 py-2.5 text-xs sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm">
                {t.hero.ctaEnala}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 sm:bottom-6 sm:block">
        <div className="flex flex-col items-center gap-1.5 animate-scroll-hint">
          <span className="text-[9px] tracking-[0.25em] text-cream/30 uppercase sm:text-[10px]">
            {t.hero.scroll}
          </span>
          <div className="h-6 w-px bg-gradient-to-b from-gold/50 to-transparent sm:h-8" />
        </div>
      </div>
    </section>
  );
}
