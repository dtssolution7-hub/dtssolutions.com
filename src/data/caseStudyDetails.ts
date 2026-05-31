export const caseStudyDetails = [
  {
    slug: "cloud-foundation",
    title: "Cloud Foundation for Faster Delivery",
    summary: "A scalable platform baseline with automation, observability, and secure delivery controls.",
    client: "Mid-sized enterprise platform team",
    industry: { label: "Technology", href: "/industries/technology" },
    challenge:
      "The client faced inconsistent environments, slow onboarding of engineering teams, fragmented release processes, and limited operational visibility across cloud workloads.",
    solution:
      "DTS Solutions designed a standardized cloud foundation with landing zones, automated provisioning, observability alignment, and secure-by-default engineering controls.",
    outcomes: [
      "Improved onboarding consistency for delivery teams",
      "Reduced platform drift across environments",
      "Better observability and operational readiness",
      "Faster delivery workflows with stronger control"
    ],
    technologies: [
      "Cloud platform architecture",
      "Infrastructure as code",
      "CI/CD enablement",
      "Monitoring and observability"
    ],
    relatedServices: [
      { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure" },
      { label: "DevOps & Automation", href: "/services/devops-automation" }
    ]
  },
  {
    slug: "security-by-design",
    title: "Security-by-Design Delivery System",
    summary: "Identity-first access patterns and integrated delivery controls for stronger operational security.",
    client: "Regulated digital operations environment",
    industry: { label: "Finance & Banking", href: "/industries/finance-banking" },
    challenge:
      "The organization needed stronger security controls without slowing software delivery. Access controls, audit readiness, and secure engineering practices were inconsistent across teams.",
    solution:
      "DTS Solutions introduced identity-focused architecture, least-privilege access models, secure delivery checkpoints, and governance-aware control patterns embedded in engineering workflows.",
    outcomes: [
      "Reduced exposure through stronger access control",
      "Improved governance and audit readiness",
      "Embedded security into delivery lifecycle",
      "Maintained engineering velocity with better guardrails"
    ],
    technologies: [
      "Identity and access architecture",
      "Pipeline security controls",
      "Governance enforcement",
      "Operational monitoring"
    ],
    relatedServices: [
      { label: "Cybersecurity", href: "/services/cybersecurity" },
      { label: "DevOps & Automation", href: "/services/devops-automation" }
    ]
  },
  {
    slug: "data-platform",
    title: "Trusted Data Platform for Analytics",
    summary: "A governance-ready data foundation that improved reporting consistency and long-term analytics capability.",
    client: "Enterprise analytics and reporting function",
    industry: { label: "Healthcare", href: "/industries/healthcare" },
    challenge:
      "The client struggled with fragmented reporting, inconsistent data sources, and a lack of trusted analytics foundations across business units.",
    solution:
      "DTS Solutions designed scalable data pipelines, structured models, analytics-ready architecture, and governance-aware reporting foundations to improve trust and usability.",
    outcomes: [
      "Improved consistency in reporting outputs",
      "More trusted analytics across teams",
      "Stronger data structure for future growth",
      "Better visibility for decision-making"
    ],
    technologies: [
      "Data pipeline architecture",
      "Analytics platform design",
      "Governance-aware modeling",
      "Reporting systems"
    ],
    relatedServices: [
      { label: "Data & AI", href: "/services/data-ai" },
      { label: "Software Development", href: "/services/software-development" }
    ]
  }
] as const;