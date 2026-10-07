import type { MetadataRoute } from "next";
import { catalogueTreatments } from "@/data/catalogue";
import { siteUrl } from "@/lib/site-url";

const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/tratamentos"), changeFrequency: "monthly", priority: 0.9 },
    ...catalogueTreatments.map(({ category, slug }) => ({
      url: absoluteUrl(`/tratamentos/${category}/${slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
