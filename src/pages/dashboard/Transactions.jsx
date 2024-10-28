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
import { Button } from "../../components/ui/button";
import { Download, Filter } from "lucide-react";

const Transactions = () => {
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [currentPage, setcurrentPage] = React.useState(1);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const getTransactionStyles = (transType) => {
    switch (transType) {
      case "withdrawal":
        return "bg-[#FFECE5] text-[#8A0000]";
      case "deposit":
        return "bg-[#E7F6EC] text-[#036B26]";
      default:
        return "";
    }
  };
  const columns = [
    { key: "id", header: "#", isCheckbox: true },
    {
      key: "name",
      header: "Name",
    },
    {
      key: "transaction",
      header: "Transaction",
      editCell: (column) => {
        return (
          <div
            className={`rounded-xl py-1 px-3 w-max text-sm ${getTransactionStyles(
              column.transType
            )}`}
          >
            {column.transType}
          </div>
        );
      },
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
      id: "transaction1",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "deposit",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction2",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "deposit",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction3",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction4",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "deposit",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction5",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction6",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "deposit",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction7",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction8",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction9",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "deposit",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction10",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction11",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction12",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "deposit",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction13",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction14",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction15",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "deposit",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction16",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction17",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction18",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "deposit",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction19",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction20",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      transType: "withdrawal",
      date: "Apr 12, 2023 | 09:32AM",
    },
  ];

  return (
    <div className="text-left w-full">
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-semibold text-xl md:text-3xl">
          Wallet Transactions
        </h1>{" "}
        <div className="flex flex-row items-center gap-5">
          <Button
            variant={"outline"}
            className="space-x-2 text-[#EB3333] border-2 border-[#EB3333]"
          >
            <Filter className="text-[#EB3333]" />
            <p>Filter</p>
          </Button>
          <Button className="space-x-2">
            <Download />
            <p>Filter</p>
          </Button>
        </div>
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
      <div className="mt-12 flex flex-row justify-start md:justify-center gap-8 md:gap-16 overflow-auto">
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
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
