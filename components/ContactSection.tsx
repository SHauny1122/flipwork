export default function ContactSection() {
  return (
    <section id="contact" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Contact</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Let&apos;s discuss your goals and practical next steps for growth.
          </p>
          <div className="mt-5 space-y-3 text-sm text-slate-700">
            <p>Email: hello@flipworks.co.za</p>
            <p>Phone: +27 00 000 0000</p>
            <p>Address: Johannesburg, South Africa</p>
          </div>
        </div>

        <form className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-slate-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
