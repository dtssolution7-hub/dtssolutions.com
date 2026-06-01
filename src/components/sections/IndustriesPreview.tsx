import Link from "next/link";
import { industries } from "@/data/home";

export function IndustriesPreview() {
  return (
    <section className="bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-600">Who we help</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black text-slate-950 md:text-5xl">
          Support models for offices, clinics, local operations and growing teams.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-[28px] bg-white p-6 shadow-sm hover:shadow-xl">
              <div className="h-2 w-16 rounded-full bg-gradient-to-r from-teal-400 to-orange-500" />
              <h3 className="mt-6 text-xl font-black text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}