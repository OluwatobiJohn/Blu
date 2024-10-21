import React from "react";
import StatsCard from "./components/StatsCard";
import TransactionActionCard from "./components/TransactionActionCard";
import {
  BlueAirtimeIcon,
  BlueMobileDataIcon,
  BlueSMEDataIcon,
  TransferActionIcon,
  WalletActionIcon,
  WithdrawActionIcon,
} from "../../assets/svgs";
import TransactionServicesCard from "./components/TransactionServicesCard";
import Table from "../../components/ui/Table";

const Transactions = () => {
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [currentPage, setcurrentPage] = React.useState(1);

  const columns = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "transaction",
      header: "Transaction",
    },
    {
      key: "amount",
      header: "Amount",
    },
    {
      key: "description",
      header: "Description",
    },
    {
      key: "date",
      header: "Date",
    },
  ];

  const data = [
    {
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
  ];
  
  return (
    <div className="text-left w-full">
      <div>
        <h1 className="font-semibold text-xl md:text-3xl">
          Wallet Transactions
        </h1>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row justify-start gap-5">
        <div className="w-full">
          <StatsCard
            bgClass={"bg-[#060236]"}
            description={"Current Commission Balance"}
            amount={"N 140,000.00"}
          />
        </div>
        <div className="w-full sm:w-1/1 lg:w-1/2">
          <TransactionActionCard
            bgClass={"bg-[#FEF6E7]"}
            icon={WithdrawActionIcon}
            actionText={"Withdraw"}
          />
        </div>
        <div className="w-full sm:w-1/1 lg:w-1/2">
          <TransactionActionCard
            bgClass={"bg-[#FFECE5]"}
            icon={TransferActionIcon}
            actionText={"Transfer"}
          />
        </div>
        <div className="w-full sm:w-1/1 lg:w-1/2">
          <TransactionActionCard
            bgClass={"bg-[#E7F6EC]"}
            icon={WalletActionIcon}
            actionText={"Load Wallet"}
          />
        </div>
      </div>
      <div className="mt-12 flex flex-row justify-center gap-8 md:gap-16 overflow-auto">
        <TransactionServicesCard
          icon={BlueAirtimeIcon}
          serviceText={"Airtime"}
        />
        <TransactionServicesCard
          icon={BlueMobileDataIcon}
          serviceText={"Mobile Data"}
        />
        <TransactionServicesCard
          icon={BlueSMEDataIcon}
          serviceText={"SME Data"}
        />
        <TransactionServicesCard icon={BlueAirtimeIcon} serviceText={"E-PIN"} />
        <TransactionServicesCard
          icon={BlueMobileDataIcon}
          serviceText={"Internet"}
        />
        <TransactionServicesCard
          icon={BlueSMEDataIcon}
          serviceText={"Cable TV"}
        />
        <TransactionServicesCard
          icon={BlueAirtimeIcon}
          serviceText={"PayBill"}
        />
        <TransactionServicesCard
          icon={BlueMobileDataIcon}
          serviceText={"E-Transact"}
        />
      </div>
      <div className="mt-10">
        <div className="overflow-auto">
          <Table
            data={data}
            columns={columns}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            totalPages={1}
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
