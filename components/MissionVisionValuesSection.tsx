"use client";

import Image from "next/image";
import { useInViewFadeIn } from "@/lib/useInViewFadeIn";

const missionVision = [
  {
    key: "vision",
    label: "Vision",
    text: "Build a thriving small-business ecosystem where growth is structured, sustainable, and measurable.",
  },
  {
    key: "mission",
    label: "Mission",
    text: "Support SMEs with practical consulting, coaching, and training that improves business performance and resilience.",
  },
  {
    key: "values",
    label: "Values",
    text: "Practicality, integrity, partnership, and measurable outcomes in every engagement.",
  },
];

type MissionVisionItem = (typeof missionVision)[number];

function MissionVisionBlock({ item }: { item: MissionVisionItem }) {
  const { ref, isVisible } = useInViewFadeIn();

  return (
    <article
      ref={ref}
      className={`flex gap-4 rounded-xl bg-[#CFC9BB] p-5 shadow-sm transform transition duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#5F8E9B] text-sm font-semibold text-white">
        {item.label.charAt(0)}
      </div>
      <div>
        <h3 className="text-sm font-semibold leading-6 text-[#2A2A2A]">{item.label}</h3>
        <p className="mt-1 text-sm leading-6 text-[#2A2A2A]/80">{item.text}</p>
      </div>
    </article>
  );
}

export default function MissionVisionValuesSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Left column: title + stacked blocks */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
              <span className="inline-block border-l-4 border-[#8E5A63] pl-3">Mission & Vision</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[#2A2A2A]/75">
              FlipWorks is guided by a clear view of where small businesses can go, and a practical
              mission for how to help them get there.
            </p>

            <div className="mt-6 space-y-4">
              {missionVision.map((item) => (
                <MissionVisionBlock key={item.key} item={item} />
              ))}
            </div>
          </div>

          {/* Right column: image */}
          <div className="overflow-hidden bg-[#E4F0F3] p-3 shadow-sm">
            <div className="relative h-[22rem] w-full overflow-hidden sm:h-[26rem] lg:h-[30rem]">
              <Image
                src="/flip4.jpg"
                alt="FlipWorks mission and vision visual"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
