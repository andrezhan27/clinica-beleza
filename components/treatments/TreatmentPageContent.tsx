"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { formatCataloguePrice, type CatalogueTreatment } from "@/data/treatment-catalogue";
import type { LocalizedText } from "@/data/treatment-categories";
import { getTreatmentDetail } from "@/data/treatment-details";
import { createConsultationBookingUrl } from "@/lib/booking";
import styles from "./TreatmentPageContent.module.css";

// Every treatment and programme uses this same layout. Content comes from the shared catalogue.
export function TreatmentPageContent({ entry, categoryName, catalogueHref = "/tratamentos" }: { entry: CatalogueTreatment; categoryName: LocalizedText; catalogueHref?: string }) {
  const { language } = useLanguage();
  const pt = language === "pt";
  const detail = getTreatmentDetail(entry);
  const bookingUrl = createConsultationBookingUrl(language, entry.name[language]);

  return <main className={styles.page}>
    <nav className={styles.breadcrumb} aria-label={pt ? "Navegação do tratamento" : "Treatment navigation"}><Link href={catalogueHref}><ArrowLeft size={15} aria-hidden="true" />{pt ? "Tratamentos" : "Treatments"}</Link><span aria-hidden="true">/</span><span aria-current="page">{entry.name[language]}</span></nav>
    <header className={styles.header}><p className="eyebrow">{categoryName[language]}</p><h1>{entry.name[language]}</h1></header>
    <div className={styles.layout}>
      <div className={styles.content}>
        <section className={styles.section} aria-labelledby="treatment-overview">
          <h2 id="treatment-overview">{pt ? "O que é" : "What it is"}</h2>
          <p>{detail.overview[language]}</p>
        </section>
        <section className={styles.section} aria-labelledby="treatment-involves">
          <h2 id="treatment-involves">{pt ? "Em que consiste" : "What the treatment involves"}</h2>
          <p>{detail.involves[language]}</p>
          {detail.contents.map((content, index) => <p key={index} className={styles.programmeContents}>
            <strong>{pt ? "O programa inclui: " : "The programme includes: "}</strong>{content[language]}.
          </p>)}
        </section>
        <Link href={catalogueHref} className={styles.back}><ArrowLeft size={16} aria-hidden="true" />{pt ? "Voltar aos tratamentos" : "Back to treatments"}</Link>
      </div>
      <aside className={styles.booking} aria-labelledby="treatment-prices">
        <p className={styles.bookingLabel}>{pt ? "Opções e valores" : "Options and prices"}</p><h2 id="treatment-prices">{pt ? "Preço do tratamento" : "Treatment price"}</h2>
        <a href={bookingUrl} className={`button button--primary ${styles.cta}`} target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" />{pt ? "Marcar avaliação" : "Book consultation"}<ArrowUpRight size={16} aria-hidden="true" /></a><p className={styles.handoff}>{pt ? "Abre o WhatsApp · Combine a data com a equipa" : "Opens WhatsApp · Arrange a date with our team"}</p>
        {entry.variants.length > 0 ? <ul className={styles.prices}>{entry.variants.map((variant, index) => <li key={index}><div>{variant.name[language]}{variant.detail && <small>{variant.detail[language]}</small>}</div><strong>{formatCataloguePrice(variant, language)}</strong></li>)}</ul> : <p className={styles.unpublished}>{pt ? "Valor confirmado após avaliação. Peça informação à nossa equipa." : "Price confirmed following an assessment. Ask our team for details."}</p>}
        <p className={styles.priceNote}>{pt ? "IVA incluído. Os valores “desde” dependem da avaliação e do plano escolhido." : "VAT included. Starting prices depend on the assessment and chosen plan."}</p>
      </aside>
    </div>
  </main>;
}
