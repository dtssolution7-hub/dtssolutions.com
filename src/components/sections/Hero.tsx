"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { trustItems } from "@/data/home";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-white">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/images/31.jpg"
          alt="Abstract premium enterprise technology background"
          fill
          priority
          className="object-cover opacity-[0.10]"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.10),transparent_30%),linear-gradient(to_bottom,white,white)]" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08 }}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="inline-flex rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600 backdrop-blur">
              DTS Solutions • Enterprise Technology Engineering
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl"
            >
              Engineering secure, scalable digital foundations for modern organizations
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl"
            >
              DTS Solutions designs cloud platforms, security-focused delivery systems,
              enterprise applications, automation workflows, and data foundations built for
              reliability, performance, and long-term growth.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Start a Project
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Explore Services
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-4 text-sm font-medium text-slate-700 shadow-sm backdrop-blur"
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
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Platform Overview
                    </div>
                    <div className="mt-2 text-lg font-bold text-slate-950">
                      Modern Digital Delivery
                    </div>
                  </div>
                  <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-950">Cloud Foundation</div>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[84%] rounded-full bg-slate-900" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-950">Security Controls</div>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[76%] rounded-full bg-indigo-600" />
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-950">Automation Workflows</div>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[88%] rounded-full bg-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Focus
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-800">
                      Reliability, security, scale
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Delivery
                    </div>
                    <div className="mt-2 text-sm font-medium text-slate-800">
                      Architecture-first execution
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
