"use client";

import { accountForm2, accoutForm } from "@/data/data";
import { Button } from "@mui/material";
import { Controller } from "react-hook-form";

const AccountForm = () => {
  return (
    <main className="mt-[3vw] lg:mt-[1vw]">
      <form action="">
        {accoutForm?.map((field, index) => (
          <div className={""}>
            <div key={index} className="mb-4 sm:mb-6">
              <label
                htmlFor={field.name}
                className="lg:text-[0.9vw] sm:text-[2.5vw] text-[4vw] text-[#1B1B1B]"
              >
                {field.label}
              </label>

              <div className={field}>
                <input
                  id={field.name}
                  type={field?.type}
                  required
                  value={field.value}
                  className="bg-[#FAFAFA] lg:p-[0.7vw] sm:text-[2vw] sm:p-[2vw] p-[4vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] lg:text-[0.9vw] text-[3.5vw]"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-[2vw] mb-4">
          <div>
            <label
              htmlFor=""
              className="lg:text-[0.9vw] sm:text-[2.5vw] text-[4vw] text-[#1B1B1B]"
            >
              First Name
            </label>
            <input
              type="text"
              name=""
              value={"ab"}
              id=""
              className="bg-[#FAFAFA] p-[4vw] lg:p-[0.7vw] sm:text-[2vw] sm:p-[2vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] lg:text-[0.9vw] text-[3.5vw] sm:w-[42vw] lg:w-[13vw]"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="lg:text-[0.9vw] text-[4vw] sm:text-[2.5vw] text-[#1B1B1B]"
            >
              Last Name
            </label>
            <input
              type="text"
              name=""
              value={"ab"}
              id=""
              className="bg-[#FAFAFA] p-[4vw] lg:p-[0.7vw] sm:text-[2vw] sm:p-[2vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] lg:text-[1vw] text-[3.5vw] sm:w-[44vw] lg:w-[13vw]"
            />
          </div>
        </div>

        {accountForm2?.map((field, index) => (
          <div className={""}>
            <div key={index} className="mb-4 flex flex-col ">
              <label
                htmlFor={field.name}
                className="lg:text-[0.9vw] sm:text-[2.5vw] text-[4vw] text-[#1B1B1B]"
              >
                {field.label}
              </label>

              <div className={field}>
                <input
                  id={field.name}
                  type={field?.type}
                  required
                  value={field.value}
                  className="bg-[#FAFAFA] lg:p-[0.7vw] sm:text-[2vw] sm:p-[2vw] p-[4vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] lg:text-[0.9vw] text-[3.5vw]"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-[2vw] mb-4">
          <div>
            <label
              htmlFor=""
              className="lg:text-[0.9vw] sm:text-[2.5vw] text-[4vw] text-[#1B1B1B]"
            >
              Postal code
            </label>
            <input
              type="text"
              name=""
              value={"23456"}
              id=""
              className="bg-[#FAFAFA] p-[4vw] lg:p-[0.7vw] sm:text-[2vw] sm:p-[2vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] lg:text-[0.9vw] text-[3.5vw] sm:w-[42vw] lg:w-[13vw]"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="lg:text-[0.9vw] text-[4vw] sm:text-[2.5vw] text-[#1B1B1B]"
            >
              City
            </label>
            <input
              type="text"
              name=""
              value={"Birmingham"}
              id=""
              className="bg-[#FAFAFA] p-[4vw] lg:p-[0.7vw] sm:text-[2vw] sm:p-[2vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] lg:text-[1vw] text-[3.5vw] sm:w-[44vw] lg:w-[13vw]"
            />
          </div>
        </div>
      </form>
      <Button
        size="small"
        variant="outlined"
        className=" text-[2.5vw] lg:text-[0.7vw] sm:text-[1.5vw] text-[#FF387A] border-[1.5px] font-bold border-[#FF387A] hover:border-[#FF387A] lg:py-[0.6vw] py-[2vw] px-[3vw] lg:px-[1vw]"
      >
        update
      </Button>
    </main>
  );
};

export default AccountForm;
