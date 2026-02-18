export default function HeroSection() {
  return (
    <section id="home" className="border-b border-gray-200 bg-white py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Growing your SME stronger and more resilient
          </h1>
          <p className="mt-4 text-base text-gray-700 sm:text-lg">
            We help small businesses improve strategy, operations, and growth through practical
            consulting and coaching.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-700"
            >
              Book a Discussion
            </a>
            <a
              href="#about"
              className="rounded-md border border-gray-300 px-5 py-3 text-center text-sm font-medium text-gray-800 hover:bg-gray-100"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex min-h-64 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-500">
          Image Placeholder
        </div>
      </div>
    </section>
  );
}
