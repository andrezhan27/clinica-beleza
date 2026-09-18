"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";

const concerns = [
  { pt: "Rosto", en: "Face", href: "/tratamentos/estetica-facial" },
  { pt: "Pele", en: "Skin", href: "/tratamentos/medicina-estetica" },
  { pt: "Corpo", en: "Body", href: "/tratamentos/estetica-corporal" },
  { pt: "Cabelo", en: "Hair", href: "/tratamentos/medicina-capilar" },
  { pt: "Bem-estar", en: "Wellbeing", href: "/tratamentos/servicos" },
  { pt: "Rejuvenescimento", en: "Rejuvenation", href: "/tratamentos/medicina-estetica" },
];

export function ConcernDiscovery() {
  const { language } = useLanguage();
  return <section className="section concern-discovery"><div><p className="eyebrow">{language === "pt" ? "Comece por si" : "Start with you"}</p><h2>{language === "pt" ? "O que gostaria de cuidar?" : "What would you like to care for?"}</h2><p>{language === "pt" ? "Não precisa de saber o nome do tratamento. Explore pela área que gostaria de cuidar ou comece por uma avaliação." : "You do not need to know a treatment name. Explore the area you would like to care for or begin with an assessment."}</p></div><div className="concern-list">{concerns.map((concern, index) => <a key={concern.pt} href={concern.href}><span>0{index + 1}</span>{concern[language]}<ArrowRight size={18} /></a>)}</div></section>;
}
