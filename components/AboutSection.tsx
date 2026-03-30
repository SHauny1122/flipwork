import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-slate-200 bg-[#E6E7EA] py-16">
      <div className="mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <div className="mb-4 flex justify-center">
            <Image src="/flipworks new logo2.jpg" alt="FlipWorks logo" width={84} height={84} className="h-auto w-16 sm:w-20" />
          </div>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-[#2A2A2A]">About FlipWorks Consulting</h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-[#2A2A2A] sm:text-lg">
            <p className="text-center text-3xl font-semibold leading-tight text-[#4F79A8] sm:text-4xl">
              “The Consulting partner where we are working together, Flipping the Works and designing a Better
              Business!”
            </p>
            <p>
              FlipWorks is the partner for small and medium businesses, where we are working through a practical
              involved process, igniting new possibilities to make your business better.
            </p>
            <p>
              We provide an affordable, accessible and practical results-oriented consulting services, with hands-on
              partnership-based implementation and support which are aligned with limited budgets, time and internal
              resources.
            </p>
            <p>
              Services are designed and tailored for creating better conditions by which your business can thrive,
              grow and evolve in the face of uncertainty and constant challenges.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-4 flex justify-center">
            <Image src="/fwlogo.png" alt="NSBC partner logo" width={168} height={168} className="h-auto w-32 sm:w-40" />
          </div>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-[#2A2A2A]">About NSBC Africa Platinum Membership</h2>
          <div className="mt-5 space-y-5 text-base leading-7 text-[#2A2A2A] sm:text-lg">
            <p className="text-center text-3xl font-semibold leading-tight text-[#3F67FF] sm:text-4xl">
              Join Conversations and initiatives for Small and Medium Business Entrepreneurs in South Africa and Africa
            </p>
            <p>
              @ FlipWorks we advocate for Small and Medium Enterprises and in support of our beliefs we would
              encourage all SME businesses to join an efficient membership solution.
            </p>
            <p>
              We became an official NSBC licensee for their Platinum Membership and engages with SMEs to join the
              NSBC Platinum Membership or the Free option with limited benefits.
            </p>
            <p>
              For FlipWorks this is a continuous primary project where we will support and engage the SME community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
