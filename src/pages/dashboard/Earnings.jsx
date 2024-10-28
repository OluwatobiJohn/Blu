import React from "react";
import StatsCard from "./components/StatsCard";
import Table from "../../components/ui/Table";

const Earnings = () => {
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
      <div className="">
        <h1 className="font-semibold text-xl md:text-3xl">Earnings</h1>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row justify-start gap-5">
        <div className="w-full sm:w-1/1 lg:w-1/2">
          <StatsCard
            bgClass={"bg-[#060236]"}
            description={"Current Commission Balance"}
            amount={"N 140,000.00"}
          />
        </div>
        <div className="w-full sm:w-1/1 lg:w-1/2">
          <StatsCard
            bgClass={"bg-[#023036]"}
            description={"Current Wallet Balance"}
            amount={"N 140,000.00"}
          />
        </div>
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

export default Earnings;
