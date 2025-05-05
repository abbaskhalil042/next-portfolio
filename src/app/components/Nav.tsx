"use client";
import React, { useState } from "react";

import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
import { FloatingDock } from "./ui/floating-dock";
// import { cn } from "@app/utils/cn";
// import resume from "../../../public/my-resume.pdf"

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center z-10 justify-center ">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      to: "/",
    },
    {
      title: "Skills",
      icon: (
        <svg className="mb-0.5 opacity-100" height="18px" width="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><g fill="#737373"><path d="M15.183 2.74329C8.17788 3.2182 4.68522 8.77876 3.81453 11.4997C4.49946 12.0114 6.58006 12.9064 9.42299 12.3924C12.2659 11.8784 12.9751 9.74808 12.9743 8.74715C15.1281 7.42278 14.0847 5.37604 15.183 2.74329Z" fill="#737373" fill-opacity="0.3" stroke="none"></path><path d="M12.974 8.731C12.5 12.422 9.25 12.844 6 12.25" fill="none" stroke="#737373" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path><path d="M2.75 15.25C2.75 15.25 4.062 3.729 15.25 2.75C14.69 3.726 14.677 5.355 14.304 6.989C13.78 9 11.969 9.25 9.75 9.25" fill="none" stroke="#737373" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"></path></g></svg>
      ),
      to: "/skills",
    },
  

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      to: "/https://x.com/abbas_042",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      to: "/https://github.com/abbaskhalil042",
    },
  ];
  return (
    <div className="flex items-center justify-center fixed Lg:fixed w-full lg:bottom-4 bottom-10 ">
      <FloatingDock
        mobileClassName="translate-y-10" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
