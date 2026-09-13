"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageProvider";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function ClinicSpace() {
  const { t } = useLanguage(); const photos = [images.clinic1, images.clinic2, images.clinic3];
  return <section className="section space"><Reveal><SectionHeading eyebrow={t.space.eyebrow} title={t.space.title} intro={t.space.copy} /></Reveal><div className="space-grid">{photos.map((photo, index) => <Reveal key={photo} className={`space-photo space-photo--${index + 1}`} delay={index * .05}><Image src={photo} fill sizes="(max-width: 720px) 100vw, 60vw" alt={t.space.alts[index]} /></Reveal>)}</div></section>;
}
