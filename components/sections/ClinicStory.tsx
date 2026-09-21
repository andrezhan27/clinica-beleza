"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";

export function ClinicStory() {
  const { t, language } = useLanguage();
  return (
    <section id="clinica" className="section clinic-story" aria-labelledby="clinic-story-title">
      <Reveal className="clinic-story__heading">
        <p className="eyebrow">{t.intro.eyebrow}</p>
        <h2 id="clinic-story-title">{t.intro.title}</h2>
        <p>{t.intro.p1}</p>
      </Reveal>
      <div className="clinic-story__grid">
        <Reveal className="clinic-story__photo">
          <Image src="/images/space-3.webp" fill sizes="(max-width: 820px) 100vw, 50vw" alt={t.space.alts[2]} />
          <div className="clinic-story__caption"><span>{t.hero.note}</span><p>{t.space.title}</p><a href="#contactos">{language === "pt" ? "Venha conhecer-nos" : "Come and meet us"}<ArrowUpRight size={18} aria-hidden="true" /></a></div>
        </Reveal>
        <div className="clinic-story__principles">
          {t.intro.principles.map((item, index) => <Reveal key={item.title} className="story-principle" delay={index * .06}><span className="story-principle__number">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>)}
        </div>
      </div>
    </section>
  );
}
