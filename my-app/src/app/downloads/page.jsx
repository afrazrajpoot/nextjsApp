"use client";
import React from "react";
import Button from "@mui/material/Button"; // Import MUI Button
import Sidebar from "../components/Common/Sidebar/Sidebar";
import { downloadData } from "@/data/data";

const DownloadProduct = ({img, desc, onClick})=> {
  return (  
  <main className="flex flex-col items-center lg:items-start" >
    <figure className="w-full max-w-[80vw] sm:max-w-[50vw] lg:max-w-[15vw]">
      <img src={img} alt="" className="w-full" />
    </figure>
    <p className="text-[4.5vw] sm:text-[2vw] lg:text-[1vw] mt-[2vw] lg:mt-[1vw] font-medium text-center lg:text-left">
      {desc}
    </p>
    <Button onClick={onClick} variant="outlined" style={{ textTransform: "capitalize" }}
      className="py-[2vw] lg:py-[0.4vw] px-[5vw] lg:px-[1vw] w-full lg:w-auto text-[4vw] sm:text-[1.5vw] lg:text-[1vw] text-[#FF387A] border-[#FF387A]  rounded-lg mt-[2vw] lg:mt-[1vw]"
    >
      Download now
    </Button>
  </main>)
}

const Page = () => {

  return (
    <main className="bg-[#FAFAFA] max-h-[500vh]">
      <Sidebar />
      <section className="rounded-lg w-full lg:max-w-[50vw]  max-w-[90vw] lg:translate-x-[26vw] translate-x-[5vw] p-[2vw]">
        <h1 className="font-bold text-[6vw] sm:text-[3vw] lg:text-[2vw] ml-[5vw] lg:ml-0 translate-y-[15vw] lg:translate-y-[5vw] lg:translate-x-0 sm:translate-y-[8vw] sm:ml-[1vw]">
          Downloads
        </h1>
        <div className="p-[2vw] bg-white border-[1px] border-[#F5F5F5] mt-[1vw]  translate-y-[20vw] sm:translate-y-[8vw] lg:translate-y-[5vw] rounded-lg">
          <div className="flex flex-col lg:flex-row sm:flex-row lg:gap-[1vw] gap-[5vw] items-center ">
            {downloadData?.map((elem, ind) => (
              <DownloadProduct key={ind} {...elem} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
