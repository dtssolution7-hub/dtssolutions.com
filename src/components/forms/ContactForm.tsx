"use client";

import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  serviceArea: string;
  projectDetails: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  serviceArea: "General Inquiry",
  projectDetails: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Something went wrong.");
      }

      setStatus("success");
      setMessage(data?.message || "Your inquiry has been submitted.");
      setForm(initialState);
    } catch (error) {
      const msg = error instanceof Error ? error.message : "Submission failed.";
      setStatus("error");
      setMessage(msg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">First name</label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => updateField("firstName", e.target.value)}
            placeholder="John"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">Last name</label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => updateField("lastName", e.target.value)}
            placeholder="Doe"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
            required
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="name@company.com"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-900">Company</label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            placeholder="Your company"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900">Service area</label>
        <select
          value={form.serviceArea}
          onChange={(e) => updateField("serviceArea", e.target.value)}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900"
        >
          <option>Cloud & Platform Engineering</option>
          <option>Cybersecurity Engineering</option>
          <option>Software Engineering</option>
          <option>Automation & DevOps</option>
          <option>Enterprise Applications</option>
          <option>Data Platforms & Analytics</option>
          <option>General Inquiry</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-900">Project details</label>
        <textarea
          rows={6}
          value={form.projectDetails}
          onChange={(e) => updateField("projectDetails", e.target.value)}
          placeholder="Tell us about your goals, systems, challenges, and what you're trying to build or improve."
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
          required
        />
      </div>

      {status !== "idle" && (
        <div
          className={
            "rounded-2xl px-4 py-3 text-sm " +
            (status === "success"
              ? "border border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border border-rose-200 bg-rose-50 text-rose-800")
          }
        >
          {message}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          Submission is now connected to a backend route. Next step can send directly to email.
        </p>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
}
