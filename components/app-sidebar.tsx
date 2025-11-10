"use client"

import * as React from "react"
import {
  ChartBarBig,
  Home,
  ArrowLeftRight,
  Wallet,
  Wallet2,

} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { WalletSwitcher } from "./wallet-switcher"
import { NavUser } from "./nav-user"

// This is sample data.
const data = {
  wallets: [
    {
      name: "Minha carteira",
      logo: Wallet2,
      plan: "Ícaro Teodoro",
    },
    {
      name: "Ícaro e Maria",
      logo: Wallet2,
      plan: "Maria Ferreira",
    },
  ],
  navMain: [
    {
      title: "Início",
      url: "home",
      icon: Home,
      isActive: true,
    },
    {
      title: "Transações",
      url: "transactions",
      icon: ArrowLeftRight,
    },
    {
      title: "Minhas Carteiras",
      url: "wallets",
      icon: Wallet,
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
      <SidebarFooter>
        <div className="gap-3 flex lg:hidden items-center">
          <NavUser user={{ name: "Ícaro Teodoro", email: "icaro.teodoro84@icloud.com", avatar: "" }} />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
