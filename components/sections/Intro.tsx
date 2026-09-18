"use client";
import { ShieldCheck, Sparkles, UserRoundCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";

const icons = [UserRoundCheck, ShieldCheck, Sparkles];

export function Intro() {
  const { t } = useLanguage();
  return <section id="clinica" className="section intro"><Reveal className="intro__card"><div className="intro__heading"><p className="eyebrow">{t.intro.eyebrow}</p><h2>{t.intro.title}</h2><p className="intro__copy">{t.intro.p1}</p></div><div className="principles">{t.intro.principles.map((item, index) => { const Icon = icons[index]; return <div className="principle" key={item.title}><Icon size={28} strokeWidth={1.25} /><div><h3>{item.title}</h3><p>{item.text}</p></div></div>; })}</div></Reveal></section>;
}
