import React, { useState } from "react";
import {
  MtnLogo,
  GloLogo,
  AirtelLogo,
  NineMobileLogo,
} from "../../assets/svgs";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

const Airtime = () => {
  const [selectedCarrier, setSelectedCarrier] = useState("");

  const carriers = [
    { name: "MTN", logo: <MtnLogo /> },
    { name: "Airtel", logo: <AirtelLogo /> },
    { name: "Glo", logo: <GloLogo /> },
    { name: "9mobile", logo: <NineMobileLogo /> },
  ];

  const handleCarrierClick = (carrier) => {
    setSelectedCarrier(carrier);
  };
  return (
    <div className="text-left w-full">
      <div>
        <h1 className="font-semibold text-3xl">Airtime Recharge</h1>
      </div>
      <div className="w-full max-w-[44rem] mx-auto bg-white my-14 md:my-24 p-3 md:p-5">
        <p className="text-xl font-medium">Select your desired provider</p>
        <form>
          <div className="flex flex-row gap-3 md:justify-between items-center flex-wrap mt-10 font-medium">
            {carriers.map((carrier) => (
              <div
                key={carrier.name}
                onClick={() => handleCarrierClick(carrier.name)}
                className={`flex flex-row gap-7 items-center bg-[#F8F8F9] rounded-xl py-2 px-4 cursor-pointer ${
                  selectedCarrier === carrier.name
                    ? "border border-[#189B62]"
                    : ""
                }`}
              >
                <p>{carrier.name}</p>
                {carrier.logo}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <label className="text-sm">Enter receive number</label>
            <Input />
          </div>
          <div className="mt-5">
            <label className="text-sm">Enter amount</label>
            <Input />
          </div>
          <div className="mt-10">
            <Button className="w-full h-14">Next</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Airtime;
