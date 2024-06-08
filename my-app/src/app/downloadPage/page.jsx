import BillingForm from "@/components/BillingForm";
import Sidebar from "@/components/Sidebar";
import { menueData, otherData } from "@/data/data";

import React from "react";
import Button from "@mui/material/Button"; // Import MUI Button

const page = () => {
  const downloadData = [
    {
      img: "/img/img.png",
      desc: "1500+ Transitions Premiere Pro",
    },
    {
      img: "/img/img (1).png",
      desc: "1500+ Transitions Premiere Pro",
    },
    {
      img: "/img/img (2).png",
      desc: "1500+ Transitions Premiere Pro",
    },
  ];
  return (
    <main className="bg-[#FAFAFA] h-[110vh]">
      <Sidebar />

      <section className="rounded-md w-full md:max-w-[50vw] max-w-[90vw] translate-y-[5vw] md:translate-x-[26vw] translate-x-[5vw]">
        <h1 className="font-bold text-[6vw] md:text-[2vw] md:ml-[0vw] ml-[5vw] translate-y-[13vw] md:translate-y-[0.5vw] translate-x-[-4vw] md:translate-x-0">
          Downloads
        </h1>
        <div
          className="p-[2vw] bg-white border-[1px] border-[#F5F5F5] mt-[1vw] translate-y-[15vw]
          md:translate-y-0 rounded-lg"
        >
          <div className="flex md:flex-row flex-col md:gap-[1vw] gap-[5vw]">
            {downloadData?.map((elem, ind) => (
              <div key={ind} className="flex flex-col">
                <figure className="w-full md:max-w-[15vw] max-w-[80vw] md:ml-[0vw] ml-[-7.5vw]">
                  <img
                    src={elem.img}
                    alt=""
                    className="w-full md:ml-[0vw] ml-[10.5vw]"
                  />
                </figure>
                <p className="text-[4.5vw] md:text-[1vw] ml-[5vw] md:mt-[1vw] mt-[4vw]  md:ml-[0vw] font-medium">
                  {elem.desc}
                </p>
                <Button
                  variant="outlined"
                  className="md:py-[0.4vw] py-[2vw] md:px-[1vw] w-[76vw] ml-[5vw] md:ml-[0vw]  md:w-full md:mt-[1vw] md:text-[1vw] text-[4vw] text-[#FF387A] border-[1px] border-[#FF387A] rounded-md hover:border-[#FF387A] mt-[3vw]"
                  style={{ textTransform: "capitalize" }}
                >
                  Download now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
