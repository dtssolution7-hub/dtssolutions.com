import Link from "next/link";
import { insights } from "@/data/home";

export function ResourcesPreview() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">
          Practical guides
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
          Simple IT advice for business owners and operations teams.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {insights.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-[30px] border border-slate-200 bg-slate-50 p-7 transition hover:border-teal-400 hover:bg-teal-50"
            >
              <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-700">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}