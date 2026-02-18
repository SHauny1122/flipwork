export default function NSBCMembershipSection() {
  return (
    <section id="nsbc-membership" className="border-b border-gray-200 py-16 sm:py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">NSBC Membership</h2>
          <p className="mt-4 text-base text-gray-700">
            We help businesses understand, apply for, and benefit from NSBC membership support.
            From onboarding to practical utilization, FlipWorks ensures membership contributes to
            business growth.
          </p>
        </div>
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
          <h3 className="text-lg font-semibold text-gray-900">Membership Support Includes</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
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
