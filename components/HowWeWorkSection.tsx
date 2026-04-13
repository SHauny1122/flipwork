import Image from "next/image";

const approachCards = [
  ["point of view", "honest and open", "what work and what don't"],
  ["recognise the need for “better”", "define where we are", "define where we want to  be better"],
  ["formulate the gap", "define why a can better gap exists", "pick point of pain"],
  ["design criteria", "project planning", "orientation for interventions", "roles"],
  ["orientation", "communication", "leader support", "involvement", "project lead"],
  ["evaluation against performance", "recognition and reward"],
  "Whats next",
];

const honeycombHexes = [
  { top: 0, left: 0, color: "#8AA0B6", number: "0.", topic: "Discusion" },
  { top: 103, left: 64, color: "#E4E4E4", number: "1.", topic: "Awareness" },
  { top: 207, left: 0, color: "#C88F8A", number: "2.", topic: "Diagnoses" },
  { top: 310, left: 64, color: "#8AA0B6", number: "3.", topic: "Design Intervetions" },
  { top: 414, left: 0, color: "#E4E4E4", number: "4.", topic: "Implementation" },
  { top: 517, left: 64, color: "#C88F8A", number: "5.", topic: "Review" },
  { top: 620, left: 0, color: "#8AA0B6", number: "6.", topic: "", title: "Whats next", imageSrc: "/swirl1.png" },
];

export default function HowWeWorkSection() {
  return (
    <section id="our-approach" className="border-b border-slate-200 bg-[#F2EFEA] py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          {/* Left column */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
                <span className="inline-block border-l-4 border-[#8E5A63] pl-3">Our Approach</span>
              </h2>
              <p className="text-base leading-7 text-[#2A2A2A]/80">
                A practical, structured way to strengthen SMEs and drive measurable growth.
              </p>
            </div>
            <div className="overflow-hidden border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
              <div className="relative h-64 w-full sm:h-72 lg:h-[22rem]">
                <Image
                  src="/flip5.jpg"
                  alt="FlipWorks consulting workshop"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="text-left text-4xl font-semibold tracking-tight text-[#2A2A2A]">Reality</h3>
            <div className="relative h-40 w-full sm:h-44 lg:h-52">
              <Image
                src="/swirlnobg.png"
                alt="Decorative swirl"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="origin-left scale-150 object-contain object-left"
              />
            </div>
            <div className="mx-auto max-w-[42rem] rounded-2xl border-2 border-[#2A2A2A] bg-[#C8C2B6] px-4 py-3 text-center text-xl leading-snug text-[#2A2A2A] sm:text-[1.9rem]">
              The phases look to be straightforward but in practice, expect some twist and turns!
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[210px_1fr] sm:gap-x-8 lg:grid-cols-[230px_1fr]">
            <div className="relative mx-auto h-[760px] w-[210px] sm:h-[760px] sm:w-[210px] lg:w-[230px]">
              {honeycombHexes.map((hex, index) => (
                <div
                  key={`${hex.top}-${hex.left}-${index}`}
                  className="absolute flex h-[130px] w-[143px] flex-col items-center justify-center px-3 text-center"
                  style={{
                    top: `${hex.top}px`,
                    left: `${hex.left}px`,
                    backgroundColor: hex.color,
                    clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                  }}
                >
                  {hex.imageSrc ? (
                    <>
                      <span className="text-lg font-semibold leading-none text-[#1A1A1A]">{hex.number}</span>
                      <span className="text-sm font-semibold leading-none text-[#1A1A1A] sm:text-base">{hex.title}</span>
                      <Image src={hex.imageSrc} alt="Whats next" width={44} height={44} className="mt-2 h-9 w-9 object-contain sm:h-11 sm:w-11" />
                    </>
                  ) : (
                    <>
                      <span className="text-lg font-semibold leading-none text-[#1A1A1A]">{hex.number}</span>
                      {hex.topic ? (
                        <span className="mt-1 text-xs font-medium leading-tight text-[#1A1A1A] sm:text-sm">{hex.topic}</span>
                      ) : null}
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="relative h-[760px]">
              {approachCards.map((text, index) => (
                <div
                  key={`approach-card-${index}`}
                  className={`absolute left-0 right-0 flex rounded-[1.4rem] bg-[#DEA093] px-6 text-base font-medium leading-6 text-[#2A2A2A] sm:text-lg ${
                    Array.isArray(text)
                      ? "h-[100px] items-start py-2"
                      : index === 6
                        ? "h-[100px] items-center justify-center py-2"
                        : "h-[92px] items-center py-3"
                  }`}
                  style={{ top: `${honeycombHexes[index].top + 18}px` }}
                >
                  {Array.isArray(text) ? (
                    <ul className="list-disc space-y-0 pl-5 text-xs leading-4 marker:text-[#2A2A2A] sm:text-sm sm:leading-4">
                      {text.map((item, itemIndex) => (
                        <li key={`approach-bullet-${index}-${itemIndex}`}>{item}</li>
                      ))}
                    </ul>
                  ) : index === 6 ? (
                    <div className="flex flex-col items-center text-center">
                      <span className="text-lg font-semibold leading-none text-[#1A1A1A]">{text}</span>
                      <Image src="/swirl1.png" alt="Whats next" width={36} height={36} className="mt-2 h-8 w-8 object-contain" />
                    </div>
                  ) : (
                    text
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
