"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { teamMembers } from "@/data/team";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
export function Team() {
  const { t } = useLanguage();
  return <section id="equipa" className="section team">
    <Reveal><SectionHeading title={t.team.title} intro={t.team.intro} /></Reveal>
    <div className="team-grid">
      {teamMembers.map((member, index) => <Reveal className="team-card" delay={index * .04} key={member.slug}>
        <Link className="team-card__link" href={`/equipa/${member.slug}`} aria-label={`${t.team.profile}: ${member.name}`}>
          <div className="team-card__image"><Image
            src={member.image} fill alt={member.name}
            sizes={`(max-width: 820px) ${45 * (member.portraitCrop?.zoom ?? 1)}vw, (max-width: 1600px) ${23 * (member.portraitCrop?.zoom ?? 1)}vw, ${360 * (member.portraitCrop?.zoom ?? 1)}px`}
            style={member.portraitCrop ? { scale: member.portraitCrop.zoom, transformOrigin: member.portraitCrop.origin, objectPosition: member.portraitCrop.position } : undefined}
          /></div>
          <div className="team-card__body"><div className="team-card__content"><h3>{member.name}</h3></div><span className="team-card__arrow" aria-hidden="true"><ArrowUpRight size={20} /></span></div>
        </Link>
      </Reveal>)}
    </div>
  </section>;
}
