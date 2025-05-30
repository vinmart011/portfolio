import { useState, useEffect } from "react";

export default function Phrases() {
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
        <div className="flex flex-row pt-60 justify-center text-center">
          <h1 className="flex text-6xl font-proxima">
            <span className="text-sm text-gray-600 font-proxima">{phraselang[currentPhraseIndex]}</span><span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-pink-400 h-20">{phrases[currentPhraseIndex]}</span> <strong className="pl-4"><div className=" transition-all duration-200 ease-in-out hover:skew-x-[-12deg] text-transparent bg-clip-text bg-gradient-to-bl from-cyan-600 to-cyan-400">Vincent Martinez</div></strong>
          </h1>
        </div>
    );
  }