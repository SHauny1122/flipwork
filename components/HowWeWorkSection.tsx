const steps = [
  "Understand the business",
  "Align strategy and operations",
  "Enable execution and growth",
];

export default function HowWeWorkSection() {
  return (
    <section id="how-we-work" className="border-b border-gray-200 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">How We Work</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {steps.map((step, index) => (
            <article key={step} className="rounded-lg border border-gray-200 p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
