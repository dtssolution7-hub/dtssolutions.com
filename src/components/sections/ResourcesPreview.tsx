import Link from "next/link";
import { insights } from "@/data/home";

export function ResourcesPreview() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Insights
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Practical thinking for modern engineering environments
            </h2>
          </div>

          <Link href="/resources" className="text-sm font-semibold text-slate-950 hover:opacity-80">
            View all insights →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {insights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Resource
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.desc}</p>
              <div className="mt-6 text-sm font-semibold text-slate-950 group-hover:translate-x-1 transition">
                Read →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
