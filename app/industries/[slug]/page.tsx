import Link from "next/link";
import { notFound } from "next/navigation";
import { dtsIndustries } from "@/data/dtsContent";

export function generateStaticParams() {
  return dtsIndustries.map((industry) => ({ slug: industry.slug }));
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = dtsIndustries.find((item) => item.slug === slug);
  if (!industry) notFound();

  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Link href="/industries" className="text-sm font-bold text-teal-300">← Back to business types</Link>
          <h1 className="mt-6 max-w-4xl text-4xl font-black md:text-6xl">{industry.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{industry.short}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_.8fr]">
          <div className="rounded-[30px] bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-slate-950">How DTS Solutions helps</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">{industry.content}</p>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              We focus on support, Microsoft 365, security basics, device reliability, backup readiness,
              network stability and clear documentation so the team can work with fewer interruptions.
            </p>
          </div>
          <div className="rounded-[30px] bg-teal-50 p-8">
            <h2 className="text-2xl font-black text-slate-950">Common focus areas</h2>
            <ul className="mt-5 space-y-3 font-semibold text-slate-700">
              <li>• User and device support</li>
              <li>• Microsoft 365 and cloud tools</li>
              <li>• Security and access control</li>
              <li>• Backup and continuity planning</li>
              <li>• Network and Wi-Fi reliability</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}