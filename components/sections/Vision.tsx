"use client";

import { motion } from "framer-motion";
import { ceoQuoteLink, visionPointIds } from "@/lib/data";
import { SectionHeader, SectionReveal } from "@/components/ui/SectionReveal";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function Vision() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="vision" className="relative py-32">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader label={t.vision.label} title={t.vision.title} subtitle={t.vision.subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {visionPointIds.map((id, i) => {
            const point = t.vision[id];
            return (
              <motion.div
                key={id}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl border border-gold/10 p-6 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold font-bold"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {i + 1}
                </motion.div>
                <h3 className="relative text-lg font-bold text-cream">{point.title}</h3>
                <p className="relative mt-2 text-sm text-cream/50">{point.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <SectionReveal>
          <div className="relative mx-auto max-w-4xl">
            <motion.div
              className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gold/20 via-gold/5 to-gold/20 blur-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <blockquote className="relative rounded-3xl luxury-card luxury-card-glow p-10 md:p-14 backdrop-blur-sm">
              <motion.span
                className={cn(
                  "absolute top-6 font-display text-8xl text-gold/10 leading-none",
                  isRtl ? "right-8" : "left-8"
                )}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                &ldquo;
              </motion.span>
              <motion.p
                className="relative text-lg leading-loose text-cream/80 md:text-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {t.vision.quote.text}
              </motion.p>
              <footer className="mt-8 flex items-center justify-between border-t border-gold/10 pt-6">
                <cite className="not-italic font-semibold text-gold">{t.vision.quote.source}</cite>
                <motion.a
                  href={ceoQuoteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/40 hover:text-gold transition-colors"
                  whileHover={{ x: isRtl ? -4 : 4 }}
                >
                  {t.vision.quote.readMore} {isRtl ? "←" : "→"}
                </motion.a>
              </footer>
            </blockquote>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
