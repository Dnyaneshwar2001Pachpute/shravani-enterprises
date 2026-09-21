"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      {/* Main Navbar */}
      <div className="flex h-[78px] w-full items-center justify-between px-4 sm:px-6 lg:px-10">
        
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center"
        >
          <Image
            src={logo}
            alt="Shravani Enterprises"
            priority
            width={170}
            height={60}
            className="h-[60px] w-[70px] object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-[#12334b] transition-colors duration-200 hover:text-[#f58220]"
            >
              {item.name}
            </Link>
          ))}

          {/* Get Quote */}
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-md bg-[#f58220] px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#df6d10] hover:shadow-lg"
          >
            <Phone size={17} />
            Get Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-[#12334b] transition hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white shadow-lg lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-gray-100 py-4 text-base font-semibold text-[#12334b] transition-colors hover:text-[#f58220]"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Get Quote */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#f58220] px-5 py-3 font-bold text-white transition hover:bg-[#df6d10]"
            >
              <Phone size={18} />
              Get Quote
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}