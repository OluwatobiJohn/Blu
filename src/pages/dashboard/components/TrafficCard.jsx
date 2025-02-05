import React from "react";

const TrafficCard = () => {
  const websites = [
    "Google",
    "YouTube",
    "Instagram",
    "Pinterest",
    "Facebook",
    "Twitter",
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md h-full flex flex-col mr-1">
      <h3 className="text-gray-700 font-semibold mb-7">Traffic by Website</h3>
      <div className="space-y-8 flex-grow">
        {websites.map((site, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">{site}</span>
            <div className="flex items-center space-x-1">
              <span className="w-6 h-1 bg-gray-500"></span>
              <span className="w-4 h-1 bg-gray-300"></span>
              <span className="w-3 h-1 bg-gray-200"></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficCard;
