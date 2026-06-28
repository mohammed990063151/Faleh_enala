"use client";

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
  const badgeRoles = [roleIds[0], roleIds[1], roleIds[2]] as const;

  return (
    <section
      id="hero"
      className="hero-enter relative overflow-x-hidden pt-[4rem] pb-8 sm:flex sm:min-h-[100svh] sm:items-center sm:pt-24 sm:pb-16"
    >
      <SpaceBackground />
      <div className="spotlight-top" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-2 sm:px-6 lg:px-8">
        <div
          className={cn(
            "luxury-card luxury-card-glow relative overflow-hidden p-2.5 sm:p-8 md:p-10 lg:p-12",
            "grid items-center gap-3 sm:gap-8 md:gap-10",
            "grid-cols-1 md:grid-cols-[auto_1fr]",
            isRtl ? "md:grid-cols-[1fr_auto]" : ""
          )}
        >
          <CornerAccent className="hidden border-t-2 border-s-2 sm:block sm:top-4 sm:start-4 sm:h-12 sm:w-12" />
          <CornerAccent className="hidden border-t-2 border-e-2 sm:block sm:top-4 sm:end-4 sm:h-12 sm:w-12" />
          <CornerAccent className="hidden border-b-2 border-s-2 sm:block sm:bottom-4 sm:start-4 sm:h-12 sm:w-12" />
          <CornerAccent className="hidden border-b-2 border-e-2 sm:block sm:bottom-4 sm:end-4 sm:h-12 sm:w-12" />

          <div
            className={cn(
              "flex flex-col items-center gap-2 sm:gap-4",
              isRtl ? "md:order-2" : "md:order-1"
            )}
          >
            <ProfilePortrait
              src={profileImage}
              alt={t.hero.fullName}
              size="hero"
              glow="mixed"
              priority
              animated={false}
            />

            <div className="hidden max-w-full flex-wrap justify-center gap-1.5 min-[360px]:flex sm:max-w-xs sm:gap-2">
              {badgeRoles.map((id) => {
                const role = t.roles[id] as { title: string; org: string };
                return (
                  <span
                    key={id}
                    className="rounded-full border border-gold/25 bg-black/30 px-2 py-0.5 text-[9px] text-gold/90 sm:px-3 sm:py-1 sm:text-xs"
                  >
                    {role.org}
                  </span>
                );
              })}
            </div>
          </div>

          <div
            className={cn(
              "flex min-w-0 flex-col text-center md:text-start",
              isRtl ? "md:order-1 md:text-right" : "md:order-2"
            )}
          >
            <div className="luxury-badge mb-2 inline-flex w-full max-w-full items-center justify-center gap-1.5 self-center rounded-full px-2.5 py-1.5 sm:mb-4 sm:w-fit sm:gap-2 sm:px-5 sm:py-2.5 md:self-start">
              <span className="h-1 w-1 shrink-0 rounded-full bg-gold sm:h-1.5 sm:w-1.5" />
              <span className="text-[9px] leading-snug text-gold/90 sm:text-xs">
                {t.hero.location}
              </span>
            </div>

            <p className="mb-0.5 text-[9px] text-gold/60 sm:mb-2 sm:text-xs">
              {t.hero.honorific}
            </p>

            <p className="mb-2 text-xs font-semibold text-gold sm:mb-3 sm:text-base md:text-lg">
              {t.hero.officialTitle}
            </p>

            <h1 className="font-display text-[1.2rem] font-bold leading-[1.25] tracking-tight text-balance text-cream xs:text-xl sm:text-4xl md:text-[2.5rem] lg:text-5xl">
              {t.hero.fullName}
            </h1>

            <p
              className={cn(
                "mt-2 mb-2 text-[11px] tracking-wide text-gold/75 sm:mb-3 sm:text-base",
                !isRtl && "font-[family-name:var(--font-playfair)] italic"
              )}
            >
              {t.hero.nameSecondary}
            </p>

            <div
              className={cn(
                "mx-auto mb-3 h-px w-12 bg-gradient-to-r from-gold/70 to-transparent sm:mb-4 sm:w-20",
                isRtl ? "md:ms-auto" : "",
                "md:mx-0"
              )}
            />

            <ul className="mb-3 w-full space-y-1.5 text-start sm:mb-5 sm:space-y-2">
              {t.hero.credentials.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-[10px] leading-snug text-cream/60 sm:text-sm sm:leading-relaxed"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  <span className="min-w-0 flex-1 break-words">{line}</span>
                </li>
              ))}
            </ul>

            <p className="mb-4 hidden text-xs text-gold/50 sm:mb-8 sm:block sm:text-sm">
              {t.hero.tagline}
            </p>

            <div className="flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3 md:justify-start">
              <Button href="#about" className="w-full px-4 py-2.5 text-xs sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm">
                {t.hero.ctaExplore}
              </Button>
              <Button variant="outline" href="https://enala.sa" className="w-full px-4 py-2.5 text-xs sm:w-auto sm:px-8 sm:py-3.5 sm:text-sm">
                {t.hero.ctaEnala}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
