import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
            <span className="inline-flex items-center border-l-4 border-[#8E5A63] pl-3">
              <span>About&nbsp;</span>
              <span className="inline-flex items-center gap-1">
                <span className="relative inline-block leading-none">
                  <span className="text-[#5F8E9B]">FL</span>
                  <span className="text-[#8E5A63]">i</span>
                  <span className="text-[#5F8E9B]">P</span>
                  <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-[#8E5A63]" />
                </span>
                <span className="text-[#8E5A63]">.</span>
                <span className="text-[#4F79A8]">WORKS</span>
              </span>
            </span>
          </h2>
          <p className="mt-5 text-base leading-7 text-[#2A2A2A]/75">
            FlipWorks helps small businesses align strategy, build competence, and scale
            sustainably. We focus on practical implementation instead of theory.
          </p>
        </div>

        <div className="relative overflow-hidden bg-[#E4F0F3] p-3 shadow-sm transition-transform duration-300 lg:translate-x-10 xl:translate-x-16">
          <div className="relative h-[22rem] w-full overflow-hidden sm:h-[26rem] lg:h-[32rem]">
            <Image
              src="/flip2.jpg"
              alt="FlipWorks team working with a client"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
