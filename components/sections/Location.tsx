"use client";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { ClinicButton } from "@/components/ui/ClinicButton";
export function Location() {
  const { t } = useLanguage();
  return <section id="contactos" className="location"><div className="map-placeholder" role="img" aria-label={t.location.map}><div className="map-lines" /><span className="map-marker"><MapPin size={23} /></span><p>SALDANHA</p></div><Reveal className="location__content"><p className="eyebrow">{t.location.eyebrow}</p><h2>{t.location.title}</h2><div className="contact-list"><div><MapPin size={18} /><span>{t.location.address}</span></div><div><Phone size={18} /><a href="tel:+351210000000">{t.location.phone}</a></div><div><Mail size={18} /><a href="mailto:geral@clinicabeleza.pt">{t.location.email}</a></div><div><Clock3 size={18} /><span><small>{t.location.hoursLabel}</small>{t.location.hours}</span></div></div><div className="location__actions"><ClinicButton href="https://maps.google.com/?q=Av.+João+Crisóstomo+63+A+Lisboa" target="_blank" rel="noreferrer" arrow>{t.location.directions}</ClinicButton><ClinicButton href="tel:+351210000000" variant="secondary">{t.location.booking}</ClinicButton></div></Reveal></section>;
}
