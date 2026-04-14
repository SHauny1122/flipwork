"use client";

import Image from "next/image";

const middleSmallCards = [
  "A truly \"better\" business likely excels across multiple dimensions, not just one.",
  "Better Structure for Operational Excellence. processes, technology, culture.",
  "Better businesses align what's good for the business with what's good for stakeholders.",
  "Plan for Evolution. Static businesses rarely stay \"better\" for long.",
  "Better Design the Customer Experience",
  "Better Designed Value Proposition. Faster, cheaper, more effective.",
  "Identify the Core Problem Worth Solving.to become \"better\"",
];

export default function ProblemSection() {
  return (
    <section className="border-b border-slate-200 bg-[#F2EFEA] py-16">
      <div className="mx-auto w-full max-w-[108rem] px-4 sm:px-6 lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-6 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
              <span className="inline-block border-l-4 border-[#8E5A63] pl-3">The Problems We Flip</span>
            </h2>

            <p className="mt-3 text-center text-[2rem] font-medium leading-tight text-[#2A2A2A] sm:text-[2.2rem]">
              A "better" business isn&apos;t just about having a good product.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-7 text-[1.65rem] font-normal leading-tight text-[#2A2A2A] sm:text-[1.9rem]">
              <li className="font-normal">it&apos;s about creating a system where value creation, capture, and distribution work in harmony.</li>
              <li className="font-normal">It solves real problems elegantly,</li>
              <li className="font-normal">operates efficiently,</li>
              <li className="font-normal">treats people well,</li>
              <li className="font-normal">adapts to change, and</li>
              <li className="font-normal">builds compounding advantages over time.</li>
            </ul>

            <div className="mt-4 overflow-hidden border border-[#2A2A2A]/35 bg-[#E4F0F3]">
              <div className="relative h-[18rem] w-full overflow-hidden sm:h-[22rem] lg:h-[24rem]">
                <Image
                  src="/factorybandw.png"
                  alt="Industrial factory environment"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[0.52fr_0.48fr]">
            <div className="space-y-2 lg:flex lg:h-full lg:flex-col lg:justify-between lg:space-y-0">
              {middleSmallCards.map((text, index) => (
                <article key={`problem-middle-${index}`} className="rounded-lg bg-[#CFC9BB] px-3 py-2">
                  <p className="text-lg leading-snug text-[#1F1F1F] sm:text-xl">
                    <span className="mr-2 align-top text-black">•</span>
                    <span>{text}</span>
                  </p>
                </article>
              ))}
            </div>

            <div className="space-y-3">
              <article className="rounded-lg bg-[#CFC9BB] p-3">
                <div className="flex items-start gap-3">
                  <div className="rounded-sm bg-[#6EA6B1] px-2.5 py-1 text-lg font-semibold leading-none text-white sm:text-xl">
                    00
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold leading-snug text-[#1F1F1F] sm:text-2xl">The Development Spiral</h3>
                    <ul className="mt-1.5 list-disc space-y-1 pl-5 text-base leading-snug text-[#1F1F1F] sm:text-lg">
                      <li>Development processes work in a cycle, taking us to progressively higher levels of “better”</li>
                      <li>The spiral indicate the nature of development in stages and phases.</li>
                    </ul>
                  </div>
                </div>
              </article>

              <div className="overflow-hidden rounded-xl bg-[#F2EFEA] p-2">
                <div className="relative h-[19rem] w-full sm:h-[23rem] lg:h-[26rem]">
                  <Image
                    src="/stageswirl.png"
                    alt="Development spiral stages"
                    fill
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    className="object-contain mix-blend-multiply"
                  />
                </div>
              </div>
            </div>

            <article className="rounded-lg bg-[#CFC9BB] px-3 py-3 lg:col-span-2">
              <p className="text-xl font-medium leading-snug text-[#1F1F1F] sm:text-2xl">
                Continious benchmarking with other SME businesses
              </p>
              <p className="mt-1.5 text-base leading-snug text-[#1F1F1F] sm:text-lg">
                Join and Participate in Conversations and initiatives for SME&apos;s in South Africa and Africa. Become a
                Platinum Member, one of the most comprehensive platforms of its kind available.
              </p>
              <p className="mt-1.5 text-base leading-snug text-[#1F1F1F] sm:text-lg">
                Yearly subscription of R3850.00 (vat excl) / only R385 per month / many benefits and initiatives.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
