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

export const projects = [
  {
    name: "HTML",
    url: "https://www.w3.org/html/",
    image: html,
  },
  {
    name: "CSS",
    url: "https://www.w3.org/Style/CSS/",
    image: css,
  },
  {
    name: "JavaScript",
    url: "https://www.javascript.com/",
    image: js,
  },
  {
    name: "React",
    url: "https://reactjs.org/",
    image: react,
  },
  {
    name: "Next.js",
    url: "https://nextjs.org/",
    image: nextjs,
  },
  {
    name: "Node.js",
    url: "https://nodejs.org/en/",
    image: nodejs,
  },
  {
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    image: mongodb,
  },

  {
    name: "Tailwind",
    url: "https://tailwindcss.com/",
    image: tailwind,
  },
  {
    name: "Typescript",
    url: "https://www.typescriptlang.org/",
    image: typescript,
  },
  {
    name: "Git",
    url: "https://git-scm.com/",
    image: git,
  },
  {
    name: "Github",
    url: "https://github.com/",
    image: github,
  },

];

function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect className="" items={projects} />
    </div>
  );
}

export default Skills;
