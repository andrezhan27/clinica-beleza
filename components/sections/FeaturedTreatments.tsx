"use client";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedTreatments() {
  const { t } = useLanguage();
  return <section id="destaques" className="section featured"><Reveal><SectionHeading eyebrow={t.featured.eyebrow} title={t.featured.title} /></Reveal><div className="featured-list">{t.featured.items.map((item, index) => <Reveal key={item.name} delay={index * .05}><a className="featured-row" href="#contactos"><span className="featured-row__number">0{index + 1}</span><div><p>{item.category}</p><h3>{item.name}</h3></div><p className="featured-row__description">{item.description}</p><span className="featured-row__duration">{item.duration}</span><span className="featured-row__action">{t.featured.view}<ArrowRight size={18} /></span></a></Reveal>)}</div></section>;
}
