import Link from "next/link";
import { serviceOverview, serviceSections } from "@/data/servicesPage";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-slate-500">Services</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Engineering services built for secure, scalable growth
            </h1>
            <p className="mt-6 text-lg text-slate-700 md:text-xl">
              DTS Solutions delivers cloud, security, software, automation, enterprise systems,
              and data platform capabilities designed for reliability, performance, and long-term value.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Start a Project
              </Link>
              <a
                href="#service-grid"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Explore Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview grid */}
      <section id="service-grid" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-slate-500">Capabilities</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Core service areas
            </h2>
            <p className="mt-4 text-slate-700">
              Each capability is designed to support enterprise modernization, stronger operations,
              and better long-term engineering outcomes.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceOverview.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="text-lg font-semibold text-slate-950">{item.title}</div>
                <p className="mt-2 text-sm text-slate-700">{item.desc}</p>
                <div className="mt-5 text-sm font-semibold text-slate-950">Jump to section →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="border-y bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-8">
            {serviceSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 md:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
                  <div>
                    <div className="text-sm font-semibold text-slate-500">Service Area</div>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                      {section.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-slate-700">
                      {section.intro}
                    </p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-500">What this includes</div>
                    <ul className="mt-4 space-y-3">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 to-indigo-950" />
        <div className="mx-auto max-w-5xl px-6 py-16 text-center text-white md:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Need the right engineering capability for your next initiative?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/85 md:text-lg">
            We help organizations build the right technical foundation across cloud, security,
            software, data, and enterprise systems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 hover:bg-white/90 transition"
            >
              Start a Project
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex justify-center rounded-2xl border border-white/30 px-7 py-4 text-sm font-semibold hover:bg-white/10 transition"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
