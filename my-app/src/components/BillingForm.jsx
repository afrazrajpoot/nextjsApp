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
            <div key={index} className="md:mb-6 mb-[3vw]">
              <label
                htmlFor={field.name}
                className="md:text-[0.9vw] text-[3vw] font-bold  text-[#1B1B1B]"
              >
                {field.label}
              </label>

              <div className={field}>
                <input
                  id={field.name}
                  type={field?.type}
                  required
                  value={field.value}
                  className="bg-[#FAFAFA] p-[3vw] md:p-[0.7vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] md:text-[0.9vw] text-[2.5vw]"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-[4vw] md:gap-[2vw] ">
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold text-[3vw] md:text-[0.9vw]">
              City
            </label>
            <input
              type="text"
              name=""
              value={"Birmingham"}
              id=""
              className="bg-[#FAFAFA] p-[3vw] md:p-[0.7vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] md:text-[0.9vw] text-[2.5vw] md:w-[22vw]"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="" className="font-bold text-[3vw] md:text-[0.9vw]">
              Postal code
            </label>
            <input
              type="text"
              name=""
              value={"3456"}
              id=""
              className="bg-[#FAFAFA] p-[3vw] md:p-[0.7vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] md:text-[0.9vw] text-[2.5vw] md:w-[22vw]"
            />
          </div>
        </div>
      </form>
      <Button
        size="small"
        variant="outlined"
        className=" md:text-[0.7vw] text-[2vw] text-[#FF387A] border-[1.5px] font-bold border-[#FF387A] hover:border-[#FF387A] py-[0.6vw] px-[1vw] "
      >
        Edit
      </Button>
    </main>
  );
};

export default BillingForm;
