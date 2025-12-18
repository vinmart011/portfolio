'use client';
import { Card, CardBody, Button } from "@heroui/react";

export default function Home() {
  return (
    <main className="w-full h-full bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat p-4 md:p-8">
      <div className="max-w-4xl mx-auto text-center ">
        <h1 className="text-4xl italic text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-pink-600 font-proxima font-bold">Get in touch</h1>
        <p className="mt-4 text-lg md:text-xl font-proxima text-gray-600 mb-8">
          Whether you want to reach me regarding work or just tech in general, please don't hesitate to send me an email!  🧑‍💻
        </p>
        <Card className="bg-white shadow-xl rounded-2xl p-6">
          <CardBody>
            <h2 className="text-2xl text-gray-900 font-semibold mb-6">Connect with me</h2>
              <form 
                action="https://formspree.io/f/xpwrdpev" 
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" name="firstName" placeholder="First name" className="border-b p-2 outline-none" required />
                  <input type="text" name="lastName" placeholder="Last name" className="border-b p-2 outline-none" required />
                </div>
                <input type="email" name="email" placeholder="Email address" className="w-full border-b p-2 outline-none" required />
                <input type="text" name="subject" placeholder="Subject" className="w-full border-b p-2 outline-none" />
                <textarea name="message" placeholder="Message" className="w-full border-b p-2 outline-none h-32 resize-none" required />
                <Button type="submit" className="bg-black text-white w-full rounded-md py-3 text-lg">
                  Send
                </Button>
              </form>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
