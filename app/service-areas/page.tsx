import { serviceAreas } from "@/data/dtsExpanded";

export default function ServiceAreasPage() {
  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-300">Service Areas</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black md:text-6xl">Remote-first support with local Dallas-area focus.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            DTS Solutions can support many technology needs remotely and can coordinate local support around Dallas-area businesses when required.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {serviceAreas.map((area) => (
            <div key={area} className="rounded-[28px] bg-slate-50 p-7 text-xl font-black text-slate-950">{area}</div>
          ))}
        </div>
      </section>
    </main>
  );
}