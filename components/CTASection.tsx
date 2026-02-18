export default function CTASection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-12 text-center shadow-sm sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Ready to grow your business?
          </h2>
          <a
            href="#contact"
            className="mt-6 inline-flex rounded-xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-700"
          >
            Book a Discussion
          </a>
        </div>
      </div>
    </section>
  );
}
