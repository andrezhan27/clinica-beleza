"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categoryImages = [images.consultation, images.facial, images.body, images.hair, images.nutrition, images.detail];
export function TreatmentCategories() {
  const { t } = useLanguage();
  return <section id="tratamentos" className="section treatments"><Reveal><SectionHeading eyebrow={t.categories.eyebrow} title={t.categories.title} intro={t.categories.intro} /></Reveal><div className="category-grid">{t.categories.items.map((item, index) => <Reveal key={item.name} className={`category category--${index + 1}`} delay={index * .04}><a href="#destaques"><div className="category__image"><Image src={categoryImages[index]} fill sizes="(max-width: 720px) 100vw, 50vw" alt={item.name} /></div><div className="category__body"><span className="category__number">0{index + 1}</span><div><h3>{item.name}</h3><p>{item.description}</p><span className="text-link">{t.categories.explore}<ArrowUpRight size={16} /></span></div></div></a></Reveal>)}</div></section>;
}
