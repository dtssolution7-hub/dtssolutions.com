import Link from "next/link";

export function generateStaticParams() {
  return [
    "healthcare",
    "finance-banking",
    "retail-ecommerce",
    "technology",
    "manufacturing",
    "education",
    "logistics",
    "professional-services",
  ].map((slug) => ({ slug }));
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w[0].ToUpperCase ? w : w).join(" ");
  const cleanTitle = slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/industries" className="text-sm font-bold text-teal-700">← Back to industries</Link>
        <h1 className="mt-6 text-4xl font-black text-slate-950">{cleanTitle}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          DTS Solutions supports {cleanTitle.toLowerCase()} teams with managed IT, cloud tools, secure access, infrastructure, backup readiness and practical technology improvements.
        </p>
      </div>
    </main>
  );
}