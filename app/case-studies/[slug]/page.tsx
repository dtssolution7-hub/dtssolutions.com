import Link from "next/link";

export function generateStaticParams() {
  return ["cloud-foundation", "security-by-design", "data-platform"].map((slug) => ({ slug }));
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
  return (
    <main className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <Link href="/case-studies" className="text-sm font-bold text-teal-700">← Back to use cases</Link>
        <h1 className="mt-6 text-4xl font-black text-slate-950">{title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-700">
          This DTS Solutions use case shows how practical IT support, security improvements, cloud readiness and clear documentation can improve business technology operations.
        </p>
      </div>
    </main>
  );
}