"use client";
import React from "react";

const Pagination = () => {
  return (
    <>
      <section className="flex w-full justify-center lg:gap-[1vw]  gap-[4vw] lg:mt-[10vw] mt-[30vw] sm:mt-[15vw]">
        <figure className="flex gap-[1vw] mr-[2vw]">
          <img
            src="/img/previousDoubleArrow.png"
            alt="previous arrow"
            className="hidden lg:block"
          />
          <img src="/img/previousSingleArrow.png" alt="previous arrow" />
        </figure>
        {[1, 2, 3, 4, 5, "....", 10].map((elem, ind) => (
          <div
            key={ind}
            className="bg-[#FFFFFF] border-[1px] border-[#E1E4EA] lg:h-[4vh] h-[3vh] text-[2.5vw] lg:text-[1vw]  flex justify-center items-center w-full lg:max-w-[2vw] max-w-[7vw] rounded-lg sm:h-[5vh] "
          >
            {elem}
          </div>
        ))}
        <figure className="flex gap-[1vw] lg:ml-[2vw]">
          <img
            src="/img/nextDoubleArrow.png"
            alt="previous arrow"
            className="hidden lg:block"
          />
          <img src="/img/nextSingleArrow.png" alt="previous arrow" />
        </figure>
      </section>
    </>
  );
};

export default Pagination;
