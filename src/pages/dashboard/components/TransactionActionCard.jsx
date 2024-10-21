import React from "react";

const TransactionActionCard = ({ bgClass, icon: Icon, actionText }) => {
  return (
    <div
      className={`h-[9.4rem] flex flex-col justify-between items-start gap-5 rounded-sm p-5 ${bgClass} shadow-md`}
    >
      <div>
        <Icon />
      </div>
      <div>
        <p className="font-semibold">{actionText}</p>
      </div>
    </div>
  );
};

export default TransactionActionCard;
