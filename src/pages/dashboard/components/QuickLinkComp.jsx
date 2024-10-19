import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

const QuickLinkComp = ({ name, handle }) => {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="w-[3rem] h-[3rem]">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center justify-center p-3">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm">{handle}</p>
      </div>
    </div>
  );
};

export default QuickLinkComp;
