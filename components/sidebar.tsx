"use client";
import { cn } from "@/lib/utils";
import { CheckIcon, ChevronRightIcon, DashboardIcon, GearIcon, StackIcon } from "@radix-ui/react-icons";

// import { Playlist } from "../data/playlists";
import { Button } from "./ui/button";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpened] = useState(true);
  const pathname = usePathname();
  console.log(pathname);
  const toggleSidebar = () => {
    setIsOpened(!isOpen);
  };
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        {/* <div className="pl-7 pr-3  flex items-center justify-between">
          <Image src="/logo.png" alt="Ichiba Logo" width={100} height={60} className="h-[50px] w-auto" />

          {/* <Button asChild e="icon" onClick={toggleSidebar}>
          </Button> *
          <ChevronRightIcon className="h-4 w-4" />
        </div> */}
        <div className="px-3 py-2">
          <h2 className="mb-4 px-4 text-lg font-semibold ">
            <strong className="tracking-wider">ICHIBA</strong> EAMS
          </h2>
          <div className="space-y-1">
            <Button asChild variant={pathname === "/dashboard" ? "default" : "ghost"} className="w-full justify-start">
              <Link className="w-full justify-start flex items-center" href={"./dashboard"}>
                <GearIcon className="mr-2 h-4 w-4" />
                {isOpen ? <span>Dashboard</span> : ""}
              </Link>
            </Button>
            <Button asChild variant={pathname === "/attendance" ? "default" : "ghost"} className="w-full justify-start">
              <Link className="w-full justify-start flex items-center" href={"./attendance"}>
                <CheckIcon className="mr-2 h-4 w-4" />
                {isOpen ? <span>Attendance</span> : ""}
              </Link>
            </Button>
            <Button asChild variant={pathname === "/master" ? "default" : "ghost"} className="w-full justify-start">
              <Link className="w-full justify-start flex items-center" href={"./master"}>
                <StackIcon className="mr-2 h-4 w-4" />
                {isOpen ? <span>Master Data</span> : ""}
              </Link>
            </Button>
            <Button asChild variant={pathname === "/settings" ? "default" : "ghost"} className="w-full justify-start">
              <Link className="w-full justify-start flex items-center" href={"./settings"}>
                <GearIcon className="mr-2 h-4 w-4" />
                {isOpen ? <span>Settings</span> : ""}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
