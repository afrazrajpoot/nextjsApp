"use client";
import { Button } from "@mui/material";
import React from "react";
import Sidebar from "../components/Common/Sidebar/Sidebar";
import AccountForm from "../components/authModel/register/AccountForm";
import CreatePasswordForm from "../components/authModel/register/CreatePasswordForm";

const page = () => {
  return (
    <main className="bg-[#FAFAFA] lg:h-[140vh] h-[210vh]  overflow-x-hidden ">
      <Sidebar />
      <section className=" rounded-lg w-full  lg:max-w-[50vw] max-w-[90vw] translate-y-[5vw] lg:translate-x-[26vw] translate-x-[5vw] p-[2vw] lg:p-[1vw]">
        <h1 className="font-bold text-[6vw] sm:text-[3vw] ml-[4vw] lg:text-[2vw] lg:ml-[0vw] sm:ml-[20vw]   translate-y-[13vw] lg:translate-y-[0.5vw] sm:translate-y-[2vw] translate-x-[-8vw] sm:translate-x-[-21vw]  lg:translate-x-0 ">
          Account Detail
        </h1>
        <article className="flex w-[90vw] lg:flex-row flex-col sm:w-[100vw] sm:flex-col gap-[1.5vw]  items-center lg:items-start">
          <div
            className=" p-[2vw] sm:p-[1vw] bg-white border-[1px]  border-[#F5F5F5] mt-[1vw] sm:translate-y-[6vw] translate-y-[15vw]
        lg:translate-y-0 rounded-lg lg:w-[30vw]  w-[93vw] sm:w-[90vw] ml-[-4.8vw] sm:ml-[-13vw] lg:ml-[0vw]  "
          >
            <header className="flex items-start gap-[1vw] w-full">
              <figure className="">
                <img src="/img/accountAvatar.png" alt="avatar" className="" />
              </figure>
              <div>
                <p className="lg:text-[1vw] text-[4vw] sm:text-[2.5vw] text-[#64748B]">
                  We only support .JPG, .JPEG, or .PNG file.
                </p>
                <div className="mt-[1vw] flex gap-[1vw]">
                  <Button className="bg-[#FF387A] text-white sm:text-[1.5vw] lg:text-[0.7vw] text-[2vw] font-bold hover:bg-[#FF387A] lg:py-[0.5vw] py-[1vw]   rounded-lg px-[2vw] ">
                    upload photo
                  </Button>
                  <Button
                    variant="outlined"
                    className="border-[1px] border-[#FF387A] py-[1vw] sm:text-[1.5vw] lg:py-[0.5vw] px-[1.5vw] rounded-lg lg:text-[0.7vw] text-[2vw] text-[#FF387A]"
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
              className=" p-[2vw] bg-white border-[1px] border-[#F5F5F5] mt-[1vw] sm:mt-[-8vw] translate-y-[15vw]
              lg:translate-y-0 rounded-lg w-[93vw] ml-[-4.8vw] lg:ml-[0vw] lg:w-[30vw] sm:w-[90vw] lg:mt-[1vw]  sm:ml-[-13vw]"
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
