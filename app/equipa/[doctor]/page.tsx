import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { DoctorProfile } from "@/components/team/DoctorProfile";
import { getTeamMember, teamMembers } from "@/data/team";

type Props = { params: Promise<{ doctor: string }> };

export function generateStaticParams() {
  return teamMembers.map(({ slug }) => ({ doctor: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const member = getTeamMember((await params).doctor);
  if (!member) return {};
  const title = member.name;
  const description = member.biography?.introduction.pt ?? `Conheça ${member.name}, membro da equipa da Clínica Beleza em Lisboa.`;
  const url = `/equipa/${member.slug}`;
  const images = [{ url: member.image, alt: member.name }];
  return {
    title, description, alternates: { canonical: url },
    openGraph: { title, description, url, type: "profile", images },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

export default async function DoctorPage({ params }: Props) {
  const member = getTeamMember((await params).doctor);
  if (!member) notFound();
  return <><Navbar /><DoctorProfile member={member} /><Footer /></>;
}
