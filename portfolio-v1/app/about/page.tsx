'use client'
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, CardBody, Button, Image } from "@heroui/react";

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
      <main className="min-h-screen pl-40 pr-40 pt-10">

        <div className="flex-col">
            <div className="flex">
              <div className="flex-col">
                  <h2 className=" mt-4 ml-2 text-3xl italic">About me</h2>
                  <p className="text-start mt-4 ml-2 text-xl">
                    My name is Vincent Martinez and I am a software engineer with a passion for creating beautiful and functional web applications. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies.
                  </p>
                  <h2 className=" mt-4 ml-2 text-3xl italic">Interests</h2>
                  <p className="text-start mt-4 ml-2 text-xl">
                  I am interested in networks, web development, and devops. 
                  </p>
                  <h2 className=" mt-4 ml-2 text-3xl italic">Hobbies</h2>
                  <p className="text-start mt-4 ml-2 text-xl">
                    Some of my hobbies include playing games, exercising frequently, and learning musical instruments. I am currently making a small video game in my freetime with the use of Unity and I hope to incorporate some music that I create for it as the soundtrack!
                  </p>
              </div>
              <div 
                id="carousel-scroll"
                className="w-full overflow-x-auto whitespace-nowrap py-8">
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
                  


                  {/* <div className="flex justify-center mt-2 ml-2">
                    <div className="flex">
                      <Card className="w-64 h-96 ml-5 mr-5">
                        <CardBody>
                          <Image 
                          isBlurred 
                          src="/portrait.jpeg" 
                          alt="Vincent Martinez" 
                          width={280} 
                          height={360} 
                          className="rounded-lg" />
                        </CardBody>
                      </Card>
                    </div>
                  </div> */}
                </InfiniteScroll>
                </div>
            </div>

          </div>

      {/* <div className="flex flex-col items-center my-8">
        <div className="relative w-80 h-56">
          <Image
            src={carouselImages[carouselIndex]}
            className="object-cover rounded-lg w-36 h-56"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <button onClick={prevImage} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Prev</button>
          <button onClick={nextImage} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Next</button>
        </div>
        <div className="flex gap-2 mt-2">
          {carouselImages.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === carouselIndex ? "bg-blue-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div> */}

        </main>


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
    </>
  );
}
