"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { treatmentCategories } from "@/data/treatment-categories";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const homepageCategoryImages: Record<string, string | string[]> = {
  "medicina-estetica": "/images/estetica-1.png",
  "estetica-corporal": "/images/estetica-5.png",
  "estetica-facial": "/images/estetica-6.png",
  servicos: ["/images/massage-1.png", "/images/massage-2.png"],
};

export function TreatmentCategories() {
  const { t, language } = useLanguage();
  return (
    <section id="tratamentos" className="section treatments">
      <Reveal>
        <SectionHeading
          eyebrow={t.categories.eyebrow}
          title={language === "pt" ? "Explore os nossos tratamentos." : "Explore our treatments."}
          intro={t.categories.intro}
        />
      </Reveal>
      <div className="category-grid">
        {treatmentCategories.map((item, index) => {
          const categoryImage = homepageCategoryImages[item.slug] ?? item.heroImage;
          const images = Array.isArray(categoryImage) ? categoryImage : [categoryImage];

          return (
            <Reveal key={item.slug} className={`category category--${index + 1}`} delay={index * .04}>
              <a href={`/tratamentos/${item.slug}`}>
                <div className={`category__image${images.length > 1 ? " category__image--pair" : ""}`}>
                  {images.map((src, imageIndex) => (
                    <div className="category__image-frame" key={src}>
                      <Image
                        src={src}
                        fill
                        sizes={images.length > 1 ? "(max-width: 720px) 50vw, 25vw" : "(max-width: 720px) 100vw, 50vw"}
                        alt={imageIndex === 0 ? item.name[language] : ""}
                      />
                    </div>
                  ))}
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
    </section>
  );
}
