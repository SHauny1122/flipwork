const steps = [
  {
    title: "Understand the business",
    description: "Assess goals, bottlenecks, and opportunities through practical diagnostics.",
  },
  {
    title: "Align strategy and operations",
    description: "Translate strategic priorities into focused operational plans and responsibilities.",
  },
  {
    title: "Enable execution and growth",
    description: "Support implementation, build capability, and track measurable progress.",
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          <span className="inline-block border-l-4 border-[#8E5A63] pl-3">How We Work</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:gap-6">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-xl bg-[#FAFBFA] p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5F7F63] text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
