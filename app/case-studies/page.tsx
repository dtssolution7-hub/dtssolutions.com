const studies = [
  ["Business IT Cleanup", "A growing business needed clearer device ownership, account access, backups and documentation. DTS Solutions helped standardize the environment and reduce daily support friction."],
  ["Microsoft 365 Migration", "A team moved from scattered email and storage tools into Microsoft 365 with improved access control, collaboration and user onboarding."],
  ["Security & Backup Readiness", "A business improved MFA, endpoint protection, backup coverage and recovery planning to reduce risk and improve confidence."],
];

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">Use Cases</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Practical technology improvements with measurable business value.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Examples of the kind of work DTS Solutions supports across IT operations, cloud, security and continuity.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {studies.map(([title, desc]) => (
            <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}