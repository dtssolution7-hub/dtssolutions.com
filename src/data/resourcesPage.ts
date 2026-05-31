export const featuredInsights = [
  {
    title: "Engineering-First Modernization",
    desc: "A practical view of modernization that prioritizes architecture, security, and operational consistency.",
    href: "#modernization",
    category: "Modernization",
  },
  {
    title: "Security-by-Design at Scale",
    desc: "How to embed security into delivery systems without slowing engineering velocity.",
    href: "#security-design",
    category: "Security",
  },
  {
    title: "Platform Foundations for Reliable Growth",
    desc: "The core platform, automation, and observability patterns that support resilient systems.",
    href: "#platform-foundations",
    category: "Platform Engineering",
  },
] as const;

export const resourceSections = [
  {
    id: "modernization",
    title: "Engineering-First Modernization",
    intro:
      "Modernization should improve clarity, reliability, and scalability—not just replace technology for its own sake.",
    articles: [
      "How architecture-first thinking reduces modernization risk",
      "Why platform consistency matters during system evolution",
      "Practical modernization paths for complex enterprise environments",
    ],
  },
  {
    id: "security-design",
    title: "Security-by-Design",
    intro:
      "Security becomes more effective when it is integrated into delivery workflows, infrastructure patterns, and day-to-day engineering decisions.",
    articles: [
      "Identity-first design patterns for enterprise systems",
      "Delivery guardrails that support security without slowing teams",
      "Operational controls that strengthen long-term resilience",
    ],
  },
  {
    id: "platform-foundations",
    title: "Platform Foundations",
    intro:
      "Stable, well-structured platform foundations help organizations move faster while maintaining operational control and engineering quality.",
    articles: [
      "Cloud landing zones and scalable platform standards",
      "Automation and CI/CD patterns that improve delivery consistency",
      "Observability foundations for proactive operations",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Platforms & Analytics",
    intro:
      "Reliable data systems support reporting, analytics, governance, and better decision-making across teams.",
    articles: [
      "Governance-ready analytics platform design",
      "Scalable pipeline patterns for trusted reporting",
      "Building data foundations for long-term visibility",
    ],
  },
] as const;
