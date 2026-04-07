import { MetadataRoute } from "next";
import services from "@/data/services.json";
import posts from "@/data/posts.json";

const COMBO_CITIES = ["san-luis-obispo", "paso-robles", "atascadero", "morro-bay", "templeton"];
const COMBO_SERVICES = ["garage-floor-coatings", "patio-coatings", "epoxy-flooring"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mgpcoatings.solutions";
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about-us/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/results/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/financing/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/service-areas/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  // All 7 service pages (auto from data)
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${baseUrl}/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // 15 city × service combo pages
  const comboPages: MetadataRoute.Sitemap = COMBO_SERVICES.flatMap((service) =>
    COMBO_CITIES.map((city) => ({
      url: `${baseUrl}/${service}/${city}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }))
  );

  // 5 blog posts (auto from data)
  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}/`,
    lastModified: new Date(p.datePublished),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...corePages, ...servicePages, ...comboPages, ...blogPages];
}
