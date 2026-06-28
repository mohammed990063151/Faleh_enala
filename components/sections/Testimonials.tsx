"use client";

import { motion } from "framer-motion";
import { testimonialIds } from "@/lib/data";
import { SectionHeader, SectionReveal } from "@/components/ui/SectionReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,98,0.06),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader label={t.testimonials.label} title={t.testimonials.title} subtitle={t.testimonials.subtitle} />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonialIds.map((id, i) => {
            const item = t.testimonials[id];
            return (
              <SectionReveal key={id} delay={i * 0.15}>
                <motion.div
                  className="relative h-full rounded-2xl luxury-card luxury-card-hover p-8 backdrop-blur-sm"
                  whileHover={{ y: -6, borderColor: "rgba(201,169,98,0.25)" }}
                >
                  <span className={cn("mb-4 block font-display text-5xl text-gold/20", isRtl ? "text-right" : "text-left")}>
                    &ldquo;
                  </span>
                  <p className="text-base leading-relaxed text-cream/70">{item.quote}</p>
                  <div className="mt-6 border-t border-gold/10 pt-6">
                    <p className="font-semibold text-gold">{item.author}</p>
                    <p className="mt-1 text-xs text-cream/40">{item.context}</p>
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
