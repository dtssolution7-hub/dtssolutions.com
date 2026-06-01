import Link from "next/link";
import { services } from "@/data/home";

export function ServicesPreview() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-700">What we do</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Everyday IT support with cloud, security and infrastructure built in.
            </h2>
          </div>
          <Link href="/services" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold hover:bg-slate-950 hover:text-white">
            All Solutions
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group rounded-[28px] p-7 shadow-sm transition hover:-translate-y-1 ${
                index % 3 === 0
                  ? "bg-teal-50"
                  : index % 3 === 1
                  ? "bg-orange-50"
                  : "bg-slate-950 text-white"
              }`}
            >
              <div className="text-4xl font-black opacity-20">0{index + 1}</div>
              <h3 className="mt-8 text-2xl font-black">{service.title}</h3>
              <p className={`mt-4 leading-7 ${index % 3 === 2 ? "text-slate-300" : "text-slate-700"}`}>
                {service.desc}
              </p>
              <div className="mt-6 text-sm font-black text-teal-700 group-hover:translate-x-1">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}