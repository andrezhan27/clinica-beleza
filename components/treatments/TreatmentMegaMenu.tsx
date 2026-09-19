"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TreatmentsCatalogueLink } from "@/components/navigation/TreatmentsCatalogueLink";
import { useLanguage } from "@/context/LanguageProvider";
import { treatmentCategories } from "@/data/treatment-categories";
import { getTreatmentBySlug } from "@/data/treatments";

const representatives: Record<string, string[]> = {
  "medicina-estetica": ["toxina-botulinica", "fillers", "bioestimuladores", "fios-tensores"],
  "medicina-capilar": ["tratamentos-capilares", "prp-capilar", "mesoterapia-capilar"],
  "estetica-facial": ["radiofrequencia-rosto", "hifu-rosto", "drenagem-facial"],
  "estetica-corporal": ["reducao-medidas", "hifu-corpo", "criolipolise", "drenagem-linfatica"],
  nutricao: ["nutricao-funcional", "nutricao-emagrecimento"],
  servicos: ["limpeza-de-pele", "massagem-relaxante", "reflexologia"],
};

export function TreatmentMegaMenu() {
  const { language } = useLanguage();
  return (
    <div className="mega-menu">
      <div className="mega-menu__inner">
        {treatmentCategories.map((category) => <div className="mega-menu__column" key={category.slug}><Link className="mega-menu__category" href={`/tratamentos/${category.slug}`}>{category.name[language]}</Link>{representatives[category.slug].map(getTreatmentBySlug).filter(Boolean).map((treatment) => treatment && <Link key={treatment.slug} href={`/tratamentos/${treatment.category}/${treatment.slug}`}>{treatment.name[language]}</Link>)}<Link className="mega-menu__all" href={`/tratamentos/${category.slug}`}>{language === "pt" ? "Ver todos" : "View all"}<ArrowRight size={13} /></Link></div>)}
      </div>
      <TreatmentsCatalogueLink className="mega-menu__footer">{language === "pt" ? "Ver todos os tratamentos" : "View all treatments"}<ArrowRight size={16} /></TreatmentsCatalogueLink>
    </div>
  );
}

export function MobileTreatmentNavigation({ onNavigate }: { onNavigate: () => void }) {
  const { language } = useLanguage();
  return <details className="mobile-treatment-nav"><summary><span className="mobile-treatment-nav__number">03</span><span className="mobile-treatment-nav__label">{language === "pt" ? "Tratamentos" : "Treatments"}</span><span className="mobile-treatment-nav__toggle">+</span></summary><div>{treatmentCategories.map((category) => <details key={category.slug}><summary>{category.name[language]}<span>+</span></summary><div>{representatives[category.slug].map(getTreatmentBySlug).filter(Boolean).map((treatment) => treatment && <Link onClick={onNavigate} key={treatment.slug} href={`/tratamentos/${treatment.category}/${treatment.slug}`}>{treatment.name[language]}</Link>)}<Link onClick={onNavigate} className="mobile-treatment-nav__all" href={`/tratamentos/${category.slug}`}>{language === "pt" ? "Ver todos" : "View all"}<ArrowRight size={13} /></Link></div></details>)}</div><TreatmentsCatalogueLink onClick={onNavigate} className="mobile-treatment-nav__catalogue">{language === "pt" ? "Todos os tratamentos" : "All treatments"}<ArrowRight size={14} /></TreatmentsCatalogueLink></details>;
}
