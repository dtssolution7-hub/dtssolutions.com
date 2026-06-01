import Link from "next/link";
import { notFound } from "next/navigation";
import { dtsUseCases } from "@/data/dtsContent";

export function generateStaticParams() {
  return dtsUseCases.map((item) => ({ slug: item.slug }));
}

export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = dtsUseCases.find((x) => x.slug === slug);
  if (!item) notFound();

  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Link href="/case-studies" className="text-sm font-bold text-teal-300">← Back to use cases</Link>
          <h1 className="mt-6 max-w-4xl text-4xl font-black md:text-6xl">{item.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{item.summary}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black text-slate-950">Scenario</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">{item.detail}</p>
          <h2 className="mt-10 text-3xl font-black text-slate-950">How DTS approaches it</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            We identify the current state, document gaps, prioritize risks and create a practical improvement plan.
            The goal is not to overbuild. The goal is to make technology more reliable, secure and easier to manage.
          </p>
        </div>
      </section>
    </main>
  );
}