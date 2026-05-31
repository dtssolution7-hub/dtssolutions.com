export const runtime = "edge";

import type { MetadataRoute } from "next";

const baseUrl = "https://dtssolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/case-studies",
    "/resources",
    "/careers",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/services/cloud-infrastructure",
    "/services/cybersecurity",
    "/services/software-development",
    "/services/data-ai",
    "/services/devops-automation",
    "/services/enterprise-applications",
    "/services/digital-experience",
    "/services/it-operations-support",
    "/industries/healthcare",
    "/industries/finance-banking",
    "/industries/technology",
    "/case-studies/cloud-foundation",
    "/case-studies/security-by-design",
    "/case-studies/data-platform",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}