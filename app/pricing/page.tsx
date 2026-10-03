import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";

export const metadata: Metadata = {
  title: "Preços dos tratamentos",
  description: "Consulte a tabela de preços 2026 da Clínica Beleza: medicina estética, estética facial e corporal, medicina capilar, packs, cirurgia plástica e nutrição. IVA incluído.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Preços dos tratamentos | Clínica Beleza", description: "Tratamentos e preços organizados por área. Consulte os valores e encontre o cuidado certo para si.", url: "/pricing", type: "website" },
};

export default function PricingPage() {
  return <><Navbar /><div className="route-scroll-start" aria-hidden="true" /><PricingPageContent /><Footer /></>;
}
