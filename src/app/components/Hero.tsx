"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/google-gemini-effect";
import Link from "next/link";
// import {Link} from "next/link";

function Hero() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <>

    <div className="main ">
      <div className="flex flex-row-reverse bottom-auto w-5/6 fixed top-0  z-10 ">
        <Link href={"/"} className="bg-white text-black px-6 py-2 rounded-3xl m-3 ">Resume</Link>
      </div>


    <div

        className="mt-16 h-[300vh] bg-black  dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
        ref={ref}
      >
      
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>

    </div>
     
    </>
  );
}

export default Hero;
