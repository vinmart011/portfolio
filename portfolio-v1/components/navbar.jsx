'use client'
import {Navbar, NavbarContent, NavbarItem, Link} from "@heroui/react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/experience", label: "experience" },
    { href: "/projects", label: "projects" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <Navbar isBordered maxWidth="full" className="shadow-lg shadow-indigo-200 backdrop-blur-sm bg-white/80 sticky top-0 z-50">
      <NavbarContent className="w-full" data-justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.href}>
            <Link
              className={`text-color-black hover:text-color-blue ${
                pathname === link.href ? "font-bold text-color-blue underline" : ""
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}