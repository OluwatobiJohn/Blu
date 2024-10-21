import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogoutIcon, TGRLogo } from "../../assets/svgs";
import { SIDEBAR_CONSTANTS } from "../../lib/constants";

export function AppSidebar() {
  const { pathname } = useLocation();

  // Function to render sidebar items in a loop
  const renderSidebarItems = (items, start, end) => {
    return items.slice(start, end).map((item, index) => {
      const isActive = item?.link?.startsWith(pathname);
      return (
        <SidebarMenuItem key={item.text || index}>
          <SidebarMenuButton asChild isActive={isActive}>
            <NavLink to={item.link}>
              <item.icon
                className={isActive ? "text-[#EB3333]" : "text-[#98A2B3]"}
              />
              <span
                className={`text-sm ${
                  isActive ? "text-[#F0F2F5] font-semibold" : "text-[#98A2B3]"
                }`}
              >
                {item.text}
              </span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      );
    });
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-[#101928]">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center justify-between">
                <SidebarMenuButton asChild>
                  <TGRLogo className="w-24 h-24" />
                </SidebarMenuButton>
                <div className="block md:hidden">
                  <SidebarTrigger className="text-white" />
                </div>
              </SidebarMenuItem>

              {/* Render the first 7 items */}
              {renderSidebarItems(SIDEBAR_CONSTANTS, 0, 7)}
            </SidebarMenu>

            {/* Second set of items, index 7 to 9 */}
            <SidebarMenu className="mt-32">
              {renderSidebarItems(SIDEBAR_CONSTANTS, 7, 9)}
            </SidebarMenu>

            {/* Logout and user info */}
            <SidebarMenu className="flex justify-between items-center text-sm text-white mt-4">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="h-28 hover:bg-inherit hover:text-white"
                >
                  <div className="flex flex-row-reverse gap-8">
                    <LogoutIcon className="cursor-pointer" />
                    <div className="flex items-end gap-2">
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
