import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import logintweetimg from "../../../assets/imgs/logintweetimg.png";
import logotgr from "../../../assets/imgs/logotgr.png";

const OnboardLayout = () => {
  const location = useLocation();
  return (
    <div>
      <div></div>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-row">
          <div className="hidden lg:block">
            {(location.pathname === "/auth/login" ||
              location.pathname === "/auth/login/") && (
              <div className="bg-main-login rounded-3xl min-w-[36rem] 2xl:min-w-[42rem] p-10">
                <img src={logotgr} alt="logo" className="" />
                <div className="text-left">
                  <p className="max-w-[35rem] font-semibold text-6xl text-white mt-8">
                    The Best Online Mobile Solution Provider
                  </p>
                  <p className="max-w-[26rem] font-normal text-lg text-[#E4DBDB] mt-8">
                    Top-up and Get Rewards (TGR), is a world of digitally
                    transformed airtime-vending and bill-paying platform. Our
                    business is to help you get involved in the 'train of
                    profit' that telecommunication firms enjoy!
                  </p>
                </div>
                <img src={logintweetimg} alt="transaction" className="mt-12" />
              </div>
            )}
            {(location.pathname === "/auth/forgotpassword" ||
              location.pathname === "/auth/forgotpassword/" ||
              location.pathname === "/auth/newpassword/confirm" ||
              location.pathname === "/auth/newpassword/confirm/") && (
              <div className="bg-main-forgot-password rounded-3xl min-w-[36rem] 2xl:min-w-[42rem] min-h-[50rem] p-10 flex flex-col justify-between">
                <img src={logotgr} alt="logo" className="h-14 w-48" />
                <img src={logintweetimg} alt="transaction" className="mt-12" />
              </div>
            )}
          </div>
          <div className="w-full sm:px-8 md:px-10 lg:px-16 2xl:px-20 py-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardLayout;
