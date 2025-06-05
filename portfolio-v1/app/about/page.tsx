'use client'
import { useRef, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, CardBody, Button, Image, Avatar, Divider } from "@heroui/react";

export default function Home() {

  const [carouselImages, setCarouselImages] = useState([
    "/portrait.jpeg",
    "/portrait2.png",
    "/portrait3.png",
  ]);
  const [hasMore, setHasMore] = useState(true);
  const fetchData = () => {
    setTimeout(() => {
      const newImages = [
        "/portrait.jpeg",
        "/portrait2.png",
        "/portrait3.png",
      ].map((img, idx) => `${img}?v=${carouselImages.length + idx}`);

      setCarouselImages((prev) => [...prev, ...newImages]);
    }, 1000);
  };

  return (
    <>
      <main className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat p-4 md:p-8">
            <div className="flex-col pl-40 pr-40 pt-8">
                <div className="flex">
                  <div className="flex-col">
                          <h2 className="mt-4 ml-2 text-3xl italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-600 font-proxima font-bold">About</h2>
                          <Divider className="h-[.5%] w-[12%] bg-cyan-600"/>
                          <p className="mt-4 ml-2 text-xl font-proxima">
                            My name is Vincent Martinez and I am a software engineer with a Bachelors of Science in Computer Science from the University of California, Riverside. 
                          </p>

                          <h2 className="mt-4 ml-2 text-3xl italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-600 font-proxima font-bold">Interests</h2>
                            <Divider className="h-[.7%] w-[15%] bg-cyan-600"/>
                          <p className="mt-4 ml-2 text-xl font-proxima">
                            I love writing code that expresses my creativity and my passion for technology. To that extent, I enjoy making websites, using C++, and exploring what it takes to make a video game.
                          </p>

                          <h2 className="mt-4 ml-2 text-3xl italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-600 font-proxima font-bold">Hobbies</h2>
                            <Divider className="h-[.5%] w-[15%] bg-cyan-600"/>
                          <p className="mt-4 ml-2 text-xl font-proxima">
                            When I'm not working on code, I enjoy exercising, learning new ways to cook, and figuring out how to play guitar. I would love to travel more often and experience new cultures as well!
                          </p>
                  </div> 

                  <div className="w-[100%] h-[100%]">
                    <svg height="280" width="360" className="fixed left-[63.2%] w-[80%] h-[60%]  z-0 ">
                        <defs>
                        <linearGradient id="polyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6ee7b7" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    <polygon points="225,22.5 387,115.5 387,303 225,397.5 63,303 63,115.5"
                    fill="url(#polyGradient)" stroke="#164e63" stroke-width="3" />
                  </svg>
                    {/* <div className="fixed left-[37%] skew-y-[-10deg] w-[80%] h-[60%] bg-gradient-to-br from-cyan-500 to-blue-800 mask-brush z-0 "></div> */}
                    <div className="z-10 pl-[40%]">
                      <Image
                        src="/portrait.png"
                        className=" w-full object-cover fade-rect pb-6"
                        height={400}
                        alt="Vincent Martinez"
                      />
                    </div>
                  </div>

                </div>
              </div>
        </main>
    </>
  );
}
