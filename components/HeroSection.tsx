import Image from "next/image";

const heroCollage = [
  { src: "/1of4.jpg", alt: "FlipWorks collaboration detail 1" },
  { src: "/2of4.webp", alt: "FlipWorks collaboration detail 2" },
  { src: "/3of4.jpg", alt: "FlipWorks collaboration detail 3" },
  { src: "/4of4.jpg", alt: "FlipWorks collaboration detail 4" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-200 bg-[#F2EFEA] py-12 sm:py-16">
      {/* Decorative vertical accent bars */}
      {/* Left-side mauve bar */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0">
        <div className="h-full w-[8px] bg-[#8E5A63] sm:w-[14px] lg:w-[24px]" />
      </div>

      {/* Far right stacked bars */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 flex items-stretch">
        {/* Thicker teal bar */}
        <div className="h-full w-[18px] bg-[#5F8E9B] sm:w-[56px] lg:w-[128px]" />
        {/* Thinner blue bar */}
        <div className="h-full w-[8px] bg-[#4F79A8] sm:w-[24px] lg:w-[48px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="-ml-6 max-w-2xl pr-6 sm:-ml-2 sm:pr-0 lg:ml-0 lg:-translate-x-36 xl:-translate-x-40">
          <h1 className="text-[2.2rem] font-bold leading-[1.05] tracking-tight sm:text-[3.8rem] sm:leading-tight lg:text-[4.6rem]">
            <span className="block text-[#5F8E9B]">
              (Re) Design{" "}
              <span className="relative inline-block align-baseline">
                <span className="relative z-10">a</span>
                {/* Handwritten "Your" above the A */}
                <span
                  className="pointer-events-none absolute -top-6 left-1 text-xl text-[#8E5A63] sm:-top-8 sm:text-4xl"
                  style={{
                    fontFamily: "'Segoe Script', 'Comic Sans MS', cursive",
                    transform: "rotate(-10deg)",
                  }}
                >
                  Your
                </span>
                {/* Diagonal strike-through line */}
                <span
                  className="pointer-events-none absolute -left-1 -right-2 top-[56%] z-20 h-[2px] rounded-full bg-[#8E5A63] sm:-left-2 sm:-right-3 sm:top-[54%] sm:h-[3px]"
                  style={{ transform: "rotate(-14deg)" }}
                />
              </span>
            </span>
            <span className="block">
              <span className="text-[#8E5A63]">Better</span>{" "}
              <span className="text-[#4F79A8]">Business.</span>
            </span>
          </h1>
          <p className="mt-5 text-base leading-7 text-[#2A2A2A] sm:text-lg">
            <span className="font-bold">B</span>etter <span className="font-bold">B</span>usinesses are the ones that
            approach problems in a different way, turning problems situations into opportunities.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="w-full rounded-lg bg-[#5F8E9B] px-5 py-3 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#4F79A8] sm:w-auto"
            >
              Book a Discussion
            </a>
            <a
              href="#about"
              className="w-full rounded-lg bg-[#4F79A8] px-5 py-3 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3f6489] sm:w-auto"
            >
              Read More
            </a>
          </div>

          <div className="mt-3 h-1 w-full max-w-[44rem] rounded-full bg-[#8E5A63]" />

          <div className="mt-5 flex flex-col items-center gap-5 text-sm sm:mt-6 sm:flex-row sm:items-end sm:gap-8">
            <div className="flex flex-col items-center gap-3 sm:items-start">
              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-[#E3265D] bg-[#2A4F86] text-center font-semibold leading-tight text-white shadow-sm">
                <span className="text-base">nsbc.</span>
                <span className="text-[#F9C846]">africa</span>
              </div>
              <div className="rounded-full border-4 border-[#E3265D] bg-[#1F5477] px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#F9C846] shadow-sm">
                Licensee
              </div>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-[#1F5477] px-4 py-2 text-xs font-medium text-white shadow-sm sm:px-5 sm:text-sm">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[#1F5477]">✉</span>
                <span className="break-all">fanie@nsbclicensee.africa</span>
              </div>
            </div>
            <p className="max-w-[22rem] text-center text-xl font-semibold leading-tight text-[#4F79A8] sm:mb-1 sm:text-left sm:text-4xl">
              Join Conversations and initiatives for Small Business Entrepreneurs in Africa
            </p>
          </div>
        </div>

        <div className="relative space-y-8 transition-transform duration-300 sm:space-y-10 lg:z-10 lg:translate-x-16 xl:translate-x-28">
          <div className="pointer-events-none absolute -right-12 -top-16 z-20 hidden grid-cols-4 gap-3 sm:grid">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-white" />
            ))}
          </div>

          <div className="overflow-hidden border-2 border-black bg-[#E4F0F3] p-3 shadow-sm">
            <div className="relative h-80 w-full overflow-hidden sm:h-96 lg:h-[440px]">
              <Image
                src="/new cover image.png"
                alt="FlipWorks consulting discussion"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover filter grayscale"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {heroCollage.map((item) => (
              <div
                key={item.src}
                className="relative h-24 overflow-hidden border-2 border-black bg-[#F2EFEA] sm:h-28 lg:h-32"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 12vw, 22vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
