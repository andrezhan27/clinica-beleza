"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { ClinicButton } from "@/components/ui/ClinicButton";
import { createConsultationBookingUrl } from "@/lib/booking";

export function Hero() {
  const { t, language } = useLanguage();
  const whatsappUrl = createConsultationBookingUrl(language);
  return (
    <section id="inicio" className="hero">
      <div className="hero__visual">
        <Image src="/images/home-hero.webp" fill preload sizes="100vw" alt={t.hero.imageAlt} />
      </div>
      <div className="hero__copy">
        <p className="eyebrow hero__eyebrow">
          <span className="hero__eyebrow-primary">{t.hero.eyebrow}</span>
          <span className="hero__eyebrow-location">{t.hero.note}</span>
        </p>
        <h1>{t.hero.title}</h1>
        <p className="hero__lead">{t.hero.copy}</p>
        <div className="hero__actions">
          <ClinicButton href={whatsappUrl} target="_blank" rel="noreferrer" arrow>{t.hero.primary}</ClinicButton>
          <ClinicButton href="/tratamentos" variant="light">{t.hero.secondary}</ClinicButton>
        </div>
        <p className="hero__booking-note">{language === "pt" ? "Marcação pelo WhatsApp · A equipa confirma a disponibilidade" : "Booking via WhatsApp · Our team confirms availability"}</p>
      </div>
      <div className="hero__foot"><a href="#clinica" className="hero__scroll"><span>{language === "pt" ? "Conheça a nossa essência" : "Discover our approach"}</span><ArrowDown size={17} aria-hidden="true" /></a></div>
    </section>
  );
}
