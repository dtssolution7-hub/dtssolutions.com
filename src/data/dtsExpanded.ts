export const supportPlans = [
  {
    slug: "starter-support",
    name: "Starter Support",
    bestFor: "Small teams needing basic IT help and guidance",
    summary:
      "A practical starting plan for businesses that need occasional support, basic Microsoft 365 help, device troubleshooting and clear advice.",
    features: [
      "Remote IT support guidance",
      "Microsoft 365 basic help",
      "Email and account troubleshooting",
      "Device support guidance",
      "Basic security recommendations",
      "Monthly improvement notes",
    ],
  },
  {
    slug: "business-care",
    name: "Business Care",
    bestFor: "Growing teams needing regular support and stronger IT ownership",
    summary:
      "A stronger support model for businesses that need recurring IT help, onboarding support, security basics, cloud administration and better documentation.",
    features: [
      "Priority remote support",
      "User onboarding and offboarding",
      "Microsoft 365 administration",
      "Device and access support",
      "Backup and security review",
      "Quarterly IT health review",
    ],
  },
  {
    slug: "secure-operations",
    name: "Secure Operations",
    bestFor: "Businesses needing support, security and operational continuity",
    summary:
      "A more complete support model focused on security, continuity, cloud management, access control, backup readiness and operational stability.",
    features: [
      "Managed IT support coordination",
      "Security baseline review",
      "MFA and access control guidance",
      "Backup readiness review",
      "Network and infrastructure recommendations",
      "Technology roadmap planning",
    ],
  },
] as const;

export const processSteps = [
  {
    title: "Discover",
    desc: "We understand your current users, devices, Microsoft 365 setup, support problems, security gaps, backups and business priorities.",
  },
  {
    title: "Stabilize",
    desc: "We focus on the issues causing daily disruption first, such as account access, email problems, device issues, network reliability and backup gaps.",
  },
  {
    title: "Secure",
    desc: "We strengthen the important basics: MFA, admin access, endpoint protection, email security, backup visibility and documentation.",
  },
  {
    title: "Improve",
    desc: "We build a practical improvement plan for cloud tools, automation, reporting, infrastructure, onboarding and long-term technology operations.",
  },
] as const;

export const faqs = [
  {
    q: "Does DTS Solutions provide remote support?",
    a: "Yes. Many issues can be handled remotely, including Microsoft 365, email, access, device troubleshooting, cloud tools and user support. Onsite coordination can be planned when required.",
  },
  {
    q: "Can DTS help if our Microsoft 365 setup is messy?",
    a: "Yes. We can review users, licenses, Teams, SharePoint, OneDrive, mailbox settings, permissions and admin access, then recommend a cleaner structure.",
  },
  {
    q: "Do we need a full IT department before using DTS?",
    a: "No. DTS Solutions is useful for businesses that do not have a large internal IT team or need extra support for cloud, security, infrastructure and daily technology issues.",
  },
  {
    q: "Can DTS review our backups?",
    a: "Yes. We can help confirm what is backed up, where it is stored, how restore works, who owns the process and which important systems may still be exposed.",
  },
  {
    q: "Does DTS do cybersecurity?",
    a: "Yes, with a practical approach. We focus on MFA, account security, endpoint protection, access review, email protection, backup readiness and risk reduction.",
  },
  {
    q: "Can DTS support new office setup?",
    a: "Yes. We can help plan internet, Wi-Fi, devices, Microsoft 365 access, printers, shared files, security basics and documentation for a new office or move.",
  },
] as const;

export const jobs = [
  {
    slug: "it-support-specialist",
    title: "IT Support Specialist",
    type: "Full-time / Contract",
    location: "Remote / Dallas, TX",
    summary:
      "Support users, troubleshoot devices, assist with Microsoft 365, resolve access issues and help maintain reliable daily IT operations.",
    responsibilities: [
      "Handle user support requests",
      "Troubleshoot laptops, email, access and common applications",
      "Assist with onboarding and offboarding",
      "Document recurring issues and fixes",
      "Support Microsoft 365 and basic cloud tools",
    ],
  },
  {
    slug: "microsoft-365-engineer",
    title: "Microsoft 365 Engineer",
    type: "Contract",
    location: "Remote",
    summary:
      "Configure and support Microsoft 365 environments including Exchange, Teams, SharePoint, OneDrive, identity and permissions.",
    responsibilities: [
      "Review Microsoft 365 tenant configuration",
      "Support mailbox, Teams and SharePoint setup",
      "Assist with migrations and cleanup",
      "Improve permissions and access structure",
      "Document tenant standards",
    ],
  },
  {
    slug: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    type: "Contract",
    location: "Remote",
    summary:
      "Support practical security improvements including MFA, endpoint checks, access reviews, backup readiness and user awareness.",
    responsibilities: [
      "Review MFA and admin access",
      "Assist with endpoint protection checks",
      "Support email security improvements",
      "Document security findings",
      "Help create remediation plans",
    ],
  },
  {
    slug: "network-infrastructure-technician",
    title: "Network & Infrastructure Technician",
    type: "Part-time / Contract",
    location: "Dallas, TX / Hybrid",
    summary:
      "Assist with Wi-Fi, firewall, endpoint setup, office networks, connectivity troubleshooting and infrastructure documentation.",
    responsibilities: [
      "Support office network setup",
      "Troubleshoot Wi-Fi and connectivity issues",
      "Assist with device and endpoint setup",
      "Document infrastructure details",
      "Support office move technology tasks",
    ],
  },
  {
    slug: "automation-reporting-specialist",
    title: "Automation & Reporting Specialist",
    type: "Contract",
    location: "Remote",
    summary:
      "Help build forms, dashboards, workflows, reports and lightweight automations that reduce manual business work.",
    responsibilities: [
      "Review manual business processes",
      "Create forms and workflow ideas",
      "Support dashboard and reporting setup",
      "Document automation opportunities",
      "Work with business users to simplify tasks",
    ],
  },
] as const;

export const serviceAreas = [
  "Dallas",
  "Irving",
  "Plano",
  "Frisco",
  "Arlington",
  "Fort Worth",
  "Richardson",
  "Remote support across the United States",
] as const;