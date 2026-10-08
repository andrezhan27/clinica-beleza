"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { formatCataloguePrice, type CatalogueTreatment } from "@/data/treatment-catalogue";
import type { LocalizedText } from "@/data/treatment-categories";
import { createConsultationBookingUrl } from "@/lib/booking";
import styles from "./TreatmentPageContent.module.css";

// Every treatment and programme uses this same layout. Content comes from the shared catalogue.
export function TreatmentPageContent({ entry, categoryName, catalogueHref = "/tratamentos" }: { entry: CatalogueTreatment; categoryName: LocalizedText; catalogueHref?: string }) {
  const { language } = useLanguage();
  const pt = language === "pt";
  const treatment = entry.treatment;
  const bookingUrl = createConsultationBookingUrl(language, entry.name[language]);
  const durations = [...new Set(entry.variants.map(({ detail }) => detail?.[language]).filter((detail) => detail && /^\d+ (minutos|minutes)$/.test(detail)))];
  const duration = durations.length ? durations.join(" / ") : treatment?.duration && treatment.duration !== "30–60 min" ? treatment.duration : (pt ? "Confirmada na avaliação" : "Confirmed at consultation");
  const sessions = treatment?.sessions && treatment.sessions !== "Plano individual" ? treatment.sessions : (pt ? "Plano individual" : "Individual plan");
  const recovery = treatment?.recovery?.[language] ?? (pt ? "Confirmada com a equipa" : "Confirmed with the team");
  const process = treatment?.process?.[language] ?? (pt
    ? "Na avaliação, a equipa esclarece as suas expectativas e explica o protocolo, as opções disponíveis, os cuidados e o acompanhamento. O plano e o valor final são confirmados consigo antes de avançar."
    : "During your consultation, the team discusses your expectations and explains the protocol, available options, care and follow-up. Your plan and final price are confirmed with you before proceeding.");
  const contents = [...new Set(entry.variants.map(({ detail }) => detail?.[language]).filter((detail): detail is string => Boolean(detail)))];
  const faq = treatment?.faq ?? [
    { question: { pt: "Como posso saber se esta opção é adequada para mim?", en: "How can I find out whether this option suits me?" }, answer: { pt: "Fale com a nossa equipa. A avaliação permite esclarecer os seus objetivos e as opções adequadas ao seu caso.", en: "Speak with our team. A consultation helps clarify your goals and the options appropriate to your situation." } },
    { question: { pt: "Como posso marcar uma avaliação?", en: "How can I arrange a consultation?" }, answer: { pt: "Use o botão do WhatsApp nesta página. A mensagem identifica a opção que está a consultar; a equipa ajuda a combinar a data e a esclarecer as suas dúvidas.", en: "Use the WhatsApp button on this page. The message identifies the option you're viewing; our team will help arrange a date and answer your questions." } },
  ];

  return <main className={styles.page}>
    <nav className={styles.breadcrumb} aria-label={pt ? "Navegação do tratamento" : "Treatment navigation"}><Link href={catalogueHref}><ArrowLeft size={15} aria-hidden="true" />{pt ? "Tratamentos" : "Treatments"}</Link><span aria-hidden="true">/</span><span aria-current="page">{entry.name[language]}</span></nav>
    <header className={styles.header}><p className="eyebrow">{categoryName[language]}</p><h1>{entry.name[language]}</h1><p className={styles.description}>{entry.description[language]}</p></header>
    <div className={styles.layout}>
      <div className={styles.content}>
        <section className={styles.section} aria-labelledby="treatment-at-a-glance"><h2 id="treatment-at-a-glance">{pt ? "Em resumo" : "At a glance"}</h2><dl className={styles.facts}><div><dt>{pt ? "Duração" : "Duration"}</dt><dd>{duration}</dd></div><div><dt>{pt ? "Sessões" : "Sessions"}</dt><dd>{sessions}</dd></div><div><dt>{pt ? "Recuperação" : "Recovery"}</dt><dd>{recovery}</dd></div></dl></section>
        {!treatment && contents.length > 0 && <section className={styles.section} aria-labelledby="treatment-contents"><h2 id="treatment-contents">{pt ? "O que está incluído" : "What's included"}</h2><ul className={styles.contents}>{contents.map((detail) => <li key={detail}>{detail}</li>)}</ul></section>}
        <section className={styles.section} aria-labelledby="treatment-process"><h2 id="treatment-process">{pt ? "Como funciona" : "How it works"}</h2><p>{process}</p></section>
        <section className={styles.section} aria-labelledby="treatment-expectations"><h2 id="treatment-expectations">{pt ? "O que esperar" : "What to expect"}</h2><p>{treatment?.results?.[language] ?? (pt ? "A equipa explica na avaliação o que pode esperar desta opção e os cuidados necessários no seu caso." : "During your consultation, the team explains what to expect from this option and the care needed in your situation.")}</p></section>
        <section className={styles.section} aria-labelledby="treatment-faq"><h2 id="treatment-faq">{pt ? "Perguntas frequentes" : "Frequently asked questions"}</h2><div className={styles.faq}>{faq.map((item) => <details key={item.question.pt}><summary>{item.question[language]}<span aria-hidden="true">+</span></summary><p>{item.answer[language]}</p></details>)}</div></section>
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
