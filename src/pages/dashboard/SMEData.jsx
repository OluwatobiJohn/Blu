import React, { useState } from "react";
import {
  MtnLogo,
  GloLogo,
  AirtelLogo,
  NineMobileLogo,
  CancelIcon,
} from "../../assets/svgs";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer";

const SMEData = () => {
  const [selectedCarrier, setSelectedCarrier] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [rechargeBundle, setrechargeBundle] = useState("");

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
        <h1 className="font-semibold text-3xl">SME Mobile Data</h1>
      </div>
      <div className="w-full max-w-[44rem] mx-auto bg-white my-14 md:my-24 p-3 md:p-5">
        <p className="text-xl font-medium">Select your desired provider</p>
        <form>
          <div className="flex flex-row gap-3 md:justify-between items-center flex-wrap mt-10 font-medium">
            {carriers.map((carrier) => (
              <div
                key={carrier.name}
                onClick={() => handleCarrierClick(carrier)}
                className={`flex flex-row gap-7 items-center bg-[#F8F8F9] rounded-xl py-2 px-4 cursor-pointer ${
                  selectedCarrier?.name === carrier.name
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
            <Input
              value={phoneNumber}
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
            />
          </div>
          <div className="mt-5">
            <label className="text-sm">Select Bundle</label>
            <Select
              value={rechargeBundle}
              onValueChange={(value) => setrechargeBundle(value)}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Select Bundle" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Option1">Option1</SelectItem>
                <SelectItem value="Option2">Option2</SelectItem>
                <SelectItem value="Option3">Option3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mt-10">
            {selectedCarrier && phoneNumber && rechargeBundle ? (
              <Drawer>
                <DrawerTrigger asChild>
                  <Button className="w-full h-14">Next</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader className="relative">
                    <DrawerTitle>Overview</DrawerTitle>
                    <div className="absolute left-[90%] top-4">
                      <DrawerClose>
                        <CancelIcon />
                      </DrawerClose>
                    </div>
                  </DrawerHeader>
                  <div className="flex flex-col items-center justify-center px-5">
                    {selectedCarrier && (
                      <div className="flex items-center gap-3">
                        {selectedCarrier.logo}
                      </div>
                    )}
                    <div className="my-4 p-4 rounded-xl bg-[#F0FADE] w-full max-w-[30rem] flex flex-col gap-2">
                      <div className="flex flex-row justify-between items-center">
                        <p>Bundle:</p>
                        <p>{rechargeBundle}</p>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <p>Number:</p>
                        <p>{phoneNumber}</p>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <p>Network:</p>
                        <p>{selectedCarrier.name}</p>
                      </div>
                    </div>
                  </div>
                  <DrawerFooter className="flex items-center">
                    <Button className="w-full md:w-1/2">
                      Load {rechargeBundle}
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            ) : (
              <Button className="w-full h-14" disabled>
                Next
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SMEData;
