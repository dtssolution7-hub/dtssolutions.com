import Link from "next/link";
import { services } from "@/data/home";

export function ServicesPreview() {
  return (
    <section className="bg-[#f7fbfa] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">
            DTS Service Desk
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            Technology help for the everyday problems that slow businesses down.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We support the real things teams depend on: laptops, email, Microsoft 365,
            Wi-Fi, backups, access, security, cloud apps and daily troubleshooting.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-full bg-teal-100 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-teal-800">
                  Support Area
                </div>
                <div className="text-3xl font-black text-orange-500">{index + 1}</div>
              </div>
              <h3 className="mt-8 text-2xl font-black text-slate-950">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-700">{service.desc}</p>
              <div className="mt-7 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white group-hover:bg-teal-700">
                View details
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}