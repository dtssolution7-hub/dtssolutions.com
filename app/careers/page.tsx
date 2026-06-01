import Link from "next/link";
import { company } from "@/data/company";

const jobs = [
  ["IT Support Specialist", "Full-time / Contract", "Remote / Dallas, TX", "Support users, devices, Microsoft 365, applications and daily technical issues."],
  ["Cloud & Microsoft 365 Engineer", "Contract", "Remote", "Configure Microsoft 365, identity, email, SharePoint, Teams and cloud productivity environments."],
  ["Network & Infrastructure Technician", "Part-time / Contract", "Dallas, TX / Hybrid", "Assist with Wi-Fi, firewalls, endpoint setup, office networks and infrastructure documentation."],
  ["Cybersecurity Analyst", "Contract", "Remote", "Support MFA rollout, endpoint checks, access reviews, email security and basic risk remediation."],
];

export default function CareersPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">Careers</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Build practical technology solutions with DTS Solutions.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">We are growing a service-focused team across IT support, cloud, security, infrastructure and automation.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {jobs.map(([title, type, location, summary]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">{type}</p>
              <h2 className="mt-3 text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-2 text-sm font-semibold text-orange-700">{location}</p>
              <p className="mt-4 leading-7 text-slate-700">{summary}</p>
              <Link href={`mailto:${company.emails.careers}?subject=Application - ${encodeURIComponent(title)}`} className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-teal-700">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}