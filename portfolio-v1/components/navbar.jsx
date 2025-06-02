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
    <Navbar maxWidth="full" className=" shadow-md shadow-indigo-200 backdrop-blur-sm bg-gray-50/90 sticky z-50" >
       <strong className="flex flex-start font-proxima text-3xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-300">VM</strong>
      <NavbarContent className="flex mr-[100px] w-full justify-center items-center" justify="center">
         
        {navLinks.map((link) => (
          <NavbarItem key={link.href}>
            <Link
              className={`text-black-500 hover:text-transparent transition-all duration-200 ease-in-out hover:skew-x-[-12deg] bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-300 ${
                pathname === link.href ? "font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-300 skew-x-[-12deg] " : ""
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