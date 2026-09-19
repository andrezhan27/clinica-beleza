"use client";

import Image from "next/image";
import Link from "next/link";
import { TreatmentsCatalogueLink } from "@/components/navigation/TreatmentsCatalogueLink";
import { useLanguage } from "@/context/LanguageProvider";

export function Footer() {
  const { t, language } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__brand">
          <Image src="/images/brand/logo.webp" width={1774} height={887} sizes="190px" alt="Clínica Beleza" />
          <p>{t.footer.copy}</p>
        </div>
        <div>
          <h3>{t.footer.navigation}</h3>
          <Link href="/#clinica">{t.nav.clinic}</Link>
          <TreatmentsCatalogueLink>{t.nav.treatments}</TreatmentsCatalogueLink>
          <Link href="/#equipa">{t.nav.team}</Link>
          <Link href="/#resultados">{t.nav.results}</Link>
          <Link href="/#contactos">{t.nav.contacts}</Link>
        </div>
        <div>
          <h3>{t.footer.contact}</h3>
          <p>Av. João Crisóstomo 63 A<br />1050-126 Lisboa</p>
          <a href="tel:+351211500899">+351 211 500 899</a>
          <a href="mailto:info@clinicabeleza.pt">info@clinicabeleza.pt</a>
        </div>
        <div>
          <h3>{t.footer.social}</h3>
          <p className="footer__pending">{language === "pt" ? "Em breve" : "Coming soon"}</p>
        </div>
      </div>
      <div className="footer__legal">
        <div className="footer__regulatory">
          <h3>{t.footer.regulatory}</h3>
          <div className="regulatory-logos">
            <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noreferrer" aria-label={t.footer.complaints}>
              <Image src="/images/livro.webp" width={600} height={300} alt={t.footer.complaints} />
            </a>
            <Image src="/images/ers.webp" width={1080} height={1080} alt="Entidade Reguladora da Saúde" />
            <Image src="/images/saude.webp" width={1080} height={1080} alt="Ministério da Saúde" />
          </div>
        </div>
        <div className="footer__bottom">
          <p>{t.footer.rights}</p>
          <div aria-label="Informação legal em preparação"><span>{t.footer.privacy}</span><span>{t.footer.cookies}</span><span>{t.footer.terms}</span></div>
        </div>
      </div>
    </footer>
  );
}
