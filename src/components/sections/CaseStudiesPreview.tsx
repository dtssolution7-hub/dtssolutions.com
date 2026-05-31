import Link from "next/link";
import { caseStudies } from "@/data/home";

export function CaseStudiesPreview() {
  return (
    <section className="border-y bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Case Studies
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Example solution patterns and delivery outcomes
            </h2>
          </div>

          <Link
            href="/case-studies"
            className="text-sm font-semibold text-slate-950 hover:opacity-80"
          >
            View all case studies →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.title}
              href={study.href}
              className="group rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                Featured
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{study.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{study.desc}</p>
              <div className="mt-6 text-sm font-semibold text-slate-950 group-hover:translate-x-1 transition">
                Read summary →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
