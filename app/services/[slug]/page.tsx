import Link from "next/link";
import { notFound } from "next/navigation";
import { dtsServices } from "@/data/dtsContent";

export function generateStaticParams() {
  return dtsServices.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = dtsServices.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Link href="/services" className="text-sm font-bold text-teal-300">← Back to services</Link>
          <h1 className="mt-6 max-w-4xl text-4xl font-black md:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{service.overview}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="rounded-[30px] bg-teal-50 p-8">
            <h2 className="text-2xl font-black text-slate-950">Best for</h2>
            <ul className="mt-5 space-y-3">
              {service.bestFor.map((item) => <li key={item} className="font-semibold text-slate-700">• {item}</li>)}
            </ul>
          </div>

          <div className="rounded-[30px] bg-orange-50 p-8">
            <h2 className="text-2xl font-black text-slate-950">What is included</h2>
            <ul className="mt-5 space-y-3">
              {service.includes.map((item) => <li key={item} className="font-semibold text-slate-700">• {item}</li>)}
            </ul>
          </div>

          <div className="rounded-[30px] bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-black">Expected outcomes</h2>
            <ul className="mt-5 space-y-3">
              {service.outcomes.map((item) => <li key={item} className="font-semibold text-slate-300">• {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[36px] bg-slate-50 p-10">
          <h2 className="max-w-3xl text-3xl font-black text-slate-950">
            Want to know if this is the right service for your business?
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            DTS Solutions can review your current setup and suggest the most practical next step.
          </p>
          <Link href="/contact" className="mt-7 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white hover:bg-teal-700">
            Request a review
          </Link>
        </div>
      </section>
    </main>
  );
}