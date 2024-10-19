import React from "react";
import StatsCard from "./components/StatsCard";
import QuickLinkComp from "./components/QuickLinkComp";
import Table from "../../components/ui/Table";

const DashboardHome = () => {
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
        <h1 className="text-2xl font-semibold mb-5">Quick Links</h1>
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
        <h1 className="text-2xl font-semibold mb-5">My Commission</h1>
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

export default DashboardHome;
