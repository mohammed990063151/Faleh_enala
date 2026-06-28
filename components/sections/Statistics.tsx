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
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,98,0.08),transparent_70%)]"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

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
              <div className="rounded-2xl border border-gold/10 bg-navy-800/20 p-8 backdrop-blur-sm luxury-card luxury-card-glow transition-all duration-500 group-hover:border-gold/25">
                <motion.div
                  className="font-display text-5xl font-bold text-gold md:text-6xl"
                  whileInView={{ scale: [0.5, 1.1, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <p className="mt-3 text-sm text-cream/60 md:text-base">{t.stats[stat.id]}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
