"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TextField } from "@mui/material";
import { headerData } from "@/data/data";

const Header = () => {
  return (
    <>
      <nav className="bg-[#171717] top-0 w-full p-[2vw] md:p-[0.7vw] flex items-center  md:gap-[4vw] justify-center gap-[8vw] fixed z-50">
        <Link href={'/'}>
        <figure className="w-full md:max-w-[18vw] lg:max-w-[12vw] max-w-[60vw]">
          <img src={"/img/whiteDuck.png"} className="w-full" alt="logo" />
        </figure>
        </Link>
        <aside className="md:block hidden">
          <div className=" md:flex gap-[4vw] text-[1vw]">
            {headerData?.map((item) => (
              <div className="text-[#FFFFFF]" key={item.title}>
                <Link href={item.link} className="hover:text-[#FF387A] text-[1.5vw] lg:text-[1vw]">{item.title}</Link>
              </div>
            ))}
          </div>
        </aside>
        <header className="">
          <div className="flex items-center gap-[0.3vw]">
            <section className="hidden lg:block">
              <TextField
                id="outlined-basic"
                InputProps={{
                  startAdornment: (
                    <Image
                      src={"/img/searchIcon.png"}
                      height={20}
                      width={20}
                      style={{ marginRight: "10px" }}
                      className="md:block hidden"
                    />
                  ),
                  className:
                    " text-[#FFFFFF] bg-[#262626] p-[0.3vw] focus:outline-none rounded-md",
                  style: { padding: "0.3vw" },
                }}
                sx={{
                  "& input": {
                    padding: "0.3vw",
                  },
                }}
              />
            </section>

            <div className="bg-[#262626] md:px-[0.5vw] px-[1vw] md:py-[0.6vw] py-[2vw] transform translate-x-[-3.5vw] md:translate-x-[vw] rounded-md ">
              <img src={"/img/cart.png"} alt="cart" />
            </div>
            <figure className="lg:hidden md:ml-[4vw]">
              <img src="/img/burger.png" alt="burger" />
            </figure>
            <aside className="hidden xl:block">
              <section className="px-[0.5vw] w-[13vw] py-[0.6vw] bg-[#262626] rounded-md flex items-center text-white font-bold gap-[1.5vw]">
                <Image src={"/img/profileIcon.png"} height={25} width={25} />
                <p>George Gika</p>
              </section>
            </aside>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Header;
