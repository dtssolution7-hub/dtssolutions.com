import Link from "next/link";
import { jobs } from "@/data/dtsExpanded";

export function JobsPreview() {
  return (
    <section className="bg-slate-950 px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">Careers</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
          Join a practical technology team focused on support, cloud and security.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {jobs.slice(0, 4).map((job) => (
            <Link key={job.slug} href={`/careers/${job.slug}`} className="rounded-[28px] border border-white/10 bg-white/10 p-7 hover:bg-white hover:text-slate-950">
              <h3 className="text-2xl font-black">{job.title}</h3>
              <p className="mt-2 text-sm font-bold text-teal-300">{job.type} • {job.location}</p>
              <p className="mt-4 leading-7 opacity-80">{job.summary}</p>
            </Link>
          ))}
        </div>

        <Link href="/careers" className="mt-10 inline-flex rounded-full bg-teal-400 px-7 py-4 text-sm font-black text-slate-950 hover:bg-orange-400">
          View All Jobs
        </Link>
      </div>
    </section>
  );
}