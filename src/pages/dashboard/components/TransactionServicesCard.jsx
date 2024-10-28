import React from "react";

const TransactionServicesCard = ({ icon: Icon, serviceText }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-5 min-h-[120px] min-w-[3.5rem]">
      <div>
        <Icon />
      </div>
      <div className="flex-grow">
        <p className="text-center min-h-[40px] flex items-center justify-center">
          {serviceText}
        </p>
      </div>
    </div>
  );
};

export default TransactionServicesCard;
