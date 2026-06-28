"use client";

import { motion } from "framer-motion";
import { roles } from "@/lib/data";
import { SectionHeader, SectionReveal } from "@/components/ui/SectionReveal";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { type ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  hotel: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
    </svg>
  ),
  landmark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M12 3L2 9l10 6 10-6-10-6zM2 17l10 6 10-6M2 12l10 6 10-6" />
    </svg>
  ),
  trophy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M6 9H4a2 2 0 012-2h2M18 9h2a2 2 0 00-2-2h-2M6 9v6a6 6 0 0012 0V9M12 15v3M8 21h8M9 3h6v6H9z" />
    </svg>
  ),
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16" />
    </svg>
  ),
};

export function Roles() {
  const { t, isRtl } = useLanguage();

  return (
    <section id="roles" className="relative overflow-hidden py-20 sm:py-28 md:py-32">
      <div className="absolute inset-0 bg-[#030014]" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader label={t.roles.label} title={t.roles.title} subtitle={t.roles.subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2"
        >
          {roles.map((role, i) => {
            const content = t.roles[role.id as keyof typeof t.roles] as {
              title: string;
              org: string;
              description: string;
            };
            return (
              <motion.div
                key={role.id}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                className={`group relative overflow-hidden rounded-2xl p-5 transition-all duration-500 luxury-card luxury-card-hover sm:p-8 ${
                  role.highlight ? "luxury-card-glow" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start gap-6">
                  <motion.div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {iconMap[role.icon]}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="mt-1 text-xl font-bold text-cream md:text-2xl">{content.title}</h3>
                    <p className="mt-1 text-lg text-gold/80">{content.org}</p>
                    <p className="mt-4 text-sm leading-relaxed text-cream/50">{content.description}</p>
                    {role.link && (
                      <motion.a
                        href={role.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
                        whileHover={{ x: isRtl ? -4 : 4 }}
                      >
                        {t.roles.visitSite}
                        <span>{isRtl ? "←" : "→"}</span>
                      </motion.a>
                    )}
                  </div>
                </div>

                {role.highlight && (
                  <motion.div
                    className="absolute top-4 start-4 h-2 w-2 rounded-full bg-gold"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
