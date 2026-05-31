"use client";

import Link from "next/link";
import { useEffect } from "react";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 md:hidden" onClick={onClose}>
      <div
        className="ml-auto h-full w-[85%] max-w-sm bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="text-lg font-bold text-slate-950">Menu</div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900"
          >
            Close
          </button>
        </div>

        <nav className="space-y-3">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-6">
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
}