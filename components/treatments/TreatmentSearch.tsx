"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import type { Treatment } from "@/data/treatments";
import { TreatmentCard } from "./TreatmentCard";

const normalise = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function TreatmentSearch({ treatments }: { treatments: Treatment[] }) {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const value = normalise(query.trim());
    if (value.length < 2) return [];
    return treatments.filter((treatment) => normalise([treatment.name.pt, treatment.name.en, treatment.shortDescription[language], ...(treatment.searchTerms ?? [])].join(" ")).includes(value));
  }, [language, query, treatments]);
  return (
    <section className="treatment-search">
      <div className="treatment-search__heading"><div><p className="eyebrow">{language === "pt" ? "Pesquisa" : "Search"}</p><h2>{language === "pt" ? "Procura um tratamento específico?" : "Looking for a specific treatment?"}</h2></div><p>{language === "pt" ? "Pesquise pelo nome ou por um termo, como HIFU, PRP, massagem ou nutrição." : "Search by name or a term such as HIFU, PRP, massage or nutrition."}</p></div>
      <label className="treatment-search__field"><Search size={20} /><span className="sr-only">{language === "pt" ? "Pesquisar tratamentos" : "Search treatments"}</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={language === "pt" ? "Pesquisar tratamentos" : "Search treatments"} /></label>
      {query.trim().length >= 2 && <div className="treatment-search__results">{matches.length ? matches.map((treatment) => <TreatmentCard key={treatment.slug} treatment={treatment} image={false} />) : <p className="treatment-search__empty">{language === "pt" ? "Não encontrámos resultados. Experimente outro termo ou marque uma avaliação." : "No results found. Try another term or book an assessment."}</p>}</div>}
    </section>
  );
}
