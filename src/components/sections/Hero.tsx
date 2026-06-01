"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trustItems } from "@/data/home";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(20,184,166,0.28),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.22),transparent_28%),linear-gradient(135deg,#07111f,#0f172a_55%,#111827)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08 }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex rounded-full border border-teal-300/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-100 backdrop-blur">
              DTS Solutions • IT support • Cloud • Security
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-7 text-4xl font-black leading-tight tracking-tight md:text-6xl"
            >
              Practical technology solutions that keep your business moving
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl"
            >
              DTS Solutions helps growing businesses manage IT support, cloud tools,
              cybersecurity, infrastructure, backups, and automation with clear delivery
              and reliable service.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-teal-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-teal-950/20 transition hover:-translate-y-0.5 hover:bg-teal-300"
              >
                Request IT Support
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
              >
                View Solutions
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-sm font-medium text-slate-100 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[24px] bg-white p-6 text-slate-950">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                      Service Desk Snapshot
                    </div>
                    <div className="mt-2 text-2xl font-black">
                      Business IT Health
                    </div>
                  </div>
                  <div className="rounded-full bg-teal-100 px-3 py-1 text-xs font-bold text-teal-800">
                    Monitored
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {[
                    ["Support Coverage", "92%", "bg-teal-500"],
                    ["Cloud Readiness", "86%", "bg-orange-500"],
                    ["Security Baseline", "78%", "bg-slate-900"],
                  ].map(([label, width, color]) => (
                    <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex justify-between text-sm font-bold">
                        <span>{label}</span>
                        <span>{width}</span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-slate-200">
                        <div className={`h-2 rounded-full ${color}`} style={{ width }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-950 p-4 text-white">
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-teal-200">
                      Response
                    </div>
                    <div className="mt-2 text-sm font-medium">
                      Clear support, fast triage
                    </div>
                  </div>
                  <div className="rounded-2xl bg-orange-50 p-4">
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-orange-700">
                      Focus
                    </div>
                    <div className="mt-2 text-sm font-medium text-orange-950">
                      Secure, simple, reliable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}