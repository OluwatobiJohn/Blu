import { Eye, EyeOff } from "lucide-react";
import React from "react";

const StatsCard = ({ bgClass, description, amount }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <div
      className={`flex flex-row justify-between items-center gap-5 rounded-sm px-5 pt-5 pb-8 ${bgClass} shadow-md`}
    >
      <div>
        <p className="text-[#98A2B3] text-xs font-medium">{description}</p>
        <p className="text-white text-[2rem] font-semibold w-[12rem]">
          {isVisible ? "***********" : `${amount}`}
        </p>
      </div>
      <div>
        <button type="button" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? (
            <EyeOff className="text-white" />
          ) : (
            <Eye className="text-white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default StatsCard;
