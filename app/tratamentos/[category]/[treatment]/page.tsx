import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { TreatmentPageContent } from "@/components/treatments/TreatmentPageContent";
import { catalogueTreatments, getCatalogueTreatment, treatmentCatalogue } from "@/data/catalogue";

type Props = { params: Promise<{ category: string; treatment: string }>; searchParams: Promise<{ area?: string | string[]; q?: string | string[] }> };

export function generateStaticParams() { return catalogueTreatments.map(({ category, slug }) => ({ category, treatment: slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, treatment: slug } = await params;
  const entry = getCatalogueTreatment(category, slug);
  if (!entry) return {};
  const title = `${entry.name.pt} em Lisboa`;
  const description = `${entry.description.pt} Consulte as opções e preços e marque uma avaliação na Clínica Beleza.`;
  return { title, description, alternates: { canonical: entry.href }, openGraph: { title, description, url: entry.href, type: "article" } };
}

export default async function TreatmentPage({ params, searchParams }: Props) {
  const { category, treatment: slug } = await params;
  const entry = getCatalogueTreatment(category, slug);
  const catalogueCategory = treatmentCatalogue.find(({ items }) => items.some((item) => item.id === entry?.id));
  if (!entry || !catalogueCategory) notFound();
  const search = await searchParams;
  const area = Array.isArray(search.area) ? search.area[0] : search.area;
  const q = Array.isArray(search.q) ? search.q[0] : search.q;
  const returnParams = new URLSearchParams();
  if (area && treatmentCatalogue.some(({ id }) => id === area)) returnParams.set("area", area);
  if (q) returnParams.set("q", q);
  const catalogueHref = `/tratamentos${returnParams.size ? `?${returnParams}` : ""}`;
  return <><Navbar /><TreatmentPageContent entry={entry} categoryName={catalogueCategory.name} catalogueHref={catalogueHref} /><Footer /></>;
}
