import Link from "next/link";

const guides: Record<string, { title: string; intro: string; points: string[] }> = {
  "security-basics": {
    title: "Security Basics for Growing Businesses",
    intro: "Security should start with practical controls that reduce common business risks quickly.",
    points: ["Enable MFA for important accounts", "Review admin access", "Protect business email", "Confirm endpoint protection", "Check backup coverage"],
  },
  "managed-it-support-guide": {
    title: "When Managed IT Support Makes Sense",
    intro: "Managed IT support is useful when technology issues are becoming frequent, unclear or risky.",
    points: ["Users wait too long for help", "No one owns documentation", "Devices are unmanaged", "Microsoft 365 is messy", "Backups and security are unclear"],
  },
  "cloud-productivity-guide": {
    title: "How Cloud Tools Reduce Daily Friction",
    intro: "Cloud tools work best when they are configured around how the team actually collaborates.",
    points: ["Organize SharePoint sites", "Use Teams channels clearly", "Clean up file permissions", "Use OneDrive correctly", "Standardize onboarding"],
  },
  "backup-readiness-checklist": {
    title: "Backup Readiness Checklist",
    intro: "A backup plan should answer what is protected, who owns it and whether restore works.",
    points: ["List critical data", "Confirm backup frequency", "Test restore", "Document ownership", "Review cloud app protection"],
  },
  "new-office-it-checklist": {
    title: "New Office IT Checklist",
    intro: "Office moves are easier when internet, Wi-Fi, devices, security and cloud access are planned early.",
    points: ["Internet circuit planning", "Wi-Fi coverage", "Firewall setup", "Device readiness", "Microsoft 365 access"],
  },
};

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides[slug] || guides["security-basics"];

  return (
    <main>
      <section className="bg-[#07111f] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Link href="/resources" className="text-sm font-bold text-teal-300">← Back to resources</Link>
          <h1 className="mt-6 max-w-4xl text-4xl font-black md:text-6xl">{guide.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">{guide.intro}</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-[30px] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black text-slate-950">Key checklist</h2>
          <ul className="mt-6 space-y-4">
            {guide.points.map((point) => <li key={point} className="rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700">• {point}</li>)}
          </ul>
        </div>
      </section>
    </main>
  );
}