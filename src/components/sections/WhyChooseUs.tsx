"use client";

const pillars = [
  {
    title: "Architecture before acceleration",
    desc: "We define the right foundation first so delivery remains stable, scalable, and easier to evolve.",
  },
  {
    title: "Security built into the system",
    desc: "Security is integrated into architecture, workflows, and delivery controls rather than added later.",
  },
  {
    title: "Operational clarity and reliability",
    desc: "We prioritize visibility, observability, and long-term maintainability in the systems we help shape.",
  },
  {
    title: "Modernization with discipline",
    desc: "We improve platforms and delivery models in ways that reduce risk instead of creating disruption.",
  },
] as const;

export function WhyChooseUs() {
  return (
    <section className="border-y bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Why DTS Solutions
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Engineering discipline that improves speed, trust, and long-term scalability
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              We focus on strong digital foundations that support delivery quality today and resilience tomorrow.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[26px] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-950">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
