import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LuxuryCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  hover?: boolean;
}

export function LuxuryCard({ children, className, glow = false, hover = true }: LuxuryCardProps) {
  return (
    <div
      className={cn(
        "luxury-card relative overflow-hidden rounded-2xl",
        glow && "luxury-card-glow",
        hover && "luxury-card-hover",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-gold/[0.03]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  spotlight?: "top" | "center" | "none";
}

export function SectionWrapper({
  id,
  children,
  className,
  spotlight = "top",
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("relative overflow-hidden py-16 sm:py-24 md:py-28 lg:py-36", className)}>
      {spotlight === "top" && <div className="spotlight-top" aria-hidden />}
      {spotlight === "center" && <div className="spotlight-center" aria-hidden />}
      <div className="section-divider-top" aria-hidden />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
