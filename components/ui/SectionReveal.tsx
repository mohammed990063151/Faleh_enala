"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: SectionRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const { isRtl } = useLanguage();

  const directionMap = {
    up: { y: 16, x: 0 },
    down: { y: -16, x: 0 },
    left: { y: 0, x: isRtl ? 16 : -16 },
    right: { y: 0, x: isRtl ? -16 : 16 },
    none: { y: 0, x: 0 },
  };
  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
}: {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}) {
  return (
    <SectionReveal className={cn("mb-8 sm:mb-14 md:mb-20", align === "center" ? "text-center" : "text-start")}>
      {label && (
        <span
          className={cn(
            "section-label mb-4 sm:mb-6",
            align === "start" && "section-label-start"
          )}
        >
          {label}
        </span>
      )}
      <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-cream xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream/50 sm:mt-5 sm:text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-8 h-px w-20 bg-gradient-to-r from-transparent via-gold/50 to-transparent",
          align === "center" ? "mx-auto" : "ms-0"
        )}
      />
    </SectionReveal>
  );
}
