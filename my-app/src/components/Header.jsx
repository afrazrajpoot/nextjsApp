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
      <nav className="bg-[#171717]  w-full p-[2vw] md:p-[0.7vw]   flex items-center  md:gap-[4vw] justify-center gap-[8vw] fixed z-50">
        <div className="w-full md:max-w-[12vw] max-w-[60vw]">
          <img src={"/img/whiteDuck.png"} className="w-full" alt="logo" />
        </div>
        <div className="md:block hidden">
          <div className=" md:flex gap-[4vw] text-[1vw]">
            {filteredHeaderData.map((item, ind) => (
              <div className="text-[#FFFFFF]" key={ind}>
                <Link href={item.link}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>

        {login ? (
          <div className="flex items-center gap-[0.3vw]">
            <span className="hidden md:block">
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
            </span>

            <div className="bg-[#262626] md:px-[0.5vw] px-[1vw] md:py-[0.6vw] py-[2vw] transform translate-x-[-3.5vw] md:translate-x-[vw] rounded-md ">
              <img src={"/img/cart.png"} alt="cart" />
            </div>
            <span className="md:hidden" onClick={toggleSidebar}>
              <img src="/img/burger.png" alt="burger" />
            </span>
            <span className="hidden md:block">
              <span className="px-[0.5vw] w-[12vw] py-[0.6vw] bg-[#262626] rounded-md flex items-center text-white font-bold gap-[1.5vw]">
                <Image src={"/img/profileIcon.png"} height={25} width={25} />
                <span>George Gika</span>
              </span>
            </span>
          </div>
        ) : (
          <div className="translate-x-[15vw] flex gap-[2vw]">
            <Button
              onClick={() => setLoginModel(true)}
              variant="text"
              style={{ textTransform: "capitalize" }}
              className="text-white text-[1vw]"
            >
              Log <span className="ml-[0.3vw]">in</span>
            </Button>
            <CustomButton variant="outlined" className="text-[1vw]">
              Join us
            </CustomButton>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
