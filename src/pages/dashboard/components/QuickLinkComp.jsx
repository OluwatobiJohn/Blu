import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

const QuickLinkComp = ({ icon, title, subtitle }) => {
  const Icon = icon;
  return (
    <div className="flex flex-row items-center gap-3">
      {Icon ? (
        <Avatar className="w-[2.5rem] h-[2.5rem] bg-blue-100 flex items-center justify-center">
          <Icon size={14} />
        </Avatar>
      ) : (
        <Avatar className="w-[2.5rem] h-[2.5rem]">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )}
      <div className="text-left">
        <p className="text-sm text-[#1C1C1C] max-w-[150px] truncate">{title}</p>
        <p className="text-xs text-[#1C1C1C66]">{subtitle}</p>
      </div>
    </div>
  );
};

export default QuickLinkComp;
