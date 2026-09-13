"use client";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "@/components/ui/Reveal";
import { ClinicButton } from "@/components/ui/ClinicButton";
export function Location() {
  const { t } = useLanguage();
  return <section id="contactos" className="location"><div className="map-embed"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.221160073266!2d-9.152921323166716!3d38.73568687175903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19338189680dfb%3A0x7fd85006ac4370db!2sClinica%20Beleza!5e0!3m2!1sen!2spt!4v1789302548259!5m2!1sen!2spt" title={t.location.map} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div><Reveal className="location__content"><p className="eyebrow">{t.location.eyebrow}</p><h2>{t.location.title}</h2><div className="contact-list"><div><MapPin size={18} /><span>{t.location.address}</span></div><div><Phone size={18} /><a href="tel:+351211500899">{t.location.phone}</a></div><div><Mail size={18} /><a href="mailto:info@clinicabeleza.pt">{t.location.email}</a></div><div><Clock3 size={18} /><span><small>{t.location.hoursLabel}</small>{t.location.hoursWeekdays}<br />{t.location.hoursSaturday}</span></div></div><div className="location__actions"><ClinicButton href="https://maps.google.com/?q=Clinica+Beleza+Av.+João+Crisóstomo+63+A+Lisboa" target="_blank" rel="noreferrer" arrow>{t.location.directions}</ClinicButton><ClinicButton href="https://wa.me/351935486918" target="_blank" rel="noreferrer" variant="secondary">{t.location.booking}</ClinicButton></div></Reveal></section>;
}
