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
            <span className="text-sm">{phraselang[currentPhraseIndex]}</span>{phrases[currentPhraseIndex]} <strong className="pl-4 text-blue-500"><div className=" transition-all duration-200 ease-in-out hover:skew-x-[-12deg]">Vincent Martinez</div></strong>
          </h1>
        </div>
    );
  }