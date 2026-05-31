import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-24 text-center md:py-32">
        <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-600">
          404 Error
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
          Page not found
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-700">
          The page you’re looking for may have been moved, removed, or never existed.
          Let’s get you back to something useful.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            Go to Homepage
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Explore Services
          </Link>
        </div>

        <div className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
          <Link href="/about" className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm hover:shadow-md transition">
            <div className="text-sm font-semibold text-slate-950">About</div>
            <p className="mt-2 text-sm text-slate-600">Learn about DTS Solutions and our engineering approach.</p>
          </Link>

          <Link href="/case-studies" className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm hover:shadow-md transition">
            <div className="text-sm font-semibold text-slate-950">Case Studies</div>
            <p className="mt-2 text-sm text-slate-600">See example delivery outcomes and solution patterns.</p>
          </Link>

          <Link href="/contact" className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm hover:shadow-md transition">
            <div className="text-sm font-semibold text-slate-950">Contact</div>
            <p className="mt-2 text-sm text-slate-600">Talk with us about your platform, system, or modernization initiative.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
