import Link from "next/link";
import { processSteps } from "@/data/dtsExpanded";

export function ProcessPreview() {
  return (
    <section className="bg-[#f7fbfa] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-700">How DTS works</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black text-slate-950 md:text-5xl">
          A clear process from messy technology to better control.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[30px] bg-white p-7 shadow-sm">
              <div className="text-4xl font-black text-orange-500">0{index + 1}</div>
              <h3 className="mt-6 text-2xl font-black text-slate-950">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">{step.desc}</p>
            </div>
          ))}
        </div>

        <Link href="/process" className="mt-10 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white hover:bg-teal-700">
          View Our Process
        </Link>
      </div>
    </section>
  );
}