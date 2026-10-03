"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { ClinicButton } from "@/components/ui/ClinicButton";
import { createBookingWhatsAppUrl } from "@/lib/booking";

export function Hero() {
  const { t, language } = useLanguage();
  const whatsappUrl = createBookingWhatsAppUrl(language === "pt"
    ? "Olá! Vim através do site da Clínica Beleza e gostaria de receber orientação da equipa. Podem ajudar-me, por favor?"
    : "Hello! I found Clínica Beleza through the website and would like guidance from the team. Could you help me, please?");
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
          <ClinicButton href="#encontrar-tratamento" variant="light">{t.hero.secondary}</ClinicButton>
        </div>
      </div>
      <div className="hero__foot"><a href="#clinica" className="hero__scroll"><span>{language === "pt" ? "Conheça a nossa essência" : "Discover our approach"}</span><ArrowDown size={17} aria-hidden="true" /></a></div>
    </section>
  );
}
