"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import type { Treatment } from "@/data/treatments";

export function TreatmentCard({ treatment, image = true }: { treatment: Treatment; image?: boolean }) {
  const { language } = useLanguage();
  return (
    <a className={`treatment-card ${image ? "" : "treatment-card--text"}`} href={`/tratamentos/${treatment.category}/${treatment.slug}`}>
      {image && <div className="treatment-card__image"><Image src={treatment.heroImage} alt={treatment.name[language]} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>}
      <div className="treatment-card__body"><div><h3>{treatment.name[language]}</h3><p>{treatment.shortDescription[language]}</p></div><ArrowRight size={19} /></div>
    </a>
  );
}
