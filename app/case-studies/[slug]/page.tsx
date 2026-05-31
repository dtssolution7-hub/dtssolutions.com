import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudyDetails } from "@/data/caseStudyDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudyDetails.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudyDetails.find((item) => item.slug === slug);

  if (!study) return notFound();

  return (
    <div>
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold text-slate-500">Case Study</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              {study.title}
            </h1>
            <p className="mt-6 text-lg text-slate-700 md:text-xl">
              {study.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
              >
                Start a Project
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Back to Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="text-sm font-semibold text-slate-500">Context</div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Client and challenge
            </h2>
            <div className="mt-5 space-y-5 text-slate-700 leading-8">
              <p><span className="font-semibold text-slate-950">Client:</span> {study.client}</p>
              <p><span className="font-semibold text-slate-950">Industry:</span> <Link href={study.industry.href} className="underline">{study.industry.label}</Link></p>
              <p>{study.challenge}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="text-sm font-semibold text-slate-500">Solution summary</div>
            <p className="mt-4 text-slate-700 leading-7">
              {study.solution}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="text-sm font-semibold text-slate-500">Outcomes</div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Results delivered
            </h3>
            <ul className="mt-6 space-y-3">
              {study.outcomes.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <div className="text-sm font-semibold text-slate-500">Technologies & capabilities</div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Solution building blocks
            </h3>
            <ul className="mt-6 space-y-3">
              {study.technologies.map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-sm font-semibold text-slate-500">Related services</div>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
              Connected capabilities
            </h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {study.relatedServices.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 to-indigo-950" />
        <div className="mx-auto max-w-5xl px-6 py-16 text-center text-white md:py-20">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            Want outcomes like this for your environment?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-white/85 md:text-lg">
            DTS Solutions helps organizations translate engineering strategy into reliable operational results.
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