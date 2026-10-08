import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { treatmentCatalogue } from "@/data/catalogue";

export const metadata: Metadata = {
  title: "Tratamentos em Lisboa",
  description: "Explore os tratamentos da Clínica Beleza em Lisboa. Conheça as opções por área e consulte os detalhes e preços na página de cada tratamento.",
  alternates: { canonical: "/tratamentos" },
  openGraph: { title: "Tratamentos | Clínica Beleza", description: "Tratamentos organizados por área. Consulte os detalhes e preços de cada opção e peça orientação à equipa.", url: "/tratamentos", type: "website" },
};

export default async function TreatmentsPage({ searchParams }: { searchParams: Promise<{ area?: string | string[]; q?: string | string[] }> }) {
  const params = await searchParams;
  const area = Array.isArray(params.area) ? params.area[0] : params.area;
  const q = Array.isArray(params.q) ? params.q[0] : params.q;
  const initialCategory = treatmentCatalogue.some(({ id }) => id === area) ? area : "all";
  return <><Navbar /><div className="route-scroll-start" aria-hidden="true" /><PricingPageContent key={`${initialCategory}:${q ?? ""}`} initialCategory={initialCategory} initialQuery={q ?? ""} /><Footer /></>;
}
