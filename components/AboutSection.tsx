const pillars = [
  {
    title: "Mission",
    text: "Support SMEs with practical consulting that improves business performance and resilience.",
  },
  {
    title: "Vision",
    text: "Build a thriving small-business ecosystem where growth is sustainable and structured.",
  },
  {
    title: "Values",
    text: "Practicality, integrity, partnership, and measurable outcomes in every engagement.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">About FlipWorks</h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            FlipWorks helps small businesses align strategy, build competence, and scale
            sustainably. We focus on practical implementation instead of theory.
          </p>
        </div>

        <div className="space-y-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
