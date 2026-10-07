"use client";

import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import type { Treatment } from "@/data/treatments";
import { TreatmentCard } from "./TreatmentCard";

const normalise = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export function TreatmentSearch({ treatments }: { treatments: Treatment[] }) {
  const { language } = useLanguage();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const pt = language === "pt";
  const matches = useMemo(() => {
    const value = normalise(query.trim());
    if (value.length < 2) return [];
    return treatments.filter((treatment) => normalise([treatment.name.pt, treatment.name.en, treatment.shortDescription[language], ...(treatment.searchTerms ?? [])].join(" ")).includes(value));
  }, [language, query, treatments]);
  return (
    <section className="treatment-search">
      <div className="treatment-search__heading"><div><p className="eyebrow">{language === "pt" ? "Pesquisa" : "Search"}</p><h2>{language === "pt" ? "Procura um tratamento específico?" : "Looking for a specific treatment?"}</h2></div><p>{language === "pt" ? "Pesquise pelo nome ou por um termo, como HIFU, PRP, massagem ou nutrição." : "Search by name or a term such as HIFU, PRP, massage or nutrition."}</p></div>
      <div className="treatment-search__field"><Search size={20} aria-hidden="true" /><label htmlFor="treatment-search-input" className="sr-only">{pt ? "Pesquisar tratamentos" : "Search treatments"}</label><input ref={inputRef} id="treatment-search-input" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={pt ? "Pesquisar tratamentos" : "Search treatments"} aria-controls="treatment-search-results" aria-describedby="treatment-search-status" />{query && <button type="button" onClick={() => { setQuery(""); inputRef.current?.focus(); }} aria-label={pt ? "Limpar pesquisa" : "Clear search"}><X size={18} aria-hidden="true" /></button>}</div>
      <p id="treatment-search-status" className="treatment-search__status" role="status" aria-live="polite">{query.trim().length >= 2 ? `${matches.length} ${pt ? (matches.length === 1 ? "tratamento encontrado" : "tratamentos encontrados") : (matches.length === 1 ? "treatment found" : "treatments found")}` : query ? (pt ? "Escreva pelo menos 2 caracteres." : "Enter at least 2 characters.") : (pt ? "Ainda não sabe o nome?" : "Don't know the name yet?")}</p>
      <div id="treatment-search-results">{query.trim().length >= 2 && <div className="treatment-search__results">{matches.length ? matches.map((treatment) => <TreatmentCard key={treatment.slug} treatment={treatment} image={false} />) : <div className="treatment-search__empty"><p>{pt ? "Experimente outro termo ou explore as áreas abaixo." : "Try another term or explore the areas below."}</p><button type="button" className="treatment-search__reset" onClick={() => { setQuery(""); inputRef.current?.focus(); }}>{pt ? "Limpar pesquisa" : "Clear search"}</button></div>}</div>}</div>
      <Link className="treatment-search__guidance" href="/#encontrar-tratamento">{pt ? "Encontre opções pela sua preocupação" : "Find options by your concern"}<ArrowRight size={16} aria-hidden="true" /></Link>
    </section>
  );
}
