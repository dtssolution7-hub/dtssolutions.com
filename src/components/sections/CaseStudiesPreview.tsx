import Link from "next/link";
import { caseStudies } from "@/data/home";

export function CaseStudiesPreview() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[36px] bg-gradient-to-br from-teal-50 via-white to-orange-50 p-8 md:p-12">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">Use cases</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black text-slate-950 md:text-5xl">
            Realistic improvements businesses usually need first.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {caseStudies.map((item) => (
              <Link key={item.title} href={item.href} className="rounded-[28px] bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}