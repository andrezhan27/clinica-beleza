"use client";
import Image from "next/image";
import { Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Results() {
  const { t } = useLanguage();
  return <section id="resultados" className="section results"><Reveal><SectionHeading eyebrow={t.results.eyebrow} title={t.results.title} intro={t.results.copy} /></Reveal><Reveal className="comparison"><div><Image src={images.facial} fill sizes="50vw" alt={t.results.before} /><span>{t.results.before}</span></div><div><Image src={images.treatment} fill sizes="50vw" alt={t.results.after} /><span>{t.results.after}</span></div><span className="comparison__line" /></Reveal><p className="disclaimer"><Info size={16} />{t.results.disclaimer}</p></section>;
}
