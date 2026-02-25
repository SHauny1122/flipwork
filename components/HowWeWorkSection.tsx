"use client";

import Image from "next/image";
import { useInViewFadeIn } from "@/lib/useInViewFadeIn";

const approachSteps = [
  {
    step: 1,
    title: "Diagnostic Audit",
    description: "Assess goals, bottlenecks, and opportunities through practical diagnostics.",
  },
  {
    step: 2,
    title: "Tailored Roadmap",
    description: "Translate priorities into a focused plan with clear actions and responsibilities.",
  },
  {
    step: 3,
    title: "Implementation Support",
    description: "Support execution, build capability, and remove blockers as you progress.",
  },
  {
    step: 4,
    title: "Measure & Improve",
    description: "Track outcomes, review performance, and refine for sustainable growth.",
  },
];

type ApproachStep = (typeof approachSteps)[number];

function StepCard({ step }: { step: ApproachStep }) {
  const { ref, isVisible } = useInViewFadeIn();

  return (
    <article
      ref={ref}
      className={`rounded-2xl bg-[#CFC9BB] p-6 shadow-sm transition duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <span className="inline-flex items-center rounded-full bg-[#5F8E9B] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white">
        Step {step.step}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-[#2A2A2A]">{step.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#2A2A2A]/80">{step.description}</p>
    </article>
  );
}

export default function HowWeWorkSection() {
  return (
    <section id="our-approach" className="border-b border-slate-200 bg-[#F2EFEA] py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          {/* Left column */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
                <span className="inline-block border-l-4 border-[#8E5A63] pl-3">Our Approach</span>
              </h2>
              <p className="text-base leading-7 text-[#2A2A2A]/80">
                A practical, structured way to strengthen SMEs and drive measurable growth.
              </p>
            </div>
            <div className="overflow-hidden border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="relative h-64 w-full sm:h-72 lg:h-[22rem]">
                <Image
                  src="/flip5.jpg"
                  alt="FlipWorks consulting workshop"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="grid grid-cols-1 gap-5">
              {approachSteps.map((step) => (
                <StepCard key={step.step} step={step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
