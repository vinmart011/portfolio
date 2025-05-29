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
        <div className="flex-grow pt-60">
          <h1 className="text-center text-5xl">
            <span className="text-sm">{phraselang[currentPhraseIndex]}</span>{phrases[currentPhraseIndex]} <strong className="text-blue-500">Vincent Martinez</strong>
          </h1>
        </div>
    );
  }