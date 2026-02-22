"use client";

import { useInViewFadeIn } from "@/lib/useInViewFadeIn";

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

type Pillar = (typeof pillars)[number];

function PillarCard({ pillar }: { pillar: Pillar }) {
  const { ref, isVisible } = useInViewFadeIn();

  return (
    <article
      ref={ref}
      className={`rounded-xl bg-[#FAFBFA] p-5 shadow-sm transform transition duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"}`}
    >
      <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{pillar.text}</p>
    </article>
  );
}

export default function MissionVisionValuesSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Mission, Vision & Values
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            The principles that guide how FlipWorks partners with SMEs and measures impact.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
