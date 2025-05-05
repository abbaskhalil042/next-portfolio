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
    <div className="relative w-full flex items-center justify-center ">
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
      href: "#",
    },

    {
      title: "Products",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
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
