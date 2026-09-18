"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { ClinicButton } from "@/components/ui/ClinicButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BOOKING_WHATSAPP_URL } from "@/lib/booking";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  return (
    <section id="inicio" ref={ref} className="hero">
      <div className="hero__copy">
        <motion.p className="eyebrow" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>{t.hero.eyebrow}</motion.p>
        <motion.h1 initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .08 }}>{t.hero.title}</motion.h1>
        <motion.p className="hero__lead" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .16 }}>{t.hero.copy}</motion.p>
        <motion.div className="hero__actions" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .7, delay: .28 }}>
          <MagneticButton><ClinicButton href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer" arrow>{t.hero.primary}</ClinicButton></MagneticButton>
          <ClinicButton href="/tratamentos" variant="secondary">{t.hero.secondary}</ClinicButton>
        </motion.div>
        <div className="hero__location"><span />{t.hero.note}</div>
      </div>
      <motion.div className="hero__visual" style={{ y }} initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
        <Image src="/images/image-2.png" fill priority sizes="(max-width: 800px) 100vw, 55vw" alt={t.hero.imageAlt} />
        <div className="hero__image-label"><strong>CB</strong><span>SAÚDE · BELEZA · BEM-ESTAR</span></div>
      </motion.div>
      <a href="#clinica" className="hero__scroll" aria-label="Scroll"><ArrowDown size={17} /></a>
    </section>
  );
}
