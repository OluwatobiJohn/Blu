import { ArrowUpRight, TrendingDown, TrendingUp } from "lucide-react";

const StatsCard = ({ title, value, percentage, bgColor }) => {
  return (
    <div
      className="p-4 rounded-2xl min-w-[200px] h-[112px] shadow-sm"
      style={{ backgroundColor: bgColor }} // ✅ Use inline style for custom colors
    >
      <p className="text-gray-600 text-sm text-left">{title}</p>
      <div className="flex items-center justify-between mt-5">
        <p className="text-2xl font-semibold">{value}</p>
        <div className="flex items-center text-xs ">
          {percentage > 0 && "+"}
          {percentage}
          {percentage > 0 ? (
            <TrendingUp size={12} className="ml-1" />
          ) : (
            <TrendingDown size={12} className="ml-1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
