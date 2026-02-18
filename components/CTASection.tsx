export default function CTASection() {
  return (
    <section className="border-b border-slate-200 bg-[#E7F0E8] py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#FAFBFA] px-6 py-12 text-center shadow-sm sm:px-10">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Ready to grow your business?
          </h2>
          <a
            href="#contact"
            className="mt-6 inline-flex rounded-lg bg-[#5F7F63] px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3F6B45]"
          >
            Book a Discussion
          </a>
        </div>
      </div>
    </section>
  );
}
