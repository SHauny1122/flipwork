"use client";

import Image from "next/image";
import { useInViewFadeIn } from "@/lib/useInViewFadeIn";

export default function MissionVisionValuesSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch">
          {/* Left column: title + statements */}
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
              <span className="inline-flex items-center border-l-4 border-[#8E5A63] pl-3">Mission & Vision</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-[#2A2A2A]/75">
              FlipWorks is guided by a clear view of where small businesses can go, and a practical
              mission for how to help them get there.
            </p>

            <div className="space-y-6 text-base leading-8 text-[#2A2A2A]">
              <div>
                <p className="text-lg font-semibold uppercase tracking-[0.3em] text-[#8E5A63]">Our Vision</p>
                <p className="mt-3">
                  To be involved where small and medium businesses are intentionally designed to thrive, remain resilient
                  through challenges, stay innovative by nature, and become deeply valued by their customers, employees,
                  and communities.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold uppercase tracking-[0.3em] text-[#4F79A8]">Our Vision Framework</p>
                <p className="mt-3 font-semibold text-[#5F8E9B]">
                  Strength in Complexity · Design-Led Improvement · Sustainable National Impact · People-Centred
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold uppercase tracking-[0.3em] text-[#5F8E9B]">Our Mission</p>
                <p className="mt-3">
                  For FlipWorks to become a trusted partner for SME growth across South Africa and the continent—creating
                  a future where small businesses access tailored, practical tools, conversations, knowledge, and
                  information that build foundational entrepreneurial competence and skills to succeed on every playing
                  field.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[28rem] w-full max-w-sm overflow-hidden border border-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:h-[32rem] lg:h-[36rem] lg:max-w-xs">
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
