import type { MetadataRoute } from "next";

export const baseUrl = "https://pumpkincomputing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    "",
    "/about-us",
    "/case-studies",
    "/contact-us",
    "/c/1",
    "/c/2",
    "/c/3",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : route.startsWith("/c/") ? 0.7 : 0.8,
  }));

  return [...routes];
}
