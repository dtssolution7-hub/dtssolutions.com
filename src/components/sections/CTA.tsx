import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-[#07111f] px-5 py-20 text-white">
      <div className="mx-auto max-w-7xl rounded-[36px] border border-white/10 bg-white/10 p-10 backdrop-blur md:p-14">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-300">
          Start with a review
        </p>
        <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
          Not sure what is wrong with your IT setup? DTS can review it and give you a clear action plan.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          We can check Microsoft 365, devices, accounts, backups, security, Wi-Fi, documentation
          and support gaps, then recommend what to fix first.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-teal-400 px-8 py-4 text-sm font-black text-slate-950 hover:bg-orange-400"
        >
          Request Review
        </Link>
      </div>
    </section>
  );
}