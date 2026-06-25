"use client";

import Image from "next/image";
import { Download, Send } from "lucide-react";
import Navbar from "./Navbar";

export default function Hero() {
return ( <section
   id="home"
   className="relative h-screen overflow-hidden"
 >
{/* Background */} <div className="absolute inset-0"> <Image
       src="/images/hero.jpg"
       alt="Annes Jebasingh"
       fill
       priority
       className="
         object-cover
         object-[65%_15%]
         md:object-[75%_15%]
         lg:object-[75%_15%]
       "
     />


    <div className="absolute inset-0 bg-black/15"></div>
  </div>

  <Navbar />

  {/* Hero Content */}
  <div
    className="
      relative z-10 flex h-full items-start
      pt-[140px]
      px-6
      md:pt-[140px]
      md:pl-[60px]
      lg:pt-[180px]
      lg:pl-[175px]
    "
  >
    <div>
      <h1
        className="
          font-bold
          leading-[1.1]
          text-white
          text-[38px]
          md:text-[60px]
          lg:text-[60px]
        "
      >
        ANNES
        <br />
        JEBASINGH
        <br />
        JEBAMONY
      </h1>

      <p
        className="
          mt-5
          text-white
          text-[16px]
          md:text-[24px]
          lg:text-[18px]
        "
      >
        Data Analyst
      </p>

      {/* Desktop Buttons */}
      <div className="mt-8 hidden md:flex md:gap-6 lg:gap-8">

        <a
          href="https://drive.google.com/file/d/17tB8R7s8rUodtlwfxJYnwtCEAqWEUZz5/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            h-[48px]
            w-[170px]
            lg:w-[193px]
            items-center
            justify-center
            gap-3
            rounded-md
            bg-white
            text-[15px]
            text-black
            transition-all
            duration-300
            hover:bg-black
            hover:text-white
          "
        >
          <Download size={18} />
          Download Resume
        </a>

        <a
          href="#contact"
          className="
            flex
            h-[48px]
            w-[170px]
            lg:w-[193px]
            items-center
            justify-center
            gap-3
            rounded-md
            border
            border-white
            text-[15px]
            text-white
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
          "
        >
          <Send size={18} />
          Contact
        </a>

      </div>

      {/* Mobile Buttons */}
      <div className="mt-8 flex gap-4 md:hidden">

        <a
          href="https://drive.google.com/file/d/17tB8R7s8rUodtlwfxJYnwtCEAqWEUZz5/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            h-[50px]
            w-[50px]
            items-center
            justify-center
            rounded-xl
            bg-white
            text-black
          "
        >
          <Download size={22} />
        </a>

        <a
          href="#contact"
          className="
            flex
            h-[50px]
            w-[50px]
            items-center
            justify-center
            rounded-xl
            border
            border-white
            text-white
          "
        >
          <Send size={22} />
        </a>

      </div>

    </div>
  </div>
</section>

);
}
