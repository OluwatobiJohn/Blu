import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logodashboard from "../../assets/imgs/logodashboard.png";
import { Menu, X } from "lucide-react";
import { HomeIcon, LogoutIcon } from "../../assets/svgs";
import { SIDEBAR_CONSTANTS } from "../../lib/constants";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  const handleToggle = () => {
    setSideBarOpen(!isSideBarOpen);
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 h-max bg-[#101928] z-40 transform ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:relative md:translate-x-0 w-64 md:w-64 py-4 px-2 md:block`}
      >
        {!isSideBarOpen && (
          <div className="absolute left-[17rem] cursor-pointer">
            <Menu onClick={handleToggle} />
          </div>
        )}
        <div className="flex flex-row items-center justify-between">
          <img src={logodashboard} alt="logo" className="ml-5" />{" "}
          <X
            onClick={handleToggle}
            className="md:hidden text-white cursor-pointer"
          />
        </div>
        <div className="text-white mt-8">
          {SIDEBAR_CONSTANTS.slice(0, 7).map((item, index) => (
            <SidebarItem
              key={item.link || index}
              icon={item.icon}
              text={item.text}
              link={item.link}
              isActive={item?.link?.startsWith(pathname)}
            />
          ))}
        </div>
        <div className="text-white mt-8">
          {SIDEBAR_CONSTANTS.slice(7, 9).map((item, index) => (
            <SidebarItem
              key={item.link || index}
              icon={item.icon}
              text={item.text}
              link={item.link}
              isActive={item?.link?.startsWith(pathname)}
            />
          ))}
        </div>
        <div className="flex flex-row justify-between items-center text-sm text-white px-4 mt-4">
          <div className="flex flex-row items-end gap-2">
            <div className="h-10 w-10 rounded-full bg-gray-400" />
            <div className="flex flex-col items-start">
              <p className="font-semibold">Alison Eyo</p>
              <p>@thealisoneyo</p>
            </div>
          </div>
          <div>
            <LogoutIcon />
          </div>
        </div>
      </div>
      {isSideBarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={handleToggle}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
