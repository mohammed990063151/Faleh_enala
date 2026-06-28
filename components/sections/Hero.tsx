"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";
import { profileImage, roleIds } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { SpaceBackground } from "@/components/ui/SpaceBackground";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: ((i * 41 + 5) % 100),
  y: ((i * 67 + 11) % 100),
  size: (i % 2) + 1,
  delay: (i % 8) * 0.5,
  duration: 4 + (i % 3),
}));

function GoldParticles() {
  const particles = useMemo(() => PARTICLES, []);
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold/25 blur-[1px]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ opacity: [0, 0.5, 0], y: [0, -30, -60] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function CornerAccent({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("absolute h-8 w-8 border-gold/30 sm:h-12 sm:w-12", className)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      aria-hidden
    />
  );
}

export function Hero() {
  const ref = useRef(null);
  const { t, isRtl } = useLanguage();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.7], [0, 80]);

  const nameWords = [t.hero.namePrefix, ...t.hero.name.split(/\s+/)];
  const badgeRoles = [roleIds[0], roleIds[1], roleIds[2]] as const;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16"
    >
      <SpaceBackground />
      <div className="spotlight-top" aria-hidden />
      <GoldParticles />

      {/* Decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,98,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,98,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <motion.div style={{ opacity, y }} className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "luxury-card luxury-card-glow relative overflow-hidden p-4 sm:p-8 md:p-10 lg:p-12",
            "grid items-center gap-6 sm:gap-8 md:gap-10",
            "grid-cols-1 md:grid-cols-[auto_1fr]",
            isRtl ? "md:grid-cols-[1fr_auto]" : ""
          )}
        >
          <CornerAccent className="top-3 start-3 border-t-2 border-s-2 sm:top-4 sm:start-4" />
          <CornerAccent className="top-3 end-3 border-t-2 border-e-2 sm:top-4 sm:end-4" />
          <CornerAccent className="bottom-3 start-3 border-b-2 border-s-2 sm:bottom-4 sm:start-4" />
          <CornerAccent className="bottom-3 end-3 border-b-2 border-e-2 sm:bottom-4 sm:end-4" />

          {/* Portrait column */}
          <motion.div
            className={cn(
              "flex flex-col items-center gap-4",
              isRtl ? "md:order-2" : "md:order-1"
            )}
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
            <div className="flex flex-wrap justify-center gap-2 max-w-[220px] sm:max-w-xs">
              {badgeRoles.map((id, i) => {
                const role = t.roles[id] as { title: string; org: string };
                return (
                  <motion.span
                    key={id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="rounded-full border border-gold/25 bg-black/30 px-3 py-1 text-[10px] text-gold/90 backdrop-blur-sm sm:text-xs"
                  >
                    {role.org}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>

          {/* Content column */}
          <div
            className={cn(
              "flex flex-col text-center md:text-start",
              isRtl ? "md:order-1 md:text-right" : "md:order-2"
            )}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="luxury-badge mb-4 inline-flex w-fit items-center gap-2 self-center rounded-full px-4 py-2 md:self-start sm:px-5 sm:py-2.5"
            >
              <motion.span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_8px_rgba(201,169,98,0.8)]"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[10px] tracking-[0.15em] text-gold/90 sm:text-xs sm:tracking-[0.2em]">
                {t.hero.location}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mb-1 text-[10px] tracking-[0.35em] text-gold/60 uppercase sm:mb-2 sm:text-xs sm:tracking-[0.4em]"
            >
              {t.hero.honorific}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.65 }}
              className="mb-3 text-sm font-semibold text-shimmer sm:mb-4 sm:text-base md:text-lg"
            >
              {t.hero.officialTitle}
            </motion.p>

            <div className="mb-2">
              <motion.h1
                className="font-display text-2xl font-bold leading-[1.15] tracking-tight text-cream xs:text-3xl sm:text-4xl md:text-[2.5rem] lg:text-5xl xl:text-[3.25rem]"
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
                "mb-3 text-sm tracking-[0.12em] text-gold/75 sm:text-base md:tracking-[0.18em]",
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
                "mb-4 h-px w-16 origin-left bg-gradient-to-r from-gold/70 to-transparent sm:mb-5 sm:w-20",
                isRtl ? "origin-right md:ms-auto" : "",
                "mx-auto md:mx-0"
              )}
            />

            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.7 }}
              className="mx-auto mb-4 w-fit max-w-lg space-y-2 sm:mb-5 md:mx-0 md:w-full"
            >
              {t.hero.credentials.map((line, i) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: isRtl ? 12 : -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-2 text-xs leading-relaxed text-cream/60 sm:text-sm md:gap-3"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold shadow-[0_0_6px_rgba(201,169,98,0.6)]" />
                  <span>{line}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.45, duration: 0.6 }}
              className="mb-6 max-w-lg text-xs tracking-wide text-gold/50 sm:text-sm md:mb-8"
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className={cn(
                "flex flex-wrap items-center justify-center gap-3 sm:gap-4",
                isRtl ? "md:justify-start" : "md:justify-start"
              )}
            >
              <Button href="#about" className="text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-3.5">
                {t.hero.ctaExplore}
              </Button>
              <Button variant="outline" href="https://enala.sa" className="text-xs sm:text-sm px-6 py-3 sm:px-8 sm:py-3.5">
                {t.hero.ctaEnala}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 sm:bottom-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center gap-1.5"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span className="text-[9px] tracking-[0.25em] text-cream/30 uppercase sm:text-[10px]">
            {t.hero.scroll}
          </span>
          <motion.div
            className="h-6 w-px bg-gradient-to-b from-gold/50 to-transparent sm:h-8"
            animate={{ scaleY: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
