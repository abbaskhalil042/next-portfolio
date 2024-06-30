"use client";
import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "../utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";
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
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services" />

        <MenuItem setActive={setActive} active={active} item="Products" />

        <Link
          href={"/"}
          className=" text-black bg-slate-800 px-6 py-2 rounded-3xl m-3 "
        >
          <MenuItem setActive={setActive} active={active} item="Rsume" />
        </Link>

        <MenuItem setActive={setActive} active={active} item="Company" />

        <MenuItem setActive={setActive} active={active} item="Pricing" />
      </Menu>
    </div>
  );
}
