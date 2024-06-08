import BillingForm from "@/components/BillingForm";
import Sidebar from "@/components/Sidebar";
import { menueData, otherData } from "@/data/data";

import React from "react";
import Button from "@mui/material/Button"; // Import MUI Button

const orderData = [
  {
    img: "/img/dashboardImg.png",
    desc: "1500+ Transitions Premiere Pro",
    price: "48$",
    invoiceText: "View Invoice",
    downloadImg: "/img/download.png",
  },
  {
    img: "/img/img1.png",
    desc: "1500+ Transitions Premiere Pro",
    price: "48$",
    invoiceText: "View Invoice",
    downloadImg: "/img/download.png",
  },
];

const page = () => {
  return (
    <main className="bg-[#FAFAFA] h-[110vh]">
      <Sidebar />

      <section className="rounded-md w-full md:max-w-[50vw] max-w-[90vw] translate-y-[5vw] md:translate-x-[26vw] translate-x-[5vw]">
        <h1 className="font-bold text-[6vw] md:text-[2vw] md:ml-[0vw] ml-[5vw] translate-y-[13vw] md:translate-y-[0.5vw] translate-x-[-4vw] md:translate-x-0">
          Orders
        </h1>
        <div
          className="p-[2vw] bg-white border-[1px] border-[#F5F5F5] mt-[1vw] translate-y-[15vw]
          md:translate-y-0 rounded-lg flex flex-col md:gap-[0vw] gap-[4vw]"
        >
          {orderData?.map((order, index) => (
            <React.Fragment key={index}>
              <div className="flex mt-[1vw] md:gap-[0vw] gap-[3vw]">
                <figure className="w-full max-w-[20vw] md:max-w-[4vw]">
                  <img src={order.img} alt="img" className="w-full" />
                </figure>
                <div className="ml-[1vw] flex-grow">
                  <p className="md:text-[1vw] text-[4vw] font-bold">
                    {order.desc}
                  </p>
                  <div className="flex justify-between w-full">
                    <p className="mt-[0.8vw] text-[3vw] md:text-[0.9vw] font-bold">
                      {order.price}{" "}
                      <Button
                        className="md:text-[0.7vw] text-[2vw]"
                        variant="text"
                        sx={{
                          color: "#FF387A",
                          fontWeight: "bold",
                          textTransform: "none",
                          fontSize: "0.8vw",
                          padding: 0,
                          marginLeft: "1vw",
                          minWidth: "auto",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        {order.invoiceText}
                      </Button>
                    </p>
                  </div>
                </div>
                <figure className="self-end w-full max-w-[5vw] md:max-w-[1.2vw]">
                  <img
                    src={order.downloadImg}
                    alt="download"
                    className="w-full"
                  />
                </figure>
              </div>
              {index < orderData.length - 1 && (
                <div className="border-[1px] border-b-[#EEEEEE] mt-[1.3vw]"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
