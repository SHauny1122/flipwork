const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16M7 4v6m10-6v6M5 11h14v9H5z" />
      </svg>
    ),
    title: "Business Consulting",
    description: "Strategic planning and operational improvements tailored for small businesses.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 14a4 4 0 1 0-4-4m4 4a4 4 0 1 0 4-4m-8 8a4 4 0 0 1 8 0m0 0a4 4 0 0 1 8 0" />
      </svg>
    ),
    title: "Coaching",
    description: "Leadership and team coaching to strengthen confidence and execution.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
    title: "Training",
    description: "Practical training programs focused on capability building and growth.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 7v6c0 4.4 3.4 7.8 8 8 4.6-.2 8-3.6 8-8V7z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.4" />
      </svg>
    ),
    title: "NSBC Membership Support",
    description: "Guidance on maximizing NSBC membership opportunities and resources.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Services</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex text-sm font-medium text-slate-900 underline-offset-4 hover:underline"
              >
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
