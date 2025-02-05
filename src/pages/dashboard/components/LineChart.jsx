import React from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const chartOptions = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false, // Hide the toolbar with zoom and home options
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    stroke: {
      curve: "smooth",
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
    },
  };

  const series = [
    {
      name: "This Year",
      data: [10, 30, 45, 50, 49, 60, 70],
    },
    {
      name: "Last Year",
      data: [20, 40, 35, 55, 57, 65, 80],
    },
  ];

  return (
    <div className="bg-[#F7F9FB] rounded-xl pt-2">
      <div className="flex flex-row gap-3 justify-start items-center ml-4 mb-4">
        <h3 className="font-bold">Total Users</h3>
        <h3 className="text-[#1C1C1C66]">Total Projects</h3>
        <h3 className="text-[#1C1C1C66]">Operating Status</h3>
      </div>
      <Chart options={chartOptions} series={series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
