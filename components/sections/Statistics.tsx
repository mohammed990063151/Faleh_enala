"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeader } from "@/components/ui/SectionReveal";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Statistics() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader label={t.stats.label} title={t.stats.title} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <motion.div key={stat.id} variants={fadeUp} custom={i} className="group relative text-center">
              <div className="rounded-2xl border border-gold/10 bg-navy-800/20 p-8 luxury-card luxury-card-glow transition-all duration-500 group-hover:border-gold/25 sm:backdrop-blur-sm">
                <div className="font-display text-5xl font-bold text-gold md:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm text-cream/60 md:text-base">{t.stats[stat.id]}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
