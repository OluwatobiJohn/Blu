import React from "react";
import { ProfitChartIcon } from "../../../assets/svgs";

const SponsorStatCard = ({ description, count, profitOrLoss, profitCount }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case "profit":
        return {
          bgColor: "bg-[#E7F6EC]",
          textColor: "text-[#036B26]",
        };
      case "loss":
        return {
          bgColor: "bg-[#FFECE5]",
          textColor: "text-[#8A0000]",
        };
      default:
        return {
          bgColor: "bg-gray-200",
          textColor: "text-gray-600",
        };
    }
  };

  const { bgColor, textColor } = getStatusStyles(profitOrLoss);

  return (
    <div className="h-[9.4rem] flex flex-col justify-between gap-5 rounded-sm px-5 pt-5 pb-8 bg-white shadow-sm">
      <div className="flex flex-row justify-between items-center">
        <p className="text-xs font-medium">{description}</p>
        <p
          className={`text-xs font-medium p-1 rounded ${bgColor} ${textColor} flex flex-row items-center`}
        >
          <ProfitChartIcon /> <span>{profitCount}</span>
        </p>
      </div>
      <p className="text-[2rem] font-semibold w-max">{count}</p>
    </div>
  );
};

export default SponsorStatCard;
