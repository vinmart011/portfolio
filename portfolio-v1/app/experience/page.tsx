'use client'
import { useRef, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, CardBody, Button, Image, Avatar, Divider } from "@heroui/react";
import DownloadSVG from "@/components/downloadsvg";

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
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start pt-8 px-4">

          <div className="flex-1">
            <h2 className="mt-4 text-3xl italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-600 font-proxima font-bold">
              About
            </h2>
            <Divider className="h-[2px] w-[40%] bg-cyan-600" />
            <p className="mt-4 text-lg md:text-xl font-proxima">
              My name is Vincent Martinez and I am a software engineer with a Bachelors of Science in Computer Science from the University of California, Riverside.
            </p>

            <h2 className="mt-8 text-3xl italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-600 font-proxima font-bold">
              Interests
            </h2>
            <Divider className="h-[3px] w-[40%] bg-cyan-600" />
            <p className="mt-4 text-lg md:text-xl font-proxima">
              I love writing code that expresses my creativity and my passion for technology. To that extent, I enjoy making websites, using C++, and exploring what it takes to make a video game.
            </p>

            <h2 className="mt-8 text-3xl italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-600 font-proxima font-bold">
              Hobbies
            </h2>
            <Divider className="h-[2px] w-[40%] bg-cyan-600" />
            <p className="mt-4 text-lg md:text-xl font-proxima">
              When I'm not working on code, I enjoy exercising, learning new ways to cook, and figuring out how to play guitar. I would love to travel more often and experience new cultures as well!
            </p>
          </div>

          <div className="flex items-center justify-center w-full max-w-md mx-auto">
            <div className="relative w-full pb-20 group">
              <Card className="bg-gradient-to-br from-cyan-500 to-pink-600">
                <CardBody className="flex items-center transition-opacity duration-200">
                  <div className="flex absolute items-center justify-center w-[50%] h-[50%]">
                    <Button href="resume.pdf" endContent={<DownloadSVG />} className="w-full h-[20%] group-hover:opacity-100 translate-y-[200%]  opacity-0 z-20 bg-gradient-to-br from-cyan-300 to-pink-300 via-blue-300 font-proxima">Download PDF</Button> 
                  </div>
                  <Image id="resume" src="resume.png" className="border-0 group-hover:opacity-10 object-cover h-full w-full z-10" />
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
