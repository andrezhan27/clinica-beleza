"use client";

import { useLanguage } from "@/context/LanguageProvider";
import type { Treatment } from "@/data/treatments";

export function TreatmentInfo({ treatment }: { treatment: Treatment }) {
  const { language } = useLanguage();
  const items = [
    [language === "pt" ? "Duração" : "Duration", treatment.duration],
    [language === "pt" ? "Sessões" : "Sessions", language === "en" && treatment.sessions === "Plano individual" ? "Individual plan" : treatment.sessions],
    [language === "pt" ? "Recuperação" : "Recovery", treatment.recovery?.[language]],
    [language === "pt" ? "Resultados" : "Results", language === "pt" ? "Evolução individual" : "Individual progress"],
  ];
  return <dl className="treatment-info">{items.filter(([, value]) => value).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}
