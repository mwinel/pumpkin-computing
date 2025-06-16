import type { MetadataRoute } from "next";

export const baseUrl = "https://pumpkincomputing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/case-studies", "/c/1", "/about-us", "/contact-us"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes];
}
