import Link from "next/link";
import { supportPlans } from "@/data/dtsExpanded";

export default function SupportPlansPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">Support Plans</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Flexible IT support options for different business stages.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            DTS support plans are designed around practical needs: occasional support, recurring IT ownership, or stronger security and operations support.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {supportPlans.map((plan) => (
            <Link key={plan.slug} href={`/support-plans/${plan.slug}`} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl">
              <h2 className="text-3xl font-black text-slate-950">{plan.name}</h2>
              <p className="mt-3 font-bold text-teal-700">{plan.bestFor}</p>
              <p className="mt-5 leading-7 text-slate-700">{plan.summary}</p>
              <div className="mt-7 text-sm font-black text-orange-600">Open plan →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}