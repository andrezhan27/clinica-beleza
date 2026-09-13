"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageProvider";
export function Footer() {
  const { t } = useLanguage();
  return <footer className="footer"><div className="footer__main"><div className="footer__brand"><Image src="/images/logo.svg" width={190} height={82} alt="Clínica Beleza" /><p>{t.footer.copy}</p></div><div><h3>{t.footer.navigation}</h3><a href="#clinica">{t.nav.clinic}</a><a href="#tratamentos">{t.nav.treatments}</a><a href="#equipa">{t.nav.team}</a><a href="#resultados">{t.nav.results}</a><a href="#contactos">{t.nav.contacts}</a></div><div><h3>{t.footer.contact}</h3><p>Av. João Crisóstomo 63 A<br />1050-126 Lisboa</p><a href="tel:+351210000000">+351 210 000 000</a><a href="mailto:geral@clinicabeleza.pt">geral@clinicabeleza.pt</a></div><div><h3>{t.footer.social}</h3><div className="socials"><a href="#" aria-label="Instagram">IG</a><a href="#" aria-label="Facebook">FB</a><a href="#" aria-label="LinkedIn">IN</a></div></div></div><div className="footer__bottom"><p>{t.footer.rights}</p><div><a href="#">{t.footer.privacy}</a><a href="#">{t.footer.cookies}</a><a href="#">{t.footer.terms}</a></div></div></footer>;
}
