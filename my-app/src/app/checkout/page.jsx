import { checkoutFormData, summaryDetails, summaryOptions } from "@/data/data";
import { Button } from "@mui/material";
import React from "react";
import Steper from "../components/authModel/register/Steper";

const page = () => {
  return (
    <main className="bg-[#FAFAFA] lg:h-[150vh] h-[160vh] overflow-x-hidden">
      <section className="lg:translate-y-[5vw] sm:translate-y-[10vw] translate-y-[20vw] p-[2vw] w-full max-w-[90vw] m-auto">
        <Button
          variant="outlined"
          className="border-[1px] border-[#E5E5E5] sm:text-[1.5vw]  rounded-lg p-[0.5vw] text-[#525252] flex items-center lg:gap-[0.1vw] lg:w-[6vw] w-[20vw] sm:w-[10vw] sm:ml-[-2vw] sm:translate-y-[3vw] lg:translate-y-[0vw] sm:pr-[2vw] ml-[1vw] lg:ml-[0vw] lg:text-[1vw] text-[3vw] lg:py-[0.3vw] sm:py-[1vw] py-[1.55vw]"
          startIcon={<img src="/img/backIcon.png" alt="back icon" className="w-[5vw] sm:w-[10vw] lg:w-[2vw]" />}
        >
          Back
        </Button>
        <section className="flex lg:flex-row flex-col mt-[3vw] ml-[-9.5vw]">
          <article className="w-full max-w-[70vw] flex flex-col gap-[2vw] mt-[5vw] sm:mt-[7vw] lg:mt-[0vw]">
            <Steper />
            <div className="bg-white border-[1px] border-[#F5F5F5] mt-[8vw] lg:rounded-lg  sm:mt-[5vw] lg:w-[50vw] lg:p-[1vw] lg:ml-[10vw] ml-[7vw] p-[4vw] w-[90vw] rounded-xl">
              <p className="font-bold lg:text-[1.5vw] text-[5vw] sm:text-[3vw]"> Contact Info</p>
              <form action="" className="flex flex-col mt-[1vw] lg:text-[1vw] text-[4vw]" >
                <label htmlFor="" className="sm:text-[2.5vw] lg:text-[1vw]">
                  Email
                </label>
                <input
                  type="text"
                  className="lg:p-[0.8vw] p-[2vw] bg-[#FAFAFA] lg:text-[1vw] text-[3.5vw] sm:text-[2vw] sm:p-[2vw]"
                  placeholder="magika@mail.com"
                  name=""
                  id=""
                />
              </form>
            </div>
            <div className="bg-white border-[1px] ml-[7vw] p-[2vw] mt-[8vw] border-[#F5F5F5] lg:rounded-lg sm:mt-[5vw]  w-[90vw] lg:w-[50vw] lg:p-[1vw] lg:ml-[10vw] rounded-xl">
              <p className="font-bold lg:text-[1.5vw] text-[5vw] sm:text-[3vw]">
                Detail Address
              </p>
              <form action="" className="mt-[1vw] sm:mt-[3vw]">
                {checkoutFormData?.map((elem, ind) => (
                  <div className="flex flex-col gap-[1vw] sm:mb-4">
                    <label
                      htmlFor=""
                      className="font-medium lg:text-[1vw] text-[4vw] sm:text-[2.5vw]"
                    >
                      {elem.label}
                    </label>
                    <input
                      type="text"
                      className="lg:p-[0.8vw] p-[2vw] lg:text-[1vw] text-[3.5vw] bg-[#FAFAFA] mb-4 sm:text-[2vw] sm:p-[2vw]"
                      value={elem.value}
                      name=""
                      id=""
                    />
                  </div>
                ))}
                <div className="flex lg:gap-[1vw] gap-[2vw]">
                  <div className="flex flex-col ">
                    <label
                      htmlFor=""
                      className="font-medium lg:text-[1vw] sm:text-[2.5vw] text-[4vw]"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      value={"Birmingham"}
                      name="city"
                      id=""
                      className="lg:p-[0.8vw] sm:text-[2vw] sm:mt-[1vw]  p-[2vw] lg:text-[1vw] text-[3.5vw] bg-[#FAFAFA] mb-4 lg:w-[23vw] w-[42vw]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="font-medium lg:text-[1vw] sm:text-[2.5vw] text-[4vw]"
                    >
                      Postal code
                    </label>
                    <input
                      type="text"
                      value={"5678"}
                      name="postalCode"
                      id=""
                      className="lg:p-[0.8vw] p-[2vw] sm:mt-[1vw]  sm:text-[2vw] lg:text-[1vw] text-[3.5vw] bg-[#FAFAFA] mb-4 lg:w-[24vw] w-[42vw]"
                    />
                  </div>
                </div>
              </form>
            </div>
          </article>
          <section>
            <article className="bg-white border-[1px] mt-[8vw] sm:ml-[7vw] lg:ml-[0vw] sm:mt-[5vw] ml-[8vw] rounded-xl w-[90vw]  border-[#F5F5F5] lg:w-[25vw] p-[2vw] lg:mt-[0vw] ">
              <p className="font-bold lg:text-[1.5vw] text-[5vw] sm:text-[3vw]">
                Summary
              </p>
              <div className="mt-[1vw] flex flex-col lg:gap-[0.8vw] gap-[4vw]">
                {summaryDetails?.map((elem, ind) => (
                  <div
                    className={`flex gap-[1vw] justify-between items-center`}
                    key={ind}
                  >
                    <p className="font-medium lg:text-[0.9vw] sm:text-[2vw] text-[3.5vw]">
                      {elem.title}
                    </p>
                    <p className="lg:text-[0.8vw] text-[2.5vw] font-bold lg:font-medium sm:text-[1.5vw] text-[#FF689A]">
                      {elem.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-[0.2px] border-b-[#EEEEEE] lg:mt-[1.5vw] mt-[3vw]"></div>
              <div className="flex justify-between mt-[1vw]">
                <p className="font-medium lg:text-[0.9vw] text-[3.5vw] lg:mt-[0vw] sm:text-[2vw] mt-[3vw]">
                  Subtotal
                </p>
                <p className="text-[#FF689A] font-bold lg:font-medium lg:text-[0.8vw] text-[2.5vw] sm:text-[1.5vw] lg:mt-[0vw] mt-[3vw]">
                  $96.00
                </p>
              </div>
              <Button
                type="submit"
                size="large"
                className="w-full lg:mt-[1.5vw] mt-[3vw] sm:text-[1.5vw] text-[2.5vw] lg:text-[0.8vw] bg-[#FF387A] hover:bg-[#FF387A] text-white"
              >
                Contnue to Payment
              </Button>
              <div className="border-[0.2px] border-b-[#EEEEEE] lg:mt-[1vw] mt-[3vw] "></div>
              <div className="flex  lg:translate-x-[-4.2vw] w-full  lg:mt-[1vw] mt-[3vw] lg:ml-[5vw] sm:ml-[4vw] ml-[-1vw]  lg:gap-[2vw] gap-[7.5vw]">
                {summaryOptions?.map((elem, ind) => (
                  <div className="flex flex-col items-center sm:justify-center ">
                    <img
                      src={elem.icon}
                      alt="icon"
                      className={`ml-[1vw] lg:w-[3vw] w-[10vw] sm:w-[6vw] ${
                        ind === 1 && "translate-x-[-0.5vw]"
                      }  ${ind === 0 && "translate-x-[-0.5vw]"} ${
                        ind === 2 && "translate-x-[-0.3vw]"
                      }`}
                    />

                    <p
                      className={`lg:text-[0.7vw] w-full sm:text-[2vw] flex justify-center text-[3vw] font-medium text-center mt-[0.5vw] ${
                        ind === 0 && "lg:w-[5vw] w-[12vw]"
                      }`}
                    >
                      {elem.desc}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
};

export default page;