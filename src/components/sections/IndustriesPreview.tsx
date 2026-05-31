import Link from "next/link";
import { industries } from "@/data/home";

export function IndustriesPreview() {
  return (
    <section className="border-y bg-slate-50 py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Industries
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Built for environments where trust, control, and long-term reliability matter
            </h2>
          </div>

          <Link href="/industries" className="text-sm font-semibold text-slate-950 hover:opacity-80">
            View all industries →
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="text-lg font-semibold text-slate-950">{industry.title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-700">{industry.desc}</p>
              <div className="mt-6 text-sm font-semibold text-slate-950 group-hover:translate-x-1 transition">
                Explore →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
