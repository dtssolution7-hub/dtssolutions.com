import Link from "next/link";
import { notFound } from "next/navigation";
import { supportPlans } from "@/data/dtsExpanded";

export function generateStaticParams() {
  return supportPlans.map((plan) => ({ slug: plan.slug }));
}

export default async function SupportPlanDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plan = supportPlans.find((item) => item.slug === slug);
  if (!plan) notFound();

  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Link href="/support-plans" className="text-sm font-bold text-teal-300">← Back to support plans</Link>
          <h1 className="mt-6 max-w-4xl text-4xl font-black md:text-6xl">{plan.name}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{plan.summary}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[30px] bg-teal-50 p-8">
            <h2 className="text-2xl font-black text-slate-950">Best for</h2>
            <p className="mt-4 leading-8 text-slate-700">{plan.bestFor}</p>
          </div>
          <div className="rounded-[30px] bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Included focus areas</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {plan.features.map((feature) => <li key={feature} className="rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700">• {feature}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}