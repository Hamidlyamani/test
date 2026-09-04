import type { MetadataRoute } from "next";
import { business } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: business.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${business.siteUrl}/refection-toiture-ardoise-angers`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${business.siteUrl}/couvreur-avrille`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
