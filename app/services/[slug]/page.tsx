import Link from "next/link";

const items: Record<string, string> = {
  "cloud-infrastructure": "Microsoft 365, cloud migration, identity and productivity platform support.",
  cybersecurity: "MFA, endpoint security, email protection, access review and practical risk reduction.",
  "software-development": "Business workflow tools, simple portals, integrations and automation support.",
  "data-ai": "Dashboards, reporting, data cleanup and operational visibility improvements.",
  "devops-automation": "Automation workflows, process improvement and repeatable operational tasks.",
  "enterprise-applications": "Business application support, internal tools and system improvements.",
  "digital-experience": "Website, forms, customer workflows and digital communication improvements.",
  "it-operations-support": "Managed IT support, helpdesk, device support and technology operations.",
};

export function generateStaticParams() {
  return Object.keys(items).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/services" className="text-sm font-bold text-teal-700">← Back to services</Link>
        <h1 className="mt-6 text-4xl font-black text-slate-950">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">{items[slug] || "DTS Solutions provides practical business technology support."}</p>
      </div>
    </main>
  );
}