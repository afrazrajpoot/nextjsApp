"use client";
import { menueData, otherData } from "@/data/data";
import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="fixed top-[3vw]">
      <div className="flex items-start gap-[0.4vw] bg-white  border-[1px] border-[#F1F5F9] w-full max-w-[16vw] ml-[8vw] px-[1vw] py-[3vw]">
        <img src="/img/avatar.png" alt="" className="" />

        <div>
          <p className="font-bold text-[1vw] ">George Gika</p>
          <p className="text-[#64748B] text-[0.8vw] font-bold mt-[-0.2vw]">
            neurotic@taildo.com
          </p>
        </div>
      </div>
      <div className="h-screen  w-full bg-white fixed max-w-[16vw] ml-[8vw] p-[1vw] flex flex-col gap-[4vw]">
        <div className="flex flex-col gap-[1vw]">
          <p className="font-bold text-[0.9vw] text-[#334155] ">Menu</p>
          <div className="flex flex-col gap-[1vw] ml-[1vw]">
            {menueData?.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-[0.4vw]">
                  <img src={item.icon} alt="" className="w-[1vw] h-[1vw]" />
                  <p className="text-[0.9vw] text-[#334155] ">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-[1vw]">
          <p className="font-bold text-[0.9vw] text-[#334155]">Others</p>
          <div className="flex flex-col gap-[1vw] ml-[1vw]">
            {otherData?.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-[0.4vw]">
                  <img src={item.icon} alt="" className="w-[1vw] h-[1vw]" />
                  <p
                    className={`text-[0.9vw] text-[#334155] ${
                      index === 2 && "text-[#ED544E]"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
