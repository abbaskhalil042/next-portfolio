"use client";

import { HoverEffect } from "./ui/card-hover-effect";
// import html from "../../public/skillsIcons/html-5.png";

import html from "../../../public/skillsIcons/html-5.png";
import css from "../../../public/skillsIcons/css-3.png";
import js from "../../../public/skillsIcons/js.png";
import react from "../../../public/skillsIcons/react.png";
import nextjs from "../../../public/skillsIcons/next.png";
import tailwind from "../../../public/skillsIcons/tailwind.png";
import github from "../../../public/skillsIcons/github (2).png";
// import vscode from "../../../public/skillsIcons/vscode.png";
// import express from "../../../public/skillsIcons/express.png";
import nodejs from "../../../public/skillsIcons/node-js.png";
import mongodb from "../../../public/skillsIcons/mongo.png";
import typescript from "../../../public/skillsIcons/typescript.png";
import git from "../../../public/skillsIcons/social.png";
import { Sparkle } from "./sparkle";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
// import { InfiniteMovingCards } from "@../ui/infinite-moving-cards";
function Skills() {
  return (
    <>
      <div className="mt-20">
      <Sparkle Title="Skills" />
      </div>

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={projects} direction="right" speed="normal" />
      </div>
    </>
  );
}

export default Skills;

export const projects = [
  {
    image: html,
  },
  {
    image: css,
  },
  {
    image: js,
  },
  {
    image: react,
  },
  {
    image: nextjs,
  },
  {
    image: nodejs,
  },
  {
    image: mongodb,
  },

  {
    image: tailwind,
  },
  {
    image: typescript,
  },
  {
    image: git,
  },
  {
    image: github,
  },
];
