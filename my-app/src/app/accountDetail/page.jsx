"use client";
import AccountDetail from "@/components/AccountDetail";
import AccountForm from "@/components/AccountForm";
import BillingForm from "@/components/BillingForm";
import CreatePasswordForm from "@/components/CreatePasswordForm";
import CreatePassword from "@/components/CreatePasswordForm";
import Sidebar from "@/components/Sidebar";
import { menueData, otherData } from "@/data/data";
import { Button } from "@mui/material";

import React from "react";

const page = () => {
  return (
    <main className="bg-[#FAFAFA] md:h-[140vh] h-[210vh]  overflow-x-hidden ">
      <Sidebar />

      <section className=" rounded-md w-full md:max-w-[50vw] max-w-[90vw] translate-y-[5vw] md:translate-x-[26vw] translate-x-[5vw] p-[2vw] md:p-[1vw]">
        <h1 className="font-bold text-[6vw] md:text-[2vw] md:ml-[0vw] ml-[5vw] translate-y-[13vw] md:translate-y-[0.5vw] translate-x-[-4vw]  md:translate-x-0 ">
          Account Detail
        </h1>
        <article className="flex w-[90vw] md:flex-row flex-col  gap-[1.5vw] items-center md:items-start">
          <div
            className=" p-[2vw] bg-white border-[1px] border-[#F5F5F5] mt-[1vw] translate-y-[15vw]
        md:translate-y-0 rounded-lg md:w-[30vw] w-[85vw] ml-[-2.5vw] md:ml-[0vw]"
          >
            <header className="flex items-start gap-[1vw] w-full">
              <div className="">
                <img src="/img/accountAvatar.png" alt="avatar" className="" />
              </div>
              <div>
                <p className="md:text-[1vw] text-[4vw] text-[#64748B]">
                  We only support .JPG, .JPEG, or .PNG file.
                </p>
                <div className="mt-[1vw] flex gap-[1vw]">
                  <Button className="bg-[#FF387A] text-white md:text-[0.7vw] text-[2vw] font-bold hover:bg-[#FF387A] md:py-[0.5vw] py-[1vw]  rounded-md px-[2vw] ">
                    upload photo
                  </Button>
                  <Button
                    variant="outlined"
                    className="border-[1px] border-[#FF387A] py-[1vw] md:py-[0.5vw] px-[1.5vw] rounded-md md:text-[0.7vw] text-[2vw] text-[#FF387A]"
                  >
                    delete photo
                  </Button>
                </div>
              </div>
            </header>
            <div className="mt-[1vw]">
              <AccountForm />
            </div>
          </div>
          <div>
            <div
              className=" p-[2vw] bg-white border-[1px] border-[#F5F5F5] mt-[1vw] translate-y-[15vw]
        md:translate-y-0 rounded-lg w-[85vw] ml-[-2vw] md:ml-[0vw] md:w-[30vw]"
            >
              <CreatePasswordForm />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default page;
