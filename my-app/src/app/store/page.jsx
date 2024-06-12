"use client";
import { Button } from "@mui/material";
import React from "react";
import ImportExportSharpIcon from "@mui/icons-material/ImportExportSharp";
import { singlePack } from "@/data/data";
import Pack from "../components/Cards/Pack";
import Pagination from "../components/Common/Paggination";
import SubscriptionPass from "../components/pagesComponents/landingpage/SubscriptionPass";
import Bundles from "../components/pagesComponents/landingpage/Bundles";
import Link from "next/link";
import Footer from "../components/Common/Footer/Footer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Store = () => {
  const btnData = [
    "All Products",
    "Bundle",
    "Single Pack",
    "Premier pro",
    "After Effects",
  ];
  return (
    <>
      <main className="w-full">
        <nav className="flex mt-[20vw] sm:mt-[8vw] lg:mt-[5vw] w-full max-w-[90vw] mx-auto items-center justify-between p-[3vw]">
          <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-[1vw]  w-full md:max-w-[50vw] items-center">
            <Button
              style={{ textTransform: "capitalize" }}
              startIcon={<ImportExportSharpIcon />}
              variant="outlined"
              className="bg-[#FFFF] ml-[0.5vw] border-[1px] lg:border-[#FF387A] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  lg:hover:text-white hover:shadow-md lg:hover:bg-[#ff387af6] lg:text-[#FF387A] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center border-[#525252] text-[#525252]"
            >
              Filter
            </Button>
            <Link href={"/storedetails"}>
              <button className="bg-[#FFFF] ml-[0.5vw] border-[1px] hidden md:block border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center">
                All Products
              </button>
            </Link>
            <button className="bg-[#FFFF] ml-[0.5vw] border-[1px] hidden md:block border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center">
              Bundle
            </button>
            <button className="bg-[#FFFF] ml-[0.5vw] border-[1px] hidden md:block border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center">
              Single Packs
            </button>
            <button className="bg-[#FFFF] ml-[0.5vw] border-[1px] hidden md:block border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center">
              After Effects
            </button>
            <button className="bg-[#FFFF] ml-[0.5vw] border-[1px] hidden md:block border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center">
              Premiere Pro
            </button>
          </section>
          <section className="flex items-center w-full sm:max-w-[40vw] lg:max-w-[30vw] justify-end">
            <p className="text-[#525252] w-full max-w-[15vw] sm:max-w-[8vw] lg:max-w-[5vw] text-[4vw] sm:text-[2vw] lg:text-[1vw]">
              Sort by
            </p>
            <Button
              style={{ textTransform: "capitalize" }}
              endIcon={<ImportExportSharpIcon />}
              variant="outlined"
              className="bg-[#FFFF] ml-[0.5vw] border-[1px] border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[40vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center"
            >
              Release
            </Button>
          </section>
        </nav>
        <nav className="lg:hidden sm:hidden pl-[76vw] ml-[5vw] pr-[2vw] pb-[4vw]  mt-[1vw] flex gap-[3vw] justify-center overflow-x-scroll">
          {btnData?.map((elem, ind) => (
            <div className="flex">
              <Button
                style={{ textTransform: "capitalize" }}
                key={ind}
                variant="outlined"
                className={`bg-[#FFFF] font-bold text-[#525252]  border-[#525252] border-[1px] w-[30vw]   text-[3vw]   hover:shadow-md    py-[2.5vw] rounded-md  px-[3vw]    text-center ${
                  ind === 0 &&
                  "border-[#FF387A] hover:bg-[#ff387af6] text-[#FF387A] text-[3.5vw]"
                }`}
              >
                {elem}
              </Button>
            </div>
          ))}
        </nav>
        <section className="w-full max-w-[90vw] ml-[4vw] mx-auto mt-[6vw] md:mt-[2vw]">
          <figure className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[5vw] md:mt-0 gap-[10vw] md:gap-[2vw] items-start">
            {singlePack?.map((pack, index) => (
              <Pack key={index} {...pack} />
            ))}
          </figure>
          <Pagination />
        </section>
        <article className="w-full max-w-[80vw] mx-auto mt-[10vw] md:mt-[2vw]">
          <SubscriptionPass btnBg={"#FF387A"} />
        </article>
        <section className="w-full mt-[10vw] md:mt-[2vw] bg-[#F8F8F8]">
          <Bundles />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Store;
