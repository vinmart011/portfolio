'use client'
import Image from "next/image";
import { Card, CardBody, Button, Avatar } from "@heroui/react";
import DigitalClock from "@/components/digitalclock";
import Phrase from "@/components/phraseGenerator";

export default function Home() {
  return (
    <main className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Phrase />
        
        <div className="flex flex-col sm:flex-row justify-center items-center mt-20 gap-y-8 sm:gap-y-0 sm:gap-x-20">
          <Avatar
            src="/github-mark-white.svg"
            alt="GitHub Icon"
            fallback="GH"
            className="flex border-1.5 bg-cyan-300 border-gray-300 w-[60px] h-[60px] shadow-lg shadow-slate-400 transition duration-300 ease-in-out hover:scale-110"
          />
          <Avatar
            src="/lnsvg.png"
            alt="LinkedIn Icon"
            fallback="LN"
            className="flex border-1.5 bg-cyan-300 border-gray-300 w-[60px] h-[60px] shadow-lg shadow-slate-400 transition duration-300 ease-in-out hover:scale-110"
          />
          <Avatar
            src="/email.png"
            alt="Email Icon"
            fallback="EM"
            className="flex border-1.5 bg-cyan-300 border-neutral-100 w-[60px] h-[60px] shadow-lg shadow-slate-400 transition duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </main>
  );
}
