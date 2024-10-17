import React from "react";
import { PasswordInput } from "../../components/ui/passwordinput";
import { Button } from "../../components/ui/button";
import logotgr from "../../assets/imgs/logotgr.png";

const NewPassword = () => {
  return (
    <div className="text-black py-24">
      <div className="block lg:hidden">
        <img src={logotgr} alt="logo" className="absolute top-10" />
      </div>
      <div className="text-left">
        <div>
          <p className="text-[#0C1421] text-4xl font-semibold">
            Set New Password
          </p>
          <p className="text-sm mt-2">Enter your new password below</p>
        </div>
        <div className="mt-8">
          <form>
            <div className="mt-5">
              <label className="text-sm">New Password</label>
              <PasswordInput />
            </div>
            <div className="mt-5">
              <label className="text-sm">Confirm New Password</label>
              <PasswordInput />
            </div>
            <div className="mt-10">
              <Button className="w-full h-14">Proceed</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
