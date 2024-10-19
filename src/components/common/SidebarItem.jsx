import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ isActive, text, icon: Icon, link, onClick }) => {
  const Wrapper = link ? NavLink : "button";

  return (
    <Wrapper
      to={link ?? ""}
      onClick={onClick}
      className={`py-3 px-5 rounded-xl flex items-center gap-4 text-sm text-white/50 hover:bg-rose/20 ${
        isActive ? "bg-[#1D2739]" : ""
      }`}
    >
      <Icon className={`w-5 h-5 ${isActive ? "text-[#EB3333]" : ""}`} />
      <span className={`text-sm ${isActive ? "text-white font-medium" : ""}`}>
        {text}
      </span>
    </Wrapper>
  );
};

export default SidebarItem;
