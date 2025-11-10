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
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Header } from "./header"
import { WalletSwitcher } from "./wallet-switcher"

// This is sample data.
const data = {
    wallets: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Início",
      url: "dashboard",
      icon: Home,
      isActive: true,
    },
    {
      title: "Dailys",
      url: "dailys",
      icon: NotepadText,
    },
    {
      title: "Tarefas",
      url: "tasks",
      icon: CircleCheck,
    },
    {
      title: "Relatórios",
      url: "reports",
      icon: ChartBarBig,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar className="z-50" collapsible="icon" {...props}>
      <SidebarHeader>
        <WalletSwitcher teams={data.wallets} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
