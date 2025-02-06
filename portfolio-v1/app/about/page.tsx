'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardBody, Button } from "@heroui/react";

export default function Home() {
  const phrases = [
    "Hi, I'm", //English
    "Hola, soy", //Spanish
    "Bonjour, je suis", //French
    "Ciao, sono", //Italian
    "Hallo, ich bin", //German
    "こんにちは、私は", //Japanese
    "안녕하세요, 저는", //Korean
  ];
  const phraselang = [
    "(US)",
    "(ES)",
    "(FR)",
    "(IT)",
    "(DE)",
    "(JP)",
    "(KP)"
  ]

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  //cycle through phrases every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <div className="flex-grow mt-60">
          <h1 className="text-center text-5xl">
            <span className="text-sm">{phraselang[currentPhraseIndex]}</span>{phrases[currentPhraseIndex]} <strong className="text-blue-500">Vincent Martinez</strong>
          </h1>
        </div>

        <footer className="flex gap-6 flex-wrap items-center justify-center p-4 bg-gray-800 text-white">
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
      </main>
    </>
  );
}
