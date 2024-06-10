"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchIcon from "@mui/icons-material/Search"; // Importing the Search icon from Material-UI
import { Button, TextField } from "@mui/material";
import { headerData } from "@/data/data";
import { useGlobalContext } from "@/context/globalState";
import { styled } from "@mui/material/styles";
const Header = () => {
  const CustomButton = styled(Button)({
    color: "white",
    borderColor: "white",
    borderWidth: "1px",
    textTransform: "capitalize",
  });
  const {
    login,
    setLogin,
    openLoginModel,
    setLoginModel,
    toggelMobileSidebar,
    setMobileSideBar,
    toggleSidebar,
  } = useGlobalContext();

  const filteredHeaderData = !login
    ? headerData.filter((item, index) => index !== 3)
    : headerData;

  return (
    <>
      <nav className="bg-[#171717]  w-full p-[2vw] lg:p-[0.7vw]  sm:p-[1vw] justify-center   flex items-center sm:justify-center  lg:gap-[4vw]   lg:justify-center gap-[8vw] fixed z-50">
        <div className="w-full lg:max-w-[12vw] sm:max-w-[20vw] max-w-[60vw]">
          <img src={"/img/whiteDuck.png"} className="w-full" alt="logo" />
        </div>
        <div className="lg:block hidden sm:block ">
          <div className=" lg:flex sm:flex gap-[4vw] text-[1vw] lg:text-[1vw] sm:text-[1.5vw]">
            {filteredHeaderData?.map((item, ind) => (
              <div className="text-[#FFFFFF]" key={ind}>
                <Link href={item.link}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>

        {login ? (
          <div className="flex items-center gap-[0.3vw]">
            <span className="hidden    lg:w-[10vw]   lg:block ">
              <form className="flex bg-[#262626]  p-[0.6vw]  lg:p-[0.6vw]    rounded-md gap-[1vw] lg:w-[15vw]">
                <img src="/img/searchIcon.png" alt="searchIcon" />
                <input
                  type="text"
                  className=" bg-[#262626] w-full  focus:outline-none text-white"
                  name=""
                  id=""
                />
              </form>
            </span>

            <div className="bg-[#262626] sm:py-[1vw] lg:px-[0.5vw] px-[1vw] lg:py-[0.6vw]  py-[2vw] transform translate-x-[-3.5vw] lg:translate-x-[5vw] rounded-lg">
              <img src={"/img/cart.png"} alt="cart" />
            </div>
            <span className="lg:hidden  " onClick={toggleSidebar}>
              <img src="/img/burger.png" alt="burger" />
            </span>
            <span className="hidden  lg:block ">
              <span className="px-[0.5vw] sm:w-[20vw] lg:w-[10vw] lg:translate-x-[5vw] w-[12vw] py-[0.6vw] bg-[#262626] rounded-lg flex items-center text-white font-bold gap-[1.5vw] lg:p-[0.4vw]">
                <img
                  src={"/img/profileIcon.png"}
                  alt="profile icon"
                  className="sm:w-[2vw] lg:w-[1.5vw]"
                />
                <span>George Gika</span>
              </span>
            </span>
          </div>
        ) : (
          <div className="lg:translate-x-[15vw] translate-x-1 flex gap-[2vw]">
            <Button
              onClick={() => setLoginModel(true)}
              variant="text"
              style={{ textTransform: "capitalize" }}
              className="text-white text-[3vw] lg:text-[1vw]"
            >
              Log <span className="ml-[0.3vw]">in</span>
            </Button>
            <CustomButton
              variant="outlined"
              className="lg:text-[1vw] text-[2vw]"
            >
              Join us
            </CustomButton>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
