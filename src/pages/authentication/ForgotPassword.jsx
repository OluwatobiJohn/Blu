import React, { useState } from "react";
import { EmailInput } from "../../components/ui/emailinput";
import { Button } from "../../components/ui/button";
import logotgr from "../../assets/imgs/logotgr.png";
import greencheckmark from "../../assets/imgs/greencheckmark.png";

const ForgotPassword = () => {
  const [requestedReset, setResetRequest] = useState(false);

  return (
    <>
      <div className="text-black py-20 lg:py-32">
        <div className="block lg:hidden">
          <img src={logotgr} alt="logo" className="absolute top-10" />
        </div>
        {requestedReset === false && (
          <div className="text-left">
            <div>
              <p className="text-[#0C1421] text-4xl font-semibold">
                Forgot Password
              </p>
              <p className="text-sm mt-2">
                Enter your email to reset your password
              </p>
            </div>
            <div className="mt-8">
              <form>
                <div>
                  <label className="text-sm">Email Address</label>
                  <EmailInput />
                </div>
                <div className="mt-10">
                  <Button
                    className="w-full h-14"
                    onClick={(e) => {
                      e.preventDefault();
                      setResetRequest(true);
                    }}
                  >
                    Proceed
                  </Button>
                </div>
              </form>
            </div>
            <div className="flex flex-row justify-center mt-5">
              <p className="text-sm">
                Remember Password?
                <span
                  className="ml-1 text-[#EA0000] font-semibold cursor-pointer"
                  onClick={() => {
                    window.location.href = "/auth/login";
                  }}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        )}
        {requestedReset === true && (
          <div className="-mt-10">
            <div className="flex flex-col items-center">
              <img src={greencheckmark} alt="greencheck" />
              <p className="text-[#0C1421] text-4xl font-semibold mt-5">
                Check Your Mail!
              </p>
              <p className="text-sm mt-2">
                Enter tour email to reset your password
              </p>
            </div>
            <div className="mt-8">
              <div className="mt-10">
                <Button className="w-full h-14">Proceed</Button>
              </div>
            </div>
            <div className="flex flex-row justify-center mt-5">
              <p className="text-sm">
                Remember Password?
                <span
                  className="ml-1 text-[#EA0000] font-semibold cursor-pointer"
                  onClick={() => {
                    window.location.href = "/auth/login";
                  }}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ForgotPassword;
