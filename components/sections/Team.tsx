"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
export function Team() {
  const { t } = useLanguage();
  const teamImages = [images.doctor1, images.doctor2, images.doctor3, images.doctor4, images.doctor5, images.doctor6];
  return <section id="equipa" className="section team"><Reveal><SectionHeading eyebrow={t.team.eyebrow} title={t.team.title} intro={t.team.intro} /></Reveal><Carousel opts={{ align: "start" }} className="team-carousel"><CarouselContent className="team-track">{t.team.members.map((member, index) => <CarouselItem className="team-slide" key={member.name}><Reveal className="team-card" delay={index * .04}><div className="team-card__image"><Image src={teamImages[index]} fill sizes="(max-width: 560px) 82vw, (max-width: 1000px) 44vw, 300px" alt={member.name} /></div><div className="team-card__body"><div className="team-card__content"><p className="team-card__role">{member.role}</p><h3>{member.name}</h3><p className="team-card__specialty">{member.specialty}</p><small>{member.credential}</small></div><a href="#contactos" aria-label={`${t.team.profile}: ${member.name}`}><ArrowUpRight size={20} /></a></div></Reveal></CarouselItem>)}</CarouselContent><div className="team-carousel__controls"><CarouselPrevious className="team-carousel__button" /><CarouselNext className="team-carousel__button" /></div></Carousel></section>;
}
