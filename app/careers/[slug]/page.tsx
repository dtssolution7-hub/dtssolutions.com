import Link from "next/link";
import { notFound } from "next/navigation";
import { company } from "@/data/company";
import { jobs } from "@/data/dtsExpanded";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  if (!job) notFound();

  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Link href="/careers" className="text-sm font-bold text-teal-300">← Back to careers</Link>
          <h1 className="mt-6 max-w-4xl text-4xl font-black md:text-6xl">{job.title}</h1>
          <p className="mt-4 text-teal-300 font-bold">{job.type} • {job.location}</p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{job.summary}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl rounded-[30px] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black text-slate-950">Responsibilities</h2>
          <ul className="mt-6 space-y-4">
            {job.responsibilities.map((item) => <li key={item} className="rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700">• {item}</li>)}
          </ul>
          <a href={`mailto:${company.emails.careers}?subject=Application - ${encodeURIComponent(job.title)}`} className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white hover:bg-teal-700">
            Apply by Email
          </a>
        </div>
      </section>
    </main>
  );
}