'use client'
import Image from "next/image";
import {Card, CardBody, Button} from "@heroui/react"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle,NavbarMenu,NavbarMenuItem, Link} from "@heroui/react";

export default function Home() {
  return (
    <>
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
      <main className="flex justify-center">
        <h1 className="">
          hi, I'm <strong>Vincent Martinez</strong>
        </h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center ">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </>
  );
}
