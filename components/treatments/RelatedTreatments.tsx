"use client";

import { useLanguage } from "@/context/LanguageProvider";
import type { Treatment } from "@/data/treatments";
import { TreatmentCard } from "./TreatmentCard";

export function RelatedTreatments({ treatments }: { treatments: Treatment[] }) {
  const { language } = useLanguage();
  if (!treatments.length) return null;
  return <section className="related-treatments"><p className="eyebrow">{language === "pt" ? "Continuar a explorar" : "Keep exploring"}</p><h2>{language === "pt" ? "Tratamentos relacionados" : "Related treatments"}</h2><div>{treatments.map((treatment) => <TreatmentCard key={treatment.slug} treatment={treatment} />)}</div></section>;
}
