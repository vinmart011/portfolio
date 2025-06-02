'use client'
import Image from "next/image";
import { Card, CardBody, Button } from "@heroui/react";
import DigitalClock from "@/components/digitalclock"
import Phrase from "@/components/phraseGenerator"


export default function Home() {

  return (
    <>
      <main className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Phrase />
        </div>
      </main>
    </>
  );
}
