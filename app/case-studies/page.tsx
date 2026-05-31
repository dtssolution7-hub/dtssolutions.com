import Link from "next/link";
import { caseStudiesOverview, caseStudiesSections } from "@/data/caseStudiesPage";

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-slate-500">Case Studies</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Delivery patterns that show how strong engineering creates measurable value
            </h1>
            <p className="mt-6 text-lg text-slate-700 md:text-xl">
              These examples reflect how DTS Solutions approaches cloud, security, software,
              automation, and data initiatives with architecture-first, enterprise-focused execution.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Start a Project
              </Link>
              <a
                href="#case-study-grid"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Explore Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview grid */}
      <section id="case-study-grid" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-slate-500">Featured Work</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Example delivery outcomes
            </h2>
            <p className="mt-4 text-slate-700">
              A snapshot of how strong foundations, modern delivery systems, and security-aware engineering
              can improve performance, trust, and scalability.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudiesOverview.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="text-lg font-semibold text-slate-950">{item.title}</div>
                <p className="mt-2 text-sm text-slate-700">{item.desc}</p>
                <div className="mt-5 text-sm font-semibold text-slate-950">Read summary →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="border-y bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-8">
            {caseStudiesSections.map((study) => (
              <section
                key={study.id}
                id={study.id}
                className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 md:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
                  <div>
                    <div className="text-sm font-semibold text-slate-500">Case Study</div>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                      {study.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-slate-700">
                      {study.intro}
                    </p>

                    <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                      <div className="text-sm font-semibold text-slate-500">Outcome</div>
                      <p className="mt-2 text-sm text-slate-800">{study.outcome}</p>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-500">What was delivered</div>
                    <ul className="mt-4 space-y-3">
                      {study.points.map((point) => (
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
            Want results like these in your own environment?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/85 md:text-lg">
            We help organizations turn architecture, automation, security, and data capabilities
            into practical engineering outcomes.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 hover:bg-white/90 transition"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="inline-flex justify-center rounded-2xl border border-white/30 px-7 py-4 text-sm font-semibold hover:bg-white/10 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
