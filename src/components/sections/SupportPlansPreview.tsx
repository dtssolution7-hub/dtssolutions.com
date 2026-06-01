import Link from "next/link";
import { supportPlans } from "@/data/dtsExpanded";

export function SupportPlansPreview() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-600">Support plans</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black text-slate-950 md:text-5xl">
          Choose the level of IT support your business actually needs.
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {supportPlans.map((plan) => (
            <Link key={plan.slug} href={`/support-plans/${plan.slug}`} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-2xl font-black text-slate-950">{plan.name}</h3>
              <p className="mt-3 text-sm font-bold text-teal-700">{plan.bestFor}</p>
              <p className="mt-5 leading-7 text-slate-700">{plan.summary}</p>
              <div className="mt-7 text-sm font-black text-orange-600">View plan →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}