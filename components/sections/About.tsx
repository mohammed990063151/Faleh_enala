"use client";

import { motion } from "framer-motion";
import { galleryImages, profileImage, valueIds } from "@/lib/data";
import { LuxuryCard, SectionWrapper } from "@/components/ui/LuxuryCard";
import { SectionHeader, SectionReveal } from "@/components/ui/SectionReveal";
import { ProfilePortrait } from "@/components/ui/ProfilePortrait";
import { ImageCard, type ImageCardGlow } from "@/components/ui/ImageCard";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { useLanguage } from "@/components/providers/LanguageProvider";

const galleryGlows: ImageCardGlow[] = ["purple", "cyan", "gold"];

export function About() {
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about" spotlight="center">
      <div className="absolute inset-0 bg-[#030014]/90" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:max-w-[88rem] lg:px-8 xl:px-10">
        <SectionHeader label={t.about.label} title={t.about.title} subtitle={t.about.subtitle} />

        {/* Portrait + Bio — wide balanced row on desktop */}
        <SectionReveal direction="none">
          <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
            <div className="flex justify-center lg:col-span-4 lg:justify-center xl:col-span-4">
              <ProfilePortrait
                src="/images/profile-smile.png"
                alt={t.hero.name}
                size="hero"
                glow="purple"
                animated={false}
                className="lg:w-[240px] xl:w-[280px] 2xl:w-[300px]"
              />
            </div>

            <LuxuryCard
              glow
              className="w-full p-5 sm:p-8 lg:col-span-8 lg:p-10 xl:col-span-8 xl:p-12"
            >
              <p className="text-base leading-[1.95] text-cream/80 sm:text-lg lg:text-xl lg:leading-[2.05]">
                {t.about.bio}
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 border-t border-gold/10 pt-6 text-center sm:mt-8 sm:flex-row sm:items-center sm:gap-5 sm:pt-8 sm:text-start">
                <ProfilePortrait
                  src={profileImage}
                  alt={t.about.nickname}
                  size="small"
                  glow="gold"
                  animated={false}
                  className="mx-auto shrink-0 sm:mx-0"
                />
                <div className="min-w-0">
                  <p className="text-lg font-semibold text-gold">{t.about.nickname}</p>
                  <p className="mt-1 text-sm leading-relaxed text-cream/50 sm:text-base">
                    {t.about.shortBio}
                  </p>
                </div>
              </div>
            </LuxuryCard>
          </div>
        </SectionReveal>

        {/* Values — full-width 4 columns on large screens */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:mt-12 sm:gap-4 md:gap-5 lg:mt-16 lg:grid-cols-4 lg:gap-6 xl:mt-20"
        >
          {valueIds.map((id, i) => {
            const value = t.values[id];
            return (
              <motion.div key={id} variants={fadeUp} custom={i} className="h-full">
                <LuxuryCard className="flex h-full flex-col p-5 sm:p-6 lg:p-7 xl:p-8">
                  <div className="mb-3 h-0.5 w-10 rounded-full bg-gradient-to-r from-gold/80 to-gold/20 sm:mb-4" />
                  <h3 className="mb-2 text-base font-bold text-cream sm:text-lg lg:text-xl">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-cream/50 lg:text-[0.95rem] lg:leading-relaxed">
                    {value.description}
                  </p>
                </LuxuryCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Gallery */}
        <SectionReveal className="mt-10 sm:mt-16 lg:mt-20">
          <div className="grid w-full grid-cols-1 gap-3 px-2 xs:grid-cols-2 xs:gap-4 xs:px-3 sm:gap-5 sm:px-0 lg:grid-cols-3 lg:gap-8">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
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
