"use client";

import Image from "next/image";

const problems = [
  {
    number: "01",
    title: "Inefficient Processes",
    description: "Manual, inconsistent workflows that slow down delivery and create avoidable errors.",
  },
  {
    number: "02",
    title: "Stagnant Revenue",
    description: "Sales activity without clear focus, measurement, or follow-through on high-value opportunities.",
  },
  {
    number: "03",
    title: "Lack of Clear Strategy",
    description: "Teams working hard but not always in the same direction, with priorities changing too often.",
  },
  {
    number: "04",
    title: "Operational Bottlenecks",
    description: "Key people and processes overloaded, creating delays and risk as the business tries to grow.",
  },
];

export default function ProblemSection() {
  return (
    <section className="border-b border-slate-200 bg-[#F2EFEA] py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left side copy */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
              <span className="inline-block border-l-4 border-[#8E5A63] pl-3">
                The Problem We Solve
              </span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[#2A2A2A]/75">
              Many SMEs feel the strain of growth: busy teams, patchwork processes, and goals that never
              quite translate into day-to-day execution. FlipWorks helps you untangle these challenges so
              the business can run with more focus, clarity, and control.
            </p>
          </div>

          {/* Right side problem list */}
          <div className="space-y-4">
            {problems.map((item) => (
              <div
                key={item.number}
                className="flex gap-4 rounded-xl bg-[#CFC9BB] p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#5F8E9B] text-sm font-semibold text-white">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-[#2A2A2A]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#2A2A2A]/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom image row */}
        <div className="mt-10 overflow-hidden bg-[#E4F0F3] p-3 shadow-sm">
          <div className="relative h-[18rem] w-full overflow-hidden sm:h-[22rem] lg:h-[24rem]">
            <Image
              src="/flip3.jpg"
              alt="FlipWorks solving problems with clients"
              fill
              sizes="(min-width: 1024px) 96rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
