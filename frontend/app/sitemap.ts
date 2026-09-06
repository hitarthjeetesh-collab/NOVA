import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://novacentral.pages.dev",
      lastModified: new Date(),
    },
    {
      url: "https://novacentral.pages.dev/engineering",
      lastModified: new Date(),
    },
  ];
}