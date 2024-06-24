"use client";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImportExportSharpIcon from "@mui/icons-material/ImportExportSharp";
import Pack from "../components/Cards/Pack";
import Pagination from "../components/Common/Paggination";
import SubscriptionPass from "../components/pagesComponents/landingpage/SubscriptionPass";
import Bundles from "../components/pagesComponents/landingpage/Bundles";
import Link from "next/link";
import Footer from "../components/Common/Footer/Footer";
import { useGlobalContext } from "@/context/globalState";

const Store = () => {
  const btnData = ["Filter", "All Products", "Bundle", "Single Pack", "Premier pro", "After Effects"];
  const [products, setProducts] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState("All Products");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { fetchWooCommerceData } = useGlobalContext();
  const itemsPerPage = 6;

  const handleClick = (label) => {
    setSelectedBtn(label);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetchWooCommerceData(`wc/v3/products`, )
      .then(data => {
        const totalProducts = data.length;
        const startIndex = (currentPage - 1) * itemsPerPage;
        const slicedProducts = data.slice(startIndex, startIndex + itemsPerPage);
        setProducts(slicedProducts);
        setTotalPages(Math.ceil(totalProducts / itemsPerPage));
      })
      .catch(error => console.error('Error:', error));
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };


  return (
    <>
      <main className="w-full">
        <nav className="flex mt-[20vw] sm:mt-[8vw] lg:mt-[5vw] w-full max-w-[90vw] mx-auto items-center justify-between p-[3vw]">
          <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-[1vw]  w-full md:max-w-[50vw] items-center"> 
         {btnData.map((label, index) => (
         <Button
          key={index}
          style={{ textTransform: "capitalize" }}
          startIcon={label === "Filter" ? <ImportExportSharpIcon /> : null}
          variant="outlined"
          className={` ml-[0.5vw] border-[1px] ${
            selectedBtn === label ? 'bg-[#FF387A] text-[#ffff] border-[#FF387A]' : 'text-[#525252] border-[#525252]'
          } hover:bg-[#FF387A] hover:text-[#ffff] hover:border-[#FF387A] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw] hover:shadow-md p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center`}
          onClick={() => handleClick(label)}>
          {label}
        </Button>
      ))}
          </section>
          <section className="flex items-center w-full sm:max-w-[40vw] lg:max-w-[30vw] justify-end">
            <p className="text-[#525252] w-full max-w-[15vw] sm:max-w-[8vw] lg:max-w-[5vw] text-[4vw] sm:text-[2vw] lg:text-[1vw]">
              Sort by
            </p>
            <Button
              style={{ textTransform: "capitalize" }}
              endIcon={<ImportExportSharpIcon />}
              variant="outlined"
              className="bg-[#FFFF] ml-[0.5vw] border-[1px] border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] hover:border-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[40vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center"
            >
              Release
            </Button>
          </section>
        </nav>
        <nav className="lg:hidden sm:hidden pl-[76vw] ml-[5vw] pr-[2vw] pb-[4vw]  mt-[1vw] flex gap-[3vw] justify-center overflow-x-scroll">
          {btnData?.map((elem, ind) => (
            <div className="flex">
              <Button
                style={{ textTransform: "capitalize" }}
                key={ind}
                variant="outlined"
                className={`bg-[#FFFF] font-bold text-[#525252]  border-[#525252] border-[1px] w-[30vw]   text-[3vw]   hover:shadow-md    py-[2.5vw] rounded-md  px-[3vw]    text-center ${
                  ind === 0 &&
                  "border-[#FF387A] hover:bg-[#ff387af6] text-[#FF387A] text-[3.5vw]"
                }`}
              >
                {elem}
              </Button>
            </div>
          ))}
        </nav>
        <section className="w-full max-w-[90vw] ml-[4vw] mx-auto mt-[6vw] md:mt-[2vw]">
          <figure className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[5vw] md:mt-0 gap-[10vw] md:gap-[2vw] items-start">
          { products?.map((packages, index)=> {
            const { images, price, sale_price, name, permaLink, } = packages;
            return (
               <div className="w-full">
                 <Pack discountedPrice={sale_price} actualPrice={price} image={images[0]?.src} title={name} />
               </div>
            )
          })}
          </figure>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </section>
        <article className="w-full max-w-[80vw] mx-auto mt-[10vw] md:mt-[2vw]">
          <SubscriptionPass btnBg={"#FF387A"} />
        </article>
        <section className="w-full mt-[10vw] md:mt-[2vw] bg-[#F8F8F8]">
          <Bundles />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Store;
