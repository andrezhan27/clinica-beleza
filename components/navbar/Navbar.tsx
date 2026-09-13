"use client";

import Image from "next/image";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 24);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const links = [["#inicio", t.nav.home], ["#clinica", t.nav.clinic], ["#tratamentos", t.nav.treatments], ["#resultados", t.nav.results], ["#equipa", t.nav.team], ["#contactos", t.nav.contacts]];
  return (
    <header className={`navbar ${compact ? "navbar--compact" : ""}`}>
      <a href="#inicio" className="brand" aria-label="Clínica Beleza — início"><Image src="/images/logo.png" width={1774} height={887} alt="Clínica Beleza" priority sizes="154px" /></a>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="nav-actions">
        <a className="phone-link" href="tel:+351211500899" aria-label="Ligar para a Clínica Beleza"><Phone size={15} /><span>+351 211 500 899</span></a>
        <div className="language" aria-label="Language selector">
          <button className={language === "pt" ? "active" : ""} onClick={() => setLanguage("pt")} aria-pressed={language === "pt"}>PT</button><span>/</span><button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
        <MagneticButton><a href="#contactos" className="nav-cta">{t.nav.booking}</a></MagneticButton>
        <button className="menu-toggle" onClick={() => setOpen(true)} aria-label={t.nav.menu} aria-expanded={open}><Menu size={23} /></button>
      </div>
      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu__top"><Image src="/images/logo.png" width={1774} height={887} sizes="150px" alt="Clínica Beleza" /><button onClick={() => setOpen(false)} aria-label={t.nav.close}><X size={25} /></button></div>
        <nav aria-label="Navegação móvel">{links.map(([href, label], index) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}</a>)}</nav>
        <a className="mobile-menu__cta" href="#contactos" onClick={() => setOpen(false)}>{t.hero.primary}</a>
        <div className="mobile-menu__foot"><a href="tel:+351211500899">+351 211 500 899</a><p>Saldanha · Lisboa</p></div>
      </div>
    </header>
  );
}
