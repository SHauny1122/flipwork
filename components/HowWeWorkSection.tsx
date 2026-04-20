import Image from "next/image";

const approachSteps = [
  {
    number: "0.",
    title: "Discussion",
    points: ["point of view", "honest and open", "what work and what don't"],
  },
  {
    number: "1.",
    title: "Awareness",
    points: ["recognise the need for better", "define where we are", "where we want we to be"],
  },
  {
    number: "2.",
    title: "Diagnoses",
    points: ["formulate the gap", "define why a gap exists", "pick point of pain"],
  },
  {
    number: "3.",
    title: "Design interventions",
    points: ["design criteria", "project planning", "orientation for interventions", "roles"],
  },
  {
    number: "4.",
    title: "Implement",
    points: ["orientation", "communication", "leader support", "involvement", "project lead"],
  },
  {
    number: "5.",
    title: "Review",
    points: ["evaluation against performance", "recognition reward"],
  },
  {
    number: "6.",
    title: "What next",
    points: ["pick next point of pain."],
    hasSwirl: true,
  },
];

export default function HowWeWorkSection() {
  return (
    <section id="our-approach" className="border-b border-slate-200 bg-[#F2EFEA] py-16">
      <div className="mx-auto w-full max-w-[108rem] px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
            <span className="inline-block border-l-4 border-[#8E5A63] pl-3">Our Approach</span>
          </h2>

          <div className="space-y-2 text-center">
            <h3 className="text-[2rem] font-semibold leading-tight text-[#315BFF] underline decoration-2 underline-offset-4 sm:text-[2.2rem]">
              The mandate for continious re-invention:
            </h3>
            <p className="mx-auto max-w-6xl text-[2rem] font-semibold leading-tight text-[#315BFF] sm:text-[2.2rem]">
              “(Re-) Designing for a better business is generally considered not a usual thing. We are trying to see
              it differently. It must be built into the business DNA and culture, this idea that we haven’t got it
              right ....YET!”.
            </p>
          </div>

          <h3 className="text-center text-[2rem] font-semibold tracking-tight text-[#2A2A2A]">Theory</h3>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-7">
            {approachSteps.map((step) => (
              <article
                key={`${step.number}-${step.title}`}
                className="min-h-[236px] bg-[#E4E4E4] py-4 pl-10 pr-6 text-[#1F1F1F] [clip-path:polygon(0_0,82%_0,100%_50%,82%_100%,0_100%,14%_50%)]"
              >
                <div className="pr-1">
                  <p className="text-[1.35rem] font-semibold leading-none">{step.number}</p>
                  <p className="mt-1 text-[1.2rem] font-semibold leading-none underline decoration-2 underline-offset-2">
                    {step.title}
                  </p>
                  <ul className="mt-1.5 space-y-0 text-base leading-snug sm:text-[1.05rem]">
                    {step.points.map((item, index) => (
                      <li key={`${step.number}-${index}`}>
                        <span className="mr-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {step.hasSwirl ? (
                    <Image src="/swirl1.png" alt="What next" width={46} height={46} className="mx-auto mt-2 h-11 w-11 object-contain" />
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <h3 className="pt-2 text-center text-[2rem] font-semibold tracking-tight text-[#2A2A2A]">Practise</h3>

          <div className="overflow-hidden border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
            <div className="relative h-64 w-full sm:h-72 lg:h-[22rem]">
              <Image
                src="/flip5.jpg"
                alt="FlipWorks consulting workshop"
                fill
                sizes="(min-width: 1024px) 90vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mx-auto w-full max-w-[88rem] rounded-2xl border-2 border-[#2A2A2A] bg-[#C8C2B6] px-5 py-2 text-center text-base leading-snug text-[#2A2A2A] sm:text-lg lg:whitespace-nowrap">
            The phases look to be straightforward but in practice, expect some twist and turns!
          </div>
        </div>
      </div>
    </section>
  );
}
