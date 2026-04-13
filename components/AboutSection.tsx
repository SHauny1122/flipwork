import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-slate-200 bg-[#E6E7EA] py-16">
      <div className="mx-auto grid w-full max-w-[108rem] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="rounded-[2rem] border-2 border-[#9CA3AF] px-6 py-8 sm:px-8">
          <p className="text-center text-2xl font-medium text-[#2A2A2A] sm:text-[2rem]">About:</p>
          <div className="mb-4 flex justify-center">
            <Image src="/flipworks new logo2.jpg" alt="FlipWorks logo" width={84} height={84} className="h-auto w-16 sm:w-20" />
          </div>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-[#2A2A2A]">FlipWorks Consulting</h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-[#2A2A2A] sm:text-lg">
            <p className="text-center text-3xl font-semibold leading-tight text-[#4F79A8] sm:text-4xl">
              “The Consulting partner where we are working together, Flipping the Works and Designing a Better
              Business!”
            </p>
            <ul className="list-disc space-y-2 pl-7 marker:text-[#2A2A2A]">
              <li>the partner for small and medium businesses, igniting new possibilities to make your business better.</li>
              <li>
                affordable, accessible and practical results-oriented consulting , aligned with limited budgets, time
                and internal resources.
              </li>
              <li>
                consulting is designed and tailored by which your business can thrive, grow and evolve in the face of
                uncertainty and constant challenges.
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border-2 border-[#E3265D] px-6 py-8 sm:px-8">
          <p className="text-center text-2xl font-medium text-[#2A2A2A] sm:text-[2rem]">About:</p>
          <div className="mb-4 flex justify-center">
            <Image src="/fwlogo.png" alt="NSBC partner logo" width={168} height={168} className="h-auto w-32 sm:w-40" />
          </div>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-[#2A2A2A]">About NSBC Africa Platinum Membership</h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-[#2A2A2A] sm:text-lg">
            <p className="text-center text-3xl font-semibold leading-tight text-[#3F67FF] sm:text-4xl">
              Join Conversations and initiatives for Small and Medium Business Entrepreneurs in South Africa and Africa
            </p>
            <ul className="list-disc space-y-2 pl-7 marker:text-[#2A2A2A]">
              <li>
                we advocate for Small and Medium Enterprises and encourage all SME businesses to join an efficient
                membership solution.
              </li>
              <li>
                we are an official NSBC licensee for NSBC Africa Platinum Membership and engages with SMEs to join it.
              </li>
              <li>
                this is a ongoing primary project where we will support and engage with businesses in the SME
                landscape.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
