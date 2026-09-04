"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const MyNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between">
      <Link href="/"></Link>

      {/* Desktop nav */}
      <div className="text-white hidden sm:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-gray-300 hover:underline text-sm hover:text-SunsetOrange"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger button */}
      <button
        className="sm:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col gap-4 bg-wayneBlack text-white p-6 sm:hidden z-50">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-300 hover:underline text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default MyNavigation;
