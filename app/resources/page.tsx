const resources = [
  ["Security Basics for Growing Businesses", "Start with MFA, password hygiene, backup coverage, endpoint protection and admin access review."],
  ["Managed IT vs Break-Fix Support", "Understand when reactive support becomes too risky and when predictable managed support makes sense."],
  ["Microsoft 365 Setup Checklist", "Email, Teams, SharePoint, OneDrive, permissions, retention and onboarding basics."],
  ["Backup Readiness Checklist", "How to confirm what is backed up, how often, who owns it and whether restores actually work."],
];

export default function ResourcesPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">Resources</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Simple technology guidance for better business decisions.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Practical topics covering IT support, security, cloud tools, backups and operations.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {resources.map(([title, desc]) => (
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