"use client";

import { motion } from "framer-motion";
import { profileImage, socialLinks } from "@/lib/data";
import { SectionHeader, SectionReveal } from "@/components/ui/SectionReveal";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28 md:py-32">
      <div className="absolute inset-0 bg-[#030014]/85" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionHeader label={t.contact.label} title={t.contact.title} subtitle={t.contact.subtitle} />

        <SectionReveal>
          <div className="rounded-2xl luxury-card luxury-card-glow p-5 backdrop-blur-md sm:rounded-3xl sm:p-10 md:p-14">
            <ProfilePortrait
              src={profileImage}
              alt={t.hero.name}
              size="medium"
              glow="mixed"
              animated={false}
              className="mb-5 sm:mb-8"
            />

            <h3 className="text-lg font-bold tracking-tight text-cream sm:text-xl md:text-2xl">
              {t.hero.fullName}
            </h3>
            <p className="mt-1 text-sm font-medium text-shimmer sm:text-base">{t.hero.officialTitle}</p>
            <p className="mt-2 text-xs text-cream/50 sm:text-sm">{t.hero.location}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex w-full max-w-xs items-center justify-center gap-3 rounded-full border border-gold/20 bg-white/5 px-5 py-2.5 text-sm text-cream/70 backdrop-blur-sm transition-all hover:border-gold/40 hover:text-gold xs:w-auto sm:px-6 sm:py-3"
                >
                  <span className="font-medium text-gold">{t.contact.social[link.id]}</span>
                  <span className="text-cream/40">{link.handle}</span>
                </motion.a>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <Button href="https://x.com/falehalfaleh123">{t.contact.followX}</Button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
