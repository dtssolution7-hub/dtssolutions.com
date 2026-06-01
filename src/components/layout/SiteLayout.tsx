import Link from "next/link";
import { ReactNode } from "react";
import { company } from "@/data/company";

const nav = [
  { label: "Solutions", href: "/services" },
  { label: "Business Types", href: "/industries" },
  { label: "Use Cases", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Jobs", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-orange-500 text-lg font-black text-white shadow-lg">
              DTS
            </div>
            <div>
              <div className="text-lg font-black leading-none tracking-tight">{company.name}</div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700">
                IT • Cloud • Security • Support
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-700 lg:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-teal-700">
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-teal-700 sm:inline-flex">
            Get Help
          </Link>
        </div>
      </header>

      {children}

      <footer className="border-t bg-[#07111f] px-6 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-2xl font-black">DTS Solutions</div>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Managed IT support, Microsoft 365, cybersecurity, network infrastructure, backup readiness and automation for growing businesses.
            </p>
          </div>
          <div>
            <div className="font-bold text-teal-300">Contact</div>
            <p className="mt-3 text-slate-300">contact@dtssolutions.com</p>
            <p className="text-slate-300">support@dtssolutions.com</p>
          </div>
          <div>
            <div className="font-bold text-teal-300">Location</div>
            <p className="mt-3 text-slate-300">Dallas, Texas</p>
          </div>
        </div>
      </footer>
    </div>
  );
}