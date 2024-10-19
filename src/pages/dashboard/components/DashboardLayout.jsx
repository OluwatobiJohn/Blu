import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/common/Sidebar";
import {
  NotificationIcon,
  ProfileIconRounded,
  WalletIcon,
} from "../../../assets/svgs";

const DashboardLayout = () => {
  return (
    <main className="flex h-[100vh]">
      <Sidebar />
      <div className="w-[calc(100%-16rem)] h-full px-10 pb-20 overflow-auto">
        <div className="flex items-center gap-7 text-left bg-white mt-2 relative">
          <div className="flex flex-row items-center gap-5 absolute top-1 right-1">
            <div>
              <NotificationIcon />
            </div>
            <div className="flex flex-row items-center gap-3 text-[#344054]">
              <div className="flex flex-row items-center gap-2">
                <ProfileIconRounded />
                <p className="text-sm font-semibold">Amedora33</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <WalletIcon />
                <p className="text-sm font-semibold">N230,039</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
