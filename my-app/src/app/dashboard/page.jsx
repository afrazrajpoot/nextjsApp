"use client";
import { Button } from "@mui/material";
import Sidebar from "../components/Common/Sidebar/Sidebar";

const page = () => {
  return (
    <main className="bg-[#FAFAFA] h-[110vh]">
      <Sidebar />

      <section className=" rounded-md w-full md:max-w-[50vw] max-w-[90vw] translate-y-[5vw] md:translate-x-[26vw] translate-x-[5vw]">
        <h1 className="font-bold text-[6vw] md:text-[2vw] md:ml-[0vw] ml-[5vw] translate-y-[13vw] md:translate-y-[0.5vw] translate-x-[-4vw]  md:translate-x-0">
          Dashboard
        </h1>
        <section className="grid md:grid-cols-2 grid-cols-1 w-full gap-[4vw]">
          <article
            className=" p-[2vw] bg-white border-[1px] border-[#F5F5F5] mt-[1vw] translate-y-[15vw]
        md:translate-y-0 rounded-lg"
          >
            <div className="">
              <div className="flex flex-col items-center gap-[1vw] ">
                <img
                  src="/img/accountAvatar.png"
                  alt="dashborad photo"
                  className="w-full md:max-w-[5vw] max-w-[15vw]"
                />
                <div>
                  <p className="text-center font-bold md:text-[1vw] text-[3vw]">
                    George Gika
                  </p>
                  <p className="text-center md:text-[0.9vw] text-[2.5vw] font-bold text-[#475569]">
                    george
                  </p>
                </div>
              </div>
              <div className="flex gap-[0.8vw] justify-center items-center mt-[0.5vw]">
                <div className="flex gap-[0.3vw]">
                  <figure className="">
                    <img
                      src="/img/location.png"
                      alt="location"
                      className="w-full md:max-w-[1vw] max-w-[3vw]"
                    />
                  </figure>
                  <span className="text-[#475569] md:text-[1vw] text-[2.5vw]">
                    San Jose,Spain
                  </span>
                </div>
                <div
                  className="border-[2px] border-[#CBD5E1] bg-[#CBD5E1] rounded-full"
                  style={{ width: "0.2vw", height: "0.5vh" }}
                />
                <div className="flex gap-[0.3vw]">
                  <span className="text-[#475569] md:text-[1vw] text-[2.5vw]">
                    since
                  </span>
                  <figure>
                    <img
                      src="/img/star.png"
                      alt="email"
                      className="w-full md:max-w-[1vw] max-w-[3vw]"
                    />
                  </figure>
                  <span className="text-[#475569] md:text-[1vw] text-[2.5vw]">
                    2024
                  </span>
                </div>
              </div>
            </div>
            <div className="border-[0.8px] border-b-[#CBD5E1] mt-[1vw]"></div>
            <div className="flex justify-between mt-[0.9vw]">
              <p className="text-[#475569] md:text-[0.9vw] text-[3vw]">
                Address
              </p>
              <p className="text-[#475569] md:text-[0.9vw] text-[2.5vw] font-bold">
                Mila beoty 243
              </p>
            </div>
            <div className="border-[0.8px] border-b-[#CBD5E1] mt-[1vw]"></div>
            <div className="flex justify-between md:mt-[0.9vw] mt-[2vw]">
              <p className="text-[#475569] md:text-[0.9vw] text-[3vw] font-medium">
                Zip Code
              </p>
              <p className="text-[#475569] md:text-[0.9vw] text-[2.5vw] font-bold">
                353243
              </p>
            </div>
            <div className="border-[0.8px] border-b-[#CBD5E1] md:mt-[1vw] mt-[2vw]"></div>
            <div className="flex justify-between md:mt-[0.9vw] mt-[2vw]">
              <p className="text-[#475569] md:text-[0.9vw] text-[3vw] font-medium">
                Currency
              </p>
              <p className="text-[#475569] md:text-[0.9vw] text-[2.5vw] font-bold">
                IDR
              </p>
            </div>

            <div className="flex gap-[3vw] md:items-center justify-center md:mt-[1vw] mt-[3vw]">
              <button className="text-[#FF387A] font-bold md:text-[1vw] text-[3vw]">
                change password
              </button>
              <button className="md:py-[0.4vw] py-[1.5vw] md:px-[1vw] px-[7vw] md:text-[0.9vw] text-[3vw] text-[#FF387A] border-[1px] border-[#FF387A] md:rounded-md rounded-sm">
                Edit profile
              </button>
            </div>
          </article>
          <section>
            <article
              className=" p-[2vw] bg-white border-[1px] border-[#F5F5F5] mt-[1vw] translate-y-[15vw]
        md:translate-y-0 rounded-lg md:w-[30vw] w-full"
            >
              <p className="md:text-[1vw] text-[4vw] font-bold">
                Recent Orders ,
              </p>

              <div className="flex mt-[1vw] ">
                <figure>
                  <img
                    src="/img/dashboardImg.png"
                    alt="img"
                    className="w-full md:max-w-[4vw] max-w-[15vw]"
                  />
                </figure>
                <div className="ml-[1vw]">
                  <p className="md:text-[0.9vw] text-[4vw] font-medium">
                    1500+ Transitions Premiere Pro
                  </p>
                  <div className="flex   justify-between w-[60vw] md:w-[20vw]">
                    <p>48$</p>
                    <figure className="  ">
                      <img
                        src="/img/download.png"
                        alt="download"
                        className=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="border-[1px] border-b-[#EEEEEE] mt-[1.3vw]"></div>
              <div className="flex mt-[1vw]">
                <figure>
                  <img
                    src="/img/img1.png"
                    alt="img"
                    className="w-full md:max-w-[4vw] max-w-[15vw]"
                  />
                </figure>
                <div className="ml-[1vw]">
                  <p className="md:text-[0.9vw] text-[4vw] font-medium">
                    1500+ Transitions Premiere Pro
                  </p>
                  <div className="flex   justify-between w-[60vw] md:w-[20vw]">
                    <p>48$</p>
                    <figure>
                      <img src="/img/download.png" alt="download" />
                    </figure>
                  </div>
                </div>
              </div>
              <button className="py-[0.4vw] px-[1vw] w-full md:mt-[1vw] text-[#FF387A] border-[1px] border-[#FF387A] rounded-md mt-[8vw]">
                View All
              </button>
            </article>
          </section>
        </section>
      </section>
    </main>
  );
};

export default page;
