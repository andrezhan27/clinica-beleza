"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { createConsultationBookingUrl } from "@/lib/booking";
import type { TreatmentCategory } from "@/data/treatment-categories";
import type { Treatment } from "@/data/treatments";
import { TreatmentCategoryCard } from "./TreatmentCategoryCard";
import { TreatmentSearch } from "./TreatmentSearch";
import { TreatmentCTA } from "./TreatmentCTA";

export function TreatmentsLanding({ categories, treatments }: { categories: TreatmentCategory[]; treatments: Treatment[] }) {
  const { language } = useLanguage();
  return (
    <main className="treatments-page">
      <section className="catalogue-hero"><div><p className="eyebrow">{language === "pt" ? "Clínica Beleza · Lisboa" : "Clínica Beleza · Lisbon"}</p><h1>{language === "pt" ? "Tratamentos personalizados para cuidar de si." : "Personalised treatments, designed around you."}</h1></div><div><p>{language === "pt" ? "Explore as nossas áreas ou pesquise um tratamento. Se preferir orientação, comece por uma avaliação com a equipa." : "Explore our areas or search for a treatment. If you would like guidance, begin with a consultation with our team."}</p><a className="button button--primary" href={createConsultationBookingUrl(language)} target="_blank" rel="noreferrer">{language === "pt" ? "Marcar avaliação" : "Book consultation"}<ArrowUpRight size={16} /></a><small className="booking-handoff">{language === "pt" ? "Abre o WhatsApp · Combine a data com a nossa equipa" : "Opens WhatsApp · Arrange a date with our team"}</small></div></section>
      <TreatmentSearch treatments={treatments} />
      <section className="catalogue-categories"><div className="catalogue-section-heading"><p className="eyebrow">{language === "pt" ? "Áreas de tratamento" : "Treatment areas"}</p><h2>{language === "pt" ? "Explore ao seu ritmo." : "Explore at your own pace."}</h2></div><div className="treatment-category-grid">{categories.map((category, index) => <TreatmentCategoryCard key={category.slug} category={category} index={index} />)}</div></section>
      <TreatmentCTA />
    </main>
  );
}
