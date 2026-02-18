const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#nsbc-membership", label: "NSBC Membership" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white">
      <nav className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="text-lg font-semibold text-gray-900">
            FlipWorks
          </a>

          <a
            href="#contact"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Book a Discussion
          </a>
        </div>

        <ul className="mt-4 flex gap-4 overflow-x-auto pb-1">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a href={link.href} className="text-sm text-gray-700 hover:text-gray-900">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
