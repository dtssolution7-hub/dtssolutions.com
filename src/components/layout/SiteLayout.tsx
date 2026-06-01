import Link from "next/link";
import { ReactNode } from "react";

const nav = [
  { label: "Solutions", href: "/services" },
  { label: "Plans", href: "/support-plans" },
  { label: "Process", href: "/process" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Jobs", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 via-teal-600 to-orange-500 text-base font-black text-white shadow-lg">
              DTS
            </div>
            <div>
              <div className="text-lg font-black leading-none tracking-tight">DTS Solutions</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-[0.14em] text-teal-700">
                IT Support • Cloud • Security
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-bold text-slate-700 xl:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-teal-700">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="rounded-full bg-slate-950 px-4 py-3 text-xs font-black text-white shadow-lg hover:bg-teal-700 sm:px-5 sm:text-sm">
            Get Help
          </Link>
        </div>

        <div className="flex gap-2 overflow-x-auto border-t border-slate-100 px-4 py-2 text-xs font-bold text-slate-700 xl:hidden">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-full bg-slate-100 px-4 py-2">
              {item.label}
            </Link>
          ))}
        </div>
      </header>

      {children}

      <footer className="bg-[#07111f] px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-2xl font-black">DTS Solutions</div>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Managed IT support, Microsoft 365, cybersecurity, network infrastructure, backup readiness and automation for growing businesses.
            </p>
            <Link href="/service-areas" className="mt-5 inline-flex text-sm font-black text-teal-300">
              View service areas →
            </Link>
          </div>
          <div>
            <div className="font-bold text-teal-300">Explore</div>
            <div className="mt-3 space-y-2 text-slate-300">
              <p><Link href="/services">Solutions</Link></p>
              <p><Link href="/support-plans">Support Plans</Link></p>
              <p><Link href="/process">Process</Link></p>
              <p><Link href="/faq">FAQ</Link></p>
            </div>
          </div>
          <div>
            <div className="font-bold text-teal-300">Contact</div>
            <div className="mt-3 space-y-2 text-slate-300">
              <p>contact@dtssolutions.com</p>
              <p>support@dtssolutions.com</p>
              <p>Dallas, Texas</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}