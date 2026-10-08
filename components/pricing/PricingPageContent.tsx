"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, MessageCircle, Search, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { treatmentCatalogue } from "@/data/catalogue";
import { filterTreatmentCatalogue, type CatalogueTreatment } from "@/data/treatment-catalogue";
import { createConsultationBookingUrl } from "@/lib/booking";
import styles from "./PricingPageContent.module.css";

const treatmentCaptions: Record<string, { pt: string; en: string }> = {
  "toxina-botulinica": { pt: "Linhas de expressão", en: "Expression lines" },
  "bioestimuladores": { pt: "Firmeza e qualidade da pele", en: "Skin firmness and quality" },
  "profhilo": { pt: "Hidratação e elasticidade", en: "Hydration and elasticity" },
  "mesoterapia": { pt: "Cuidados da pele", en: "Skin care" },
  "microneedling": { pt: "Textura e renovação da pele", en: "Skin texture and renewal" },
  "plasma-rico-em-plaquetas": { pt: "Regeneração da pele", en: "Skin regeneration" },
  "hifu-rosto": { pt: "Suporte e contorno facial", en: "Facial support and contour" },
};

export function PricingPageContent({ initialCategory = "all", initialQuery = "" }: { initialCategory?: string; initialQuery?: string }) {
  const { language } = useLanguage();
  const pt = language === "pt";
  const searchParams = useSearchParams();
  const query = searchParams ? searchParams.get("q") ?? "" : initialQuery;
  const area = searchParams ? searchParams.get("area") ?? "all" : initialCategory;
  const categoryId = treatmentCatalogue.some(({ id }) => id === area) ? area : "all";
  const categories = filterTreatmentCatalogue(treatmentCatalogue, categoryId, query);
  const count = categories.reduce((total, category) => total + category.items.length, 0);
  const bookingUrl = createConsultationBookingUrl(language);

  function updateFilters(area: string, search: string) {
    const params = new URLSearchParams();
    if (area !== "all") params.set("area", area);
    if (search) params.set("q", search);
    window.history.replaceState(null, "", `/tratamentos${params.size ? `?${params}` : ""}`);
  }

  function renderTreatment(entry: CatalogueTreatment) {
    const returnParams = new URLSearchParams();
    if (categoryId !== "all") returnParams.set("area", categoryId);
    if (query) returnParams.set("q", query);
    const href = `${entry.href}${returnParams.size ? `?${returnParams}` : ""}`;
    const singleDetail = entry.variants.length === 1 ? entry.variants[0].detail?.[language] : undefined;
    const caption = treatmentCaptions[entry.slug]?.[language] ?? (singleDetail && singleDetail.length <= 55 ? singleDetail : undefined);
    return <article className={styles.entry} key={entry.id}>
      <div className={styles.entryInfo}>
        <h3><Link href={href}>{entry.slug === "toxina-botulinica" ? "Botox" : entry.name[language]}</Link></h3>
        {caption && <p className={styles.caption}>{caption}</p>}
      </div>
      <Link href={href} className={styles.learnMore} aria-label={`${pt ? "Saber mais sobre" : "Learn more about"} ${entry.name[language]}`}>{pt ? "Saber mais" : "Learn more"}<ArrowUpRight size={15} aria-hidden="true" /></Link>
    </article>;
  }

  return <main className={styles.page}>
    <section id="price-list" className={styles.catalogue} aria-labelledby="price-list-title">
      <div className={styles.toolbar}>
        <div><h1 id="price-list-title">{pt ? "Tratamentos" : "Treatments"}</h1><p className={styles.intro}>{pt ? "Explore por área ou pesquise um tratamento, um objetivo ou uma preocupação." : "Browse by area or search for a treatment, a goal or a concern."}</p></div>
        <div className={styles.search}>
          <Search size={19} aria-hidden="true" />
          <label htmlFor="pricing-search" className="sr-only">{pt ? "Pesquisar tratamento ou preocupação" : "Search for a treatment or concern"}</label>
          <input id="pricing-search" type="search" value={query} onChange={(event) => updateFilters(categoryId, event.target.value)} placeholder={pt ? "Ex.: Botox, firmeza, cabelo…" : "E.g. Botox, firmness, hair…"} aria-controls="pricing-results" />
          {query && <button type="button" onClick={() => updateFilters(categoryId, "")} aria-label={pt ? "Limpar pesquisa" : "Clear search"}><X size={16} aria-hidden="true" /></button>}
        </div>
      </div>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <p className={styles.filterLabel} id="pricing-filter-label">{pt ? "Escolha uma área" : "Choose an area"}</p>
          <div className={styles.filters} role="group" aria-labelledby="pricing-filter-label">
            <button type="button" aria-pressed={categoryId === "all"} aria-controls="pricing-results" onClick={() => updateFilters("all", query)}>{pt ? "Todos os tratamentos" : "All treatments"}<span>{treatmentCatalogue.reduce((total, category) => total + category.items.length, 0)}</span></button>
            {treatmentCatalogue.map((category) => <button type="button" key={category.id} aria-pressed={categoryId === category.id} aria-controls="pricing-results" onClick={() => updateFilters(category.id, query)}>{category.name[language]}<span>{category.items.length}</span></button>)}
          </div>
          <div className={styles.sidebarHelp}><MessageCircle size={20} strokeWidth={1.4} aria-hidden="true" /><p>{pt ? "Não sabe o que escolher?" : "Not sure what to choose?"}</p><a href={bookingUrl} target="_blank" rel="noreferrer">{pt ? "Peça orientação no WhatsApp" : "Ask for guidance on WhatsApp"}<ArrowUpRight size={15} aria-hidden="true" /></a></div>
        </aside>
        <div className={styles.results} id="pricing-results">
          <div className={styles.resultsMeta}><p role="status" aria-live="polite" aria-atomic="true">{count} {pt ? (count === 1 ? "tratamento" : "tratamentos") : (count === 1 ? "treatment" : "treatments")}{query && <> · “{query}”</>}</p></div>
          {categories.length === 0 && <div className={styles.empty}><Search size={28} strokeWidth={1.3} aria-hidden="true" /><h3>{pt ? "Não encontrámos esse tratamento." : "We couldn't find that treatment."}</h3><p>{pt ? "Experimente outro nome ou consulte todas as áreas." : "Try another name or browse all areas."}</p><button type="button" onClick={() => updateFilters("all", "")}>{pt ? "Ver todos os tratamentos" : "View all treatments"}<ArrowUpRight size={16} aria-hidden="true" /></button></div>}
          {categories.map((category) => <section className={styles.category} key={category.id} aria-labelledby={`price-${category.id}`}>
            <div className={styles.categoryHeader}><h2 id={`price-${category.id}`}>{category.name[language]}</h2></div>
            {category.items.map(renderTreatment)}
          </section>)}

        </div>
      </div>
    </section>
    <section className={styles.cta} aria-labelledby="pricing-cta-title"><div><p className="eyebrow">{pt ? "Orientação personalizada" : "Personal guidance"}</p><h2 id="pricing-cta-title">{pt ? "Vamos encontrar o cuidado certo para si?" : "Let's find the right care for you."}</h2><p>{pt ? "Conte-nos o que procura. A nossa equipa ajuda a esclarecer as opções e a combinar uma avaliação." : "Tell us what you're looking for. Our team can explain your options and arrange a consultation."}</p></div><div className={styles.ctaActions}><a href={bookingUrl} className="button button--primary" target="_blank" rel="noreferrer">{pt ? "Falar no WhatsApp" : "Chat on WhatsApp"}<ArrowUpRight size={17} aria-hidden="true" /></a></div></section>
  </main>;
}
