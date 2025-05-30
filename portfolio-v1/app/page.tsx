'use client'
import Image from "next/image";
import { Card, CardBody, Button } from "@heroui/react";
import DigitalClock from "@/components/digitalclock"
import Phrase from "@/components/phraseGenerator"


export default function Home() {

  return (
    <>
      <main className="relative flex flex-col min-h-screen pl-40 pr-40 pt-10">
        <div className="absolute inset-0 bg-[url('/LW002.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/70 to-sky-300/70">
          {/* <div className="flex justify-end">
            <DigitalClock scale={.4}/>
          </div> */}
            <Phrase />
          </div>
        </div>
      </main>
      {/* <footer className="flex gap-6 flex-wrap items-center justify-center p-4 bg-gray-800 text-white">
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
        </footer> */}
    </>
  );
}
