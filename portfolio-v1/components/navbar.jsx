'use client';
import { useState } from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@heroui/react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/experience", label: "experience" },
    { href: "/projects", label: "projects" },
    { href: "/contact", label: "contact" },
  ];

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <Navbar
      maxWidth="full"
      className="shadow-md shadow-indigo-200 backdrop-blur-sm bg-gray-50/90 sticky top-0 z-50"
    >
      <div className="flex justify-between items-center w-full px-4 py-3 sm:px-6">
        <strong className="font-proxima text-3xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-300">
          VM
        </strong>

        <button
          className="sm:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8 text-cyan-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <NavbarContent
        className="hidden sm:flex w-full justify-center items-center space-x-8 py-2"
        justify="center"
      >
        {navLinks.map((link) => (
          <NavbarItem key={link.href}>
            <Link
              href={link.href}
              className={`text-black-500 hover:text-transparent transition-all duration-200 ease-in-out hover:skew-x-[-12deg] bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-300 ${
                pathname === link.href
                  ? "font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-300 skew-x-[-12deg]"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-4 border-t border-indigo-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-lg text-black-600 hover:text-transparent transition-all duration-200 ease-in-out hover:skew-x-[-12deg] bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-300 ${
                pathname === link.href
                  ? "font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-300 skew-x-[-12deg]"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </Navbar>
  );
}
