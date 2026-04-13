import Image from "next/image";

const serviceTextCards = [
  "Add your first service description here.",
  "Add your second service description here.",
  "Add your third service description here.",
];

const hexColors = ["#8AA0B6", "#E4E4E4", "#C88F8A"];

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-slate-200 bg-[#C8BCA0] py-16">
      <div className="mx-auto w-full max-w-[108rem] px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-[#2A2A2A]">
          <span className="inline-block border-l-4 border-[#8E5A63] pl-3">Services</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(280px,1.05fr)_minmax(380px,1.6fr)] lg:items-start">
          <div>
            <div className="relative aspect-[4/2.65] w-full overflow-hidden border-2 border-white/60 shadow-sm">
              <Image src="/image8.png" alt="Services meeting" fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-[170px_1fr] sm:gap-x-8 lg:grid-cols-[190px_1fr]">
            <div className="relative mx-auto h-[350px] w-[170px] sm:h-[390px] sm:w-[190px]">
              <div
                className="absolute left-0 top-0 h-[110px] w-[120px] sm:h-[124px] sm:w-[136px] lg:h-[136px] lg:w-[150px]"
                style={{
                  backgroundColor: hexColors[0],
                  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                }}
              />
              <div
                className="absolute left-[48px] top-[92px] h-[110px] w-[120px] sm:left-[54px] sm:top-[102px] sm:h-[124px] sm:w-[136px] lg:left-[60px] lg:top-[112px] lg:h-[136px] lg:w-[150px]"
                style={{
                  backgroundColor: hexColors[1],
                  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                }}
              />
              <div
                className="absolute left-0 top-[184px] h-[110px] w-[120px] sm:top-[204px] sm:h-[124px] sm:w-[136px] lg:top-[224px] lg:h-[136px] lg:w-[150px]"
                style={{
                  backgroundColor: hexColors[2],
                  clipPath: "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)",
                }}
              />
            </div>

            <div className="flex flex-col gap-6 sm:gap-7 lg:gap-[2.1rem]">
              {serviceTextCards.map((text) => (
                <div key={text} className="rounded-[1.4rem] bg-[#DEA093] px-6 py-5 text-base font-medium leading-7 text-[#2A2A2A] sm:text-lg">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
