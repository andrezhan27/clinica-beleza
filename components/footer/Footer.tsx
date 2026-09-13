"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <Image src="/images/logo.png" width={1774} height={887} sizes="190px" alt="Clínica Beleza" />
          <p>{t.footer.copy}</p>
        </div>
        <div>
          <h3>{t.footer.navigation}</h3>
          <a href="#clinica">{t.nav.clinic}</a>
          <a href="#tratamentos">{t.nav.treatments}</a>
          <a href="#equipa">{t.nav.team}</a>
          <a href="#resultados">{t.nav.results}</a>
          <a href="#contactos">{t.nav.contacts}</a>
        </div>
        <div>
          <h3>{t.footer.contact}</h3>
          <p>Av. João Crisóstomo 63 A<br />1050-126 Lisboa</p>
          <a href="tel:+351211500899">+351 211 500 899</a>
          <a href="mailto:info@clinicabeleza.pt">info@clinicabeleza.pt</a>
        </div>
        <div>
          <h3>{t.footer.social}</h3>
          <div className="socials">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="LinkedIn">IN</a>
          </div>
        </div>
      </div>
      <div className="footer__regulatory">
        <h3>{t.footer.regulatory}</h3>
        <div className="regulatory-art">
          <Image src="/images/regulatory-logos.png" width={530} height={198} alt="Livro de Reclamações, ERS e Ministério da Saúde" />
          <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noreferrer" aria-label={t.footer.complaints}><span className="sr-only">{t.footer.complaints}</span></a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>{t.footer.rights}</p>
        <div><a href="#">{t.footer.privacy}</a><a href="#">{t.footer.cookies}</a><a href="#">{t.footer.terms}</a></div>
      </div>
    </footer>
  );
}
