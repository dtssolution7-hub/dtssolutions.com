import Link from "next/link";
import { faqs } from "@/data/dtsExpanded";

export function FAQPreview() {
  return (
    <section className="bg-[#f7fbfa] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">Questions</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black text-slate-950 md:text-5xl">
          Common questions before working with DTS Solutions.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {faqs.slice(0, 4).map((faq) => (
            <div key={faq.q} className="rounded-[28px] bg-white p-7 shadow-sm">
              <h3 className="text-xl font-black text-slate-950">{faq.q}</h3>
              <p className="mt-4 leading-7 text-slate-700">{faq.a}</p>
            </div>
          ))}
        </div>

        <Link href="/faq" className="mt-10 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white hover:bg-teal-700">
          View All FAQs
        </Link>
      </div>
    </section>
  );
}