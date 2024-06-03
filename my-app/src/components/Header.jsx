"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchIcon from "@mui/icons-material/Search"; // Importing the Search icon from Material-UI
import { Button, TextField } from "@mui/material";

const Header = () => {
  const data = [
    {
      title: "STORE",
      link: "/store",
    },
    {
      title: "TUTORIALS",
      link: "/tutorials",
    },
    {
      title: "FAQS",
      link: "/faqs",
    },
    {
      title: "ABOUT",
      link: "/about",
    },
  ];
  return (
    <>
      <nav className="bg-[#171717] w-full p-[0.7vw] flex items-center  gap-[4vw] justify-center fixed z-50">
        <div>
          <Image src={"/img/whiteDuck.png"} height={200} width={200} />
        </div>
        <div className="flex gap-[4vw] text-[1vw]">
          {data.map((item) => (
            <div className="text-[#FFFFFF]" key={item.title}>
              <Link href={item.link}>{item.title}</Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[0.3vw]">
          <TextField
            id="outlined-basic"
            InputProps={{
              startAdornment: (
                <Image
                  src={"/img/searchIcon.png"}
                  height={20}
                  width={20}
                  style={{ marginRight: "10px" }}
                />
              ),
              className:
                "text-[#FFFFFF] bg-[#262626] p-[0.3vw] focus:outline-none rounded-md",
              style: { padding: "0.3vw" },
            }}
            sx={{
              "& input": {
                padding: "0.3vw",
              },
            }}
          />

          <div className="bg-[#262626] px-[0.5vw] py-[0.6vw] rounded-md ">
            <Image src={"/img/cart.png"} height={20} width={20} />
          </div>

          <span className="px-[0.5vw] w-[12vw]  py-[0.6vw] bg-[#262626] rounded-md flex items-center text-white font-bold gap-[1.5vw]">
            <Image src={"/img/profileIcon.png"} height={25} width={25} />
            <span>George Gika</span>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
