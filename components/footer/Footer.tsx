"use client";

import Image from "next/image";
import Link from "next/link";
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
          <Link href="/#clinica">{t.nav.clinic}</Link>
          <Link href="/tratamentos">{t.nav.treatments}</Link>
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
          <div className="socials">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="LinkedIn">IN</a>
          </div>
        </div>
      </div>
      <div className="footer__legal">
        <div className="footer__regulatory">
          <h3>{t.footer.regulatory}</h3>
          <div className="regulatory-logos">
            <a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noreferrer" aria-label={t.footer.complaints}>
              <Image src="/images/livro.png" width={500} height={207} alt={t.footer.complaints} />
            </a>
            <Image src="/images/ers.png" width={1080} height={1080} alt="Entidade Reguladora da Saúde" />
            <Image src="/images/saude.png" width={359} height={557} alt="Ministério da Saúde" />
          </div>
        </div>
        <div className="footer__bottom">
          <p>{t.footer.rights}</p>
          <div><a href="#">{t.footer.privacy}</a><a href="#">{t.footer.cookies}</a><a href="#">{t.footer.terms}</a></div>
        </div>
      </div>
    </footer>
  );
}
