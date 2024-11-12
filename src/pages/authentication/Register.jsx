import React, { useState } from "react";
import logotgr from "../../assets/imgs/logotgr.png";
import arrowfoward from "../../assets/svgs/arrowfoward.svg";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { PasswordInput } from "../../components/ui/passwordinput";

const Stepper = ({ activeStep }) => {
  return (
    <div className="bg-[#F4F4F4] h-max py-4 rounded-t-3xl flex flex-row justify-center gap-4 md:gap-10 items-center text-sm">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <p
          className={`border border-[#959595] w-max px-[10px] py-1 rounded-lg ${
            activeStep === 1 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          1
        </p>
        <p
          className={
            activeStep === 1 ? "text-black font-semibold" : "text-[#959595]"
          }
        >
          Profile Information
        </p>
      </div>
      <div>
        <img src={arrowfoward} className="w-3 h-3" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <p
          className={`border border-[#959595] w-max px-[10px] py-1 rounded-lg ${
            activeStep === 2 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          2
        </p>
        <p
          className={
            activeStep === 2 ? "text-black font-semibold" : "text-[#959595]"
          }
        >
          Login Details
        </p>
      </div>
      <div>
        <img src={arrowfoward} className="w-3 h-3" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <p
          className={`border border-[#959595] w-max px-[10px] py-1 rounded-lg ${
            activeStep === 3 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          3
        </p>
        <p
          className={
            activeStep === 3 ? "text-black font-semibold" : "text-[#959595]"
          }
        >
          Bank Details
        </p>
      </div>
      <div>
        <img src={arrowfoward} className="w-3 h-3" />
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <p
          className={`border border-[#959595] w-max px-[10px] py-1 rounded-lg ${
            activeStep === 4 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          4
        </p>
        <p
          className={
            activeStep === 4 ? "text-black font-semibold" : "text-[#959595]"
          }
        >
          Bank Details
        </p>
      </div>
    </div>
  );
};

const MobileStepper = ({ activeStep }) => {
  return (
    <div className="py-3 px-4 rounded-xl bg-[#F4F5F9] text-[#645D5D] text-left w-max">
      Step {activeStep}/4 {activeStep === 1 && "Profile Information"}
      {activeStep === 2 && "Login Details"}
      {activeStep === 3 && "Bank Details"}
      {activeStep === 4 && "Bank Details"}
    </div>
  );
};

const ProfileInfoForm = ({ onNext, onPrevious }) => {
  return (
    <div className="bg-white">
      <form className="max-w-[30rem] mx-auto text-left grid grid-cols-6 gap-y-5 gap-x-3">
        <div className="col-span-6">
          <label className="text-sm">Referal ID</label>
          <Input />
        </div>
        <div className="col-span-6 lg:col-span-3">
          <label className="text-sm">First Name</label>
          <Input />
        </div>
        <div className="col-span-6 lg:col-span-3">
          <label className="text-sm">Last Name</label>
          <Input />
        </div>
        <div className="col-span-6">
          <label className="text-sm">Email Address</label>
          <Input />
        </div>
        <div className="col-span-6">
          <label className="text-sm">Phone Number</label>
          <Input />
        </div>
        <div className="mt-10 col-span-6">
          <Button
            className="w-full h-14"
            onClick={(e) => {
              e.preventDefault();
              onNext();
            }}
          >
            Next
          </Button>
        </div>
      </form>
      <div className="flex flex-row justify-center mt-5">
        <p className="text-sm">
          Have an Account?
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
  );
};

const LoginDetailsForm = ({ onNext, onPrevious }) => {
  return (
    <div className="bg-white pt-10">
      <form className="max-w-[30rem] mx-auto text-left grid grid-cols-6 gap-y-5 gap-x-3">
        <div className="col-span-6">
          <label className="text-sm">Username</label>
          <Input />
        </div>
        <div className="col-span-6">
          <label className="text-sm">Password</label>
          <PasswordInput />
        </div>
        <div className="col-span-6">
          <label className="text-sm">Confirm Password</label>
          <PasswordInput />
        </div>
        <div className="mt-10 col-span-6 flex flex-col-reverse sm:flex-row gap-2">
          <Button
            className="w-full h-14"
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              onPrevious();
            }}
          >
            Previous
          </Button>
          <Button
            className="w-full h-14"
            onClick={(e) => {
              e.preventDefault();
              onNext();
            }}
          >
            Next
          </Button>
        </div>
      </form>
      <div className="flex flex-row justify-center mt-5">
        <p className="text-sm">
          Have an Account?
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
  );
};

const BankDetailsForm = ({ onNext, onPrevious }) => {
  return (
    <div className="bg-white pt-10">
      <form className="max-w-[30rem] mx-auto text-left grid grid-cols-6 gap-y-5 gap-x-3">
        <div className="col-span-6">
          <label className="text-sm">Bank</label>
          <Input />
        </div>
        <div className="col-span-6">
          <label className="text-sm">Bank Account Name</label>
          <Input />
        </div>
        <div className="col-span-6">
          <label className="text-sm">Account Number</label>
          <Input />
        </div>
        <div className="mt-10 col-span-6 flex flex-col-reverse sm:flex-row gap-2">
          <Button
            className="w-full h-14"
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              onPrevious();
            }}
          >
            Previous
          </Button>
          <Button
            className="w-full h-14"
            onClick={(e) => {
              e.preventDefault();
              onNext();
            }}
          >
            Next
          </Button>
        </div>
      </form>
      <div className="flex flex-row justify-center mt-5">
        <p className="text-sm">
          Have an Account?
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
  );
};

const Register = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="max-w-[1440px] mx-auto">
      <div>
        <img src={logotgr} alt="logo" className="absolute top-10" />
      </div>
      <div className="mt-20">
        <div className="hidden md:block">
          <Stepper activeStep={activeStep} />
        </div>
        <div className="block md:hidden">
          <MobileStepper activeStep={activeStep} />
        </div>
        <p className="text-[#0C1421] text-4xl font-semibold my-7 hidden md:block">
          Fill Form to Register
        </p>
        <p className="text-[#0C1421] text-4xl text-left font-semibold my-7 block md:hidden">
          Register
        </p>
        <div>
          {activeStep === 1 && (
            <ProfileInfoForm onNext={() => setActiveStep(2)} />
          )}
          {activeStep === 2 && (
            <LoginDetailsForm
              onNext={() => setActiveStep(3)}
              onPrevious={() => setActiveStep(1)}
            />
          )}
          {activeStep === 3 && (
            <BankDetailsForm
              onNext={() => setActiveStep(4)}
              onPrevious={() => setActiveStep(2)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
