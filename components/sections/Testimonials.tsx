"use client";

import { Pause, Play, Star } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const { t, language } = useLanguage();
  const [paused, setPaused] = useState(false);
  return (
    <section className="section testimonials" aria-label={t.testimonials.eyebrow}>
      <div className="testimonials__header"><Reveal><SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} light /></Reveal><div className="testimonials__controls"><p className="reviews-note">{t.testimonials.reviews}</p><button type="button" className="reviews-toggle" aria-controls="patient-reviews" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}<span>{language === "pt" ? (paused ? "Retomar movimento" : "Pausar movimento") : (paused ? "Resume motion" : "Pause motion")}</span></button></div></div>
      <div id="patient-reviews" className="testimonial-viewport" tabIndex={0} role="region" aria-label={language === "pt" ? "Avaliações de pacientes" : "Patient reviews"}>
        <div className={`testimonial-track${paused ? " testimonial-track--paused" : ""}`}>
          {[0, 1].map(copy => <div className="testimonial-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>{t.testimonials.items.map(item => <figure className="testimonial" key={item.name}><div className="stars" role="img" aria-label={language === "pt" ? "5 de 5 estrelas" : "5 out of 5 stars"}>{[0, 1, 2, 3, 4].map(n => <Star key={n} size={13} fill="currentColor" aria-hidden="true" />)}</div><blockquote>“{item.quote}”</blockquote><figcaption><span className="testimonial__avatar" aria-hidden="true">{item.name.split(" ").map(part => part[0]).join("")}</span><span>{item.name}</span></figcaption></figure>)}</div>)}
        </div>
      </div>
    </section>
  );
}
