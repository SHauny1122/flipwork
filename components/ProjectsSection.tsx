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
    <section id="projects" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Projects</h2>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project) => (
            <article key={project.title} className="rounded-xl bg-[#FAFBFA] p-5 shadow-sm">
              <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-[#c6d7c8] bg-[#E7F0E8] text-sm text-slate-600">
                Project Image Placeholder
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
