"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { servicesMegaMenu } from "@/data/navigation";

export function MegaMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            aria-label="Close services menu"
            onClick={onClose}
            className="fixed inset-0 z-40 hidden cursor-default bg-slate-950/10 md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            role="dialog"
            aria-label="Services menu panel"
            className="absolute left-0 right-0 top-full z-50 hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
          >
            <div className="mx-auto max-w-7xl px-6 pt-4">
              <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                <div className="grid gap-8 p-8 lg:grid-cols-3">
                  {servicesMegaMenu.map((group) => (
                    <div key={group.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                      <div className="text-sm font-semibold text-slate-950">{group.title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{group.description}</p>

                      <ul className="mt-5 space-y-3">
                        {group.items.map((it) => (
                          <li key={it.href}>
                            <Link
                              href={it.href}
                              onClick={onClose}
                              className="inline-flex text-sm font-semibold text-slate-900 transition hover:translate-x-0.5 hover:opacity-80"
                            >
                              {it.label} →
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 bg-white px-8 py-6">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-sm font-semibold text-slate-950">Need a technical plan?</div>
                      <p className="mt-1 text-sm text-slate-700">
                        Tell us your goals. We’ll respond with a practical engineering approach and next steps.
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      onClick={onClose}
                      className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                      Start a Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
