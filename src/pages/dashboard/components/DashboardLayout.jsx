import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/common/Sidebar";
import {
  NotificationIcon,
  ProfileIconRounded,
  WalletIcon,
} from "../../../assets/svgs";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../../../components/common/AppSidebar";

const DashboardLayout = () => {
  return (
    <SidebarProvider className="flex h-[100vh]">
      <AppSidebar />
      <div className="w-full h-full px-2 md:px-4 pb-20 overflow-y-scroll">
        <div className="">
          <div className="flex flex-row justify-between items-center gap-7 fixed z-50 w-full text-left bg-white h-12">
            <SidebarTrigger className="fixed top-2" />
            <div className="flex flex-row items-center justify-end gap-5 fixed top-2 right-4">
              <div>
                <NotificationIcon />
              </div>
              <div className="flex flex-row items-center gap-3 text-[#344054]">
                <div className="flex flex-row items-center gap-2">
                  <ProfileIconRounded />
                  <p className="text-sm font-semibold hidden md:block">
                    Amedora33
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <WalletIcon />
                  <p className="text-sm font-semibold hidden md:block">
                    N230,039
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
