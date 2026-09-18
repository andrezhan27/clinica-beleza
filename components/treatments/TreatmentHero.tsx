"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import type { Treatment } from "@/data/treatments";
import type { TreatmentCategory } from "@/data/treatment-categories";
import { BOOKING_WHATSAPP_URL } from "@/lib/booking";

export function TreatmentHero({ treatment, category }: { treatment: Treatment; category: TreatmentCategory }) {
  const { language } = useLanguage();
  return (
    <>
      <nav className="treatment-breadcrumb" aria-label="Breadcrumb"><Link href="/tratamentos">{language === "pt" ? "Tratamentos" : "Treatments"}</Link><span>/</span><Link href={`/tratamentos/${category.slug}`}>{category.name[language]}</Link><span>/</span><span>{treatment.name[language]}</span></nav>
      <section className="treatment-hero">
        <div className="treatment-hero__copy"><p className="eyebrow">{category.name[language]}</p><h1>{treatment.name[language]}</h1><p>{treatment.shortDescription[language]}</p><div><a className="button button--primary" href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer">{language === "pt" ? "Marcar avaliação" : "Book assessment"}<ArrowUpRight size={16} /></a><a className="treatment-contact-link" href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={16} />{language === "pt" ? "Contactar-nos" : "Contact us"}</a></div></div>
        <div className="treatment-hero__image"><Image src={treatment.coverImage} alt={treatment.name[language]} fill priority sizes="(max-width: 820px) 100vw, 56vw" /></div>
      </section>
    </>
  );
}
