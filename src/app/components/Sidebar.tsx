"use client";
import Link from "next/link";
// import { portfolioLogo, linkedin, github, twitter, instagram } from "@/public/";

import React from "react";
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";

import {
  AlignHorizontalDistributeCenter,
  Contact,
  Home,
  WorkflowIcon,
} from "lucide-react";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className=" main border-r fixed left-0 h-screen">
      <div className="flex items-center ">
        <div className="flex items-center">
          <Image
            className="h-[7rem] mx-auto object-cover rounded-full w-[6.6rem] ml-0"
            src="/portfolioLogo.jpg"
            alt=""
          />
        </div>
        <div className="ml-0 font-sans">
          <h2 className="text-xl font-semibold">Abbas Khalil</h2>
          <p className="text-sm">Full Stack Developer</p>
        </div>
      </div>
      {/* sidebar content */}

      <div className="m-6 flex flex-col justify-center ">
        <ul>
          <li>
            <Link
              className="flex items-center p-3 relative overflow-hidden group"
              href="/"
            >
              <Home className="text-center mr-4" size={17} /> Home
              <span className="absolute bg-blue-500 h-0.5 left-0 bottom-0 transition-all duration-500 w-full transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link
              className="flex  items-center relative overflow-hidden p-3 group"
              href="/"
            >
              <WorkflowIcon className="text-center mr-4" size={17} /> Projects
              <span className="absolute bg-blue-500 h-0.5 left-0 bottom-0 transition-all duration-500 w-full transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              className="flex  items-center relative overflow-hidden group  p-3"
              href="/"
            >
              <AlignHorizontalDistributeCenter
                className="text-center mr-4"
                size={17}
              />
              About
              <span className="absolute bg-blue-500 h-0.5 left-0 bottom-0 transition-all duration-500 w-full transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link
              className="flex  items-center relative overflow-hidden group p-3"
              href="/"
            >
              <Contact className="text-center mr-4" size={17} /> Contact
              <span className="absolute bg-blue-500 h-0.5 left-0 bottom-0 transition-all duration-500 w-full transform origin-left scale-x-0 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
      </div>

      {/* sidebar social */}
      <div className=" bg-blue-500 h-0.5  w-40 mx-auto "></div>

      <div className="flex items-center gap-5 flex-col">
        <h3 className="text-2xl font-semibold mt-6">Follow me</h3>

        <Link
          href={
            "https://www.linkedin.com/in/abbas-khalil042?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
          className=" flex justify-center text-center w-[10rem]"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            {/* <AceternityLogo /> */}
            <Image
              src={"/linkedin.png"}
              width={500}
              height={500}
              className=" mx-auto object-cover w-6"
              alt="Picture of the author"
            />
            <span>LinkedIN</span>
          </HoverBorderGradient>
        </Link>

        <Link
          href={
            "https://www.instagram.com/abbas_0142?igsh=MWc3dXZ1MHo0d2tvOQ=="
          }
          className=" flex justify-center text-center w-[10rem]"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            {/* <AceternityLogo /> */}
            <Image
              src={"/instagram.png"}
              width={500}
              height={500}
              className=" mx-auto object-cover w-6"
              alt="Picture of the author"
            />
            <span>Instagram</span>
          </HoverBorderGradient>
        </Link>

        <Link
          href={"https://github.com/abbaskhalil042"}
          className=" flex justify-center text-center w-[10rem]"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            {/* <AceternityLogo /> */}
            <Image
              src={"/github.png"}
              width={500}
              height={500}
              className=" mx-auto object-cover w-6"
              alt="Picture of the author"
            />
            <span>Github</span>
          </HoverBorderGradient>
        </Link>

        <Link
          href={
            "https://www.instagram.com/abbas_0142?igsh=MWc3dXZ1MHo0d2tvOQ=="
          }
          className=" flex justify-center text-center w-[10rem]"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            {/* <AceternityLogo /> */}
            <Image
              src={"/logos.png"}
              width={500}
              height={500}
              className=" mx-auto object-cover w-6"
              alt="Picture of the author"
            />
            <span>X</span>
          </HoverBorderGradient>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
