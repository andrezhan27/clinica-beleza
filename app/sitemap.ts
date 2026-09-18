import type { MetadataRoute } from "next";
import { treatmentCategories } from "@/data/treatment-categories";
import { treatments } from "@/data/treatments";
import { siteUrl } from "@/lib/site-url";

const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/tratamentos"), changeFrequency: "monthly", priority: 0.9 },
    ...treatmentCategories.map(({ slug }) => ({
      url: absoluteUrl(`/tratamentos/${slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...treatments.map(({ category, slug }) => ({
      url: absoluteUrl(`/tratamentos/${category}/${slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
