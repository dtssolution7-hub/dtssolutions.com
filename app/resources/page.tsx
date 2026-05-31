import Link from "next/link";
import { featuredInsights, resourceSections } from "@/data/resourcesPage";

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-slate-500">Resources</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Insights for building secure, scalable, modern digital systems
            </h1>
            <p className="mt-6 text-lg text-slate-700 md:text-xl">
              DTS Solutions shares practical thinking across cloud engineering, software systems,
              automation, security, and data platforms to help teams make stronger technical decisions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Start a Project
              </Link>
              <a
                href="#featured-insights"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Explore Insights
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured insights */}
      <section id="featured-insights" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-slate-500">Featured</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Current focus areas
            </h2>
            <p className="mt-4 text-slate-700">
              Focused insight areas around modernization, security, platform engineering, and long-term system reliability.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredInsights.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {item.category}
                </div>
                <div className="mt-3 text-lg font-semibold text-slate-950">{item.title}</div>
                <p className="mt-2 text-sm text-slate-700">{item.desc}</p>
                <div className="mt-5 text-sm font-semibold text-slate-950">Read topic →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resource sections */}
      <section className="border-y bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-8">
            {resourceSections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-8 md:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
                  <div>
                    <div className="text-sm font-semibold text-slate-500">Topic Area</div>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                      {section.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-slate-700">
                      {section.intro}
                    </p>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-500">Suggested reads</div>
                    <ul className="mt-4 space-y-3">
                      {section.articles.map((article) => (
                        <li
                          key={article}
                          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800"
                        >
                          {article}
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
            Want insight applied to your own environment?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/85 md:text-lg">
            We help organizations turn engineering principles into real architecture, delivery,
            and platform decisions that support long-term growth.
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
