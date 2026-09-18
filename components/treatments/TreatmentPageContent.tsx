"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageProvider";
import type { TreatmentCategory } from "@/data/treatment-categories";
import type { Treatment } from "@/data/treatments";
import { TreatmentHero } from "./TreatmentHero";
import { TreatmentInfo } from "./TreatmentInfo";
import { TreatmentBenefits } from "./TreatmentBenefits";
import { TreatmentGallery } from "./TreatmentGallery";
import { TreatmentFAQ } from "./TreatmentFAQ";
import { RelatedTreatments } from "./RelatedTreatments";
import { TreatmentCTA } from "./TreatmentCTA";

export function TreatmentPageContent({ treatment, category, related }: { treatment: Treatment; category: TreatmentCategory; related: Treatment[] }) {
  const { language } = useLanguage();
  const firstImage = treatment.gallery[0];
  const secondImage = treatment.gallery[1];
  return (
    <main className="treatment-page">
      <TreatmentHero treatment={treatment} category={category} />
      <section className="treatment-introduction"><div><p className="eyebrow">{language === "pt" ? "Sobre o tratamento" : "About the treatment"}</p><h2>{language === "pt" ? "Cuidado pensado à sua medida." : "Care designed around you."}</h2></div><p>{treatment.introduction?.[language]}</p></section>
      <TreatmentInfo treatment={treatment} />
      <section className="treatment-editorial">
        <TreatmentBenefits treatment={treatment} />
        {firstImage && <div className="treatment-editorial__image treatment-editorial__image--tall"><Image src={firstImage} alt={treatment.name[language]} fill sizes="(max-width: 820px) 100vw, 50vw" /></div>}
        {secondImage && <div className="treatment-editorial__image"><Image src={secondImage} alt={treatment.name[language]} fill sizes="(max-width: 820px) 100vw, 45vw" /></div>}
        <TreatmentBenefits treatment={treatment} indications />
      </section>
      <section className="treatment-process"><div><p className="eyebrow">{language === "pt" ? "O processo" : "The process"}</p><h2>{language === "pt" ? "Como funciona o tratamento?" : "How does the treatment work?"}</h2></div><p>{treatment.process?.[language]}</p></section>
      <section className="treatment-results"><p className="eyebrow">{language === "pt" ? "Evolução" : "Progress"}</p><h2>{language === "pt" ? "Resultados esperados" : "Expected results"}</h2><p>{treatment.results?.[language]}</p><small>{language === "pt" ? "Os resultados variam de pessoa para pessoa e não podem ser garantidos." : "Results vary from person to person and cannot be guaranteed."}</small></section>
      <TreatmentGallery treatment={treatment} start={2} />
      <TreatmentFAQ treatment={treatment} />
      <TreatmentCTA compact />
      <RelatedTreatments treatments={related} />
    </main>
  );
}
