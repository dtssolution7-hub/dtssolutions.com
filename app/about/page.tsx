import Link from "next/link";

const pillars = [
  {
    title: "Architecture-first thinking",
    desc: "We design systems with long-term structure, scalability, and operational clarity in mind before implementation begins.",
  },
  {
    title: "Security-by-design delivery",
    desc: "Security is built into engineering workflows, system design, and platform decisions from the start.",
  },
  {
    title: "Enterprise-grade execution",
    desc: "We focus on resilient systems, controlled delivery, and quality standards that support serious operational environments.",
  },
  {
    title: "Practical modernization",
    desc: "We help organizations modernize in ways that improve reliability and performance without unnecessary disruption.",
  },
] as const;

const values = [
  "Clarity over complexity",
  "Reliability over shortcuts",
  "Security as a foundation",
  "Scalable systems over temporary fixes",
] as const;

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-slate-500">About</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Engineering modern digital foundations for organizations that need security, scale, and clarity
            </h1>
            <p className="mt-6 text-lg text-slate-700 md:text-xl">
              DTS Solutions is a technology engineering company focused on building secure,
              scalable systems across cloud, software, automation, enterprise applications, and data platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Company overview */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="text-sm font-semibold text-slate-500">Who we are</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              A modern engineering partner for complex digital environments
            </h2>
            <p className="mt-5 text-slate-700">
              We help organizations build and improve the systems that power operations,
              customer experiences, delivery workflows, analytics, and internal platforms.
              Our focus is not generic IT support or technology delivery. We are engineering-led,
              architecture-aware, and focused on outcomes that hold up over time.
            </p>
            <p className="mt-4 text-slate-700">
              From cloud foundations and automation to secure delivery systems and modern applications,
              we design technology environments that support long-term growth, reliability, and operational trust.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="text-sm font-semibold text-slate-500">At a glance</div>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-white p-4">
                <div className="text-sm font-semibold text-slate-950">Company focus</div>
                <p className="mt-1 text-sm text-slate-700">
                  Cloud engineering, cybersecurity, software systems, data platforms, automation, and enterprise applications.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="text-sm font-semibold text-slate-950">Delivery style</div>
                <p className="mt-1 text-sm text-slate-700">
                  Architecture-first, security-aware, automation-led, and enterprise-focused.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="text-sm font-semibold text-slate-950">Best fit</div>
                <p className="mt-1 text-sm text-slate-700">
                  Organizations modernizing systems, scaling platforms, and improving operational resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / approach */}
      <section className="border-y bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-slate-500">How we work</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Strong engineering starts with the right principles
            </h2>
            <p className="mt-4 text-slate-700">
              We focus on systems that are understandable, secure, maintainable, and built to support growth.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-slate-200 bg-white p-8">
                <h3 className="text-xl font-semibold text-slate-950">{pillar.title}</h3>
                <p className="mt-3 text-slate-700">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="text-sm font-semibold text-slate-500">Core values</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              What guides our engineering decisions
            </h2>
            <p className="mt-4 text-slate-700">
              We value thoughtful system design, clear technical choices, and delivery practices
              that improve long-term trust and performance.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-base font-semibold text-slate-950">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 to-indigo-950" />
        <div className="mx-auto max-w-5xl px-6 py-16 text-center text-white md:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Want to build with a team that thinks beyond short-term fixes?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/85 md:text-lg">
            DTS Solutions helps organizations create stronger digital foundations through secure,
            scalable, modern engineering.
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
