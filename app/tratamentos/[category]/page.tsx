import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { CategoryPageContent } from "@/components/treatments/CategoryPageContent";
import { getCategory, treatmentCategories } from "@/data/treatment-categories";
import { getTreatmentsByCategory } from "@/data/treatments";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() { return treatmentCategories.map(({ slug }) => ({ category: slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const title = `${category.name.pt} em Lisboa`;
  const description = `${category.shortDescription.pt} Conheça as opções disponíveis na Clínica Beleza, em Saldanha, Lisboa.`;
  const url = `/tratamentos/${category.slug}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url, type: "website", images: [{ url: category.coverImage }] } };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const otherCategories = treatmentCategories.filter(({ slug: otherSlug }) => otherSlug !== slug).slice(0, 3);
  return <><Navbar /><CategoryPageContent category={category} treatments={getTreatmentsByCategory(slug)} otherCategories={otherCategories} /><Footer /></>;
}
