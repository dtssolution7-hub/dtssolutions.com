export const caseStudiesOverview = [
  {
    title: "Cloud Foundation for Faster Delivery",
    desc: "Standardized platform baseline with automation, observability, and security guardrails for scalable engineering delivery.",
    href: "#cloud-foundation",
  },
  {
    title: "Security-by-Design Delivery System",
    desc: "Identity-first architecture and secure engineering pipelines designed to reduce operational exposure.",
    href: "#security-by-design",
  },
  {
    title: "Data Platform for Trusted Analytics",
    desc: "Governance-ready data platform with scalable pipelines and reliable analytics delivery across teams.",
    href: "#data-platform",
  },
] as const;

export const caseStudiesSections = [
  {
    id: "cloud-foundation",
    title: "Cloud Foundation for Faster Delivery",
    intro:
      "DTS Solutions designed a cloud platform foundation that standardized environments, improved delivery consistency, and reduced operational complexity.",
    outcome: "Improved engineering consistency, stronger operational clarity, and faster project onboarding across teams.",
    points: [
      "Platform baseline and cloud architecture patterns",
      "Environment standardization across delivery workflows",
      "Automation-led provisioning and controls",
      "Built-in observability and operational readiness",
    ],
  },
  {
    id: "security-by-design",
    title: "Security-by-Design Delivery System",
    intro:
      "We implemented secure architecture patterns and identity-focused controls that embedded security into day-to-day engineering workflows.",
    outcome: "Reduced risk exposure while enabling teams to maintain delivery speed with stronger governance and control.",
    points: [
      "Identity-first system design",
      "Least-privilege access strategy",
      "Pipeline-integrated security controls",
      "Operational guardrails for secure delivery",
    ],
  },
  {
    id: "data-platform",
    title: "Data Platform for Trusted Analytics",
    intro:
      "We engineered a scalable data foundation with governance-aware modeling and reliable analytics delivery for decision-ready reporting.",
    outcome: "Improved data trust, stronger reporting consistency, and a better long-term analytics foundation.",
    points: [
      "Pipeline and ingestion architecture",
      "Governance-ready data models",
      "Analytics platform structure",
      "Reliable reporting and insight workflows",
    ],
  },
] as const;
