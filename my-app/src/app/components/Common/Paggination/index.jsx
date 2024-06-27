"use client";
import React from "react";
import KeyboardDoubleArrowLeftSharpIcon from "@mui/icons-material/KeyboardDoubleArrowLeftSharp";
import KeyboardArrowLeftSharpIcon from "@mui/icons-material/KeyboardArrowLeftSharp";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import KeyboardDoubleArrowRightSharpIcon from "@mui/icons-material/KeyboardDoubleArrowRightSharp";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <section className="flex w-full items-center p-[2vw] justify-center sm:mt-[15vw] gap-[1vw] mt-[30vw] lg:mt-[1vw]">
      <figure className="flex gap-[1vw] mr-[2vw]">
        <KeyboardDoubleArrowLeftSharpIcon
          className="sm:hidden hidden lg:block cursor-pointer"
          onClick={() => onPageChange(1)}
        />
        <KeyboardArrowLeftSharpIcon
          className="cursor-pointer"
          onClick={() => onPageChange(currentPage - 1)}
        />
      </figure>
      {[...Array(totalPages)]?.map((_, ind) => (
        <div
          key={ind}
          className={`bg-[#FFFFFF] border-[1px] border-[#E1E4EA] h-[4vh] flex justify-center items-center w-full max-w-[6vw] sm:max-w-[4vw] lg:max-w-[2vw] rounded-md cursor-pointer ${
            currentPage === ind + 1 ? "border-[#FF387A] border-[2px] text-[#171717]" : ""
          }`}
          onClick={() => onPageChange(ind + 1)}
        >
          {ind + 1}
        </div>
      ))}
      <figure className="flex gap-[1vw] ml-[2vw]">
        <KeyboardArrowRightSharpIcon
          className="cursor-pointer"
          onClick={() => onPageChange(currentPage + 1)}
        />
        <KeyboardDoubleArrowRightSharpIcon
          className="sm:hidden hidden lg:block cursor-pointer"
          onClick={() => onPageChange(totalPages)}
        />
      </figure>
    </section>
  );
};

export default Pagination;
