"use client";

import { useInViewFadeIn } from "@/lib/useInViewFadeIn";

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

type Service = (typeof services)[number];

function ServiceCard({ service }: { service: Service }) {
  const { ref, isVisible } = useInViewFadeIn();

  return (
    <article
      ref={ref}
      className={`flex gap-4 rounded-xl bg-[#CFC9BB] p-5 shadow-sm transform transition duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.97]"}`}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#5F8E9B] text-sm font-semibold text-white">
        {service.icon}
      </div>
      <div>
        <h3 className="text-sm font-semibold leading-6 text-[#2A2A2A]">{service.title}</h3>
        <p className="mt-1 text-sm leading-6 text-[#2A2A2A]/80">{service.description}</p>
        <a
          href="#contact"
          className="mt-3 inline-flex text-sm font-medium text-[#4F79A8] underline-offset-4 hover:underline"
        >
          Learn More
        </a>
      </div>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
          <span className="inline-block border-l-4 border-[#8E5A63] pl-3">Services</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
