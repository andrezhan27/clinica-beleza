import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { treatmentCatalogue } from "@/data/catalogue";

export const metadata: Metadata = {
  title: "Tratamentos e preços em Lisboa",
  description: "Explore os tratamentos e preços da Clínica Beleza em Lisboa. Compare opções por área, conheça cada tratamento e marque uma avaliação pelo WhatsApp.",
  alternates: { canonical: "/tratamentos" },
  openGraph: { title: "Tratamentos e preços | Clínica Beleza", description: "Tratamentos, opções e preços organizados por área. Saiba mais e peça orientação à equipa.", url: "/tratamentos", type: "website" },
};

export default async function TreatmentsPage({ searchParams }: { searchParams: Promise<{ area?: string | string[]; q?: string | string[] }> }) {
  const params = await searchParams;
  const area = Array.isArray(params.area) ? params.area[0] : params.area;
  const q = Array.isArray(params.q) ? params.q[0] : params.q;
  const initialCategory = treatmentCatalogue.some(({ id }) => id === area) ? area : "all";
  return <><Navbar /><div className="route-scroll-start" aria-hidden="true" /><PricingPageContent key={`${initialCategory}:${q ?? ""}`} initialCategory={initialCategory} initialQuery={q ?? ""} /><Footer /></>;
}
