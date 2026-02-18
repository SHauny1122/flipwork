import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Growing your SME stronger and more resilient
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We help small businesses improve strategy, operations, and growth through practical
            consulting and coaching.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-lg bg-[#5F7F63] px-5 py-3 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3F6B45]"
            >
              Book a Discussion
            </a>
            <a
              href="#about"
              className="rounded-lg border border-slate-300 px-5 py-3 text-center text-sm font-medium text-slate-700 transition-colors hover:bg-[#E7F0E8]"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#E7F0E8] p-3 shadow-sm">
          <div className="relative h-72 w-full overflow-hidden rounded-xl">
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
      </div>
    </section>
  );
}
