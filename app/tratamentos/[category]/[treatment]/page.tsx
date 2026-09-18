import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { TreatmentPageContent } from "@/components/treatments/TreatmentPageContent";
import { getCategory } from "@/data/treatment-categories";
import { getTreatment, getTreatmentBySlug, treatments } from "@/data/treatments";

type Props = { params: Promise<{ category: string; treatment: string }> };

export function generateStaticParams() { return treatments.map(({ category, slug }) => ({ category, treatment: slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, treatment: slug } = await params;
  const treatment = getTreatment(category, slug);
  if (!treatment) return {};
  const title = `${treatment.name.pt} em Lisboa`;
  const description = `${treatment.shortDescription.pt} Avaliação personalizada e acompanhamento especializado em Saldanha, Lisboa.`;
  const url = `/tratamentos/${category}/${slug}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "article", images: [{ url: treatment.coverImage }] } };
}

export default async function TreatmentPage({ params }: Props) {
  const { category: categorySlug, treatment: treatmentSlug } = await params;
  const treatment = getTreatment(categorySlug, treatmentSlug);
  const category = getCategory(categorySlug);
  if (!treatment || !category) notFound();
  const related = (treatment.relatedTreatments ?? []).map(getTreatmentBySlug).filter((item): item is NonNullable<typeof item> => Boolean(item)).slice(0, 3);
  return <><Navbar /><TreatmentPageContent treatment={treatment} category={category} related={related} /><Footer /></>;
}
