import { useState, useEffect } from "react";

export default function Phrases() {
  const phrases = [
    "Hi, I'm", // English
    "Hola, me llamo", // Spanish
    "こんにちは、私は", // Japanese
  ];
  const phraselang = ["(US)", "(ES)", "(JP)"];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Cycle through phrases every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex justify-center text-center pt-20 sm:pt-28 md:pt-[14%] px-4">
        <h1 className="flex flex-wrap justify-center text-3xl sm:text-5xl md:text-6xl font-proxima leading-tight">
          <span className="text-sm sm:text-base text-gray-600 pr-2">
            {phraselang[currentPhraseIndex]}
          </span>


          <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-pink-400">
            {phrases[currentPhraseIndex]}
          </span>

          <strong className="pl-4">
            <div className="transition-all duration-200 ease-in-out hover:skew-x-[-12deg] text-transparent bg-clip-text bg-gradient-to-bl from-cyan-600 to-pink-400">
              Vincent Martinez
            </div>
          </strong>
        </h1>
      </div>

      <div className="flex flex-col justify-center pt-4 sm:pt-5 px-4">
        <p className="text-cyan-800 text-center text-xl sm:text-2xl font-proxima font-semibold">
          [ Software Engineer ]
        </p>
      </div>
    </>
  );
}
