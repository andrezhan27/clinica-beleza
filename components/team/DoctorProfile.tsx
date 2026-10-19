"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import type { TeamMember } from "@/data/team";
import { createBookingWhatsAppUrl } from "@/lib/booking";
import styles from "./DoctorProfile.module.css";

export function DoctorProfile({ member }: { member: TeamMember }) {
  const { language } = useLanguage();
  const pt = language === "pt";
  const bio = member.biography;
  const bookingUrl = createBookingWhatsAppUrl(bio?.booking.message?.[language] ?? (pt
    ? `Olá! Gostaria de marcar uma consulta de nutrição com a ${member.name} na Clínica Beleza. Podem ajudar-me com a disponibilidade?`
    : `Hello! I would like to book a nutrition consultation with ${member.name} at Clínica Beleza. Could you help me with availability?`));

  return <main className={styles.page}>
    <Link href="/#equipa" className={styles.back}><ArrowLeft size={16} aria-hidden="true" />{pt ? "Voltar à equipa" : "Back to the team"}</Link>
    <header className={styles.hero}>
      <div className={styles.portrait}><Image
        src={member.image} alt={member.name} fill preload
        sizes={`(max-width: 640px) ${90 * (member.portraitCrop?.zoom ?? 1)}vw, ${360 * (member.portraitCrop?.zoom ?? 1)}px`}
        style={member.portraitCrop ? {
          scale: member.portraitCrop.zoom,
          transformOrigin: member.portraitCrop.profileOrigin ?? member.portraitCrop.origin,
          objectPosition: member.portraitCrop.profilePosition ?? member.portraitCrop.position,
        } : undefined}
      /></div>
      <div className={styles.heading}>
        <p className="eyebrow">{pt ? "A nossa equipa" : "Our team"}</p>
        <h1>{member.name}</h1>
        {bio && <><p className={styles.role}>{bio.role[language]}</p><p className={styles.specialty}>{bio.specialty[language]}</p><p className={styles.introduction}>{bio.introduction[language]}</p></>}
        {!bio && <p className={styles.introduction}>{pt ? "Biografia em breve." : "Biography coming soon."}</p>}
      </div>
    </header>
    {bio && <div className={styles.biography}>
      {bio.sections.map((section, index) => <section key={index} className={styles.section} aria-labelledby={`profile-section-${index}`}>
        <h2 id={`profile-section-${index}`}>{section.title[language]}</h2>
        {section.subtitle && <h3>{section.subtitle[language]}</h3>}
        {section.paragraphs?.map((paragraph, i) => <p key={i}>{paragraph[language]}</p>)}
        {section.topics?.map((topic, i) => <div className={styles.topic} key={i}><h3>{topic.title[language]}</h3><p>{topic.description[language]}</p></div>)}
      </section>)}
      <section className={styles.booking} aria-labelledby="profile-booking">
        <p className="eyebrow">{bio.booking.title[language]}</p>
        <h2 id="profile-booking">{bio.booking.subtitle[language]}</h2>
        <p>{bio.booking.description[language]}</p>
        <a href={bookingUrl} className="button button--primary" target="_blank" rel="noreferrer"><MessageCircle size={18} aria-hidden="true" />{bio.booking.label?.[language] ?? (pt ? "Marcar consulta" : "Book consultation")}<ArrowUpRight size={16} aria-hidden="true" /></a>
      </section>
    </div>}
  </main>;
}
