import type { MetadataRoute } from "next";

const baseUrl = "https://dtssolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/support-plans",
    "/process",
    "/industries",
    "/case-studies",
    "/resources",
    "/careers",
    "/faq",
    "/service-areas",
    "/contact",
    "/privacy",
    "/terms",
    "/cookies",
    "/services/managed-it-support",
    "/services/microsoft-365-cloud",
    "/services/cybersecurity-protection",
    "/services/network-infrastructure",
    "/services/backup-disaster-recovery",
    "/services/automation-reporting",
    "/support-plans/starter-support",
    "/support-plans/business-care",
    "/support-plans/secure-operations",
    "/careers/it-support-specialist",
    "/careers/microsoft-365-engineer",
    "/careers/cybersecurity-analyst",
    "/careers/network-infrastructure-technician",
    "/careers/automation-reporting-specialist",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}