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
      <div className="w-full h-full px-1 md:px-10 pb-20 overflow-y-scroll">
        <div className="flex items-center gap-7 text-lef mt-2 relative">
          <div className="flex flex-row items-center justify-end gap-5 fixed top-1 right-1 bg-white w-full h-max">
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
        <div className="pt-10">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
