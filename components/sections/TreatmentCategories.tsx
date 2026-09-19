"use client";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { treatmentCategories } from "@/data/treatment-categories";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TreatmentCategories() {
  const { t, language } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    const closestIndex = cards.reduce((closest, card, index) => (
      Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft) < Math.abs(cards[closest].offsetLeft - track.offsetLeft - track.scrollLeft) ? index : closest
    ), 0);
    setActiveIndex(closestIndex);
  };

  const goToCard = (index: number) => {
    const track = trackRef.current;
    const card = track?.children.item(index) as HTMLElement | null;
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <section id="tratamentos" className="section treatments">
      <Reveal>
        <SectionHeading
          eyebrow={t.categories.eyebrow}
          title={language === "pt" ? "Explore os nossos tratamentos." : "Explore our treatments."}
          intro={t.categories.intro}
        />
      </Reveal>
      <div className="category-grid" ref={trackRef} onScroll={updateActiveIndex}>
        {treatmentCategories.map((item, index) => {
          return (
            <Reveal key={item.slug} className={`category category--${index + 1}`} delay={index * .04}>
              <a href={`/tratamentos/${item.slug}`}>
                <div className="category__image">
                  <div className="category__image-frame">
                    <Image src={item.coverImage} fill sizes="(max-width: 720px) 100vw, 50vw" alt={item.name[language]} />
                  </div>
                </div>
                <div className="category__body">
                  <span className="category__number">0{index + 1}</span>
                  <div>
                    <h3>{item.name[language]}</h3>
                    <p>{item.shortDescription[language]}</p>
                    <span className="text-link">{t.categories.explore}<ArrowUpRight size={16} /></span>
                  </div>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
      <div className="category-carousel-controls" aria-label={language === "pt" ? "Controlos do carrossel de tratamentos" : "Treatment carousel controls"}>
        <p aria-live="polite"><span>{String(activeIndex + 1).padStart(2, "0")}</span><span>/</span><span>{String(treatmentCategories.length).padStart(2, "0")}</span></p>
        <div>
          <button type="button" onClick={() => goToCard(Math.max(0, activeIndex - 1))} disabled={activeIndex === 0} aria-label={language === "pt" ? "Tratamento anterior" : "Previous treatment"}><ArrowLeft size={19} /></button>
          <button type="button" onClick={() => goToCard(Math.min(treatmentCategories.length - 1, activeIndex + 1))} disabled={activeIndex === treatmentCategories.length - 1} aria-label={language === "pt" ? "Tratamento seguinte" : "Next treatment"}><ArrowRight size={19} /></button>
        </div>
      </div>
    </section>
  );
}
