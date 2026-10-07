"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { createConsultationBookingUrl } from "@/lib/booking";

export function TreatmentCTA({ compact = false, interest }: { compact?: boolean; interest?: { pt: string; en: string } }) {
  const { language } = useLanguage();
  return (
    <section className={compact ? "treatment-cta treatment-cta--compact" : "treatment-cta"}>
      <div>
        <p className="eyebrow">{language === "pt" ? "O primeiro passo" : "The first step"}</p>
        <h2>{language === "pt" ? "Cada caso é único." : "Every case is unique."}</h2>
        <p>{language === "pt" ? "Marque uma avaliação para saber qual é a abordagem mais adequada para si." : "Book an assessment to discover the approach best suited to you."}</p>
      </div>
      <div className="treatment-cta__actions">
        <a className="button button--primary" href={createConsultationBookingUrl(language, interest?.[language])} target="_blank" rel="noreferrer">{language === "pt" ? "Marcar avaliação no WhatsApp" : "Book consultation on WhatsApp"}<ArrowUpRight size={16} /></a>
        <Link className="treatment-contact-link" href="/#encontrar-tratamento">{language === "pt" ? "Ajude-me a escolher" : "Help me choose"}<ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}
