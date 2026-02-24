export default function NSBCMembershipSection() {
  return (
    <section id="nsbc-membership" className="border-b border-slate-200 bg-[#E7F0E8] py-16">
      <div className="mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            <span className="inline-block border-l-4 border-[#8E5A63] pl-3">NSBC Membership</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            We help businesses understand, apply for, and benefit from NSBC membership support.
            From onboarding to practical utilization, FlipWorks ensures membership contributes to
            business growth.
          </p>
        </div>

        <div className="rounded-xl bg-[#FAFBFA] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">Membership Support Includes</h3>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <li>• Membership readiness guidance</li>
            <li>• Application and documentation support</li>
            <li>• Value-extraction planning</li>
            <li>• Ongoing advisory and accountability</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
