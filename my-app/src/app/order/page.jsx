import React from "react";
import Button from "@mui/material/Button"; // Import MUI Button
import Sidebar from "../components/Common/Sidebar/Sidebar";
import { orderData } from "@/data/data";

const page = () => {
  return (
    <main className="bg-[#FAFAFA]">
      <Sidebar />
      <section className="rounded-lg w-full lg:max-w-[50vw] max-w-[90vw]  translate-y-[5vw] lg:translate-x-[26vw] translate-x-[5vw]">
        <h1 className="font-bold text-[6vw] lg:text-[2vw] lg:ml-[0vw] ml-[5vw]  translate-y-[13vw] sm:translate-y-[6vw]  translate-x-[-4vw] lg:translate-x-0 sm:text-[3vw]">
          Orders
        </h1>
        <div
          className="p-[2vw] bg-white border-[1px] border-[#F5F5F5] mt-[1vw] translate-y-[15vw] sm:translate-y-[7vw]
          lg:translate-y-0 rounded-lg flex flex-col lg:gap-[0vw] gap-[4vw] "
        >
          {orderData?.map((order, index) => (
            <React.Fragment key={index}>
              <div className="flex mt-[1vw] lg:gap-[0vw] gap-[3vw]">
                <figure className="w-full max-w-[20vw] lg:max-w-[4vw] sm:max-w-[10vw]">
                  <img src={order.img} alt="img" className="w-full" />
                </figure>
                <div className="ml-[1vw] flex-grow">
                  <p className="lg:text-[1vw] text-[4vw] font-bold sm:text-[2.5vw]">
                    {order.desc}
                  </p>
                  <div className="flex justify-between w-full">
                    <p className="mt-[0.8vw] text-[3vw] lg:text-[0.9vw] font-bold sm:text-[2vw]">
                      {order.price}{" "}
                      <Button
                        className="lg:text-[0.7vw] text-[2vw] sm:text-[1.5vw]"
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
                <figure className="self-end w-full max-w-[5vw] lg:max-w-[1.2vw] sm:max-w-[2.5vw]">
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
