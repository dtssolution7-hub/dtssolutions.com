import { faqs } from "@/data/dtsExpanded";

export default function FAQPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">FAQ</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Questions businesses ask before starting with DTS.</h1>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-black text-slate-950">{faq.q}</h2>
              <p className="mt-4 leading-8 text-slate-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}