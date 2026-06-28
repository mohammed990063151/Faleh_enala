"use client";

import { motion } from "framer-motion";
import { galleryImages, profileImage, valueIds } from "@/lib/data";
import { LuxuryCard, SectionWrapper } from "@/components/ui/LuxuryCard";
import { SectionHeader, SectionReveal } from "@/components/ui/SectionReveal";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { ImageCard, type ImageCardGlow } from "@/components/ui/ImageCard";
import { staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/components/providers/LanguageProvider";

const galleryGlows: ImageCardGlow[] = ["purple", "cyan", "gold"];

export function About() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about" spotlight="center">
      <div className="absolute inset-0 bg-[#030014]/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader label={t.about.label} title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <SectionReveal direction="right">
            <div className="flex flex-col items-center gap-5 sm:gap-8">
              <ProfilePortrait
                src="/images/profile-smile.png"
                alt={t.hero.name}
                size="medium"
                glow="purple"
                animated={false}
              />
              <LuxuryCard glow className="w-full p-5 sm:p-8 md:p-10">
                <p className="text-base leading-[1.9] text-cream/80 sm:text-lg md:text-xl">{t.about.bio}</p>
                <div className="mt-6 flex items-center gap-4 border-t border-gold/10 pt-6 sm:mt-8 sm:pt-8">
                  <ProfilePortrait
                    src={profileImage}
                    alt={t.about.nickname}
                    size="small"
                    glow="gold"
                    animated={false}
                    className="mx-0 shrink-0"
                  />
                  <div className="min-w-0 text-start">
                    <p className="font-semibold text-gold">{t.about.nickname}</p>
                    <p className="text-sm leading-relaxed text-cream/50">{t.about.shortBio}</p>
                  </div>
                </div>
              </LuxuryCard>
            </div>
          </SectionReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4"
          >
            {valueIds.map((id) => {
              const value = t.values[id];
              return (
                <LuxuryCard key={id} className="p-5 sm:p-6">
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-gradient-to-r from-gold/80 to-gold/20 sm:mb-4" />
                  <h3 className="mb-2 text-base font-bold text-cream sm:text-lg">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-cream/50">{value.description}</p>
                </LuxuryCard>
              );
            })}
          </motion.div>
        </div>

        <SectionReveal className="mt-10 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <ImageCard
                  src={img.src}
                  alt={t.about.gallery[img.key]}
                  size="full"
                  glow={galleryGlows[i % galleryGlows.length]}
                  caption={t.about.gallery[img.key]}
                  objectPosition="center top"
                  className="mx-0 w-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </SectionWrapper>
  );
}
