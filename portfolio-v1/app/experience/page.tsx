'use client'
import { useRef, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, CardBody, Button, Image, Avatar, Divider } from "@heroui/react";
import DownloadSVG from "@/components/downloadsvg";

export default function Home() {

  
  const skills = [
  { icon: "html.png", name: "HTML" },
  { icon: "css.png", name: "CSS" },
  { icon: "javascript.png", name: "Javascript" },
  { icon: "typescript.png", name: "Typescript" },
  { icon: "react.png", name: "React" },
  { icon: "nextjs.png", name: "Next.js" },
  { icon: "tailwind.png", name: "Tailwind CSS" },
  { icon: "c.png", name: "C++" },
  { icon: "python.png", name: "Python" },
  { icon: "postgresql.png", name: "PostgreSQL" },
  { icon: "git.png", name: "Git" },
  { icon: "figma.png", name: "Figma" },
];

const [visibleSkills, setVisibleSkills] = useState(skills.length); 
const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [carouselImages, setCarouselImages] = useState([
    "/portrait.jpeg",
    "/portrait2.png",
    "/portrait3.png",
  ]);

  useEffect(() => {
  const checkScreen = () => {
    const small = window.innerWidth < 768;
    setIsSmallScreen(small);
    setVisibleSkills(small ? 3 : skills.length);
  };

  checkScreen(); 

  window.addEventListener("resize", checkScreen);
  return () => window.removeEventListener("resize", checkScreen);
}, []);

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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Vincent_Martinez_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <main className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat p-4 md:pl-8 md:pr-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start px-4">

          <div className="flex-1">
            <h2 className="mt-4 text-3xl italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-600 font-proxima font-bold">
              Experience
            </h2>
            <Divider className="h-[2px] w-[40%] bg-cyan-600" />
            <p className="mt-4 text-lg md:text-xl font-proxima text-gray-900">
              I have worked on various projects which employed the use of C++, Python, and JavaScript. I have also worked with Next.JS to a large degree. My experience includes developing web applications, creating APIs, and working across the stack. 
              <br /> <br />
              My professional expertise, as well as relevant skill set, can be found in-depth via my personal resume linked on this page.
            </p>

              <div className="w-full mt-10 ">
                <h3 className="text-2xl font-bold italic text-start text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-600 font-proxima">
                  Technical Skills
                </h3>
                <Divider className="h-[2px] w-[40%] bg-cyan-600 mb-4" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {skills
                      .slice(0, visibleSkills)
                      .map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-4 bg-white/80 border border-gray-300 rounded-md px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                          <span className="text-base font-bold text-gray-800 font-proxima">
                            {skill.name}
                          </span>
                        </div>
                      ))}
                  </div>

                {isSmallScreen && (
                  <div className="flex justify-center mt-4">
                    {visibleSkills < skills.length ? (
                      <Button
                        onClick={() => setVisibleSkills((prev) => prev + 3)}
                        className="bg-gradient-to-br from-cyan-500 to-pink-500 text-white px-4 py-2 font-proxima"
                      >
                        Show More
                      </Button>
                    ) : (
                      <Button
                        onClick={() => setVisibleSkills(3)}
                        className="bg-gradient-to-br from-pink-500 to-cyan-500 text-white px-4 py-2 font-proxima"
                      >
                        Show Less
                      </Button>
                    )}
                  </div>
                )}
              </div>
          </div>
          <div className="flex w-full max-w-md mx-auto mt-6">
            <div className="relative w-full group">
              <Card className="bg-gradient-to-br from-cyan-500 to-pink-600">
                <CardBody className="flex items-center transition-opacity duration-200">
                  <div className="flex absolute items-center justify-center w-[50%] h-[50%]">
                    <Button href="resume.pdf" endContent={<DownloadSVG />} onPress={handleDownload}className="border-1 border-slate-200 w-full h-[20%] group-hover:opacity-100 translate-y-[200%]  opacity-0 z-20 bg-gradient-to-br from-cyan-300 to-pink-300 via-blue-300 font-proxima">Download PDF</Button> 
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
