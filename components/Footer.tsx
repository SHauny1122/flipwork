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
    <footer className="bg-[#F2EFEA] py-14">
      <div className="mx-auto grid w-full max-w-[108rem] grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-start gap-3">
            <Image src="/flipw new logo.png" alt="FlipWorks logo" width={43} height={43} />
            <h3 className="flex flex-col leading-none text-[#2A2A2A]">
              <span className="flex items-end gap-1.5">
                <span className="flex items-center gap-1 text-lg font-semibold tracking-tight">
                  <span className="relative inline-block leading-none">
                    <span className="text-[#5F8E9B]">FL</span>
                    <span className="text-[#8E5A63]">i</span>
                    <span className="text-[#5F8E9B]">P</span>
                    <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-[#8E5A63]" />
                  </span>
                  <span className="text-[#8E5A63]">.</span>
                  <span className="text-[#4F79A8]">WORKS</span>
                </span>
                <span className="-translate-y-1.5 pb-[1px] text-[0.62rem] font-semibold tracking-tight sm:text-[0.72rem]">PTY Ltd.</span>
              </span>
              <span className="mt-0 pl-[4.85rem] text-[1.15rem] font-medium tracking-tight sm:text-[1.35rem]">Consulting</span>
            </h3>
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
            <p>info@flipworks.co.za</p>
            <p>+27827740092</p>
            <p>Centurion , Gauteng</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 w-full max-w-[108rem] border-t border-[#c6d7c8] px-4 pt-6 text-xs text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} FlipWorks. All rights reserved.
      </p>
    </footer>
  );
}
