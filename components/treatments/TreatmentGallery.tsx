"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageProvider";
import type { Treatment } from "@/data/treatments";

export function TreatmentGallery({ treatment, start = 0 }: { treatment: Treatment; start?: number }) {
  const { language } = useLanguage();
  const images = treatment.gallery.slice(start);
  if (!images.length) return null;
  return <section className={`treatment-gallery treatment-gallery--${Math.min(images.length, 4)}`}>{images.map((src, index) => <div key={src} className="treatment-gallery__image"><Image src={src} alt={`${treatment.name[language]} — ${language === "pt" ? "imagem" : "image"} ${start + index + 1}`} fill sizes="(max-width: 760px) 100vw, 50vw" /></div>)}</section>;
}
