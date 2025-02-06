'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle,NavbarMenu,NavbarMenuItem, Link} from "@heroui/react";

export default function Navigation(){

    return (

        <Navbar isBordered maxWidth="full" className=""       classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}>
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