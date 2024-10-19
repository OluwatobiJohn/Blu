import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { SIDEBAR_CONSTANTS } from "../../lib/constants";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { LogoutIcon, TGRLogo } from "../../assets/svgs";
import { SidebarTrigger } from "../ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function AppSidebar() {
  const { pathname } = useLocation();
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-[#101928]">
        <SidebarGroup className="">
          <SidebarGroupContent className="">
            <SidebarMenu className="">
              <SidebarMenuItem className="flex flex-row items-center justify-between">
                <SidebarMenuButton asChild>
                  <TGRLogo className="w-20 h-20" />
                </SidebarMenuButton>
                <div className="block md:hidden">
                  <SidebarTrigger className="text-white" />
                </div>
              </SidebarMenuItem>
              {SIDEBAR_CONSTANTS.slice(0, 7).map((item, index) => (
                <SidebarMenuItem key={item.text || index}>
                  <SidebarMenuButton
                    asChild
                    isActive={item?.link?.startsWith(pathname)}
                  >
                    <NavLink to={item.link}>
                      <item.icon
                        className={
                          item?.link?.startsWith(pathname)
                            ? "text-[#EB3333]"
                            : "text-[#F0F2F5]"
                        }
                      />
                      <span className="text-[#F0F2F5] text-sm">
                        {item.text}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarMenu className="mt-32">
              {SIDEBAR_CONSTANTS.slice(7, 9).map((item, index) => (
                <SidebarMenuItem key={item.text || index}>
                  <SidebarMenuButton
                    asChild
                    isActive={item?.link?.startsWith(pathname)}
                  >
                    <NavLink to={item.link}>
                      <item.icon
                        className={
                          item?.link?.startsWith(pathname)
                            ? "text-[#EB3333]"
                            : "text-[#F0F2F5]"
                        }
                      />
                      <span className="text-[#F0F2F5]">{item.text}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarMenu className="flex flex-row justify-between items-center text-sm text-white mt-4">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="h-28 hover:bg-inherit hover:text-white"
                >
                  <div className="flex flex-row-reverse gap-8">
                    <LogoutIcon className="cursor-pointer" />
                    <div className="flex flex-row items-end gap-2">
                      <Avatar className="w-[2.4rem] h-[2.4rem]">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col items-start">
                        <p className="font-semibold">Alison Eyo</p>
                        <p>@thealisoneyo</p>
                      </div>
                    </div>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
