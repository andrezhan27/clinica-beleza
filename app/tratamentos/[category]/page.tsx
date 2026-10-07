import { notFound, permanentRedirect } from "next/navigation";
import { treatmentCatalogue } from "@/data/catalogue";

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() { return treatmentCatalogue.map(({ id }) => ({ category: id })); }

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!treatmentCatalogue.some(({ id }) => id === category)) notFound();
  permanentRedirect(`/tratamentos?area=${encodeURIComponent(category)}`);
}
