export default function CTASection() {
  return (
    <section className="border-b border-slate-200 bg-[#FAFBFA] py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-900/10 bg-[#16a34a] px-6 py-10 text-slate-900 shadow-sm sm:px-10 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Ready to grow your business?
            </h2>
            <p className="mt-3 text-sm leading-6 text-emerald-50/90">
              Book a short conversation to explore practical next steps for your SME.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-slate-900/10 bg-white px-7 py-3 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50"
          >
            Book a Discussion
          </a>
        </div>
      </div>
    </section>
  );
}
