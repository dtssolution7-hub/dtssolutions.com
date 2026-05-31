"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/home";

const parent = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const child = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export function ServicesPreview() {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">
              Services
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Engineering capabilities designed for enterprise-grade outcomes
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-700">
            We combine platform engineering, security, automation, software systems, and data architecture
            to help organizations build stronger digital foundations.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={parent}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={child}>
              <Link
                href={service.href}
                className="group block h-full rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                  Capability
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{service.desc}</p>
                <div className="mt-6 text-sm font-semibold text-slate-950 transition group-hover:translate-x-1">
                  Learn more →
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
