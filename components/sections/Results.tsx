"use client";
import Image from "next/image";
import { Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Results() {
  const { t, language } = useLanguage();
  const cases = [
    { title: language === "pt" ? "Olhar rejuvenescido" : "Rejuvenated eye area", detail: language === "pt" ? "Protocolo personalizado" : "Personalised protocol", image: "/images/before-1.webp" },
    { title: language === "pt" ? "Harmonia facial" : "Facial harmony", detail: language === "pt" ? "Plano individual" : "Individual plan", image: "/images/before-2.webp" },
    { title: language === "pt" ? "Textura e luminosidade" : "Texture and radiance", detail: language === "pt" ? "Evolução da pele" : "Skin progress", image: "/images/before-3.webp" },
  ];
  return <section id="resultados" className="section results"><Reveal><SectionHeading eyebrow={t.results.eyebrow} title={t.results.title} intro={t.results.copy} /></Reveal><div className="case-study-grid">{cases.map((item, index) => <Reveal className="case-study" key={item.title} delay={index * .06}><div className="case-study__comparison"><Image src={item.image} fill sizes="(max-width: 700px) 82vw, 30vw" alt={`${item.title} — ${t.results.before} / ${t.results.after}`} /><span>{t.results.before} · {t.results.after}</span></div><div className="case-study__body"><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></div></Reveal>)}</div><p className="disclaimer"><Info size={16} />{t.results.disclaimer}</p></section>;
}
