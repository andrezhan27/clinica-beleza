"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Team() {
  const { t } = useLanguage(); const teamImages = [images.doctor1, images.doctor2];
  return <section id="equipa" className="section team"><Reveal><SectionHeading eyebrow={t.team.eyebrow} title={t.team.title} intro={t.team.intro} /></Reveal><div className="team-grid">{t.team.members.map((member, index) => <Reveal className="team-card" key={member.name} delay={index * .08}><div className="team-card__image"><Image src={teamImages[index]} fill sizes="(max-width: 560px) 100vw, (max-width: 1000px) 44vw, 300px" alt={member.name} /></div><div className="team-card__body"><div><p>{member.role}</p><h3>{member.name}</h3><small>{member.credential}</small></div><a href="#contactos" aria-label={`${t.team.profile}: ${member.name}`}><ArrowUpRight size={20} /></a></div></Reveal>)}</div></section>;
}
