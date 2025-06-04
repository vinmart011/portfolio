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
                            <Divider className="h-[.5%] w-[15%] bg-cyan-600"/>
                          <p className="mt-4 ml-2 text-xl font-proxima">
                            I love writing code that expresses my creativity and my passion for technology. To that extent, I enjoy making websites, using C++, and exploring what it takes to make a video game.
                          </p>
                  </div> 

  {/* Splash background */}
  <Image
    src="/splash.jpg"
    className=" z-10  bg-gradient-to-br from-cyan-400 via-pink-300 to-indigo-300 " />
  {/* Portrait image */}
                    <div className="flex ml-4">
  <Image
    src="/portrait.jpeg"
    className="relative z-10 border-3 border-cyan-500 shadow-xl shadow-cyan-800 rounded-full"
    radius="lg"
    isBlurred={false}
    width={500}
    height={500}
    alt="Vincent Martinez"
  />
</div>
                </div>
{/* 
                <div 
                    id="carousel-scroll"
                    className="flex justify-center overflow-x-auto whitespace-nowrap py-8">
                      <InfiniteScroll
                        dataLength={carouselImages.length}
                        next={fetchData}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                          <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                          </p>
                        }
                        scrollableTarget="carousel-scroll"
                        className="flex flex-row gap-4">

                          {carouselImages.map((image, idx) => (
                            <Image
                            key={image + idx}
                            src={image}
                            alt="Vincent Martinez"
                            width={280}
                            height={360}
                            className="rounded-lg inline-block"
                          />
                      ))}
                    </InfiniteScroll>
                  </div> */}

              </div>
        </main>
    </>
  );
}
