"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import type { TreatmentCategory } from "@/data/treatment-categories";

export function TreatmentCategoryCard({ category, index }: { category: TreatmentCategory; index: number }) {
  const { language } = useLanguage();
  return (
    <Link className="treatment-category-card" href={`/tratamentos?area=${category.slug}`}>
      <div className="treatment-category-card__image"><Image src={category.coverImage} alt={category.name[language]} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
      <div className="treatment-category-card__body">
        <span>0{index + 1}</span>
        <div><h2>{category.name[language]}</h2><p>{category.shortDescription[language]}</p><small>{category.treatments.length} {language === "pt" ? "tratamentos" : "treatments"}</small></div>
        <ArrowUpRight size={21} />
      </div>
    </Link>
  );
}
