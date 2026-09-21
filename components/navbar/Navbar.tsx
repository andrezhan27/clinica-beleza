"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { TreatmentsCatalogueLink } from "@/components/navigation/TreatmentsCatalogueLink";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MobileTreatmentNavigation, TreatmentMegaMenu } from "@/components/treatments/TreatmentMegaMenu";
import { BOOKING_WHATSAPP_URL } from "@/lib/booking";

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 24);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") return;
    event.preventDefault();
    window.history.replaceState(window.history.state, "", "/");
    window.scrollTo({ top: 0, behavior: "auto" });
    setCompact(false);
    setTreatmentsOpen(false);
    setOpen(false);
  };
  const links = [["/#clinica", t.nav.clinic], ["/#resultados", t.nav.results], ["/#equipa", t.nav.team], ["/#contactos", t.nav.contacts]];
  return (
    <>
    <header className={`navbar ${compact ? "navbar--compact" : ""} ${overlay && !compact ? "navbar--overlay" : ""} ${treatmentsOpen ? "navbar--menu-open" : ""}`}>
      <Link href="/" onClick={handleLogoClick} className="brand" aria-label="Clínica Beleza — início"><Image src="/images/brand/logo.webp" width={1774} height={887} alt="Clínica Beleza" priority sizes="142px" /></Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        <Link href="/#clinica">{t.nav.clinic}</Link>
        <div className="desktop-nav__treatments" onMouseEnter={() => setTreatmentsOpen(true)} onMouseLeave={() => setTreatmentsOpen(false)} onFocus={() => setTreatmentsOpen(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setTreatmentsOpen(false); }}><TreatmentsCatalogueLink>{t.nav.treatments}</TreatmentsCatalogueLink><TreatmentMegaMenu /></div>
        {links.slice(1).map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="nav-actions">
        <a className="phone-link" href="tel:+351211500899" aria-label="Ligar para a Clínica Beleza"><Phone size={15} /><span>+351 211 500 899</span></a>
        <div className="language" aria-label="Language selector">
          <button className={language === "pt" ? "active" : ""} onClick={() => setLanguage("pt")} aria-pressed={language === "pt"}>PT</button><span>/</span><button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
        <MagneticButton><a href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer" className="nav-cta">{language === "pt" ? "Marcar avaliação" : "Book assessment"}</a></MagneticButton>
        <button className="menu-toggle" onClick={() => setOpen(true)} aria-label={t.nav.menu} aria-expanded={open} aria-controls="mobile-navigation"><Menu size={23} /></button>
      </div>
      <div id="mobile-navigation" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu__top"><Image className="mobile-menu__logo" src="/images/brand/logo.webp" width={1774} height={887} sizes="132px" alt="Clínica Beleza" /><button onClick={() => setOpen(false)} aria-label={t.nav.close}><X size={25} /></button></div>
        <nav aria-label="Navegação móvel"><Link href="/#inicio" scroll onClick={() => setOpen(false)}><span>01</span>{t.nav.home}</Link><Link href="/#clinica" onClick={() => setOpen(false)}><span>02</span>{t.nav.clinic}</Link><MobileTreatmentNavigation onNavigate={() => setOpen(false)} />{links.slice(1).map(([href, label], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 4}</span>{label}</Link>)}</nav>
        <a className="mobile-menu__cta" href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>{t.hero.primary}</a>
        <div className="mobile-menu__foot"><a href="tel:+351211500899">+351 211 500 899</a><p>Saldanha · Lisboa</p></div>
      </div>
    </header>
    <a className="mobile-sticky-cta" href={BOOKING_WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={17} />{t.finalCta.whatsapp}</a>
    </>
  );
}
