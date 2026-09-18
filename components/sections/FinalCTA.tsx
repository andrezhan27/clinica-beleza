"use client";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { ClinicButton } from "@/components/ui/ClinicButton";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BOOKING_WHATSAPP_URL } from "@/lib/booking";
export function FinalCTA() {
  const { t } = useLanguage();
  return <section className="final-cta"><Reveal><p className="eyebrow">{t.finalCta.eyebrow}</p><h2>{t.finalCta.title}</h2><p>{t.finalCta.copy}</p><div><MagneticButton><ClinicButton href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer" arrow>{t.finalCta.action}</ClinicButton></MagneticButton><a className="whatsapp-link" href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18} />{t.finalCta.whatsapp}</a></div></Reveal></section>;
}
