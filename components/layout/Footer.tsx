"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-gold/10 bg-navy-950 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="font-display text-lg font-bold text-gold">{t.hero.fullName}</p>
            <p className="mt-1 text-sm text-gold/60">{t.hero.officialTitle}</p>
            <p className="mt-1 text-xs text-cream/40">{t.hero.tagline}</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-cream/30"
          >
            © {new Date().getFullYear()} — {t.footer.rights}
          </motion.p>
        </div>

        <motion.div
          className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </footer>
  );
}
