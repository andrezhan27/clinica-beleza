"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";

export function Intro() {
  const { t } = useLanguage();
  return <section id="clinica" className="section intro"><Reveal className="intro__title"><p className="eyebrow">{t.intro.eyebrow}</p><h2>{t.intro.title}</h2></Reveal><Reveal className="intro__copy" delay={.08}><p>{t.intro.p1}</p><p>{t.intro.p2}</p><div className="principles">{t.intro.principles.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></Reveal></section>;
}
