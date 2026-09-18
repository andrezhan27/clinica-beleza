"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import type { Treatment } from "@/data/treatments";

export function TreatmentBenefits({ treatment, indications = false }: { treatment: Treatment; indications?: boolean }) {
  const { language } = useLanguage();
  const items = indications ? treatment.indications?.[language] : treatment.benefits?.[language];
  return (
    <section className="treatment-list-section">
      <p className="eyebrow">{indications ? (language === "pt" ? "Indicações" : "Indications") : (language === "pt" ? "Benefícios" : "Benefits")}</p>
      <h2>{indications ? (language === "pt" ? "Para quem é indicado?" : "Who is it for?") : (language === "pt" ? "Principais benefícios" : "Key benefits")}</h2>
      <ul>{items?.map((item) => <li key={item}><Check size={17} />{item}</li>)}</ul>
    </section>
  );
}
