import Link from "next/link";
import { dtsIndustries } from "@/data/dtsContent";

export default function IndustriesPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">Business Types</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">
            Technology support shaped around how different teams work.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Every business uses technology differently. DTS Solutions adapts support around team size,
            risk, daily tools, users, locations and operating needs.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dtsIndustries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl">
              <h2 className="text-2xl font-black text-slate-950">{industry.title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{industry.short}</p>
              <div className="mt-6 text-sm font-black text-teal-700">Open industry page →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}