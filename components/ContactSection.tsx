export default function ContactSection() {
  return (
    <section id="contact" className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto grid w-full max-w-[108rem] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div className="rounded-xl bg-[#FAFBFA] p-6 shadow-sm">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Contact</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Let&apos;s discuss your goals and practical next steps for growth.
          </p>
          <div className="mt-5 space-y-3 text-sm text-slate-700">
            <p>Email: info@flipworks.co.za</p>
            <p>Phone: +27827740092</p>
            <p>Address: Centurion , Gauteng</p>
          </div>
        </div>

        <form className="space-y-4 rounded-xl bg-[#FAFBFA] p-6 shadow-sm">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#5F7F63] focus:ring-2 focus:ring-[#E7F0E8]"
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
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#5F7F63] focus:ring-2 focus:ring-[#E7F0E8]"
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
              className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-[#5F7F63] focus:ring-2 focus:ring-[#E7F0E8]"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-[#5F7F63] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3F6B45]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
