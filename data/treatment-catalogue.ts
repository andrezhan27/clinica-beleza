import type { PriceCategory, PriceItem } from "./pricing";
import type { LocalizedText, TreatmentCategory } from "./treatment-categories";
import type { Treatment } from "./treatments";
import type { Language } from "./translations";

export type CatalogueTreatment = {
  id: string;
  slug: string;
  category: string;
  name: LocalizedText;
  description: LocalizedText;
  variants: PriceItem[];
  treatment?: Treatment;
  searchTerms: string[];
  href: string;
};
export type CatalogueCategory = { id: string; name: LocalizedText; description: LocalizedText; items: CatalogueTreatment[] };
const text = (pt: string, en: string): LocalizedText => ({ pt, en });
const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
const slugify = (value: string) => normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

type GroupRule = { matches: RegExp; slug: string; category?: string; name?: LocalizedText };
// Group only equivalent pricing options. Different Botox indications remain separate.
const groups: Record<string, GroupRule[]> = {
  "medicina-estetica": [
    { matches: /^Consulta de avaliação$/, slug: "consulta-de-avaliacao" },
    { matches: /^Botox · [13] zona/, slug: "toxina-botulinica", name: text("Botox · Toxina botulínica", "Botox · Botulinum toxin") },
    { matches: /^Fios tensores/, slug: "fios-tensores" },
    { matches: /^Preenchimento/, slug: "fillers", name: text("Preenchimentos faciais", "Dermal fillers") },
    { matches: /^Bioestimuladores/, slug: "bioestimuladores" },
    { matches: /^Exossomas/, slug: "exossomas", name: text("Exossomas", "Exosomes") },
    { matches: /^Ultracol/, slug: "ultracol", name: text("Ultracol", "Ultracol") },
    { matches: /^Peeling( com microneedling)?$/, slug: "peeling-quimico" },
    { matches: /^NCTF/, slug: "mesoterapia", name: text("NCTF · Mesoterapia", "NCTF · Mesotherapy") },
    { matches: /^Profhilo$/, slug: "profhilo" },
    { matches: /^Foto-biodinâmica$/, slug: "terapia-fotobiodinamica" },
  ],
  "estetica-facial": [
    { matches: /^HIFU/, slug: "hifu-rosto" },
    { matches: /^Drenagem facial$/, slug: "drenagem-facial" },
    { matches: /^Radiofrequência facial$/, slug: "radiofrequencia-rosto" },
  ],
  "estetica-corporal": [
    { matches: /^HIFU/, slug: "hifu-corpo", name: text("HIFU corporal", "Body HIFU") },
    { matches: /^Drenagem linfática manual$/, slug: "drenagem-linfatica" },
    { matches: /^Radiofrequência corporal$/, slug: "radiofrequencia-corpo" },
    { matches: /^Massagem anticelulite/, slug: "massagens-redutoras-modeladoras-anticeluliticas" },
    { matches: /^Esfoliação corporal$/, slug: "esfoliacao-corporal", category: "servicos" },
    { matches: /^Massagem desportiva/, slug: "massagem-desportiva", category: "servicos" },
    { matches: /^Massagem relaxante completa$/, slug: "massagem-relaxante", category: "servicos" },
  ],
  "medicina-capilar": [
    { matches: /^Consulta de medicina capilar$/, slug: "consulta-avaliacao-medicina-capilar" },
    { matches: /^Mesoterapia/, slug: "mesoterapia-capilar" },
    { matches: /^PRP$/, slug: "prp-capilar", name: text("PRP capilar", "Hair PRP") },
  ],
  "programas-medicos": [{ matches: /^Morpheus/, slug: "morpheus", name: text("Morpheus", "Morpheus") }],
  "nutricao": [{ matches: /consulta.*nutrição|Consultas seguintes de nutrição/, slug: "nutricao-funcional" }],
};

export function createTreatmentCatalogue(prices: PriceCategory[], treatments: Treatment[], categories: TreatmentCategory[]): CatalogueCategory[] {
  const catalogue: CatalogueCategory[] = prices.map((category) => {
    const entries = new Map<string, CatalogueTreatment>();
    for (const price of category.items) {
      const rule = groups[category.id]?.find(({ matches }) => matches.test(price.name.pt));
      const slug = rule?.slug ?? slugify(price.name.pt);
      const routeCategory = rule?.category ?? category.id;
      const id = `${routeCategory}/${slug}`;
      const existing = entries.get(id);
      if (existing) { existing.variants.push(price); continue; }
      const treatment = treatments.find((entry) => entry.slug === slug && entry.category === routeCategory);
      const name = rule?.name ?? treatment?.name ?? price.name;
      // A pack's contents are useful factual information, without inventing clinical claims.
      const description = treatment?.shortDescription ?? price.detail ?? text(
        `Consulte as opções de ${name.pt} e esclareça o protocolo com a nossa equipa.`,
        `Explore the options for ${name.en} and discuss the protocol with our team.`,
      );
      entries.set(id, { id, slug, category: routeCategory, name, description, variants: [price], treatment, searchTerms: treatment?.searchTerms ?? [], href: `/tratamentos/${id}` });
    }
    return { id: category.id, name: category.name, description: category.description, items: [...entries.values()] };
  });
  const covered = new Set(catalogue.flatMap(({ items }) => items.map(({ id }) => id)));
  // Keep existing treatments even when no confirmed price is available.
  for (const treatment of treatments) {
    const id = `${treatment.category}/${treatment.slug}`;
    if (covered.has(id)) continue;
    let category = catalogue.find(({ id }) => id === treatment.category);
    if (!category) {
      const source = categories.find(({ slug }) => slug === treatment.category);
      if (!source) throw new Error(`Missing category for ${id}`);
      category = { id: source.slug, name: source.name, description: source.shortDescription, items: [] };
      catalogue.push(category);
    }
    category.items.push({ id, slug: treatment.slug, category: treatment.category, name: treatment.name, description: treatment.shortDescription, variants: [], treatment, searchTerms: treatment.searchTerms ?? [], href: `/tratamentos/${id}` });
  }
  return catalogue;
}

export function filterTreatmentCatalogue(catalogue: CatalogueCategory[], categoryId: string, query: string) {
  const words = normalize(query).split(/\s+/).filter(Boolean);
  return catalogue.filter(({ id }) => categoryId === "all" || categoryId === id).map((category) => ({
    ...category,
    items: category.items.filter((entry) => {
      const search = normalize([
        ...Object.values(category.name), ...Object.values(entry.name), ...Object.values(entry.description), ...entry.searchTerms,
        ...entry.variants.flatMap((variant) => [...Object.values(variant.name), ...Object.values(variant.detail ?? {})]),
      ].join(" "));
      return words.every((word) => search.includes(word));
    }),
  })).filter(({ items }) => items.length > 0);
}

export function formatCataloguePrice(price: PriceItem, language: Language) {
  if (price.price === null) return price.pending ? (language === "pt" ? "Confirmar valor" : "Confirm price") : (language === "pt" ? "Sob avaliação" : "After assessment");
  const amount = new Intl.NumberFormat(language === "pt" ? "pt-PT" : "en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price.price);
  const unit = price.unit ? { ml: "/ml", session: language === "pt" ? "/sessão" : "/session", pack: language === "pt" ? " · total do pack" : " · full pack" }[price.unit] : "";
  return `${price.from ? (language === "pt" ? "Desde " : "From ") : ""}${amount}${unit}`;
}
