"use client";
import React from "react";

const Pagination = () => {
  return (
    <>
      <section className="flex w-full justify-center gap-[1vw] mt-[10vw] ">
        <figure className="flex gap-[1vw] mr-[2vw]">
          <img src="/img/previousDoubleArrow.png" alt="previous arrow" />
          <img src="/img/previousSingleArrow.png" alt="previous arrow" />
        </figure>
        {[1, 2, 3, 4, 5, "....", 10].map((elem, ind) => (
          <div
            key={ind}
            className="bg-[#FFFFFF] border-[1px] border-[#E1E4EA] h-[4vh]  flex justify-center items-center w-full max-w-[2vw] rounded-md "
          >
            {elem}
          </div>
        ))}
        <figure className="flex gap-[1vw] ml-[2vw]">
          <img src="/img/nextDoubleArrow.png" alt="previous arrow" />
          <img src="/img/nextSingleArrow.png" alt="previous arrow" />
        </figure>
      </section>
    </>
  );
};

export default Pagination;
