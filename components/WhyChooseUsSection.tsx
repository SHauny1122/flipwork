"use client";

import Image from "next/image";

const approachPoints = [
  "Not alone in making hard changes and decisions.",
  "Get clarity on what's actually happening.",
  "Collaborative assessment (not consultant dictating)",
  "It reveals money left on the table",
  "Creates team alignment",
  "Actionable from day one",
  "See exactly what will happen",
  "Adaptive (not rigid consulting)",
];

const valueCards = [
  {
    number: "01",
    iconSrc: "/cardiconbig1.png",
    title: "APPROACHABILITY",
    description: "We speak straight plain language, being responsive, jargon-free, and to the point.",
  },
  {
    number: "02",
    iconSrc: "/cardiconbig2.png",
    title: "OPENESS",
    description: "We only recommend what you truly need.",
  },
  {
    number: "03",
    iconSrc: "/cardiconbig3.png",
    title: "PARTNERING",
    description: "We are in this with you because relationships matter beyond the initial project",
  },
  {
    number: "04",
    iconSrc: "/cardiconbig4.png",
    title: "UNDERSTANDING",
    description: "For us understanding builds deeper connections than pure expertise.",
  },
  {
    number: "05",
    iconSrc: "/cardiconbig5.png",
    title: "PRACTICALITY",
    description: "We deliver actionable solutions that work in the real world.",
  },
  {
    number: "06",
    iconSrc: "/cardiconbig6.png",
    title: "VALUE CREATION",
    description: "Every recommendation must solve the issue or create other opportunities.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="border-b border-slate-200 bg-[#CFC9BB] py-16">
      <div className="mx-auto w-full max-w-[108rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.48fr_0.52fr] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
              <span className="inline-block border-l-4 border-[#8E5A63] pl-3">Why Choose a FlipWorks Approach</span>
            </h2>
            <ul className="space-y-2 pl-7 text-[1.05rem] leading-8 text-[#2A2A2A] marker:text-black">
              {approachPoints.map((point, index) => (
                <li key={`${point}-${index}`} className="list-disc">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden border border-white/40">
            <div className="relative h-64 w-full sm:h-80 lg:h-[31rem]">
              <Image
                src="/image8.png"
                alt="FlipWorks team collaborating in workshop"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <h3 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
            <span className="inline-block border-l-4 border-[#8E5A63] pl-3">We Value</span>
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {valueCards.map((card) => (
              <article key={card.number} className="rounded-[1.9rem] bg-[#E9E3CF] px-4 pb-4 pt-2 text-center">
                <div className="mr-auto flex w-fit items-center rounded-sm bg-[#2A9AA0] px-3 py-1 text-xs font-semibold tracking-wide text-white">
                  {card.number}
                </div>

                <div className="relative mx-auto mt-1 h-20 w-20">
                  <Image
                    src={card.iconSrc}
                    alt={`${card.title} icon`}
                    fill
                    sizes="80px"
                    className="scale-125 object-contain mix-blend-multiply"
                  />
                </div>

                <h4 className="mt-1.5 text-[1.02rem] font-bold tracking-tight text-[#2A2A2A]">{card.title}</h4>
                <div className="mx-auto mt-2 h-[2px] w-24 bg-[#C26775]" />
                <p className="mt-2 text-[1.02rem] leading-7 text-[#2A2A2A]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
