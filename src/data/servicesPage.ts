export const serviceOverview = [
  {
    title: "Cloud & Platform Engineering",
    desc: "Scalable cloud foundations, landing zones, platform tooling, and resilient architecture patterns.",
    href: "#cloud",
  },
  {
    title: "Automation & DevOps",
    desc: "CI/CD pipelines, infrastructure automation, release controls, and faster delivery with consistency.",
    href: "#devops",
  },
  {
    title: "Observability & Reliability",
    desc: "Monitoring, alerting, telemetry, uptime engineering, and operational visibility across systems.",
    href: "#reliability",
  },
  {
    title: "Cybersecurity Engineering",
    desc: "Security-by-design across infrastructure, applications, access control, and delivery systems.",
    href: "#security",
  },
  {
    title: "Identity & Access Patterns",
    desc: "Least-privilege architecture, access governance, and secure identity design across environments.",
    href: "#identity",
  },
  {
    title: "DevSecOps Enablement",
    desc: "Embed security checks and policy enforcement into engineering pipelines without slowing delivery.",
    href: "#devsecops",
  },
  {
    title: "Software Engineering",
    desc: "Modern web platforms, enterprise applications, APIs, and scalable software systems.",
    href: "#software",
  },
  {
    title: "Enterprise Applications",
    desc: "Workflow platforms, internal systems, process enablement, and enterprise-grade integrations.",
    href: "#enterprise",
  },
  {
    title: "Data Platforms & Analytics",
    desc: "Data architecture, pipelines, governance-ready models, analytics foundations, and reporting systems.",
    href: "#data",
  },
] as const;

export const serviceSections = [
  {
    id: "cloud",
    title: "Cloud & Platform Engineering",
    intro:
      "We design and build cloud foundations that support scale, security, and operational clarity from day one.",
    points: [
      "Cloud architecture and landing zones",
      "Platform engineering foundations",
      "Environment standardization",
      "Scalable infrastructure patterns",
    ],
  },
  {
    id: "devops",
    title: "Automation & DevOps",
    intro:
      "We streamline delivery through automation, release pipelines, repeatable infrastructure, and operational controls.",
    points: [
      "CI/CD pipeline design",
      "Infrastructure as code",
      "Environment automation",
      "Delivery workflow optimization",
    ],
  },
  {
    id: "reliability",
    title: "Observability & Reliability",
    intro:
      "We improve system stability with telemetry, alerting, performance visibility, and reliability engineering practices.",
    points: [
      "Monitoring and alerting strategy",
      "Operational dashboards",
      "Reliability engineering practices",
      "Incident visibility and readiness",
    ],
  },
  {
    id: "security",
    title: "Cybersecurity Engineering",
    intro:
      "We integrate security into architecture, delivery, and operations to reduce exposure across the full stack.",
    points: [
      "Secure system architecture",
      "Infrastructure hardening",
      "Application security practices",
      "Operational risk reduction",
    ],
  },
  {
    id: "identity",
    title: "Identity & Access Patterns",
    intro:
      "We design secure identity and access patterns that support governance, usability, and least-privilege access.",
    points: [
      "Access architecture design",
      "Least-privilege controls",
      "Identity federation patterns",
      "Role and permission strategy",
    ],
  },
  {
    id: "devsecops",
    title: "DevSecOps Enablement",
    intro:
      "We embed security into engineering pipelines so teams maintain delivery speed while improving compliance and control.",
    points: [
      "Pipeline security integration",
      "Policy and control automation",
      "Security testing in delivery flow",
      "Developer-friendly guardrails",
    ],
  },
  {
    id: "software",
    title: "Software Engineering",
    intro:
      "We build modern applications that are maintainable, scalable, and aligned to enterprise operational needs.",
    points: [
      "Web and application engineering",
      "API and backend architecture",
      "Frontend systems and UX delivery",
      "Scalable application design",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Applications",
    intro:
      "We modernize internal systems and business applications that support operations, teams, and organizational growth.",
    points: [
      "Workflow system development",
      "Internal tools and portals",
      "Enterprise process enablement",
      "Business system modernization",
    ],
  },
  {
    id: "data",
    title: "Data Platforms & Analytics",
    intro:
      "We design data ecosystems that support reporting, analytics, governance, and trusted decision-making.",
    points: [
      "Pipeline and ingestion design",
      "Analytics platform foundations",
      "Governance-ready modeling",
      "Reporting and insight delivery",
    ],
  },
] as const;
