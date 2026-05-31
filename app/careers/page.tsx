import Link from "next/link";
import { company } from "@/data/company";

const pillars = [
  {
    title: "Modern engineering work",
    desc: "Work on cloud, software, security, automation, enterprise systems, and data platforms with a quality-first mindset.",
  },
  {
    title: "Architecture-led delivery",
    desc: "Contribute to systems that are designed for reliability, clarity, and long-term scalability.",
  },
  {
    title: "Practical collaboration",
    desc: "Build in environments that value thoughtful execution, strong communication, and engineering discipline.",
  },
  {
    title: "Meaningful outcomes",
    desc: "Help shape platforms and systems that improve real-world operations and long-term digital capability.",
  },
] as const;

const roles = [
  {
    title: "Cloud Platform Engineer",
    type: "Full Time",
    location: "Dallas, TX / Hybrid",
    desc: "Build scalable cloud foundations, automation workflows, and platform delivery systems.",
  },
  {
    title: "Software Engineer",
    type: "Full Time",
    location: "Dallas, TX / Remote-Friendly",
    desc: "Develop modern applications, APIs, and frontend systems with maintainable architecture.",
  },
  {
    title: "Cybersecurity Engineer",
    type: "Full Time",
    location: "Dallas, TX / Hybrid",
    desc: "Support security-by-design delivery, infrastructure hardening, and access architecture.",
  },
  {
    title: "Data Platform Engineer",
    type: "Full Time",
    location: "Dallas, TX / Hybrid",
    desc: "Design pipelines, platform models, and analytics-ready data systems for enterprise environments.",
  },
] as const;

export default function CareersPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-slate-500">Careers</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Join a team focused on building secure, scalable digital systems
            </h1>
            <p className="mt-6 text-lg text-slate-700 md:text-xl">
              DTS Solutions is building a modern engineering environment centered on strong systems,
              thoughtful delivery, and long-term technical quality.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                View Open Roles
              </a>
              <a
                href={`mailto:${company.emails.careers}`}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Contact Recruiting
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why work here */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-slate-500">Why DTS Solutions</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              The kind of engineering environment we are building
            </h2>
            <p className="mt-4 text-slate-700">
              We care about clean systems, delivery quality, technical clarity, and work that creates long-term value.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{pillar.title}</h3>
                <p className="mt-3 text-slate-700">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="open-roles" className="border-y bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-slate-500">Open roles</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Current opportunities
            </h2>
            <p className="mt-4 text-slate-700">
              These are example role cards for now. We can later connect this page to a CMS, ATS, or job board feed.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {roles.map((role) => (
              <div
                key={role.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                      {role.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      <span className="rounded-full bg-slate-100 px-3 py-1">{role.type}</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1">{role.location}</span>
                    </div>
                    <p className="mt-4 text-slate-700">{role.desc}</p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <a
                      href={`mailto:${company.emails.careers}?subject=Application%20-%20${encodeURIComponent(role.title)}`}
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
                    >
                      Apply Now
                    </a>
                    <a
                      href={`mailto:${company.emails.careers}`}
                      className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                    >
                      Ask a Question
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 to-indigo-950" />
        <div className="mx-auto max-w-5xl px-6 py-16 text-center text-white md:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Interested in building modern systems with us?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/85 md:text-lg">
            Reach out to our team and tell us where your skills align with DTS Solutions.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href={`mailto:${company.emails.careers}`}
              className="inline-flex justify-center rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 hover:bg-white/90 transition"
            >
              Contact Recruiting
            </a>
            <Link
              href="/about"
              className="inline-flex justify-center rounded-2xl border border-white/30 px-7 py-4 text-sm font-semibold hover:bg-white/10 transition"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
