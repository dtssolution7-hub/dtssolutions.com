import Link from "next/link";

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.30),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.28),transparent_40%)]" />

      <div className="mx-auto max-w-5xl px-6 py-24 text-center text-white md:py-28">
        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
          Let’s build something durable
        </div>

        <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight md:text-5xl">
          Ready to create a stronger digital foundation for your organization?
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
          DTS Solutions helps teams engineer secure, scalable, and modern systems across cloud,
          software, automation, enterprise applications, and data platforms.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex justify-center rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition hover:bg-white/90"
          >
            Start a Project
          </Link>
          <Link
            href="/services"
            className="inline-flex justify-center rounded-2xl border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore Services
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/65">
          Architecture-first • Security-by-design • Enterprise-focused delivery
        </p>
      </div>
    </section>
  );
}
