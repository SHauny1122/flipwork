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
    <section id="about" className="border-b border-gray-200 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">About FlipWorks</h2>
          <p className="mt-4 text-base text-gray-700">
            FlipWorks helps small businesses align strategy, build competence, and scale
            sustainably. We focus on practical implementation instead of theory.
          </p>
        </div>

        <div className="space-y-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-lg border border-gray-200 p-4">
              <h3 className="text-lg font-semibold text-gray-900">{pillar.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
