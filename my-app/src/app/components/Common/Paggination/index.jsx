"use client";
import React from "react";
import KeyboardDoubleArrowLeftSharpIcon from '@mui/icons-material/KeyboardDoubleArrowLeftSharp';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';

const Pagination = () => {
  return (
    <>
      <section className="flex w-full items-center p-[2vw] justify-center gap-[1vw] mt-[10vw] md:mt-[2vw] ">
        <figure className="flex gap-[1vw] mr-[2vw]">
          <KeyboardDoubleArrowLeftSharpIcon className="" />
          <KeyboardArrowLeftSharpIcon className="" />
        </figure>
        {[1, 2, 3, 4, 5, "....", 10].map((elem, ind) => (
          <div
            key={ind}
            className="bg-[#FFFFFF] border-[1px] border-[#E1E4EA] h-[4vh]  flex justify-center items-center w-full max-w-[6vw] sm:max-w-[4vw] lg:max-w-[2vw] rounded-md "
          >
            {elem}
          </div>
        ))}
        <figure className="flex gap-[1vw] ml-[2vw]">
        <KeyboardArrowRightSharpIcon />
        <KeyboardDoubleArrowRightSharpIcon />
        </figure>
      </section>
    </>
  );
};

export default Pagination;