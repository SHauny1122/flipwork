"use client";

import Image from "next/image";
import { useInViewFadeIn } from "@/lib/useInViewFadeIn";

const differentiators = [
  {
    number: "01",
    title: "Expertise",
    description: "Seasoned operators who understand SME realities and translate strategy into execution.",
  },
  {
    number: "02",
    title: "Agility",
    description: "Adaptive engagements that flex with your pace, priorities, and resource constraints.",
  },
  {
    number: "03",
    title: "Embedded Support",
    description: "We partner alongside your teams, building capability while delivering momentum.",
  },
  {
    number: "04",
    title: "Measured Outcomes",
    description: "Clear metrics and reviews ensure improvements stick and compound over time.",
  },
];

type Differentiator = (typeof differentiators)[number];

function DifferentiatorCard({ item }: { item: Differentiator }) {
  const { ref, isVisible } = useInViewFadeIn();

  return (
    <article
      ref={ref}
      className={`rounded-2xl bg-[#CFC9BB] p-6 shadow-sm transition duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <span className="inline-flex items-center rounded-full bg-[#5F8E9B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white">
        {item.number}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-[#2A2A2A]">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#2A2A2A]/80">{item.description}</p>
    </article>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
              <span className="inline-block border-l-4 border-[#8E5A63] pl-3">Why choose us?</span>
            </h2>
            <p className="text-base leading-7 text-[#2A2A2A]/80">
              FlipWorks blends strategic clarity with hands-on delivery so you gain a partner invested in sustainable growth.
            </p>
            <div className="overflow-hidden border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="relative h-64 w-full sm:h-80 lg:h-[24rem]">
                <Image
                  src="/flip7.jpg"
                  alt="FlipWorks team collaborating"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {differentiators.map((item) => (
              <DifferentiatorCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
