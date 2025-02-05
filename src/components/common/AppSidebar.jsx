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
import { LogoutIcon, Logo } from "../../assets/svgs";
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
            <NavLink to={item.inactive === true ? "#" : item.link}>
              <item.icon
                className={isActive ? "text-[#161716]" : "text-[#292D32]"}
              />
              <span
                className={`text-sm ${
                  isActive ? "text-[#161716] font-black" : "text-[#292D32]"
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
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center justify-between md:justify-center mb-6">
                {/* <SidebarMenuButton asChild>
                  <Logo className="w-24 h-24" />
                </SidebarMenuButton> */}
                <div className="block md:hidden absolute left-56">
                  <SidebarTrigger className="text-black" />
                </div>
                <div className="flex justify-center items-center">
                  <Logo className="w-24 h-10" />
                </div>
              </SidebarMenuItem>
            </SidebarMenu>

            <SidebarMenu>
              {renderSidebarItems(SIDEBAR_CONSTANTS, 0, 2)}
            </SidebarMenu>
            <hr className="my-2" />
            <SidebarMenu>
              {renderSidebarItems(SIDEBAR_CONSTANTS, 2, 5)}
            </SidebarMenu>
            <hr className="my-2" />
            <SidebarMenu>
              {renderSidebarItems(SIDEBAR_CONSTANTS, 5, 7)}
            </SidebarMenu>
            <hr className="my-2" />
            <SidebarMenu>
              {renderSidebarItems(SIDEBAR_CONSTANTS, 7, 10)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
