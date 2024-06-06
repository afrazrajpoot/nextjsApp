"use client";

import { accountForm2, accoutForm } from "@/data/data";
import { Button } from "@mui/material";
import { Controller } from "react-hook-form";

const AccountForm = () => {
  return (
    <main className="mt-[3vw] md:mt-[1vw]">
      <form action="">
        {accoutForm?.map((field, index) => (
          <div className={""}>
            <div key={index} className="mb-4">
              <label
                htmlFor={field.name}
                className="md:text-[0.9vw] text-[3vw] text-[#1B1B1B]"
              >
                {field.label}
              </label>

              <div className={field}>
                <input
                  id={field.name}
                  type={field?.type}
                  required
                  value={field.value}
                  className="bg-[#FAFAFA] md:p-[0.7vw] p-[4vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] md:text-[0.9vw] text-[2.5vw]"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="flex gap-[2vw] mb-4">
          <div>
            <label
              htmlFor=""
              className="md:text-[0.9vw] text-[3vw] text-[#1B1B1B]"
            >
              First Name
            </label>
            <input
              type="text"
              name=""
              value={"ab"}
              id=""
              className="bg-[#FAFAFA] p-[4vw] md:p-[0.7vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] md:text-[0.9vw] text-[2.5vw]"
            />
          </div>
          <div>
            <label
              htmlFor=""
              className="md:text-[0.9vw] text-[3vw] text-[#1B1B1B]"
            >
              Last Name
            </label>
            <input
              type="text"
              name=""
              value={"ab"}
              id=""
              className="bg-[#FAFAFA] p-[4vw] md:p-[0.7vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] md:text-[1vw] text-[2.5vw]"
            />
          </div>
        </div>

        {accountForm2?.map((field, index) => (
          <div className={""}>
            <div key={index} className="mb-4 flex flex-col ">
              <label
                htmlFor={field.name}
                className="md:text-[0.9vw] text-[3vw] text-[#1B1B1B]"
              >
                {field.label}
              </label>

              <div className={field}>
                <input
                  id={field.name}
                  type={field?.type}
                  required
                  value={field.value}
                  className="bg-[#FAFAFA] md:p-[0.7vw] p-[4vw] w-full focus:outline-none border-[1px] rounded-sm border-[#F5F5F5] md:text-[0.9vw] text-[2.5vw]"
                />
              </div>
            </div>
          </div>
        ))}
      </form>
      <Button
        size="small"
        variant="outlined"
        className=" text-[2.5vw] md:text-[0.7vw] text-[#FF387A] border-[1.5px] font-bold border-[#FF387A] hover:border-[#FF387A] md:py-[0.6vw] py-[2vw] px-[3vw] md:px-[1vw]"
      >
        update
      </Button>
    </main>
  );
};

export default AccountForm;
