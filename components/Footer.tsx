const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-gray-200">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold">FlipWorks</h3>
          <p className="mt-3 text-sm text-gray-300">
            Consulting and small-business support focused on practical growth.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300">Navigation</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300">Follow Us</h4>
          <div className="mt-3 flex gap-2">
            <span className="rounded border border-gray-700 px-2 py-1 text-xs">FB</span>
            <span className="rounded border border-gray-700 px-2 py-1 text-xs">LI</span>
            <span className="rounded border border-gray-700 px-2 py-1 text-xs">IG</span>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 w-full max-w-6xl px-4 text-xs text-gray-400 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} FlipWorks. All rights reserved.
      </p>
    </footer>
  );
}
