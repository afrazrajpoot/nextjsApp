"use client";
import React from "react";

const Pagination = () => {
  return (
    <>
      <section className="flex w-full justify-center md:gap-[1vw]  gap-[4vw] md:mt-[10vw] mt-[30vw]">
        <figure className="flex gap-[1vw] mr-[2vw]">
          <img
            src="/img/previousDoubleArrow.png"
            alt="previous arrow"
            className="hidden md:block"
          />
          <img src="/img/previousSingleArrow.png" alt="previous arrow" />
        </figure>
        {[1, 2, 3, 4, 5, "....", 10].map((elem, ind) => (
          <div
            key={ind}
            className="bg-[#FFFFFF] border-[1px] border-[#E1E4EA] md:h-[4vh] h-[3vh] text-[2.5vw] md:text-[1vw]  flex justify-center items-center w-full md:max-w-[2vw] max-w-[7vw] rounded-md "
          >
            {elem}
          </div>
        ))}
        <figure className="flex gap-[1vw] md:ml-[2vw]">
          <img
            src="/img/nextDoubleArrow.png"
            alt="previous arrow"
            className="hidden md:block"
          />
          <img src="/img/nextSingleArrow.png" alt="previous arrow" />
        </figure>
      </section>
    </>
  );
};

export default Pagination;
