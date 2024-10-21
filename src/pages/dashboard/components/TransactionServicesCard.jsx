import React from "react";

const TransactionServicesCard = ({ icon: Icon, serviceText }) => {
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      <div>
        <Icon />
      </div>
      <div>
        <p>{serviceText}</p>
      </div>
    </div>
  );
};

export default TransactionServicesCard;
