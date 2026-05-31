export const topNav = [
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const servicesMegaMenu = [
  {
    title: "Platform & Cloud",
    description: "Cloud foundations, reliability patterns, and scalable platform delivery.",
    items: [
      { label: "Cloud & Platform Engineering", href: "/services#cloud" },
      { label: "Automation & DevOps", href: "/services#devops" },
      { label: "Observability & Reliability", href: "/services#reliability" },
    ],
  },
  {
    title: "Security Engineering",
    description: "Security-by-design across identity, pipelines, and operations.",
    items: [
      { label: "Cybersecurity Engineering", href: "/services#security" },
      { label: "Identity & Access Patterns", href: "/services#identity" },
      { label: "DevSecOps Enablement", href: "/services#devsecops" },
    ],
  },
  {
    title: "Applications & Data",
    description: "Modern software, integrations, and data platforms for decision-ready insight.",
    items: [
      { label: "Software Engineering", href: "/services#software" },
      { label: "Enterprise Applications", href: "/services#enterprise" },
      { label: "Data Platforms & Analytics", href: "/services#data" },
    ],
  },
] as const;
