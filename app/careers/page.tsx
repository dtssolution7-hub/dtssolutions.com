import Link from "next/link";
import { company } from "@/data/company";

const jobs = [
  {
    title: "IT Support Specialist",
    type: "Full-time / Contract",
    location: "Remote / Dallas, TX",
    summary:
      "Support users, troubleshoot devices and applications, assist with Microsoft 365, and help maintain smooth daily operations.",
  },
  {
    title: "Cloud & Microsoft 365 Engineer",
    type: "Contract",
    location: "Remote",
    summary:
      "Help configure Microsoft 365, identity, email, SharePoint, Teams, migration tasks, and cloud productivity environments.",
  },
  {
    title: "Network & Infrastructure Technician",
    type: "Part-time / Contract",
    location: "Dallas, TX / Hybrid",
    summary:
      "Assist with office networks, Wi-Fi, firewalls, endpoint setup, documentation, and infrastructure improvement tasks.",
  },
  {
    title: "Cybersecurity Analyst",
    type: "Contract",
    location: "Remote",
    summary:
      "Support MFA rollout, endpoint security checks, access reviews, security awareness, and basic risk remediation.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white">
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">
            Careers
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Join DTS Solutions and help businesses run better technology
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            We are building a practical, service-focused technology team across IT support,
            cloud, security, infrastructure, and automation.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {jobs.map((job) => (
              <div key={job.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">
                  {job.type}
                </div>
                <h2 className="mt-3 text-2xl font-black text-slate-950">{job.title}</h2>
                <p className="mt-2 text-sm font-semibold text-orange-700">{job.location}</p>
                <p className="mt-4 leading-7 text-slate-700">{job.summary}</p>
                <Link
                  href={`mailto:${company.emails.careers}?subject=Application - ${encodeURIComponent(job.title)}`}
                  className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-teal-700"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}