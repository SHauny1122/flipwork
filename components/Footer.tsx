import Image from "next/image";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#E7F0E8] py-14">
      <div className="mx-auto grid w-full max-w-[96rem] grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/flipworks-logo.png" alt="FlipWorks logo" width={28} height={28} />
            <h3 className="text-lg font-semibold tracking-tight text-slate-900">FlipWorks</h3>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
            Consulting and small-business support focused on practical growth.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-slate-600 transition-colors hover:text-[#3F6B45]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Contact</h4>
          <div className="mt-3 space-y-2 text-sm text-slate-600">
            <p>hello@flipworks.co.za</p>
            <p>+27 00 000 0000</p>
            <p>Johannesburg, South Africa</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 w-full max-w-[96rem] border-t border-[#c6d7c8] px-4 pt-6 text-xs text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} FlipWorks. All rights reserved.
      </p>
    </footer>
  );
}
