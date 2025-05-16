'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle,NavbarMenu,NavbarMenuItem, Link} from "@heroui/react";

export default function Navigation(){

    return (

        <Navbar isBordered maxWidth="full" className="">
        <NavbarContent className="w-full" data-justify="center">
          <NavbarItem>
            <Link className="text-color-black hover:text-color-blue" href="/">
            about
            </Link>
          </NavbarItem>
          <NavbarItem>
          <Link className="text-color-black hover:text-color-blue" href="/experience">
            experience
            </Link>
          </NavbarItem>
          <NavbarItem>
          <Link className="text-color-black hover:text-color-blue" href="/projects">
            projects
            </Link>
          </NavbarItem>
          <NavbarItem>
          <Link className="text-color-black hover:text-color-blue" href="/contact">
            contact
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

    );
}