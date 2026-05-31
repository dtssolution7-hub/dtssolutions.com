"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { company } from "@/data/company";
import { topNav } from "@/data/navigation";
import { useScrollY } from "@/lib/useScrollY";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/cn";

export function Header() {
  const scrolled = useScrollY(10);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const headerClass = useMemo(() => {
    return cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled
        ? "border-b border-slate-200/80 bg-white/82 backdrop-blur-xl shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
        : "bg-white/95"
    );
  }, [scrolled]);

  return (
    <header className={headerClass}>
      <div className="relative">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-3">
          {/* Brand */}
          <Link href="/" className="group inline-flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-slate-950 transition group-hover:opacity-90">
              {company.name}
            </span>
            <span className="mt-1 hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 md:block">
              Engineering Secure, Scalable Digital Foundations
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-900 md:flex">
            <button
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 transition hover:bg-slate-100"
              aria-haspopup="dialog"
              aria-expanded={servicesOpen}
              onMouseEnter={() => setServicesOpen(true)}
              onFocus={() => setServicesOpen(true)}
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown className={"h-4 w-4 transition " + (servicesOpen ? "rotate-180" : "")} />
            </button>

            {topNav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-full px-3 py-2 transition hover:bg-slate-100"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:opacity-95"
            >
              Start a Project
            </Link>

            <button
              aria-label="Open navigation"
              onClick={() => setMobileOpen(true)}
              className="inline-flex rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:bg-slate-50 md:hidden"
            >
              <Menu className="h-5 w-5 text-slate-900" />
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        <div onMouseLeave={() => setServicesOpen(false)} className="relative">
          <MegaMenu open={servicesOpen} onClose={() => setServicesOpen(false)} />
        </div>

        {/* Mobile menu */}
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </header>
  );
}
