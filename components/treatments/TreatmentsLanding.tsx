"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { BOOKING_WHATSAPP_URL } from "@/lib/booking";
import type { TreatmentCategory } from "@/data/treatment-categories";
import type { Treatment } from "@/data/treatments";
import { TreatmentCategoryCard } from "./TreatmentCategoryCard";
import { TreatmentSearch } from "./TreatmentSearch";
import { TreatmentCTA } from "./TreatmentCTA";

export function TreatmentsLanding({ categories, treatments }: { categories: TreatmentCategory[]; treatments: Treatment[] }) {
  const { language } = useLanguage();
  return (
    <main className="treatments-page">
      <section className="catalogue-hero"><div><p className="eyebrow">{language === "pt" ? "Clínica Beleza · Lisboa" : "Clínica Beleza · Lisbon"}</p><h1>{language === "pt" ? "Tratamentos personalizados para cuidar de si." : "Personalised treatments, designed around you."}</h1></div><div><p>{language === "pt" ? "Cada pessoa é única. Explore as nossas áreas de tratamento ou marque uma avaliação para descobrir a abordagem mais adequada aos seus objetivos." : "Every person is unique. Explore our treatment areas or book an assessment to discover the approach best suited to your goals."}</p><a className="button button--primary" href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer">{language === "pt" ? "Marcar avaliação" : "Book assessment"}<ArrowUpRight size={16} /></a></div></section>
      <section className="catalogue-categories"><div className="catalogue-section-heading"><p className="eyebrow">{language === "pt" ? "Áreas de tratamento" : "Treatment areas"}</p><h2>{language === "pt" ? "Explore ao seu ritmo." : "Explore at your own pace."}</h2></div><div className="treatment-category-grid">{categories.map((category, index) => <TreatmentCategoryCard key={category.slug} category={category} index={index} />)}</div></section>
      <TreatmentSearch treatments={treatments} />
      <TreatmentCTA />
    </main>
  );
}
