"use client";

import { useLanguage } from "@/context/LanguageProvider";
import type { Treatment } from "@/data/treatments";

export function TreatmentFAQ({ treatment }: { treatment: Treatment }) {
  const { language } = useLanguage();
  if (!treatment.faq?.length) return null;
  return <section className="treatment-faq"><div><p className="eyebrow">FAQ</p><h2>{language === "pt" ? "Perguntas frequentes" : "Frequently asked questions"}</h2></div><div>{treatment.faq.map((item) => <details key={item.question.pt}><summary>{item.question[language]}<span>+</span></summary><p>{item.answer[language]}</p></details>)}</div></section>;
}
