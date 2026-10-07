import { priceCategories } from "./pricing";
import { treatmentCategories } from "./treatment-categories";
import { treatments } from "./treatments";
import { createTreatmentCatalogue } from "./treatment-catalogue";
import { treatmentGuideAreas, treatmentGuideOffers } from "./treatment-guide";

export const treatmentCatalogue = createTreatmentCatalogue(priceCategories, treatments, treatmentCategories).map((category) => ({
  ...category,
  items: category.items.map((entry) => ({
    ...entry,
    searchTerms: [...entry.searchTerms, ...treatmentGuideAreas.flatMap((area) => area.goals.filter((goal) =>
      [...goal.treatmentIds, ...goal.programmeIds].some((id) => {
        const ref = treatmentGuideOffers[id]?.priceRef;
        return ref?.categoryId === category.id && entry.variants.some((variant) => variant.name.pt === ref.name && (ref.detail === undefined || variant.detail?.pt === ref.detail));
      }),
    ).flatMap((goal) => [...Object.values(goal.name), ...Object.values(goal.description)]))],
  })),
}));
export const catalogueTreatments = treatmentCatalogue.flatMap(({ items }) => items);
export const getCatalogueTreatment = (category: string, slug: string) => catalogueTreatments.find((entry) => entry.category === category && entry.slug === slug);
