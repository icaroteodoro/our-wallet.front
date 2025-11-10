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
    <div className={`fixed bg-white right-0 w-[calc(100%-${open === true ? "16rem" : "3rem"})] flex py-1 px-2 justify-between border-b z-40`}>
      <div className="gap-3 flex items-center">
        <SidebarTrigger className="hover:cursor-pointer" />
        <Separator orientation="vertical" className="h-5" />
        
        <div className="flex gap-1 items-center">
            <Home className="size-4"/>
            <h1>Início</h1>
        </div>
      </div>
      <div className="gap-3 flex items-center">
        <NavUser user={{name: "Ícaro Teodoro", email: "icaro.teodoro84@icloud.com", avatar:""}}/>
      </div>
    </div>
  );
}
