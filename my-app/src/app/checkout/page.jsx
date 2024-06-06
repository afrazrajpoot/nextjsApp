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
    <main className="bg-[#FAFAFA] h-[150vh]">
      <section className="translate-y-[5vw] p-[2vw] w-full max-w-[90vw] m-auto">
        <Button
          variant="outlined"
          sx={{
            borderColor: "#E5E5E5",
            borderRadius: "4px",
            padding: "0.5vw",
            textTransform: "none",
            color: "#525252",
            display: "flex",
            alignItems: "center",
            gap: "0.5vw",
            width: "6vw",
          }}
          startIcon={
            <img
              src="/img/backIcon.png"
              alt="back icon"
              style={{ height: "100%" }}
            />
          }
        >
          Back
        </Button>
        <section className="flex mt-[3vw] ml-[-9.5vw]">
          <article className="w-full max-w-[70vw] flex flex-col gap-[2vw]">
            <Steper />
            <div className="bg-white border-[1px] border-[#F5F5F5] rounded-lg w-full max-w-[50vw] p-[1vw] ml-[10vw]">
              <p className="font-bold text-[1.5vw]">Contact Info</p>
              <form action="" className="flex flex-col mt-[1vw]">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="p-[0.8vw] bg-[#FAFAFA]"
                  placeholder="magika@mail.com"
                  name=""
                  id=""
                />
              </form>
            </div>
            <div className="bg-white border-[1px] border-[#F5F5F5] rounded-lg w-full max-w-[50vw] p-[1vw] ml-[10vw]">
              <p className="font-bold text-[1.5vw]">Detail Address</p>
              <form action="" className="mt-[1vw]">
                {checkoutFormData?.map((elem, ind) => (
                  <div className="flex flex-col gap-[1vw]">
                    <label htmlFor="" className="font-medium">
                      {elem.label}
                    </label>
                    <input
                      type="text"
                      className="p-[0.8vw] bg-[#FAFAFA] mb-4"
                      //   placeholder={elem.placeholder}
                      value={elem.value}
                      name=""
                      id=""
                    />
                  </div>
                ))}
                <div className="flex gap-[1vw]">
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-medium">
                      City
                    </label>
                    <input
                      type="text"
                      value={"Birmingham"}
                      name="city"
                      id=""
                      className="p-[0.8vw] bg-[#FAFAFA] mb-4 w-[23.5vw]"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Postal code</label>
                    <input
                      type="text"
                      value={"5678"}
                      name="postalCode"
                      id=""
                      className="p-[0.8vw] bg-[#FAFAFA] mb-4 w-[23.5vw]"
                    />
                  </div>
                </div>
              </form>
            </div>
          </article>
          <section>
            <article className="bg-white border-[1px] border-[#F5F5F5] w-[25vw] p-[2vw]">
              <p className="text-[1vw] font-bold ">Summary</p>

              <div className="mt-[1vw] flex flex-col gap-[0.8vw]">
                {data?.map((elem, ind) => (
                  <div className={`flex gap-[1vw] justify-between`} key={ind}>
                    <p className="font-medium text-[0.9vw]">{elem.title}</p>
                    <p className="text-[0.8vw] font-medium text-[#FF689A]">
                      {elem.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-[0.2px] border-b-[#EEEEEE] mt-[1.5vw]"></div>
              <div className="flex justify-between mt-[1vw]">
                <p className="font-medium text-[0.9vw]">Subtotal</p>
                <p className="text-[#FF689A] font-medium text-[0.8vw]">
                  $96.00
                </p>
              </div>
              <Button
                type="submit"
                size="large"
                className="w-full mt-[1.5vw] text-[0.8vw] bg-[#FF387A] hover:bg-[#FF387A] text-white"
              >
                Contnue to Payment
              </Button>
              <div className="border-[0.2px] border-b-[#EEEEEE] mt-[1vw]"></div>
              <div className="flex  ml-[1vw] mt-[1vw]  gap-[2.5vw]">
                {data2?.map((elem, ind) => (
                  <div className="flexflex-col ">
                    <img
                      src={elem.icon}
                      alt="icon"
                      className={`ml-[1vw] ${ind === 0 && "ml-[1.5vw]"} ${
                        ind === 2 && "ml-[1.5vw]"
                      } `}
                    />
                    <p
                      className={`text-[0.7vw] font-medium text-center mt-[0.5vw] ${
                        ind === 2 && "ml-[0.2vw]"
                      } ${ind === 1 && "ml-[0.2vw]"}`}
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
