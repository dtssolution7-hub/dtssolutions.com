import Link from "next/link";

const services = [
  ["managed-it", "Managed IT Support", "Helpdesk, user support, device troubleshooting, onboarding, maintenance and daily operational technology assistance.", ["Remote and onsite support coordination", "User and device troubleshooting", "Routine maintenance", "IT documentation"]],
  ["cloud", "Microsoft 365 & Cloud", "Email, Teams, SharePoint, OneDrive, identity, access, cloud migration and productivity platform support.", ["Microsoft 365 setup", "Cloud migration", "Teams and SharePoint", "Identity and access support"]],
  ["cybersecurity", "Cybersecurity Protection", "Practical security improvements for accounts, devices, email, backups, access and business-critical systems.", ["MFA setup", "Endpoint protection", "Email security", "Access review"]],
  ["infrastructure", "Network & Infrastructure", "Wi-Fi, firewalls, internet reliability, servers, endpoints and office technology improvement.", ["Network cleanup", "Firewall planning", "Wi-Fi improvement", "Endpoint setup"]],
  ["backup", "Backup & Recovery", "Backup coverage, restore testing, continuity planning and disaster recovery readiness.", ["Backup review", "Restore testing", "Recovery planning", "Continuity guidance"]],
  ["automation", "Automation & Reporting", "Workflows, dashboards, forms, approvals and integrations that reduce manual work.", ["Workflow automation", "Reporting dashboards", "Forms and approvals", "System integration"]],
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">Services</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">IT services designed for stable, secure and productive business operations.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">From everyday support to cloud, security, infrastructure and automation, DTS Solutions helps businesses build technology that works better.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([id, title, desc, points]) => (
            <article id={id as string} key={id as string} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{desc}</p>
              <ul className="mt-5 space-y-2">
                {(points as string[]).map((point) => <li key={point} className="text-sm font-semibold text-slate-700">• {point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-teal-50 p-8">
          <h2 className="text-3xl font-black text-slate-950">Need help deciding where to start?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">We can review your current setup and identify the most important technology improvements first.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white hover:bg-teal-700">Request a Technology Review</Link>
        </div>
      </section>
    </main>
  );
}