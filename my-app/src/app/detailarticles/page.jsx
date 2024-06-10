import React from "react";
import { Button } from "@mui/material";
import { cardData, data1, data2, data3 } from "@/data/data";
import Layout from "../layout/Layout";

const Page = () => {
  return (
    <Layout>
      <main className="flex flex-col w-full md:pb-[14vw] pb-[30vw] ">
        <section className="md:translate-y-[6vw] translate-y-[20vw] w-full max-w-[70vw] flex flex-col gap-[1.2vw] p-[2vw] m-auto">
          <div>
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
          </div>
          <figure className="">
            <img src="/img/home.png" alt="home" className="hidden md:block" />
            <img
              src="/img/mobileImage.png"
              alt="home"
              className="block md:hidden"
            />
          </figure>
          <p className="text-[#525252] font-bold text-[2.5vw] md:text-[0.8vw]">
            22/06/2023
          </p>
          <h1 className="md:text-[2vw] text-[6.5vw] font-bold w-full md:max-w-[35vw] ">
            Make Powerful Motion Graphics in After Effects
          </h1>
          <p className="font-bold md:text-[1vw] text-[3vw] ">
            Motion Graphic is a way to protect yourself financially from
            unforeseen templates. It can help you pay for medical expenses,
            repair your car after an accident, or replace your home if it's
            destroyed by a fire. But with so many different types of Motion
            Graphic available, it can be tough to know where to start. Here are
            some tips on how to choose the right Motion Graphic for you:
          </p>

          <div className="flex flex-col gap-[0.2vw]">
            {data1.map((elem, ind) => (
              <div key={ind} className="">
                <p className="text-[#171717] text-[2.5vw]  md:text-[0.8vw] ml-[2vw] md:ml-[0vw]">
                  {elem.desc}
                </p>
              </div>
            ))}
          </div>
          <h2 className="font-bold text-[3vw] md:text-[1vw]">
            Here are some additional tips for choosing the right Motion Graphic:
          </h2>
          <div className="flex flex-col gap-[0.2vw]">
            {data2.map((elem, ind) => (
              <ul
                key={ind}
                className="list-disc pl-5 flex flex-col gap-[0.2vw]"
              >
                <li className="text-[#171717] text-[2vw] md:text-[0.8vw]">
                  {elem.desc}
                </li>
              </ul>
            ))}
          </div>
          <h2 className="font-bold text-[3vw] md:text-[1vw]">
            Here are some additional tips for choosing the right Motion Graphic:
          </h2>
          <div className="flex flex-col gap-[0.2vw]">
            {data3.map((elem, ind) => (
              <ul
                key={ind}
                className="list-disc pl-5 flex flex-col gap-[0.2vw]"
              >
                <li className="text-[#171717]  text-[2vw] md:text-[0.8vw]">
                  {elem.desc}
                </li>
              </ul>
            ))}
          </div>
          <p className="md:text-[0.9vw] text-[3vw]">
            These are just a few of the many different types of Motion Graphic
            available. The right type of Motion Graphic for you will depend on
            your individual needs and circumstances. By following the tips
            above, you can choose the right Motion Graphic for you and your
            family.
          </p>
          <h1 className="md:text-[2vw] text-[4vw] font-bold w-full max-w-[35vw] mt-[5vw]">
            Related Products
          </h1>
          <div className="flex md:gap-[1vw]  md:flex-row flex-col gap-[4vw]">
            {cardData?.map((elem, ind) => (
              <div key={ind} className="">
                <img src={elem.img} alt={elem.title} />
                <p className="text-[#171717] hidden md:block text-[0.8vw] font-bold mt-[1vw] w-full max-w-[15vw]">
                  {elem.title}
                </p>
                <div className=" block md:hiddenflex flex-col gap-[3vw]">
                  <p className="mt-[2vw] font-bold text-[4.5vw] md:hidden">
                    1500+ Transitions Premiere Pro
                  </p>
                  <div className="flex gap-[1vw] md:hidden">
                    <p className="text-[#FF689A] md:hidden">$48</p>
                    <p>$80</p>
                  </div>
                </div>
                <p className=" font-medium hidden md:block text-[0.8vw] text-[#525252] mt-[0.5vw] ">
                  {elem.date}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Page;
