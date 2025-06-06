import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://pumpkincomputing.com",
      changeFrequency: "monthly",
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: "https://pumpkincomputing.com/case-studies",
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: "https://pumpkincomputing.com/contact-us",
      changeFrequency: "weekly",
      priority: 0.5,
      lastModified: new Date(),
    },
  ];
}
