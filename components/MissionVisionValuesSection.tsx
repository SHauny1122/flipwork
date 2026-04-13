import Image from "next/image";

const whyPrinciples = [
  {
    title: "Strength in Complexity:",
    text: "Economic volatility, regulatory changes, infrastructure challenges, and competitive pressures demand more than generic advice.",
  },
  {
    title: "Design-Led Improvement:",
    text: "The world around you and your business is filled with uncertainty.",
  },
  {
    title: "Design-Led Improvement:",
    text: "But within that uncertainty exist innumerable opportunities to design or (re) design, game changing businesses.",
  },
  {
    title: "Design-Led Improvement:",
    text: "These opportunities are there for the taking.",
  },
  {
    title: "Design-Led Improvement:",
    text: "We believe businesses are designed and not merely managed.",
  },
  {
    title: "People-Centred:",
    text: "People create lasting value",
  },
  {
    title: "Sustainable National Impact:",
    text: "By helping SMEs getting better we contribute to job creation, economic growth, and a more competitive national economy.",
  },
  {
    title: "Benchmark Conversations",
    text: "Join Conversations and initiatives for SME's in South Africa and Africa. Become a Platinum Member of the most comprehensive platform of its kind available. Many benefits for",
  },
];

export default function MissionVisionValuesSection() {
  return (
    <section className="border-b border-slate-200 bg-[#2C9E9B] py-16">
      <div className="mx-auto w-full max-w-[108rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.72fr_0.28fr] lg:items-start">
          <div className="space-y-6">
            <div className="space-y-5 text-center text-[#F2EFEA]">
              <div className="space-y-2">
                <h2 className="text-4xl font-semibold tracking-tight underline decoration-2 underline-offset-4">Our Vision:</h2>
                <p className="mx-auto max-w-5xl text-[2rem] leading-tight font-semibold sm:text-[2.15rem]">
                  To be involved where small and medium businesses are intentionally designed to thrive, be resilient in
                  the face of challenges, innovative by nature, and deeply valued by their customers, employees and
                  communities.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-4xl font-semibold tracking-tight underline decoration-2 underline-offset-4">Our Mission:</h3>
                <p className="mx-auto max-w-5xl text-[2rem] leading-tight font-semibold sm:text-[2.15rem]">
                  To become a trusted partner for SMEs growth, creating a future where there is access to tailored,
                  practical tools, conversations, knowledge and information for businesses to become better on any
                  playing field.
                </p>
              </div>
            </div>

            <h3 className="text-4xl font-semibold tracking-tight text-[#F2EFEA] underline decoration-2 underline-offset-4">
              Our “WHY” Principles
            </h3>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:[grid-auto-rows:1fr]">
              {whyPrinciples.map((item, index) => (
                <article key={`${item.title}-${index}`} className="h-full rounded-lg bg-[#CFC9BB] p-2.5 text-[#1F1F1F]">
                  <div className="flex h-full gap-2">
                    <span className="block w-2.5 shrink-0 rounded-sm bg-[#3A87F5]" />
                    <div>
                      <h4 className="text-[1.05rem] font-semibold leading-tight sm:text-[1.2rem]">{item.title}</h4>
                      <p className="mt-1 text-[0.94rem] leading-6 sm:text-base sm:leading-7">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="overflow-hidden border border-[#1F4F59]">
            <div className="relative h-64 w-full sm:h-[34rem] lg:h-[60rem]">
              <Image
                src="/groupimage.png"
                alt="Vision and mission collage"
                fill
                sizes="(min-width: 1024px) 28vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
