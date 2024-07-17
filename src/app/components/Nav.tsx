"use client";
import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Image from "next/image";
// import { cn } from "@app/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 flex justify-center items-center  inset-x-0 max-w-2xl mx-auto z-50  ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex  justify-center items-center gap-6">
          <MenuItem className="" setActive={setActive} active={active} item="Home" />

          <MenuItem  className="" setActive={setActive} active={active} item="Projects" />
        </div>

        <div className="flex justify-center items-center">
          <HoverBorderGradient
            containerClassName=""
            as="button"
            className="dark:bg-black  text-black dark:text-white flex flex-col items-center space-x-2"
          >
            <Link
              href={"/"}
              className=" text-black bg-slate-400 px-4 py-2 rounded-3xl m-2 "
            >
              <MenuItem className="text-black" setActive={setActive} active={active} item="Rsume" />
            </Link>
          </HoverBorderGradient>
        </div>

        <div className="flex justify-center items-center gap-6">
          <MenuItem className="" setActive={setActive} active={active} item="Contact" />
          <MenuItem className="" setActive={setActive} active={active} item="Aboutnpm " />
        </div>
      </Menu>
    </div>
  );
}
