import { company } from "@/data/company";

const supportTypes = [
  "Managed IT Support",
  "Microsoft 365 / Cloud",
  "Cybersecurity Review",
  "Network / Wi-Fi / Infrastructure",
  "Backup & Recovery",
  "Automation / Reporting",
  "General Inquiry",
];

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">Contact DTS</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">
            Tell us what technology problem you want to solve.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Whether it is user support, Microsoft 365, cybersecurity, Wi-Fi, backups or automation,
            DTS Solutions can review your setup and recommend the next practical step.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <div className="rounded-[30px] bg-teal-50 p-8">
              <h2 className="text-3xl font-black text-slate-950">Contact details</h2>
              <div className="mt-6 space-y-3 text-slate-700">
                <p><strong>General:</strong> {company.emails.contact}</p>
                <p><strong>Support:</strong> {company.emails.support}</p>
                <p><strong>Careers:</strong> {company.emails.careers}</p>
                <p><strong>Location:</strong> Dallas, Texas</p>
              </div>
            </div>

            <div className="rounded-[30px] bg-slate-950 p-8 text-white">
              <h2 className="text-2xl font-black">Good first step</h2>
              <p className="mt-4 leading-7 text-slate-300">
                Ask for a basic IT health review. We can check users, devices, Microsoft 365,
                security, backups and network basics.
              </p>
            </div>
          </aside>

          <form className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Your name" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Business email" />
            </div>
            <input className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Company name" />
            <input className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Phone number optional" />
            <select className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3">
              {supportTypes.map((type) => <option key={type}>{type}</option>)}
            </select>
            <textarea className="mt-5 h-40 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Briefly describe the issue or service you need" />
            <button className="mt-5 rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white hover:bg-teal-700" type="button">
              Send Inquiry
            </button>
            <p className="mt-4 text-sm text-slate-500">
              This form can be connected to email or CRM later. For now, users can also email DTS directly.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}