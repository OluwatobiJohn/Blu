import React from "react";
import { EmailInput } from "../../components/ui/emailinput";
import { PasswordInput } from "../../components/ui/passwordinput";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import logotgr from "../../assets/imgs/logotgr.png";

const Login = () => {
  return (
    <div className="text-black py-20">
      <div className="block lg:hidden">
        <img src={logotgr} alt="logo" className="absolute top-10" />
      </div>
      <div className="text-left">
        <div>
          <p className="text-[#0C1421] text-4xl font-semibold">Welcome back!</p>
          <p className="text-sm mt-2">
            Don’t have an account?
            <span className="text-[#EA0000] font-semibold ml-1">Sign Up</span>
          </p>
        </div>
        <div className="mt-8">
          <form>
            <div>
              <label className="text-sm">Email Address</label>
              <EmailInput />
            </div>
            <div className="mt-5">
              <label className="text-sm">Password</label>
              <PasswordInput/>
            </div>
            <div className="mt-5 flex flex-row items-center gap-2">
              <Input className="w-max" type="checkbox" />
              <p className="">Remember me for 30 days</p>
            </div>
            <div className="mt-10">
              <Button className="w-full h-14">Login</Button>
            </div>
          </form>
        </div>
        <div className="flex flex-row justify-center mt-5">
          <p className="text-sm">
            Forgot Password?
            <span
              className="ml-1 text-[#EA0000] font-semibold cursor-pointer"
              onClick={() => {
                window.location.href = "/auth/forgotpassword";
              }}
            >
              Recover
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
