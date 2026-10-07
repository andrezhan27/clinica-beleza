"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useLanguage } from "@/context/LanguageProvider";
import { TreatmentsCatalogueLink } from "@/components/navigation/TreatmentsCatalogueLink";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { createConsultationBookingUrl } from "@/lib/booking";
import { getCategory } from "@/data/treatment-categories";
import { getCatalogueTreatment } from "@/data/catalogue";

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const { t, language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const segments = pathname.split("/");
  const interest = segments[1] === "tratamentos" ? (segments[3] ? getCatalogueTreatment(segments[2], segments[3])?.name[language] : getCategory(segments[2])?.name[language]) : undefined;
  const bookingUrl = createConsultationBookingUrl(language, interest);
  useEffect(() => {
    const update = () => setCompact(window.scrollY > 24);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const toggle = menuToggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => menuRef.current?.querySelector<HTMLButtonElement>("button")?.focus());
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        const controls = Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href], button, summary') ?? []).filter((element) => element.getClientRects().length > 0);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (!menuRef.current?.contains(document.activeElement)) { event.preventDefault(); first?.focus(); }
        else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", closeOnEscape);
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);
  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") return;
    event.preventDefault();
    window.history.replaceState(window.history.state, "", "/");
    window.scrollTo({ top: 0, behavior: "auto" });
    setCompact(false);
    setOpen(false);
  };
  const links = [["/#resultados", t.nav.results], ["/#equipa", t.nav.team], ["/#contactos", t.nav.contacts]];
  return (
    <>
    <header className={`navbar ${compact ? "navbar--compact" : ""} ${overlay && !compact ? "navbar--overlay" : ""}`}>
      <Link href="/" onClick={handleLogoClick} className="brand" aria-label="Clínica Beleza — início"><Image src="/images/brand/logo.webp" width={1774} height={887} alt="Clínica Beleza" priority sizes="142px" /></Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        <TreatmentsCatalogueLink aria-current={pathname.startsWith("/tratamentos") ? "page" : undefined}>{t.nav.treatments}</TreatmentsCatalogueLink>
        {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="nav-actions">
        <a className="phone-link" href="tel:+351211500899" aria-label="Ligar para a Clínica Beleza"><Phone size={15} /><span>+351 211 500 899</span></a>
        <div className="language" aria-label="Language selector">
          <button className={language === "pt" ? "active" : ""} onClick={() => setLanguage("pt")} aria-pressed={language === "pt"}>PT</button><span>/</span><button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button>
        </div>
        <MagneticButton><a href={bookingUrl} target="_blank" rel="noreferrer" className="nav-cta">{t.hero.primary}</a></MagneticButton>
        <button ref={menuToggleRef} className="menu-toggle" onClick={() => setOpen(true)} aria-label={t.nav.menu} aria-expanded={open} aria-controls="mobile-navigation"><Menu size={23} /></button>
      </div>
      <div ref={menuRef} id="mobile-navigation" className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} role="dialog" aria-modal={open ? true : undefined} aria-label={language === "pt" ? "Navegação" : "Navigation"} aria-hidden={!open} inert={!open} onTransitionEnd={(event) => { if (open && event.target === event.currentTarget && !event.currentTarget.contains(document.activeElement)) event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus(); }}>
        <div className="mobile-menu__top"><Image className="mobile-menu__logo" src="/images/brand/logo.webp" width={1774} height={887} sizes="132px" alt="Clínica Beleza" /><button onClick={() => setOpen(false)} aria-label={t.nav.close}><X size={25} /></button></div>
        <nav aria-label="Navegação móvel"><Link href="/#inicio" scroll onClick={() => setOpen(false)}><span>01</span>{t.nav.home}</Link><TreatmentsCatalogueLink aria-current={pathname.startsWith("/tratamentos") ? "page" : undefined} onClick={() => setOpen(false)}><span>02</span>{t.nav.treatments}</TreatmentsCatalogueLink>{links.map(([href, label], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 3}</span>{label}</Link>)}</nav>
        <a className="mobile-menu__cta" href={bookingUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>{t.hero.primary}</a>
        <div className="mobile-menu__foot"><a href="tel:+351211500899">+351 211 500 899</a><p>Saldanha · Lisboa</p></div>
      </div>
    </header>
    <a className="mobile-sticky-cta" href={bookingUrl} target="_blank" rel="noreferrer" aria-hidden={open} inert={open}><MessageCircle size={17} />{t.hero.primary}</a>
    </>
  );
}
