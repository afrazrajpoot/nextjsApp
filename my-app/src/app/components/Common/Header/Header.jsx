"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TextField } from "@mui/material";
import { headerData } from "@/data/data";

const Header = () => {
 
  return (
    <>
      <nav className="bg-[#171717] w-full p-[0.7vw] flex items-center  gap-[4vw] justify-center fixed z-50">
        <figure>  <Image src={"/img/whiteDuck.png"} height={200} alt="logo" width={200} />  </figure>
        <aside className="flex gap-[4vw] text-[1vw]">
          {headerData?.map((item) => (
            <div className="text-[#FFFFFF]" key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </div>
          ))}
        </aside>
        <div className="flex items-center gap-[0.3vw]">
          <TextField
            id="outlined-basic"
            InputProps={{
              startAdornment: (
                <Image src={"/img/searchIcon.png"} height={20} width={20} alt="search" style={{ marginRight: "10px" }}/>
              ),
              className: "text-[#FFFFFF] bg-[#262626] p-[0.3vw] focus:outline-none rounded-md",
              style: { padding: "0.3vw" },
            }}
            sx={{
              "& input": {
                padding: "0.3vw",
              },
            }}
          />
          <figure className="bg-[#262626] px-[0.5vw] py-[0.6vw] rounded-md ">
            <Image src={"/img/cart.png"} alt="cart" height={20} width={20} />
          </figure>
          <span className="px-[0.5vw] w-[12vw] py-[0.6vw] bg-[#262626] rounded-md flex items-center text-white font-bold gap-[1.5vw]">
            <Image src={"/img/profileIcon.png"} alt="profile" height={25} width={25} />
            <span>George Gika</span>
          </span>
        </div>
      </nav>x
    </>
  );
};

export default Header;
