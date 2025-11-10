"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  ChartBarBig,
  CircleCheck,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  Map,
  NotepadText,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  },
  teams: [
    {
      name: "ClickEvolue",
    },
    {
      name: "Ícaro's Workspace",
    },
  ],
  navMain: [
    {
      title: "Início",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Dailys",
      url: "#",
      icon: NotepadText,
    },
    {
      title: "Tarefas",
      url: "#",
      icon: CircleCheck,
    },
    {
      title: "Relatórios",
      url: "#",
      icon: ChartBarBig,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="z-50" collapsible="icon" {...props}>
      <SidebarHeader>
        OurWALLET
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}