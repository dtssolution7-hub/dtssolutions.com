import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails } from "@/data/serviceDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
    <div>
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold text-slate-500">Service</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 text-lg text-slate-700 md:text-xl">
              {service.hero}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="text-sm font-semibold text-slate-500">Overview</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              What this service delivers
            </h2>
            <p className="mt-5 text-slate-700 leading-8">
              {service.overview}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="text-sm font-semibold text-slate-500">Quick view</div>
            <ul className="mt-5 space-y-3">
              {service.capabilities.slice(0, 4).map((item) => (
                <li key={item} className="rounded-xl bg-white px-4 py-3 text-sm text-slate-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="text-sm font-semibold text-slate-500">Key capabilities</div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Core modules
            </h3>
            <ul className="mt-6 space-y-3">
              {service.capabilities.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="text-sm font-semibold text-slate-500">Process approach</div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              How delivery is structured
            </h3>
            <ol className="mt-6 space-y-3">
              {service.process.map((step, index) => (
                <li key={step} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-500">Industries supported</div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Relevant sectors
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {service.industries.map((industry) => (
                <Link
                  key={industry.label}
                  href={industry.href}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {industry.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-500">Case study references</div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Related proof points
            </h3>
            <div className="mt-6 space-y-3">
              {service.caseStudies.map((study) => (
                <Link
                  key={study.label}
                  href={study.href}
                  className="block rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                  {study.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-sm font-semibold text-slate-500">FAQ</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Common questions
          </h2>

          <div className="mt-8 space-y-5">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl border border-slate-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-slate-950">{faq.q}</h3>
                <p className="mt-3 text-slate-700 leading-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 to-indigo-950" />
        <div className="mx-auto max-w-5xl px-6 py-16 text-center text-white md:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Need {service.title.toLowerCase()} support for your next initiative?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/85 md:text-lg">
            DTS Solutions helps organizations implement secure, scalable engineering solutions aligned to real business and operational needs.
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
