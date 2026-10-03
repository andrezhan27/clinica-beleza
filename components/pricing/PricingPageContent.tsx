"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Search, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { filterPriceCategories, priceCategories, type PriceItem } from "@/data/pricing";
import { createBookingWhatsAppUrl } from "@/lib/booking";
import styles from "./PricingPageContent.module.css";

export function PricingPageContent() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState("all");
  const categories = filterPriceCategories(categoryId, query);
  const count = categories.reduce((total, category) => total + category.items.length, 0);
  const formatPrice = new Intl.NumberFormat(pt ? "pt-PT" : "en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });
  const bookingUrl = createBookingWhatsAppUrl(pt
    ? "Olá! Consultei a tabela de preços da Clínica Beleza e gostaria de receber orientação sobre os tratamentos. Podem ajudar-me, por favor?"
    : "Hello! I viewed Clínica Beleza's price list and would like guidance about the treatments. Could you help me, please?");
  const reset = () => { setQuery(""); setCategoryId("all"); };
  const units = { ml: pt ? "por ml" : "per ml", session: pt ? "por sessão" : "per session", pack: pt ? "total do pack" : "full pack" };

  function Price({ entry }: { entry: PriceItem }) {
    return <td className={styles.price}>
      {entry.price === null
        ? <span className={styles.quote}>{entry.pending ? (pt ? "Confirmar valor" : "Confirm price") : (pt ? "Sob avaliação" : "After assessment")}</span>
        : <><span className={styles.amount}>{entry.from && <span className={styles.from}>{pt ? "Desde" : "From"} </span>}{formatPrice.format(entry.price)}</span>{entry.unit && <small>{units[entry.unit]}</small>}</>}
    </td>;
  }

  return (
    <main className={styles.page}>
      <section id="price-list" className={styles.catalogue} aria-labelledby="price-list-title">
        <div className={styles.toolbar}>
          <h1 id="price-list-title">{pt ? "Tratamentos e valores" : "Treatments and prices"}</h1>
          <div className={styles.search}>
            <Search size={19} aria-hidden="true" />
            <label htmlFor="pricing-search" className="sr-only">{pt ? "Pesquisar tratamento ou área" : "Search for a treatment or area"}</label>
            <input id="pricing-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={pt ? "Pesquisar tratamento ou área…" : "Search for a treatment or area…"} aria-controls="pricing-results" />
            {query && <button type="button" onClick={() => setQuery("")} aria-label={pt ? "Limpar pesquisa" : "Clear search"}><X size={16} aria-hidden="true" /></button>}
          </div>
        </div>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <p className={styles.filterLabel} id="pricing-filter-label">{pt ? "Escolha uma área" : "Choose an area"}</p>
            <div className={styles.filters} role="group" aria-labelledby="pricing-filter-label">
              <button type="button" aria-pressed={categoryId === "all"} aria-controls="pricing-results" onClick={() => setCategoryId("all")}>{pt ? "Todos os tratamentos" : "All treatments"}<span>{priceCategories.reduce((total, category) => total + category.items.length, 0)}</span></button>
              {priceCategories.map((category) => <button type="button" key={category.id} aria-pressed={categoryId === category.id} aria-controls="pricing-results" onClick={() => setCategoryId(category.id)}>{category.name[language]}<span>{category.items.length}</span></button>)}
            </div>
            <div className={styles.sidebarHelp}><MessageCircle size={20} strokeWidth={1.4} aria-hidden="true" /><p>{pt ? "Precisa de orientação?" : "Need some guidance?"}</p><a href={bookingUrl} target="_blank" rel="noreferrer">{pt ? "Fale com a nossa equipa" : "Talk to our team"}<ArrowUpRight size={15} aria-hidden="true" /></a></div>
          </aside>
          <div className={styles.results} id="pricing-results">
            <div className={styles.resultsMeta}><p role="status" aria-live="polite" aria-atomic="true">{count} {pt ? (count === 1 ? "tratamento" : "tratamentos") : (count === 1 ? "treatment" : "treatments")}{query && <> · “{query}”</>}</p><span>{pt ? "IVA incluído" : "VAT included"}</span></div>
            {categories.length === 0 && <div className={styles.empty}><Search size={28} strokeWidth={1.3} aria-hidden="true" /><h3>{pt ? "Não encontrámos esse tratamento." : "We couldn't find that treatment."}</h3><p>{pt ? "Experimente outro nome ou consulte todas as áreas." : "Try another name or browse all treatment areas."}</p><button type="button" onClick={reset}>{pt ? "Ver todos os tratamentos" : "View all treatments"}<ArrowUpRight size={16} aria-hidden="true" /></button></div>}
            {categories.map((category) => <section className={styles.category} key={category.id} aria-labelledby={`price-${category.id}`}>
              <div className={styles.categoryHeader}><span className={styles.categoryNumber}>{String(priceCategories.findIndex((entry) => entry.id === category.id) + 1).padStart(2, "0")}</span><div><h2 id={`price-${category.id}`}>{category.name[language]}</h2><p>{category.description[language]}</p></div></div>
              <table className={styles.table}>
                <caption className="sr-only">{pt ? "Preços de " : "Prices for "}{category.name[language]}</caption>
                <thead><tr><th scope="col">{pt ? "Tratamento" : "Treatment"}</th><th scope="col">{pt ? "Preço" : "Price"}</th></tr></thead>
                <tbody>{category.items.map((entry, index) => <tr key={`${entry.name.pt}-${index}`}><th scope="row"><span>{entry.name[language]}</span>{entry.detail && <small>{entry.detail[language]}</small>}</th><Price entry={entry} /></tr>)}</tbody>
              </table>
            </section>)}
            <div className={styles.priceNotes}><p>{pt ? "Como ler os preços" : "Understanding the prices"}</p><ul><li>{pt ? "“Desde” indica o valor inicial. O valor final depende da avaliação e do plano de tratamento." : "“From” indicates the starting price. The final price depends on the assessment and treatment plan."}</li><li>{pt ? "Os preços por ml e por sessão estão identificados. Nos packs, o valor é o total das sessões indicadas." : "Prices per ml and per session are labelled. Pack prices cover all the listed sessions."}</li><li>{pt ? "As cirurgias têm orçamento individual, definido após consulta." : "Surgery is quoted individually following a consultation."}</li></ul></div>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="pricing-cta-title"><div><p className="eyebrow">{pt ? "O próximo passo é seu" : "Your next step"}</p><h2 id="pricing-cta-title">{pt ? "Vamos encontrar o cuidado certo para si?" : "Let's find the right care for you."}</h2><p>{pt ? "A nossa equipa ajuda a esclarecer os valores e a orientar a sua escolha." : "Our team can explain the prices and help you choose your next step."}</p></div><div className={styles.ctaActions}><a href={bookingUrl} className="button button--primary" target="_blank" rel="noreferrer">{pt ? "Falar no WhatsApp" : "Chat on WhatsApp"}<ArrowUpRight size={17} aria-hidden="true" /></a><Link href="/tratamentos">{pt ? "Conhecer os tratamentos" : "Explore the treatments"}<ArrowUpRight size={16} aria-hidden="true" /></Link></div></section>
    </main>
  );
}
