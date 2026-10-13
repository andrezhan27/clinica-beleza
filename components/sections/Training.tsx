"use client";

import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";

export function Training() {
  const { t } = useLanguage();

  return <section className="section training" aria-labelledby="training-title">
    <Reveal className="training__inner">
      <h2 id="training-title">{t.training.title}</h2>
      <p><span aria-hidden="true" />{t.training.status}</p>
    </Reveal>
  </section>;
}
