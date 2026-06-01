import Link from "next/link";
import { jobs } from "@/data/dtsExpanded";

export default function CareersPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">Careers</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Build practical technology solutions with DTS Solutions.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            We are growing a service-focused team across IT support, Microsoft 365, cybersecurity, infrastructure and automation.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <Link key={job.slug} href={`/careers/${job.slug}`} className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-teal-700">{job.type}</p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">{job.title}</h2>
              <p className="mt-2 text-sm font-semibold text-orange-700">{job.location}</p>
              <p className="mt-4 leading-7 text-slate-700">{job.summary}</p>
              <div className="mt-6 text-sm font-black text-teal-700">View role →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}