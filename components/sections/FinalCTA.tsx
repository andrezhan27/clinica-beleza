"use client";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { ClinicButton } from "@/components/ui/ClinicButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
export function FinalCTA() {
  const { t } = useLanguage();
  return <section className="final-cta"><Reveal><p className="eyebrow">{t.finalCta.eyebrow}</p><h2>{t.finalCta.title}</h2><p>{t.finalCta.copy}</p><div><MagneticButton><ClinicButton href="tel:+351210000000" arrow>{t.finalCta.action}</ClinicButton></MagneticButton><a className="whatsapp-link" href="https://wa.me/351210000000" target="_blank" rel="noreferrer"><MessageCircle size={18} />{t.finalCta.whatsapp}</a></div></Reveal></section>;
}
