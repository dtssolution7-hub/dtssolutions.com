import Link from "next/link";
import { caseStudies } from "@/data/home";

export function CaseStudiesPreview() {
  return (
    <section className="bg-orange-50 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-700">
              Use cases
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Typical problems DTS helps clean up.
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              These are practical examples of support areas businesses often need:
              messy access, weak backups, unstable Wi-Fi, email issues, unclear ownership
              and poor documentation.
            </p>
          </div>

          <div className="space-y-5">
            {caseStudies.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block rounded-[28px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}