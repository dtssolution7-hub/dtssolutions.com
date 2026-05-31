import { company } from "@/data/company";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <div>
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-slate-500">Contact</div>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Let’s talk about your next platform, system, or modernization initiative
            </h1>
            <p className="mt-6 text-lg text-slate-700 md:text-xl">
              Share your goals, technical context, and priorities. DTS Solutions will help define
              the right engineering approach for secure, scalable delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-slate-500">Get in touch</div>
              <div className="mt-5 space-y-5">
                <div>
                  <div className="text-sm font-semibold text-slate-950">General inquiries</div>
                  <p className="mt-1 text-sm text-slate-700">{company.emails.contact}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-950">Sales</div>
                  <p className="mt-1 text-sm text-slate-700">{company.emails.sales}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-950">Support</div>
                  <p className="mt-1 text-sm text-slate-700">{company.emails.support}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-950">Phone</div>
                  <p className="mt-1 text-sm text-slate-700">{company.phone}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="text-sm font-semibold text-slate-500">Office</div>
              <div className="mt-4 text-lg font-semibold text-slate-950">{company.address.label}</div>
              <p className="mt-3 text-sm text-slate-700">
                {company.address.line1}<br />
                {company.address.line2}<br />
                {company.address.city}, {company.address.state} {company.address.postalCode}<br />
                {company.address.country}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold text-slate-500">What to include</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li className="rounded-xl bg-slate-50 px-4 py-3">Your business or technical goal</li>
                <li className="rounded-xl bg-slate-50 px-4 py-3">Current systems or platform context</li>
                <li className="rounded-xl bg-slate-50 px-4 py-3">Key challenges, risks, or blockers</li>
                <li className="rounded-xl bg-slate-50 px-4 py-3">Preferred timeline or delivery expectations</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="text-sm font-semibold text-slate-500">Project inquiry</div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
              Tell us about your project
            </h2>
            <p className="mt-3 text-slate-700">
              Your message now submits through a backend route. Next we can connect email delivery.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 to-indigo-950" />
        <div className="mx-auto max-w-5xl px-6 py-14 text-center text-white md:py-16">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl">
            Need a secure, scalable engineering partner?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/85">
            DTS Solutions helps organizations design and build digital systems that support long-term growth.
          </p>
        </div>
      </section>
    </div>
  );
}
