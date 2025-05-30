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
      <main className="flex relative min-h-screen">
        <div className="absolute inset-0 bg-[url('/LW002.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/70 to-sky-300/70">
            <div className="flex-col pl-40 pr-40 pt-10">
                <div className="flex">
                  <div className="flex-col">

                          <h2 className="mt-4 ml-2 text-3xl italic">About</h2>
                          <p className="mt-4 ml-2 text-xl">
                            My name is Vincent Martinez and I am a software engineer with a passion for creating beautiful and functional web applications. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies.
                          </p>

                    {/* <Card className="pb-5 mb-5 hover:-translate-y-1 hover:scale-30">
                      <CardBody>
                          <h2 className=" mt-4 ml-2 text-3xl italic">Interests</h2>
                          <p className="text-start mt-4 ml-2 text-xl">
                          I am interested in networks, web development, and devops. 
                          </p>
                      </CardBody>
                    </Card>

                    <Card className="pb-5 hover:-translate-y-1 hover:scale-30">
                      <CardBody>
                          <h2 className=" mt-4 ml-2 text-3xl italic">Hobbies</h2>
                          <p className="text-start mt-4 ml-2 text-xl">
                            Some of my hobbies include playing games, exercising frequently, and learning musical instruments. I am currently making a small video game in my freetime with the use of Unity and I hope to incorporate some music that I create for it as the soundtrack!
                          </p>
                      </CardBody>
                    </Card> */}
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
            </div>
          </div>
        </main>
    </>
  );
}
