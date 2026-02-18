const services = [
  {
    title: "Business Consulting",
    description: "Strategic planning and operational improvements tailored for small businesses.",
  },
  {
    title: "Coaching",
    description: "Leadership and team coaching to strengthen confidence and execution.",
  },
  {
    title: "Training",
    description: "Practical training programs focused on capability building and growth.",
  },
  {
    title: "NSBC Membership Support",
    description: "Guidance on maximizing NSBC membership opportunities and resources.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-gray-200 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Services</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {services.map((service) => (
            <article key={service.title} className="rounded-lg border border-gray-200 p-5">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 text-xs text-gray-600">
                Icon
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{service.description}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-blue-700">
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
