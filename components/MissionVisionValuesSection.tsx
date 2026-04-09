import Image from "next/image";

const valueIcons = [
  { src: "/icon 1.png", label: "Practicality" },
  { src: "/icon2.png", label: "Approachability" },
  { src: "/icon3.png", label: "Openness" },
  { src: "/icon4.png", label: "Partnering" },
  { src: "/icon5.png", label: "Value Creation" },
  { src: "/icon6.png", label: "Understanding" },
];

export default function MissionVisionValuesSection() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-[#2A2A2A]">Our Vision:Framework</h2>

          <div className="space-y-4 text-base leading-7 text-[#2A2A2A] sm:text-lg">
            <p>
              <span className="font-semibold text-[#8E5A63]">Design-Led Improvement:</span> We believe businesses are
              designed and not merely managed.
            </p>
            <p>
              <span className="font-semibold text-[#8E5A63]">Strength in Complexity:</span> Economic volatility,
              regulatory changes, infrastructure challenges, and competitive pressures demand more than generic advice.
            </p>
            <p>
              <span className="font-semibold text-[#8E5A63]">People-Centred:</span> People create lasting value.
            </p>
            <p>
              <span className="font-semibold text-[#8E5A63]">Sustainable National Impact:</span> By helping SMEs get
              better we contribute to job creation, economic growth, and a more competitive national economy.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-center text-2xl font-semibold tracking-tight text-[#2A2A2A]">Our Vision</h3>
            <p className="text-base leading-7 text-[#2A2A2A] sm:text-lg">
              To be involved where small and medium businesses are intentionally designed to thrive, be resilient in the
              face of challenges, innovative by nature, and deeply valued by their customers, employees and
              communities.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-center text-2xl font-semibold tracking-tight text-[#2A2A2A]">Our Mission</h3>
            <p className="text-base leading-7 text-[#2A2A2A] sm:text-lg">
              To become a trusted partner for SMEs growth, creating a future where there is access to tailored,
              practical tools, conversations, knowledge and information for businesses to become better on any playing
              field.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-3 lg:grid-cols-6">
            {valueIcons.map((item) => (
              <div key={item.label} className="overflow-hidden border-2 border-white bg-[#1F5C86] shadow-sm">
                <div className="flex h-28 items-center justify-center px-4 py-3 sm:h-32">
                  <Image src={item.src} alt={item.label} width={86} height={86} className="h-16 w-16 object-contain sm:h-20 sm:w-20" />
                </div>
                <p className="border-t border-white/60 px-2 py-2 text-center text-lg font-medium leading-tight text-white">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
