"use client";
import { CreditCard } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { ClinicButton } from "@/components/ui/ClinicButton";
import { createBookingWhatsAppUrl } from "@/lib/booking";
export function Financing() {
  const { t, language } = useLanguage();
  return <section className="section financing"><Reveal className="financing__inner"><div className="financing__icon"><CreditCard size={27} strokeWidth={1.4} /></div><div><p className="eyebrow">{t.financing.eyebrow}</p><h2>{t.financing.title}</h2><p>{t.financing.copy}</p><small>{t.financing.disclaimer}</small></div><ClinicButton variant="secondary" href={createBookingWhatsAppUrl(language === "pt" ? "Olá! Gostaria de saber mais sobre as opções e condições de pagamento na Clínica Beleza. Podem ajudar-me?" : "Hello! I would like to know more about payment options and terms at Clínica Beleza. Could you help me?")} target="_blank" rel="noreferrer" arrow>{t.financing.action}</ClinicButton></Reveal></section>;
}
