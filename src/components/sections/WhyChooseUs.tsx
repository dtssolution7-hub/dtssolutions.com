const items = [
  ["01", "Fast practical support", "We focus on fixing the issue, explaining the cause and preventing repeat problems."],
  ["02", "Security without confusion", "MFA, backups, access control and endpoint protection are handled in a simple business-friendly way."],
  ["03", "Cloud tools that work", "Microsoft 365, email, Teams, SharePoint and storage are configured for real daily usage."],
  ["04", "Clear ownership", "You know what is being handled, what is pending and what needs attention next."],
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#07111f] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-300">Why DTS</p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
          Built for businesses that need dependable technology, not complicated explanations.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {items.map(([num, title, desc]) => (
            <div key={title} className="rounded-[28px] border border-white/10 bg-white/10 p-7 backdrop-blur">
              <div className="text-sm font-black text-orange-300">{num}</div>
              <h3 className="mt-4 text-2xl font-black">{title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}