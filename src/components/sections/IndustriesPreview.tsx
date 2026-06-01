import Link from "next/link";
import { industries } from "@/data/home";

export function IndustriesPreview() {
  return (
    <section className="bg-[#07111f] px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
          Business types
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
          Support for teams that need reliable technology every working day.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-[30px] border border-white/10 bg-white/10 p-6 backdrop-blur transition hover:bg-white hover:text-slate-950"
            >
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 opacity-80">{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}