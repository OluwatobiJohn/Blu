import React from "react";
import Chart from "react-apexcharts";

const MarketingChart = ({ className }) => {
  const options = {
    chart: { type: "bar", height: 300 },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true, // Ensure each bar gets a unique color
      },
    },
    colors: [
      "#A78BFA",
      "#86EFAC",
      "#000000",
      "#7DD3FC",
      "#93C5FD",
      "#86EFAC",
      "#A78BFA",
      "#86EFAC",
      "#000000",
      "#7DD3FC",
      "#93C5FD",
      "#86EFAC",
    ], // Set the specific colors for the bars
    title: { text: "Marketing & SEO", align: "left" },
    dataLabels: { enabled: false }, // Disable data labels
  };

  const series = [
    {
      name: "Reports",
      data: [
        12000, 25000, 15000, 30000, 10000, 22000, 12000, 25000, 15000, 30000,
        10000, 22000,
      ],
    },
  ];

  return (
    <div
      className={`bg-[#F7F9FB] p-4 rounded-lg w-full ${className}`}
    >
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default MarketingChart;
