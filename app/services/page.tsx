import Link from "next/link";
import { dtsServices } from "@/data/dtsContent";

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">Solutions</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">
            Practical technology services for daily operations, security and growth.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            DTS Solutions supports the technology businesses depend on every day: users,
            devices, Microsoft 365, cloud tools, cybersecurity, networks, backups and automation.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dtsServices.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h2 className="text-2xl font-black text-slate-950">{service.title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{service.short}</p>
              <div className="mt-6 text-sm font-black text-teal-700">Open service page →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}