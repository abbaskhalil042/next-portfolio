

import React from "react";
import { FlipWords } from "@/app/components/ui/flip-words";

const Hero = () => {
    const words = ["Minimalistic", "fast", "clean", "modern"];
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">

    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites and Android apps
      </div>
    </div>
   
  </div>
  )
}
export default Hero




