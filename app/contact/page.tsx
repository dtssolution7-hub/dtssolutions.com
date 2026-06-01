import { company } from "@/data/company";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-teal-300">Contact</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Tell us what technology support your business needs.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">Send a message for IT support, cloud, security, infrastructure, backup or automation help.</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-3xl bg-teal-50 p-8">
            <h2 className="text-3xl font-black text-slate-950">Contact details</h2>
            <div className="mt-6 space-y-3 text-slate-700">
              <p><strong>Email:</strong> {company.emails.contact}</p>
              <p><strong>Support:</strong> {company.emails.support}</p>
              <p><strong>Careers:</strong> {company.emails.careers}</p>
              <p><strong>Location:</strong> Dallas, Texas</p>
            </div>
          </div>

          <form className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Your name" />
              <input className="rounded-2xl border border-slate-200 px-4 py-3" placeholder="Business email" />
            </div>
            <input className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="Company name" />
            <select className="mt-5 w-full rounded-2xl border border-slate-200 px-4 py-3">
              <option>Managed IT Support</option>
              <option>Microsoft 365 / Cloud</option>
              <option>Cybersecurity</option>
              <option>Network / Infrastructure</option>
              <option>Backup / Recovery</option>
              <option>Automation</option>
            </select>
            <textarea className="mt-5 h-36 w-full rounded-2xl border border-slate-200 px-4 py-3" placeholder="How can DTS Solutions help?" />
            <button className="mt-5 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white hover:bg-teal-700" type="button">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}