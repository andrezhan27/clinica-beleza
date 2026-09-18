"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { BOOKING_WHATSAPP_URL } from "@/lib/booking";
import type { TreatmentCategory } from "@/data/treatment-categories";
import type { Treatment } from "@/data/treatments";
import { TreatmentCard } from "./TreatmentCard";
import { TreatmentCategoryCard } from "./TreatmentCategoryCard";
import { TreatmentCTA } from "./TreatmentCTA";

export function CategoryPageContent({ category, treatments, otherCategories }: { category: TreatmentCategory; treatments: Treatment[]; otherCategories: TreatmentCategory[] }) {
  const { language } = useLanguage();
  return (
    <main className="category-page">
      <section className="category-hero"><div className="category-hero__copy"><p className="eyebrow">{language === "pt" ? "Tratamentos" : "Treatments"}</p><h1>{category.name[language]}</h1><p>{category.shortDescription[language]}</p><a className="button button--primary" href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer">{language === "pt" ? "Marcar avaliação" : "Book assessment"}<ArrowUpRight size={16} /></a></div><div className="category-hero__image"><Image src={category.coverImage} alt={category.name[language]} fill priority sizes="(max-width: 820px) 100vw, 58vw" /></div></section>
      <section className="category-intro"><p className="eyebrow">{language === "pt" ? "Uma abordagem personalizada" : "A personalised approach"}</p><h2>{category.introduction[language]}</h2><p>{language === "pt" ? "Cada recomendação parte de uma avaliação individual. A nossa equipa ajuda a compreender as opções, expectativas e cuidados associados a cada tratamento." : "Every recommendation starts with an individual assessment. Our team helps you understand the options, expectations and care associated with each treatment."}</p></section>
      <section className="category-treatments"><div className="catalogue-section-heading"><p className="eyebrow">{language === "pt" ? `${treatments.length} opções disponíveis` : `${treatments.length} options available`}</p><h2>{language === "pt" ? "Explore os tratamentos" : "Explore treatments"}</h2></div><div className="category-treatment-grid">{treatments.map((treatment) => <TreatmentCard key={treatment.slug} treatment={treatment} />)}</div></section>
      <TreatmentCTA compact />
      <section className="other-categories"><div className="catalogue-section-heading"><p className="eyebrow">{language === "pt" ? "Outras áreas" : "Other areas"}</p><h2>{language === "pt" ? "Uma visão completa do seu cuidado." : "A complete view of your care."}</h2></div><div>{otherCategories.map((item, index) => <TreatmentCategoryCard key={item.slug} category={item} index={index} />)}</div></section>
    </main>
  );
}
