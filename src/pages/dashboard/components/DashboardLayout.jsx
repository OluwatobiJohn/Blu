import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { AppSidebar } from "../../../components/common/AppSidebar";
import { Bell, Clock10, Notebook, Sun } from "lucide-react";

const DashboardLayout = () => {
  return (
    <SidebarProvider className="flex h-[100vh]">
      <AppSidebar />
      <div className="w-full h-full px-2 md:px-4 pb-2 overflow-y-scroll bg-[#F9FAFB]">
        <div className="">
          <div className="flex flex-row justify-between items-center gap-7 fixed z-50 w-full text-left bg-white h-12">
            <SidebarTrigger className="block md:hidden fixed top-2" />
            <div className="fixed flex flex-row items-center">
              <div className="font-bold ml-7 md:ml-0 md:text-xl">Dashboard</div>
              <div className="flex flex-row gap-3 fixed top-2 right-4">
                <Input type="search" placeholder="search" />
                <div className="mt-1 flex flex-row items-center gap-3">
                  <Sun />
                  <Clock10 />
                  <Bell />
                  <Notebook />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
