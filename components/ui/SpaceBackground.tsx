"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  x: ((i * 37 + 13) % 100),
  y: ((i * 53 + 7) % 100),
  size: (i % 3) + 1,
  opacity: 0.2 + (i % 5) * 0.15,
  delay: (i % 10) * 0.4,
  duration: 2 + (i % 4),
}));

export function SpaceBackground({ intensity = "full" }: { intensity?: "full" | "subtle" }) {
  const stars = useMemo(() => STARS, []);
  const opacity = intensity === "subtle" ? 0.5 : 1;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ opacity }}>
      {/* Deep space base */}
      <div className="absolute inset-0 bg-[#030014]" />

      {/* Soft gold light beam from top */}
      <div
        className="absolute top-0 left-1/2 h-[60%] w-[80%] -translate-x-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,169,98,0.1) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      {/* Nebula layers */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 h-[80%] w-[80%] rounded-full bg-[radial-gradient(circle,rgba(88,28,135,0.35),transparent_70%)] blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -left-1/4 h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(30,58,138,0.4),transparent_70%)] blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/3 h-[50%] w-[50%] rounded-full bg-[radial-gradient(circle,rgba(201,169,98,0.08),transparent_65%)] blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Milky way band */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,rgba(147,112,219,0.06)_50%,transparent_70%)]" />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`shooting-${i}`}
          className="absolute h-px w-24 bg-gradient-to-l from-transparent via-white/60 to-transparent"
          style={{ top: `${20 + i * 25}%`, right: `${10 + i * 20}%`, rotate: -35 }}
          animate={{ x: [0, -300], opacity: [0, 1, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 4 + 2,
            repeatDelay: 8,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
