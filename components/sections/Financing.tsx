"use client";
import { CreditCard } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { ClinicButton } from "@/components/ui/ClinicButton";
import { BOOKING_WHATSAPP_URL } from "@/lib/booking";
export function Financing() {
  const { t } = useLanguage();
  return <section className="section financing"><Reveal className="financing__inner"><div className="financing__icon"><CreditCard size={27} strokeWidth={1.4} /></div><div><p className="eyebrow">{t.financing.eyebrow}</p><h2>{t.financing.title}</h2><p>{t.financing.copy}</p><small>{t.financing.disclaimer}</small></div><ClinicButton variant="secondary" href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer" arrow>{t.financing.action}</ClinicButton></Reveal></section>;
}
