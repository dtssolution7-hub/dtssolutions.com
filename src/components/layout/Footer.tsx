import Link from "next/link";
import { company } from "@/data/company";

const services = [
  { label: "Cloud & Platform Engineering", href: "/services#cloud" },
  { label: "Cybersecurity Engineering", href: "/services#security" },
  { label: "Software Engineering", href: "/services#software" },
  { label: "Data Platforms & Analytics", href: "/services#data" },
] as const;

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
] as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-slate-950 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.20),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.16),transparent_24%)]" />
      <div className="absolute inset-0 -z-10 opacity-40 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:36px_36px]" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr_.85fr_.95fr]">
          {/* Brand / summary */}
          <div>
            <div className="text-xl font-semibold tracking-tight">{company.name}</div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
              DTS Solutions engineers secure, scalable digital foundations across cloud,
              software, automation, enterprise systems, and data platforms for modern organizations.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                Architecture-first delivery
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                Security-by-design systems
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80">
                Enterprise-focused execution
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
              Services
            </div>
            <ul className="mt-5 space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/75 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
              Company
            </div>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/75 transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / legal */}
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
              Contact
            </div>

            <div className="mt-5 space-y-4 text-sm text-white/75">
              <div>
                <div className="font-semibold text-white/90">Email</div>
                <p className="mt-1">{company.emails.contact}</p>
              </div>

              <div>
                <div className="font-semibold text-white/90">Phone</div>
                <p className="mt-1">{company.phone}</p>
              </div>

              <div>
                <div className="font-semibold text-white/90">Office</div>
                <p className="mt-1 leading-6">
                  {company.address.line1}, {company.address.line2}<br />
                  {company.address.city}, {company.address.state} {company.address.postalCode}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
                Legal
              </div>
              <ul className="mt-4 space-y-3">
                {legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/75 transition hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
            <Link href="/terms" className="transition hover:text-white">Terms</Link>
            <Link href="/cookies" className="transition hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
