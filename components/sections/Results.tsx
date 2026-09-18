"use client";
import Image from "next/image";
import { Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Results() {
  const { t, language } = useLanguage();
  const cases = [
    { title: language === "pt" ? "Luminosidade facial" : "Facial radiance", detail: language === "pt" ? "Protocolo facial" : "Facial protocol", before: "/images/estetica-2.png", after: "/images/estetica-4.png" },
    { title: language === "pt" ? "Harmonização do rosto" : "Facial harmonisation", detail: language === "pt" ? "Plano personalizado" : "Personalised plan", before: "/images/estetica-3.png", after: "/images/estetica-5.png" },
    { title: language === "pt" ? "Textura e firmeza" : "Texture and firmness", detail: language === "pt" ? "Caso ilustrativo" : "Illustrative case", before: images.facial, after: images.treatment },
  ];
  return <section id="resultados" className="section results"><Reveal><SectionHeading eyebrow={t.results.eyebrow} title={t.results.title} intro={t.results.copy} /></Reveal><div className="case-study-grid">{cases.map((item, index) => <Reveal className="case-study" key={item.title} delay={index * .06}><div className="case-study__images"><div><Image src={item.before} fill sizes="(max-width: 700px) 44vw, 16vw" alt={`${item.title} — ${t.results.before}`} /><span>{t.results.before}</span></div><div><Image src={item.after} fill sizes="(max-width: 700px) 44vw, 16vw" alt={`${item.title} — ${t.results.after}`} /><span>{t.results.after}</span></div></div><div className="case-study__body"><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div></div></Reveal>)}</div><p className="disclaimer"><Info size={16} />{t.results.disclaimer}</p></section>;
}
