import Link from "next/link";
import { insights } from "@/data/home";

export function ResourcesPreview() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-orange-300">Guides</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
          Clear technology guidance for business owners and teams.
        </h2>

        <div className="mt-12 divide-y divide-white/10 rounded-[32px] border border-white/10 bg-white/5">
          {insights.map((item) => (
            <Link key={item.title} href={item.href} className="block p-7 transition hover:bg-white/10">
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-300">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}