"use client";

import Image from "next/image";
import Link from "next/link";
import { TreatmentsCatalogueLink } from "@/components/navigation/TreatmentsCatalogueLink";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import type { Treatment } from "@/data/treatments";
import type { TreatmentCategory } from "@/data/treatment-categories";
import { createConsultationBookingUrl } from "@/lib/booking";

export function TreatmentHero({ treatment, category }: { treatment: Treatment; category: TreatmentCategory }) {
  const { language } = useLanguage();
  const bookingUrl = createConsultationBookingUrl(language, treatment.name[language]);
  return (
    <>
      <nav className="treatment-breadcrumb" aria-label="Breadcrumb"><TreatmentsCatalogueLink>{language === "pt" ? "Tratamentos" : "Treatments"}</TreatmentsCatalogueLink><span>/</span><Link href={`/tratamentos?area=${category.slug}`}>{category.name[language]}</Link><span>/</span><span>{treatment.name[language]}</span></nav>
      <section className="treatment-hero">
        <div className="treatment-hero__copy"><p className="eyebrow">{category.name[language]}</p><h1>{treatment.name[language]}</h1><p>{treatment.shortDescription[language]}</p><div><a className="button button--primary" href={bookingUrl} target="_blank" rel="noreferrer">{language === "pt" ? "Marcar avaliação" : "Book consultation"}<ArrowUpRight size={16} /></a><Link className="treatment-contact-link" href="/tratamentos">{language === "pt" ? "Consultar preços" : "View prices"}<ArrowUpRight size={16} /></Link></div><small className="booking-handoff">{language === "pt" ? "Abre o WhatsApp · Combine a data com a nossa equipa" : "Opens WhatsApp · Arrange a date with our team"}</small></div>
        <div className="treatment-hero__image"><Image src={treatment.coverImage} alt={treatment.name[language]} fill priority sizes="(max-width: 820px) 100vw, 52vw" /></div>
      </section>
    </>
  );
}
