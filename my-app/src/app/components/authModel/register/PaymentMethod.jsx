"use client";
import { paymentMethodData } from "@/data/data";
import { Button } from "@mui/material";
import Sidebar from "./Sidebar";

const PaymentMethod = () => {
  return (
    <main className="">
      <Sidebar />
      <div className="absolute top-[20vw] md:top-[5vw] md:left-[30vw] pb-[1vw]">
        <h1 className="font-bold text-[5vw] md:text-[1.5vw] md:ml-[0vw] ml-[5vw]">
          Payment Method
        </h1>
        <div className="bg-white border-[1px] border-[#F5F5F5] rounded-md p-[2vw] gap-[3vw] mt-[1vw] md:w-[55vw]  w-[90vw] ml-[5vw] md:ml-[0vw] md:h-[89vh] h-[130vh] pb-[90vw] md:pb-[2vw]">
          <div className="  grid grid-cols-1 md:grid-cols-2 md:gap-[2vw] gap-[3vw]">
            {paymentMethodData?.map((elem, ind) => (
              <div
                key={ind}
                className="bg-[#F8FAFC] grid grid-cols-1 gap-[3.5vw] md:gap-[0.7vw] md:p-[1vw] md:w-[25vw] w-[80vw] ml-[2.5vw] md:ml-[0vw] p-[4vw] "
              >
                <img src={elem.icon} alt="icon" className="" />

                <h1 className="font-bold text-[4vw] md:text-[0.8vw]">
                  {elem.title}
                </h1>
                <p className="md:text-[0.7vw] text-[3vw] text-[#64748B]">
                  {elem.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-[#F8FAFC] p-[1vw] md:w-[25vw] md:h-[20vh] border-[1px] border-dashed border-[#E2E8F0] w-[80vw] h-[20vh] ml-[2.4vw] md:ml-[0vw] mt-[3vw]">
            <div className="flex flex-col justify-center items-center h-full w-full">
              <img src="/img/wallet.png" alt="" />
              <p className="font-bold text-[0.8vw] text-[#64748B]">
                Add wallet
              </p>
            </div>
          </div>
          <div className="">
            <Button
              type="submit"
              size="small"
              className="w-full mt-4 text-[3vw] md:text-[0.8vw] bg-[#FF387A] md:max-w-[10vw] max-w-[40vw] md:p-[0.5vw] p-[2vw] hover:bg-[#FF387A] text-white"
            >
              save changes
            </Button>
            <Button
              variant="outlined"
              size="small"
              className="w-full mt-4 md:text-[0.8vw] text-[3vw] md:max-w-[10vw] max-w-[40vw] p-[0.5vw]  text-[#FF387A] ml-[1vw] hover:border-[#FF387A] font-bold border-[#FF387A]"
            >
              No cancel
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentMethod;
