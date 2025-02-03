'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle,NavbarMenu,NavbarMenuItem, Link} from "@heroui/react";

export default function Navigation(){

    return (

        <Navbar isBordered maxWidth="full" className="">
        <NavbarContent className="w-full" data-justify="center">
          <NavbarItem>
            <Link href="/about">
            about
            </Link>
          </NavbarItem>
          <NavbarItem>
            experience
          </NavbarItem>
          <NavbarItem>
            projects
          </NavbarItem>
          <NavbarItem>
            contact
          </NavbarItem>
        </NavbarContent>
      </Navbar>

    );
}