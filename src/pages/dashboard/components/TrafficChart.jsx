import React from "react";
import Chart from "react-apexcharts";

const TrafficChart = ({ className }) => {
  const options = {
    chart: {
      type: "donut",
    },
    labels: ["Nigeria", "Ghana", "Kenya", "Benin Republic"],
    colors: ["#1E40AF", "#6EE7B7", "#7DD3FC", "#D1D5DB"],
    title: { text: "Traffic by Location", align: "left" },
    legend: { position: "right" },
    dataLabels: { enabled: false }, // Disable values display
    tooltip: {
      enabled: true, // Ensure the values show up on hover
    },
  };

  const series = [38.6, 22.5, 30.8, 8.1];

  return (
    <div className={`bg-[#F7F9FB] p-4 rounded-lg w-full ${className}`}>
      <Chart options={options} series={series} type="donut" height={300} />
    </div>
  );
};

export default TrafficChart;
