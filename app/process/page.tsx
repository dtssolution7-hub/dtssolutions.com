import { processSteps } from "@/data/dtsExpanded";

export default function ProcessPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">Process</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">A simple way to take control of business technology.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            DTS Solutions works in clear stages so businesses understand what is broken, what is risky and what should be improved first.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-6">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-black text-orange-600">STEP 0{index + 1}</div>
              <h2 className="mt-3 text-3xl font-black text-slate-950">{step.title}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}