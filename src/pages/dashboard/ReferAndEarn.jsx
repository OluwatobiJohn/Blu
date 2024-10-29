import React from "react";
import SponsorStatCard from "./components/SponsorStatCard";
import Table from "../../components/ui/Table";

const ReferAndEarn = () => {
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [currentPage, setcurrentPage] = React.useState(1);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const getPackageColor = (packageName) => {
    switch (packageName) {
      case "Diamond":
        return "bg-[#FEF6E7] text-[#865503]";
      case "Pearl":
        return "bg-[#E3EFFC] text-[#04326B]";
      case "Emerald":
        return "bg-[#FBEAE9] text-[#9E0A05]";
      case "Sapphire":
        return "bg-[#F0F2F5] text-[#344054]";
      case "Coral":
        return "bg-[#E7F6EC] text-[#036B26]";
      default:
        return "bg-gray-200 text-gray-600";
    }
  };

  const columns = [
    {
      key: "serialNumber",
      header: "S/N",
    },
    {
      key: "username",
      header: "Username",
    },
    {
      key: "name",
      header: "Name",
    },
    {
      key: "package",
      header: "Package",
      editCell: (row) => (
        <span
          className={`rounded-full py-1 px-3 text-sm font-medium ${getPackageColor(
            row.package
          )}`}
        >
          {row.package}
        </span>
      ),
    },
    {
      key: "email",
      header: "Email",
    },
    {
      key: "telephone",
      header: "Telephone",
    },
    {
      key: "pvMonthly",
      header: "PV (Monthly)",
    },
    {
      key: "pvLastMonth",
      header: "PV (Last Month)",
    },
    {
      key: "pvCumulative",
      header: "PV (Cumulative)",
    },
    {
      key: "date",
      header: "Date",
    },
  ];

  const data = [
    {
      username: "Saheed8084",
      name: "Saheed Tola",
      package: "Diamond",
      email: "tolafiade@yahoo.com",
      telephone: "08123837382",
      pvMonthly: 1,
      pvLastMonth: 1,
      pvCumulative: 1,
      date: "Apr 12, 2023",
    },
    {
      username: "Amedora33",
      name: "Amedora Philip",
      package: "Pearl",
      email: "dunnyhole@gmail.com",
      telephone: "08123837382",
      pvMonthly: 2,
      pvLastMonth: 2,
      pvCumulative: 2,
      date: "Apr 12, 2023",
    },
    {
      username: "Olutitosolu",
      name: "Olutitosolu Ali",
      package: "Emerald",
      email: "sayotunde22@yahoo.ie",
      telephone: "08123837382",
      pvMonthly: 3,
      pvLastMonth: 3,
      pvCumulative: 3,
      date: "Apr 12, 2023",
    },
    {
      username: "Saheed8084",
      name: "Saheed Tola",
      package: "Sapphire",
      email: "dunnyhole@gmail.com",
      telephone: "08123837382",
      pvMonthly: 4,
      pvLastMonth: 4,
      pvCumulative: 4,
      date: "Apr 12, 2023",
    },
    {
      username: "Saheed8084",
      name: "Saheed Tola",
      package: "Coral",
      email: "sayotunde22@yahoo.ie",
      telephone: "08123837382",
      pvMonthly: 5,
      pvLastMonth: 5,
      pvCumulative: 5,
      date: "Apr 12, 2023",
    },
    {
      username: "Saheed8084",
      name: "Saheed Tola",
      package: "Sapphire",
      email: "dunnyhole@gmail.com",
      telephone: "08123837382",
      pvMonthly: 6,
      pvLastMonth: 5,
      pvCumulative: 5,
      date: "Apr 12, 2023",
    },
    {
      username: "Saheed8084",
      name: "Saheed Tola",
      package: "Pearl",
      email: "tolafiade@yahoo.com",
      telephone: "08123837382",
      pvMonthly: 7,
      pvLastMonth: 7,
      pvCumulative: 7,
      date: "Apr 12, 2023",
    },
    {
      username: "Amedora33",
      name: "Amedora Philip",
      package: "Diamond",
      email: "dunnyhole@gmail.com",
      telephone: "08123837382",
      pvMonthly: 8,
      pvLastMonth: 8,
      pvCumulative: 8,
      date: "Apr 12, 2023",
    },
    {
      username: "Olutitosolu",
      name: "Olutitosolu Ali",
      package: "Emerald",
      email: "sayotunde22@yahoo.ie",
      telephone: "08123837382",
      pvMonthly: 9,
      pvLastMonth: 9,
      pvCumulative: 9,
      date: "Apr 12, 2023",
    },
    {
      username: "Saheed8084",
      name: "Saheed Tola",
      package: "Coral",
      email: "tolafiade@yahoo.com",
      telephone: "08123837382",
      pvMonthly: 10,
      pvLastMonth: 10,
      pvCumulative: 10,
      date: "Apr 12, 2023",
    },
    {
      username: "Amedora33",
      name: "Amedora Philip",
      package: "Sapphire",
      email: "dunnyhole@gmail.com",
      telephone: "08123837382",
      pvMonthly: 11,
      pvLastMonth: 11,
      pvCumulative: 11,
      date: "Apr 12, 2023",
    },
    {
      username: "Olutitosolu",
      name: "Olutitosolu Ali",
      package: "Pearl",
      email: "sayotunde22@yahoo.ie",
      telephone: "08123837382",
      pvMonthly: 12,
      pvLastMonth: 12,
      pvCumulative: 12,
      date: "Apr 12, 2023",
    },
    {
      username: "Saheed8084",
      name: "Saheed Tola",
      package: "Emerald",
      email: "tolafiade@yahoo.com",
      telephone: "08123837382",
      pvMonthly: 13,
      pvLastMonth: 13,
      pvCumulative: 13,
      date: "Apr 12, 2023",
    },
    {
      username: "Amedora33",
      name: "Amedora Philip",
      package: "Coral",
      email: "dunnyhole@gmail.com",
      telephone: "08123837382",
      pvMonthly: 14,
      pvLastMonth: 14,
      pvCumulative: 14,
      date: "Apr 12, 2023",
    },
    {
      username: "Olutitosolu",
      name: "Olutitosolu Ali",
      package: "Diamond",
      email: "sayotunde22@yahoo.ie",
      telephone: "08123837382",
      pvMonthly: 15,
      pvLastMonth: 15,
      pvCumulative: 15,
      date: "Apr 12, 2023",
    },
  ];

  return (
    <div className="text-left w-full">
      <div>
        <h1 className="font-semibold text-xl md:text-3xl">Sponsors</h1>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row justify-start gap-5">
        <div className="w-full sm:w-1/1 lg:w-1/2">
          <SponsorStatCard
            description={"Monthly"}
            count={"245"}
            profitOrLoss={"profit"}
            profitCount={"10%"}
          />
        </div>
        <div className="w-full sm:w-1/1 lg:w-1/2">
          <SponsorStatCard
            description={"Last Month PV"}
            count={"30"}
            profitOrLoss={"loss"}
            profitCount={"10%"}
          />
        </div>
        <div className="w-full sm:w-1/1 lg:w-1/2">
          <SponsorStatCard
            description={"Cummulative"}
            count={"230"}
            profitOrLoss={"loss"}
            profitCount={"10%"}
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
          />
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
