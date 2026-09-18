import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { TreatmentsLanding } from "@/components/treatments/TreatmentsLanding";
import { treatmentCategories } from "@/data/treatment-categories";
import { treatments } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Tratamentos de Medicina Estética em Lisboa",
  description: "Explore os tratamentos de medicina estética, estética facial e corporal, medicina capilar, nutrição e bem-estar da Clínica Beleza, em Saldanha.",
  alternates: { canonical: "/tratamentos" },
  openGraph: { title: "Tratamentos personalizados | Clínica Beleza", description: "Descubra as áreas de tratamento da Clínica Beleza em Lisboa.", url: "/tratamentos", type: "website" },
};

export default function TreatmentsPage() {
  return <><Navbar /><TreatmentsLanding categories={treatmentCategories} treatments={treatments} /><Footer /></>;
}
