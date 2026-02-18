export default function HeroSection() {
  return (
    <section id="home" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Growing your SME stronger and more resilient
          </h1>
          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            We help small businesses improve strategy, operations, and growth through practical
            consulting and coaching.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-xl bg-slate-900 px-5 py-3 text-center text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-700"
            >
              Book a Discussion
            </a>
            <a
              href="#about"
              className="rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="flex min-h-64 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-sm text-slate-500">
            Hero Visual Placeholder
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            Add a team photo or consulting workshop image.
          </p>
        </div>
      </div>
    </section>
  );
}
