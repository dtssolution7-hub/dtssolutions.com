const items = [
  {
    title: "We fix first, then document",
    desc: "Urgent issues are handled quickly, then we document the setup so the same problem does not keep returning.",
  },
  {
    title: "We speak business language",
    desc: "You get clear updates, simple options and practical next steps instead of confusing technical explanations.",
  },
  {
    title: "We secure the basics properly",
    desc: "MFA, backups, endpoint protection, admin access and email security are treated as core business essentials.",
  },
  {
    title: "We improve what already exists",
    desc: "DTS does not force unnecessary rebuilds. We clean up, stabilize and improve your current technology step by step.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-600">
              Why businesses choose DTS
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Less confusion. Better support. Stronger technology habits.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              DTS Solutions is built for organizations that need dependable IT help,
              cleaner systems and better security without overcomplicating the process.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {items.map((item) => (
              <div key={item.title} className="rounded-[28px] bg-slate-950 p-7 text-white">
                <div className="h-2 w-16 rounded-full bg-gradient-to-r from-teal-400 to-orange-500" />
                <h3 className="mt-7 text-2xl font-black">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}