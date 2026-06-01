import Link from "next/link";
import { dtsUseCases } from "@/data/dtsContent";

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">Use Cases</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">
            Practical IT improvement examples for real business situations.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            These use cases show common starting points for businesses that want better support,
            cleaner cloud tools, stronger security and more reliable technology operations.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {dtsUseCases.map((item) => (
            <Link key={item.slug} href={`/case-studies/${item.slug}`} className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl">
              <h2 className="text-2xl font-black text-slate-950">{item.title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{item.summary}</p>
              <div className="mt-6 text-sm font-black text-teal-700">Read use case →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}