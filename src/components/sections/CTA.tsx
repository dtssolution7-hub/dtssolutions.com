import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-[36px] bg-gradient-to-r from-teal-500 to-orange-500 p-10 text-slate-950 md:p-14">
        <h2 className="max-w-3xl text-4xl font-black md:text-5xl">
          Need someone to look at your IT setup and tell you what to fix first?
        </h2>
        <p className="mt-5 max-w-2xl text-lg font-medium">
          DTS Solutions can review your support, Microsoft 365, security, backups and infrastructure setup.
        </p>
        <Link href="/contact" className="mt-8 inline-flex rounded-full bg-slate-950 px-7 py-4 text-sm font-black text-white hover:bg-white hover:text-slate-950">
          Book a Review
        </Link>
      </div>
    </section>
  );
}