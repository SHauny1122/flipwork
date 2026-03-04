"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#our-approach", label: "Our Approach" },
  { href: "#nsbc-membership", label: "NSBC Membership" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#F2EFEA]/95">
      <nav className="mx-auto w-full max-w-[96rem] px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <Image src="/flipworks new logo2.jpg" alt="FlipWorks logo" width={34} height={34} />
            <span className="flex items-center gap-1 text-lg font-semibold tracking-tight">
              <span className="relative inline-block leading-none">
                <span className="text-[#5F8E9B]">FL</span>
                <span className="text-[#8E5A63]">i</span>
                <span className="text-[#5F8E9B]">P</span>
                {/* underline under FLiP */}
                <span className="pointer-events-none absolute left-0 right-0 -bottom-1 h-[2px] bg-[#8E5A63]" />
              </span>
              <span className="text-[#8E5A63]">.</span>
              <span className="text-[#4F79A8]">WORKS</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[#2A2A2A]/70 transition-colors hover:text-[#4F79A8]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-lg bg-[#8E5A63] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#744750] md:inline-flex"
          >
            Book a Discussion
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-[#2A2A2A] shadow-sm transition-colors hover:bg-[#E4F0F3] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>

        <ul id="mobile-nav" className={`${menuOpen ? "mt-4 grid" : "hidden"} gap-3 md:hidden`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-[#2A2A2A] transition-colors hover:bg-[#E4F0F3]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex justify-center rounded-lg bg-[#8E5A63] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#744750]"
            >
              Book a Discussion
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
