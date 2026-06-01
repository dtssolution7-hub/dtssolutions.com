import Link from "next/link";

const values = [
  "Practical solutions before unnecessary complexity",
  "Security built into everyday technology decisions",
  "Reliable support with clear communication",
  "Documentation, ownership and long-term maintainability",
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">About DTS Solutions</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Technology support that feels clear, dependable and business-focused.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            DTS Solutions helps organizations run better technology across support, cloud tools, security, infrastructure and automation. We focus on practical improvements that reduce downtime, improve security and make daily work easier.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-8">
            <h2 className="text-3xl font-black text-slate-950">Our mission</h2>
            <p className="mt-4 leading-8 text-slate-700">
              To provide reliable, understandable and secure technology services for businesses that need strong IT foundations without unnecessary confusion.
            </p>
          </div>
          <div className="rounded-3xl bg-teal-50 p-8">
            <h2 className="text-3xl font-black text-slate-950">How we work</h2>
            <p className="mt-4 leading-8 text-slate-700">
              We assess the environment, fix urgent gaps, document what matters and build a support model that helps the business operate with more confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black text-slate-950">What guides us</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="rounded-3xl border border-slate-200 p-6 font-semibold text-slate-800">{value}</div>
            ))}
          </div>
          <Link href="/contact" className="mt-10 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white hover:bg-teal-700">Talk to DTS Solutions</Link>
        </div>
      </section>
    </main>
  );
}