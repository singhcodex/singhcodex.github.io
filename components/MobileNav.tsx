'use client'

import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";

const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "experience",
      path: "/experience",
    },
    {
      name: "project",
      path: "/project",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
 
const MobileNav = () => {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="felx flex-col">
            <div>logo</div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav