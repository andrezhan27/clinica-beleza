"use client";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredTreatments } from "@/data/treatments";
import { getCategory } from "@/data/treatment-categories";

export function FeaturedTreatments() {
  const { t, language } = useLanguage();
  return <section id="destaques" className="section featured"><Reveal><SectionHeading eyebrow={t.featured.eyebrow} title={t.featured.title} /></Reveal><div className="featured-list">{featuredTreatments.map((item, index) => <Reveal key={item.slug} delay={index * .05}><a className="featured-row" href={`/tratamentos/${item.category}/${item.slug}`}><span className="featured-row__number">0{index + 1}</span><div><p>{getCategory(item.category)?.name[language]}</p><h3>{item.name[language]}</h3></div><p className="featured-row__description">{item.shortDescription[language]}</p><span className="featured-row__duration">{item.sessions}</span><span className="featured-row__action">{t.featured.view}<ArrowRight size={18} /></span></a></Reveal>)}</div></section>;
}
