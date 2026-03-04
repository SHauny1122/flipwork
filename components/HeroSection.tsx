import Image from "next/image";

const heroCollage = [
  { src: "/1of4.jpg", alt: "FlipWorks collaboration detail 1" },
  { src: "/2of4.webp", alt: "FlipWorks collaboration detail 2" },
  { src: "/3of4.jpg", alt: "FlipWorks collaboration detail 3" },
  { src: "/4of4.jpg", alt: "FlipWorks collaboration detail 4" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-slate-200 bg-[#F2EFEA] py-16">
      {/* Decorative vertical accent bars */}
      {/* Left-side mauve bar */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0">
        <div className="h-full w-[24px] bg-[#8E5A63]" />
      </div>

      {/* Far right stacked bars */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 flex items-stretch">
        {/* Thicker teal bar */}
        <div className="h-full w-[128px] bg-[#5F8E9B]" />
        {/* Thinner blue bar */}
        <div className="h-full w-[48px] bg-[#4F79A8]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-[4.1rem] font-bold leading-tight tracking-tight sm:text-[4.6rem]">
            <span className="block text-[#5F8E9B]">
              (Re) Design{" "}
              <span className="relative inline-block align-baseline">
                <span className="relative z-10">A</span>
                {/* Handwritten "Your" above the A */}
                <span
                  className="pointer-events-none absolute -top-8 left-1 text-lg sm:text-2xl text-[#8E5A63]"
                  style={{
                    fontFamily: "'Segoe Script', 'Comic Sans MS', cursive",
                    transform: "rotate(-10deg)",
                  }}
                >
                  Your
                </span>
                {/* Diagonal strike-through line */}
                <span
                  className="pointer-events-none absolute left-0 right-0 top-1/2 z-20 h-[3px] bg-[#8E5A63]"
                  style={{ transform: "rotate(-18deg)" }}
                />
              </span>
            </span>
            <span className="block text-[#8E5A63]">Better</span>
            <span className="block text-[#4F79A8]">Business.</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-[#4F79A8] sm:text-lg">
            We help small businesses improve strategy, operations, and growth through practical
            consulting and coaching.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-lg bg-[#5F8E9B] px-5 py-3 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#4F79A8]"
            >
              Book a Discussion
            </a>
            <a
              href="#about"
              className="rounded-lg bg-[#4F79A8] px-5 py-3 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3f6489]"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative space-y-8 transition-transform duration-300 sm:space-y-10 lg:z-10 lg:translate-x-16 xl:translate-x-28">
          <div className="overflow-hidden bg-[#E4F0F3] p-3 shadow-sm">
            <div className="relative h-80 w-full overflow-hidden sm:h-96 lg:h-[440px]">
              <Image
                src="/heroflip.jpg"
                alt="FlipWorks consulting discussion"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {heroCollage.map((item) => (
              <div
                key={item.src}
                className="relative h-24 overflow-hidden rounded-md border border-white/40 bg-[#F2EFEA] sm:h-28 lg:h-32"
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
