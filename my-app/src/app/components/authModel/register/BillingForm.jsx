"use client";

import { accountForm2, accoutForm, billingAddress } from "@/data/data";
import { Button } from "@mui/material";
import { Controller } from "react-hook-form";

const BillingForm = () => {
  return (
    <main className="">
      <form action="">
        {billingAddress?.map((field, index) => (
          <div className={""}>
            <div key={index} className="lg:mb-6 mb-[3vw]">
              <label
                htmlFor={field.name}
                className="lg:text-[0.9vw] sm:text-[2.5vw]  text-[4vw] font-medium  text-[#1B1B1B]"
              >
                {field.label}
              </label>

              <div className={field}>
                <input
                  id={field.name}
                  type={field?.type}
                  required
                  value={field.value}
                  className="bg-[#FAFAFA] p-[3vw] lg:p-[0.7vw] sm:text-[2vw] sm:p-[2vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] lg:text-[0.9vw] text-[3.5vw]"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-[4vw] lg:gap-[2vw] ">
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="font-bold text-[4vw] sm:text-[2.5vw] lg:text-[0.9vw]"
            >
              City
            </label>
            <input
              type="text"
              name=""
              value={"Birmingham"}
              id=""
              className="bg-[#FAFAFA] p-[3vw] lg:p-[0.7vw] sm:text-[2vw] sm:p-[2vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] lg:text-[0.9vw] text-[3.5vw] lg:w-[22vw] sm:w-[41vw]"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor=""
              className="font-bold text-[4vw] sm:text-[2.5vw] lg:text-[0.9vw]"
            >
              Postal code
            </label>
            <input
              type="text"
              name=""
              value={"3456"}
              id=""
              className="bg-[#FAFAFA] p-[3vw] lg:p-[0.7vw] sm:text-[2vw] sm:p-[2vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] lg:text-[0.9vw] text-[3.5vw] lg:w-[22vw] sm:w-[41vw]"
            />
          </div>
        </div>
      </form>
      <Button
        size="small"
        variant="outlined"
        className=" lg:text-[0.7vw] text-[4vw] sm:text-[1.5vw] text-[#FF387A] border-[1.5px] font-bold border-[#FF387A] hover:border-[#FF387A] py-[0.6vw] px-[1vw] "
        style={{ textTransform: "capitalize" }}
      >
        Edit
      </Button>
    </main>
  );
};

export default BillingForm;
