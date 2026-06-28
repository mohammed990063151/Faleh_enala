"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/lib/data";
import { SectionHeader, SectionReveal } from "@/components/ui/SectionReveal";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function Journey() {
  const containerRef = useRef(null);
  const { t, isRtl, locale } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="relative py-20 sm:py-28 md:py-32" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/50 to-navy-950" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeader label={t.journey.label} title={t.journey.title} subtitle={t.journey.subtitle} />

        <div className="relative">
          <div className="absolute top-0 bottom-0 start-6 w-px bg-gold/10 sm:start-8 md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2">
            <motion.div className="w-full bg-gradient-to-b from-gold via-gold/60 to-gold/20 origin-top" style={{ height: lineHeight }} />
          </div>

          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, i) => {
              const content = t.journey[item.id as keyof typeof t.journey] as {
                title: string;
                description: string;
              };
              const year = locale === "ar" ? item.yearAr : item.yearEn;

              return (
                <SectionReveal key={item.id} delay={i * 0.1} direction={i % 2 === 0 ? "right" : "left"}>
                  <motion.div
                    className={cn(
                      "relative flex items-center gap-8",
                      i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                    )}
                  >
                    <div className="absolute start-6 z-10 sm:start-8 md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2">
                      <motion.div
                        className="relative flex h-4 w-4 items-center justify-center"
                        whileInView={{ scale: [0, 1.2, 1] }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                      >
                        <div className="h-4 w-4 rounded-full bg-gold shadow-lg shadow-gold/50" />
                      </motion.div>
                    </div>

                    <div
                      className={cn(
                        "ms-12 flex-1 sm:ms-16 md:ms-0",
                        i % 2 === 0
                          ? isRtl
                            ? "md:pe-12 md:text-left"
                            : "md:ps-12 md:text-right"
                          : isRtl
                            ? "md:ps-12 md:text-right"
                            : "md:pe-12 md:text-left"
                      )}
                    >
                      <motion.div
                        className="rounded-xl luxury-card p-5 backdrop-blur-sm transition-colors sm:p-6"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="inline-block rounded-full bg-gold/10 px-4 py-1 text-sm font-medium text-gold">
                          {year}
                        </span>
                        <h3 className="mt-3 text-xl font-bold text-cream">{content.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-cream/50">{content.description}</p>
                      </motion.div>
                    </div>

                    <div className="hidden flex-1 md:block" />
                  </motion.div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
