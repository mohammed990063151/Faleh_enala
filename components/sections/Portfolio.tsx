"use client";

import { motion } from "framer-motion";
import { enalaProperties } from "@/lib/data";
import { SectionHeader, SectionReveal } from "@/components/ui/SectionReveal";
import { SpaceBackground } from "@/components/ui/SpaceBackground";
import { ImageCard, type ImageCardGlow } from "@/components/ui/ImageCard";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/components/providers/LanguageProvider";

const portfolioGlows: ImageCardGlow[] = ["mixed", "cyan", "purple", "gold"];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="relative overflow-hidden py-20 sm:py-28 md:py-32">
      <SpaceBackground intensity="subtle" />
      <div className="absolute inset-0 bg-[#030014]/75" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader label={t.portfolio.label} title={t.portfolio.title} subtitle={t.portfolio.subtitle} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-5 xs:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {enalaProperties.map((property, i) => {
            const info = t.portfolio[property.id];
            const typeLabel = t.portfolio.types[property.type];
            return (
              <motion.a
                key={property.id}
                href={property.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -8 }}
                className="group block"
              >
                <ImageCard
                  src={property.image}
                  alt={info.name}
                  size="full"
                  glow={portfolioGlows[i % portfolioGlows.length]}
                  className="mx-0 w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                >
                  <span className="absolute top-3 end-3 z-10 rounded-full border border-gold/30 bg-black/50 px-3 py-1 text-xs text-gold backdrop-blur-md">
                    {info.city}
                  </span>
                </ImageCard>

                <div className="mt-3 px-1 sm:mt-4">
                  <span className="text-xs tracking-wider text-gold/60">{typeLabel}</span>
                  <h3 className="mt-1 text-sm font-bold text-cream transition-colors group-hover:text-gold sm:text-base">
                    {info.name}
                  </h3>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        <SectionReveal className="mt-10 text-center sm:mt-12">
          <Button href="https://enala.sa">{t.portfolio.explore}</Button>
        </SectionReveal>
      </div>
    </section>
  );
}
