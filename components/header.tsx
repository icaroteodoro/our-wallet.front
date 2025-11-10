'use client'
import { Bell, CircleHelp, Home, Search, Settings,  } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import { Input } from "@/components/ui/input";
import { NavUser } from "./nav-user";
import { useEffect } from "react";
import { Button } from "./ui/button";

export function Header() {
  const {open} = useSidebar();

  return (
    <div className={`fixed bg-white right-0 w-full lg:w-[calc(100%-${open === true ? "16rem" : "3rem"})] flex py-4 lg:py-1 px-5 lg:px3 justify-between border-b z-40`}>
      <div className="gap-3 flex items-center justify-between lg:justify-start w-full">
        <SidebarTrigger className="hidden lg:flex hover:cursor-pointer " />
        <Separator orientation="vertical" className="hidden lg:flex h-5" />
        
        <div className="flex gap-1 items-center">
            <Home className="size-4"/>
            <h1>Início</h1>
        </div>



        <SidebarTrigger className="flex lg:hidden hover:cursor-pointer" />
      </div>
      <div className="gap-3 hidden lg:flex items-center">
        <NavUser user={{name: "Ícaro Teodoro", email: "icaro.teodoro84@icloud.com", avatar:""}}/>
      </div>
    </div>
  );
}
