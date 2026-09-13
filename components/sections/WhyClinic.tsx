"use client";
import { HeartPulse, Microscope, ScanFace, UserRoundCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
const icons = [UserRoundCheck, HeartPulse, Microscope, ScanFace];
export function WhyClinic() {
  const { t } = useLanguage();
  return <section className="section why"><Reveal><SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} intro={t.why.intro} /></Reveal><div className="why-grid">{t.why.items.map((item, index) => { const Icon = icons[index]; return <Reveal key={item.title} className="why-item" delay={index * .06}><Icon size={25} strokeWidth={1.4} /><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></Reveal>; })}</div></section>;
}
