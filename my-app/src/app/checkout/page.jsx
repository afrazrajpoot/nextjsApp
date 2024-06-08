import Steper from "@/components/Steper";
import { checkoutFormData } from "@/data/data";
import { Button } from "@mui/material";
import React from "react";

const page = () => {
  const data = [
    {
      title: "1500+ Transitions Premiere Pro",
      desc: "$48.00",
    },
    {
      title: "100+ Transitions Premiere Pro",
      desc: "$48.00",
    },
  ];
  const data2 = [
    {
      icon: "/img/upload.png",
      desc: "DOWNLOAD RIGHT AWAY",
    },
    {
      icon: "/img/lock.png",
      desc: "SAFE CHECKOUT",
    },
    {
      icon: "/img/customer.png",
      desc: "CUSTOMER SUPPORT",
    },
  ];
  return (
    <main className="bg-[#FAFAFA] md:h-[150vh] h-[160vh] overflow-x-hidden">
      <section className="md:translate-y-[5vw] translate-y-[20vw] p-[2vw] w-full max-w-[90vw] m-auto">
        <Button
          variant="outlined"
          className="border-[1px] border-[#E5E5E5] rounded-md p-[0.5vw] text-[#525252] flex items-center md:gap-[0.1vw] md:w-[6vw] w-[20vw] ml-[1vw] md:ml-[0vw] md:text-[1vw] text-[3vw] md:py-[0.3vw] py-[1.55vw]"
          startIcon={
            <img
              src="/img/backIcon.png"
              alt="back icon"
              className="w-[5vw] md:w-[2vw]"
            />
          }
        >
          Back
        </Button>
        <section className="flex md:flex-row flex-col mt-[3vw] ml-[-9.5vw]">
          <article className="w-full max-w-[70vw] flex flex-col gap-[2vw] mt-[5vw] md:mt-[0vw]">
            <Steper />
            <div className="bg-white border-[1px] border-[#F5F5F5] md:rounded-lg  md:w-[50vw] md:p-[1vw] md:ml-[10vw] ml-[7vw] p-[4vw] w-[90vw] rounded-xl">
              <p className="font-bold md:text-[1.5vw] text-[5vw]">
                Contact Info
              </p>
              <form
                action=""
                className="flex flex-col mt-[1vw] md:text-[1vw] text-[4vw]"
              >
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="md:p-[0.8vw] p-[2vw] bg-[#FAFAFA] md:text-[1vw] text-[3.5vw]"
                  placeholder="magika@mail.com"
                  name=""
                  id=""
                />
              </form>
            </div>
            <div className="bg-white border-[1px] ml-[7vw] p-[2vw] border-[#F5F5F5] md:rounded-lg  w-[90vw] md:w-[50vw] md:p-[1vw] md:ml-[10vw] rounded-xl">
              <p className="font-bold md:text-[1.5vw] text-[5vw]">
                Detail Address
              </p>
              <form action="" className="mt-[1vw]">
                {checkoutFormData?.map((elem, ind) => (
                  <div className="flex flex-col gap-[1vw]">
                    <label
                      htmlFor=""
                      className="font-medium md:text-[1vw] text-[4vw]"
                    >
                      {elem.label}
                    </label>
                    <input
                      type="text"
                      className="md:p-[0.8vw] p-[2vw] md:text-[1vw] text-[3.5vw] bg-[#FAFAFA] mb-4"
                      //   placeholder={elem.placeholder}
                      value={elem.value}
                      name=""
                      id=""
                    />
                  </div>
                ))}
                <div className="flex md:gap-[1vw] gap-[2vw]">
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="font-medium md:text-[1vw] text-[4vw]"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      value={"Birmingham"}
                      name="city"
                      id=""
                      className="md:p-[0.8vw] p-[2vw] md:text-[1vw] text-[3.5vw] bg-[#FAFAFA] mb-4 md:w-[23vw] w-[42vw]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="font-medium md:text-[1vw] text-[4vw]"
                    >
                      Postal code
                    </label>
                    <input
                      type="text"
                      value={"5678"}
                      name="postalCode"
                      id=""
                      className="md:p-[0.8vw] p-[2vw] md:text-[1vw] text-[3.5vw] bg-[#FAFAFA] mb-4 md:w-[24vw] w-[42vw]"
                    />
                  </div>
                </div>
              </form>
            </div>
          </article>
          <section>
            <article className="bg-white border-[1px] md:ml-[0vw] ml-[8vw] rounded-xl w-[90vw]  border-[#F5F5F5] md:w-[25vw] p-[2vw] md:mt-[0vw] mt-[2vw]">
              <p className="font-bold md:text-[1.5vw] text-[5vw]">Summary</p>

              <div className="mt-[1vw] flex flex-col md:gap-[0.8vw] gap-[4vw]">
                {data?.map((elem, ind) => (
                  <div className={`flex gap-[1vw] justify-between`} key={ind}>
                    <p className="font-medium md:text-[0.9vw] text-[3.5vw]">
                      {elem.title}
                    </p>
                    <p className="md:text-[0.8vw] text-[2.5vw] font-bold md:font-medium text-[#FF689A]">
                      {elem.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-[0.2px] border-b-[#EEEEEE] md:mt-[1.5vw] mt-[3vw]"></div>
              <div className="flex justify-between mt-[1vw]">
                <p className="font-medium md:text-[0.9vw] text-[3.5vw] md:mt-[0vw] mt-[3vw]">
                  Subtotal
                </p>
                <p className="text-[#FF689A] font-bold md:font-medium md:text-[0.8vw] text-[2.5vw] md:mt-[0vw] mt-[3vw]">
                  $96.00
                </p>
              </div>
              <Button
                type="submit"
                size="large"
                className="w-full md:mt-[1.5vw] mt-[3vw] text-[2.5vw] md:text-[0.8vw] bg-[#FF387A] hover:bg-[#FF387A] text-white"
              >
                Contnue to Payment
              </Button>
              <div className="border-[0.2px] border-b-[#EEEEEE] md:mt-[1vw] mt-[3vw]"></div>
              <div className="flex  md:translate-x-[-4.2vw] w-full  md:mt-[1vw] mt-[3vw] md:ml-[5vw] ml-[-1vw]  md:gap-[2vw] gap-[7.5vw]">
                {data2?.map((elem, ind) => (
                  <div className="flex flex-col items-center ">
                    <img
                      src={elem.icon}
                      alt="icon"
                      className={`ml-[1vw] md:w-[3vw] w-[10vw] ${
                        ind === 1 && "translate-x-[-0.5vw]"
                      }  ${ind === 0 && "translate-x-[-0.5vw]"} ${
                        ind === 2 && "translate-x-[-0.3vw]"
                      }`}
                    />

                    <p
                      className={`md:text-[0.7vw] w-full flex justify-center text-[3vw] font-medium text-center mt-[0.5vw] ${
                        ind === 0 && "md:w-[5vw] w-[12vw]"
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
