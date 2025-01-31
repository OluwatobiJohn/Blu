import React from "react";
import StatsCard from "./components/StatsCard";
import QuickLinkComp from "./components/QuickLinkComp";
import Table from "../../components/ui/Table";
import { ChevronRight } from "lucide-react";

const DashboardHome = () => {
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [currentPage, setcurrentPage] = React.useState(1);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const columns = [
    { key: "id", header: "#", isCheckbox: true }, // This will be hidden
    { key: "name", header: "Name" },
    {
      key: "transaction",
      header: "Transaction",
      editCell: (column) => (
        <div className="rounded-xl py-1 px-3 w-max bg-[#E3EFFC] text-sm">
          {column.transaction}
        </div>
      ),
    },
    { key: "amount", header: "Amount" },
    { key: "description", header: "Description" },
    { key: "date", header: "Date" },
  ];

  const data = [
    {
      id: "transaction1",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction2",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction3",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction4",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction5",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction6",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction7",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction8",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction9",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction10",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction11",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction12",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction13",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction14",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction15",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction16",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction17",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction18",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction19",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction20",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction21",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction22",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction23",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction24",
      name: "Saheed8084",
      transaction: "transaction",
      amount: "N200,000.00",
      description: "Purchase of 300 Airtel 09011775126 by Saheed8084",
      date: "Apr 12, 2023 | 09:32AM",
    },
    {
      id: "transaction25",
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
        <h1 className="font-semibold text-xl md:text-3xl">Dashboard</h1>
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
        <div className="w-full sm:w-1/1 lg:w-1/2">
          <StatsCard
            bgClass={"bg-[#022336]"}
            description={"Personal Sales Point"}
            amount={"N 140,000.00"}
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl md:text-2xl font-semibold mb-5">
            Quick Links
          </h1>
          <div className="flex flex-row justify-center items-center gap-1 text-[#EA0000]">
            <p>See all beneficaries</p>
            <ChevronRight />
          </div>
        </div>
        <div className="flex flex-row overflow-auto">
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
          <QuickLinkComp name={"Testing"} handle={"@testing"} />
        </div>
      </div>
      <div className="mt-10">
        <h1 className="font-semibold text-xl md:text-3xl mb-5">
          My Commission
        </h1>
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

export default DashboardHome;
