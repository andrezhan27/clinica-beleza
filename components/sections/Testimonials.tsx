"use client";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Testimonials() {
  const { t } = useLanguage();
  return <section className="section testimonials"><Reveal><SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} light /></Reveal><div className="testimonial-track">{t.testimonials.items.map((item, index) => <Reveal key={item.name} className="testimonial" delay={index * .06}><div className="stars" aria-label="5 stars">{[0,1,2,3,4].map(n => <Star key={n} size={14} fill="currentColor" />)}</div><blockquote>“{item.quote}”</blockquote><p>{item.name}</p></Reveal>)}</div><p className="reviews-note">{t.testimonials.reviews}</p></section>;
}
