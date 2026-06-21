"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#project" },
  { name: "Recommendations", href: "#recommendation" },
  { name: "Certifications", href: "#certification" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop & Tablet */}
      <nav className="absolute top-[30px] left-1/2 z-30 hidden -translate-x-1/2 md:block">
        <ul className="flex gap-8 lg:gap-12 text-white">
          {navLinks.map((link, index) => (
            <li
              key={link.name}
              className={`
                relative
                cursor-pointer
                text-[15px]
                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[3px]
                after:bg-black
                after:transition-all
                after:duration-300
                ${
                  index === 0
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
              `}
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <div className="absolute right-5 top-5 z-40 md:hidden">
        <button onClick={() => setMenuOpen(true)}>
          <Menu size={30} color="white" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#f5f5f5]">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-6 top-6"
          >
            <X size={34} color="black" />
          </button>

          <div className="flex h-full items-center justify-center">
            <ul className="space-y-10 text-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-[20px] text-black"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}