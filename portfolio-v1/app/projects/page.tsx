'use client'
import Image from "next/image";
import { Card } from "@heroui/react";
import DigitalClock from "@/components/digitalclock";
import Phrase from "@/components/phraseGenerator";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-16 flex flex-col">
        <section id="projects" className="text-center">
          <h2 className="text-4xl italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-600 font-proxima font-bold">
            Projects
          </h2>
          <p className="mt-2 text-xl text-gray-600 max-w-xl mx-auto font-proxima">
            I've made various types of projects — some were basic and some were more complicated.
            So far I've developed <span className="font-bold">5</span> projects.
          </p>

          <div className="flex justify-center mt-10">
            <div className="relative max-w-4xl w-full p-4">
              <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-[330px] h-[200px] z-20 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 bg-white">
                <Image
                  src="/friendify.png"
                  alt="Friendify Preview"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <Card className="flex flex-col md:flex-row items-start md:items-center rounded-2xl shadow-lg bg-white p-6 md:pl-[300px]">
                <div className="text-left max-w-xl mx-auto md:mx-0">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Friendify</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    This web app is built using the Spotify API and allows users to visualize their Spotify data.
                    It fetches user data and displays it in a unique and intersting format by using HTML, CSS, JS, Python, and MongoDB.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[ "HTML", "CSS", "JS", "Python", "Spotify API", "MongoDB"].map(tag => (
                      <span key={tag} className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/UCR-Senior-Design/course-project-good-team" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 .5C5.648.5.5 5.647.5 12a11.5 11.5 0 0 0 7.837 10.938c.573.105.785-.248.785-.554 0-.274-.01-1-.015-1.962-3.188.693-3.86-1.537-3.86-1.537-.522-1.326-1.276-1.68-1.276-1.68-1.043-.712.08-.698.08-.698 1.153.08 1.76 1.183 1.76 1.183 1.025 1.757 2.688 1.25 3.343.956.105-.743.402-1.25.73-1.538-2.546-.29-5.226-1.273-5.226-5.66 0-1.25.447-2.27 1.183-3.07-.12-.29-.513-1.453.114-3.03 0 0 .967-.31 3.17 1.175a10.953 10.953 0 0 1 5.77 0c2.202-1.486 3.168-1.175 3.168-1.175.63 1.577.237 2.74.117 3.03.74.8 1.182 1.82 1.182 3.07 0 4.397-2.686 5.366-5.243 5.65.414.357.783 1.062.783 2.14 0 1.543-.014 2.786-.014 3.165 0 .31.21.665.79.553A11.505 11.505 0 0 0 23.5 12c0-6.353-5.148-11.5-11.5-11.5Z" />
                      </svg>
                    </a>
                    <a href="https://friendify-uxfi.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3ZM5 5h7v2H7.414l9.293 9.293-1.414 1.414L6 8.414V14h-2V5Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <div className="relative max-w-4xl w-full p-4">
              <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-[330px] h-[200px] z-20 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 bg-white">
                <Image
                  src="/taste++.png"
                  alt="Taste++ Preview"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <Card className="flex flex-col md:flex-row items-start md:items-center rounded-2xl shadow-lg bg-white p-6 md:pl-[300px]">
                <div className="text-left max-w-xl mx-auto md:mx-0">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Taste++</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Taste++ was a custom made language that was created alongside a custom compiler as a spin on the C++ language.
                    It was a college project made to teach us the fundamentals of compiler design and implementation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[ "C", "Bison", "CMake", "Flex", ].map(tag => (
                      <span key={tag} className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/aheck004/CS-152-Project" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 .5C5.648.5.5 5.647.5 12a11.5 11.5 0 0 0 7.837 10.938c.573.105.785-.248.785-.554 0-.274-.01-1-.015-1.962-3.188.693-3.86-1.537-3.86-1.537-.522-1.326-1.276-1.68-1.276-1.68-1.043-.712.08-.698.08-.698 1.153.08 1.76 1.183 1.76 1.183 1.025 1.757 2.688 1.25 3.343.956.105-.743.402-1.25.73-1.538-2.546-.29-5.226-1.273-5.226-5.66 0-1.25.447-2.27 1.183-3.07-.12-.29-.513-1.453.114-3.03 0 0 .967-.31 3.17 1.175a10.953 10.953 0 0 1 5.77 0c2.202-1.486 3.168-1.175 3.168-1.175.63 1.577.237 2.74.117 3.03.74.8 1.182 1.82 1.182 3.07 0 4.397-2.686 5.366-5.243 5.65.414.357.783 1.062.783 2.14 0 1.543-.014 2.786-.014 3.165 0 .31.21.665.79.553A11.505 11.505 0 0 0 23.5 12c0-6.353-5.148-11.5-11.5-11.5Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <div className="relative max-w-4xl w-full p-4">
              <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-[330px] h-[200px] z-20 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 bg-white">
                <Image
                  src="/taste++.png"
                  alt="Taste++ Preview"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <Card className="flex flex-col md:flex-row items-start md:items-center rounded-2xl shadow-lg bg-white p-6 md:pl-[300px]">
                <div className="text-left max-w-xl mx-auto md:mx-0">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">LED Cube</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Taste++ was a custom made language that was created alongside a custom compiler as a spin on the C++ language.
                    It was a college project made to teach us the fundamentals of compiler design and implementation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[ "C", "Bison", "CMake", "Flex", ].map(tag => (
                      <span key={tag} className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/aheck004/CS-152-Project" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 .5C5.648.5.5 5.647.5 12a11.5 11.5 0 0 0 7.837 10.938c.573.105.785-.248.785-.554 0-.274-.01-1-.015-1.962-3.188.693-3.86-1.537-3.86-1.537-.522-1.326-1.276-1.68-1.276-1.68-1.043-.712.08-.698.08-.698 1.153.08 1.76 1.183 1.76 1.183 1.025 1.757 2.688 1.25 3.343.956.105-.743.402-1.25.73-1.538-2.546-.29-5.226-1.273-5.226-5.66 0-1.25.447-2.27 1.183-3.07-.12-.29-.513-1.453.114-3.03 0 0 .967-.31 3.17 1.175a10.953 10.953 0 0 1 5.77 0c2.202-1.486 3.168-1.175 3.168-1.175.63 1.577.237 2.74.117 3.03.74.8 1.182 1.82 1.182 3.07 0 4.397-2.686 5.366-5.243 5.65.414.357.783 1.062.783 2.14 0 1.543-.014 2.786-.014 3.165 0 .31.21.665.79.553A11.505 11.505 0 0 0 23.5 12c0-6.353-5.148-11.5-11.5-11.5Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>        

          <div className="flex justify-center mt-10">
            <div className="relative max-w-4xl w-full p-4">
              <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-[330px] h-[200px] z-20 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 bg-white">
                <Image
                  src="/taste++.png"
                  alt="Taste++ Preview"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <Card className="flex flex-col md:flex-row items-start md:items-center rounded-2xl shadow-lg bg-white p-6 md:pl-[300px]">
                <div className="text-left max-w-xl mx-auto md:mx-0">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">C++ Application</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Taste++ was a custom made language that was created alongside a custom compiler as a spin on the C++ language.
                    It was a college project made to teach us the fundamentals of compiler design and implementation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[ "C", "Bison", "CMake", "Flex", ].map(tag => (
                      <span key={tag} className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/aheck004/CS-152-Project" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 .5C5.648.5.5 5.647.5 12a11.5 11.5 0 0 0 7.837 10.938c.573.105.785-.248.785-.554 0-.274-.01-1-.015-1.962-3.188.693-3.86-1.537-3.86-1.537-.522-1.326-1.276-1.68-1.276-1.68-1.043-.712.08-.698.08-.698 1.153.08 1.76 1.183 1.76 1.183 1.025 1.757 2.688 1.25 3.343.956.105-.743.402-1.25.73-1.538-2.546-.29-5.226-1.273-5.226-5.66 0-1.25.447-2.27 1.183-3.07-.12-.29-.513-1.453.114-3.03 0 0 .967-.31 3.17 1.175a10.953 10.953 0 0 1 5.77 0c2.202-1.486 3.168-1.175 3.168-1.175.63 1.577.237 2.74.117 3.03.74.8 1.182 1.82 1.182 3.07 0 4.397-2.686 5.366-5.243 5.65.414.357.783 1.062.783 2.14 0 1.543-.014 2.786-.014 3.165 0 .31.21.665.79.553A11.505 11.505 0 0 0 23.5 12c0-6.353-5.148-11.5-11.5-11.5Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>  

          <div className="flex justify-center mt-10">
            <div className="relative max-w-4xl w-full p-4">
              <div className="hidden md:block absolute -left-12 top-1/2 -translate-y-1/2 w-[330px] h-[200px] z-20 rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 bg-white">
                <Image
                  src="/taste++.png"
                  alt="Taste++ Preview"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <Card className="flex flex-col md:flex-row items-start md:items-center rounded-2xl shadow-lg bg-white p-6 md:pl-[300px]">
                <div className="text-left max-w-xl mx-auto md:mx-0">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Hotel SQL</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Taste++ was a custom made language that was created alongside a custom compiler as a spin on the C++ language.
                    It was a college project made to teach us the fundamentals of compiler design and implementation.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[ "C", "Bison", "CMake", "Flex", ].map(tag => (
                      <span key={tag} className="bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/aheck004/CS-152-Project" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M12 .5C5.648.5.5 5.647.5 12a11.5 11.5 0 0 0 7.837 10.938c.573.105.785-.248.785-.554 0-.274-.01-1-.015-1.962-3.188.693-3.86-1.537-3.86-1.537-.522-1.326-1.276-1.68-1.276-1.68-1.043-.712.08-.698.08-.698 1.153.08 1.76 1.183 1.76 1.183 1.025 1.757 2.688 1.25 3.343.956.105-.743.402-1.25.73-1.538-2.546-.29-5.226-1.273-5.226-5.66 0-1.25.447-2.27 1.183-3.07-.12-.29-.513-1.453.114-3.03 0 0 .967-.31 3.17 1.175a10.953 10.953 0 0 1 5.77 0c2.202-1.486 3.168-1.175 3.168-1.175.63 1.577.237 2.74.117 3.03.74.8 1.182 1.82 1.182 3.07 0 4.397-2.686 5.366-5.243 5.65.414.357.783 1.062.783 2.14 0 1.543-.014 2.786-.014 3.165 0 .31.21.665.79.553A11.505 11.505 0 0 0 23.5 12c0-6.353-5.148-11.5-11.5-11.5Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>   
          
        </section>
      </div>
    </main>
  );
}
