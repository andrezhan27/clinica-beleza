"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { BOOKING_WHATSAPP_URL } from "@/lib/booking";

export function TreatmentCTA({ compact = false }: { compact?: boolean }) {
  const { language } = useLanguage();
  return (
    <section className={compact ? "treatment-cta treatment-cta--compact" : "treatment-cta"}>
      <div>
        <p className="eyebrow">{language === "pt" ? "O primeiro passo" : "The first step"}</p>
        <h2>{language === "pt" ? "Cada caso é único." : "Every case is unique."}</h2>
        <p>{language === "pt" ? "Marque uma avaliação para saber qual é a abordagem mais adequada para si." : "Book an assessment to discover the approach best suited to you."}</p>
      </div>
      <div className="treatment-cta__actions">
        <a className="button button--primary" href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer">{language === "pt" ? "Marcar avaliação" : "Book assessment"}<ArrowUpRight size={16} /></a>
        <a className="treatment-contact-link" href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={16} />{language === "pt" ? "Contactar-nos" : "Contact us"}</a>
      </div>
    </section>
  );
}
