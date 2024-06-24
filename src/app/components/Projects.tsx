"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

function Projects() {
  const projectsImages = [
    {
      title: "Compiler for HTML,CSS and JS",
      subtitle: "HTML,CSS and JS compiler",
      imageUrl:
        "https://images.pexels.com/photos/2918152/pexels-photo-2918152.jpeg?auto=compress&cs=tinysrgb&w=600",
      git: "GitHub",
      live: "Live",
    },
    {
      title: "Compiler for HTML,CSS and JS",
      subtitle: "HTML,CSS and JS compiler",
      imageUrl:
        "https://images.pexels.com/photos/2918152/pexels-photo-2918152.jpeg?auto=compress&cs=tinysrgb&w=600",
      git: "GitHub",
      live: "Live",
    },
    {
      title: "Compiler for HTML,CSS and JS",
      subtitle: "HTML,CSS and JS compiler",
      imageUrl:
        "https://images.pexels.com/photos/2918152/pexels-photo-2918152.jpeg?auto=compress&cs=tinysrgb&w=600",
      git: "GitHub",
      live: "Live",
    },
    {
      title: "Compiler for HTML,CSS and JS",
      subtitle: "HTML,CSS and JS compiler",
      imageUrl:
        "https://images.pexels.com/photos/2918152/pexels-photo-2918152.jpeg?auto=compress&cs=tinysrgb&w=600",
      git: "GitHub",
      live: "Live",
    },
    {
      title: "Compiler for HTML,CSS and JS",
      subtitle: "HTML,CSS and JS compiler",
      imageUrl:
        "https://images.pexels.com/photos/2918152/pexels-photo-2918152.jpeg?auto=compress&cs=tinysrgb&w=600",
      git: "GitHub",
      live: "Live",
    },
    {
      title: "Compiler for HTML,CSS and JS",
      subtitle: "HTML,CSS and JS compiler",
      imageUrl:
        "https://images.pexels.com/photos/2918152/pexels-photo-2918152.jpeg?auto=compress&cs=tinysrgb&w=600",
      git: "GitHub",
      live: "Live",
    },
  ];

  return (
    <div className="w-fit grid  grid-cols-1 md:grid-cols-3 grid-rows-2 ">
      {projectsImages.map((project, i) => (
        <CardContainer key={i} className="inter-var w-full">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {project.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {project.subtitle}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={project.imageUrl}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href={project.git}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {project.git} →
              </CardItem>
              <CardItem
                as={Link}
                href={project.live}
                translateZ={20}
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                {project.live} →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

export default Projects;
