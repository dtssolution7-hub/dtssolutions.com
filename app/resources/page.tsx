import Link from "next/link";

const resources = [
  ["security-basics", "Security Basics for Growing Businesses", "Start with MFA, password hygiene, backup coverage, endpoint protection and admin access review."],
  ["managed-it-support-guide", "When Managed IT Support Makes Sense", "Signs your business has outgrown break-fix technology support."],
  ["cloud-productivity-guide", "How Cloud Tools Reduce Daily Friction", "Ways Microsoft 365, storage and automation can simplify business operations."],
  ["backup-readiness-checklist", "Backup Readiness Checklist", "Confirm what is backed up, who owns it and whether restore actually works."],
  ["new-office-it-checklist", "New Office IT Checklist", "Technology items to plan before moving or opening a new office."],
];

export default function ResourcesPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">Resources</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Helpful technology guides for better business decisions.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Practical information for business owners and operations teams who want cleaner IT, better security and fewer interruptions.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {resources.map(([slug, title, desc]) => (
            <Link key={slug} href={`/resources/${slug}`} className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl">
              <h2 className="text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{desc}</p>
              <div className="mt-6 text-sm font-black text-teal-700">Read guide →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}