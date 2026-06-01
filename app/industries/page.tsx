const industries = [
  ["Small & Mid-size Business", "IT support, cloud tools, backups and security for growing businesses that need reliable operations."],
  ["Healthcare & Clinics", "Secure devices, access, communication and data protection support for care-focused environments."],
  ["Professional Services", "Reliable technology for legal, accounting, real estate, finance and advisory teams."],
  ["Retail & Local Operations", "Connectivity, devices, POS support, Wi-Fi and cloud tools for customer-facing businesses."],
  ["Education & Training", "User support, device setup, collaboration tools and secure access for learning environments."],
  ["Logistics & Field Teams", "Mobile access, cloud collaboration, device support and operational continuity for distributed teams."],
];

export default function IndustriesPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">Industries</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Technology support shaped around how your business actually works.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">DTS Solutions supports organizations that need dependable IT, secure access, cloud productivity and practical technology improvements.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(([title, desc]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}