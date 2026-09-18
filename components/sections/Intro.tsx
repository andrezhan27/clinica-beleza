"use client";
import { ShieldCheck, Sparkles, UserRoundCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";

const icons = [UserRoundCheck, ShieldCheck, Sparkles];

export function Intro() {
  const { t } = useLanguage();
  return <section id="clinica" className="section intro"><Reveal className="intro__title"><p className="eyebrow">{t.intro.eyebrow}</p><h2>{t.intro.title}</h2></Reveal><Reveal className="intro__copy" delay={.08}><p>{t.intro.p1}</p></Reveal><div className="principles">{t.intro.principles.map((item, index) => { const Icon = icons[index]; return <Reveal className="principle" key={item.title} delay={index * .06}><Icon size={35} strokeWidth={1.25} /><div><h3>{item.title}</h3><p>{item.text}</p></div></Reveal>; })}</div></section>;
}
