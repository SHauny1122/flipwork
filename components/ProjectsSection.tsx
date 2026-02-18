const projects = [
  {
    title: "Operations Improvement for Retail SME",
    description: "Streamlined processes and improved cost control for stronger margins.",
  },
  {
    title: "Growth Strategy for Service Business",
    description: "Defined market priorities and execution plans to support expansion.",
  },
  {
    title: "Team Capability Program",
    description: "Delivered practical training and coaching for better team performance.",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-gray-200 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Projects</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <article key={project.title} className="rounded-lg border border-gray-200 p-5">
              <div className="flex h-40 items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-500">
                Image Placeholder
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
