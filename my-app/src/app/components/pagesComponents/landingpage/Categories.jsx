"use client";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImportExportSharpIcon from "@mui/icons-material/ImportExportSharp";
// import Pack from "../components/Cards/Pack";
// import Pagination from "../components/Common/Paggination";
// import SubscriptionPass from "../components/pagesComponents/landingpage/SubscriptionPass";
// import Bundles from "../components/pagesComponents/landingpage/Bundles";
import Link from "next/link";
// import Footer from "../components/Common/Footer/Footer";
import { useGlobalContext } from "@/context/globalState";
// import Loading from "../components/Common/Loading";
import Pack from "../../Cards/Pack";
import Pagination from "../../Common/Paggination";
import SubscriptionPass from "./SubscriptionPass";
import Bundles from "./Bundles";
import Footer from "../../Common/Footer/Footer";
import Loading from "../../Common/Loading";

const Categories = () => {
  const btnData = ["All Products", "Premiere Pro", "After Effects"];
  const [sortOrder, setSortOrder] = useState("asc"); // State to track sort order
  const [products, setProducts] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState("All Products");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { fetchWooCommerceData } = useGlobalContext();
  const itemsPerPage = 6;

  const fetchProducts = async (categorySlug = "", page = 1) => {
    try {
      let params = { per_page: itemsPerPage, page };

      if (categorySlug) {
        const categoriesResponse = await fetchWooCommerceData(
          "wc/v3/products/categories",
          { params: { per_page: 100 } }
        );
        const categories = await categoriesResponse.data;
        const category = categories?.find((cat) => cat.slug === categorySlug);
        if (category) {
          params = { ...params, category: category.id };
        } else {
          console.error("Category not found");
          return;
        }
      }

      const response = await fetchWooCommerceData("wc/v3/products", { params });
      const totalProducts = response.headers["x-wp-total"];
      const data = response.data;
      setTotalPages(Math.ceil(totalProducts / itemsPerPage));
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };
  const handleClick = (label) => {
    setSelectedBtn(label);
    setCurrentPage(1);
    const categorySlug =
      label === "All Products"
        ? ""
        : label === "Bundle"
        ? "bundles"
        : label.toLowerCase().replace(/\s+/g, "-");
    fetchProducts(categorySlug, 1);
  };

  useEffect(() => {
    fetchProducts(); // Fetch initial products (All Products)
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    const categorySlug =
      selectedBtn === "All Products"
        ? ""
        : selectedBtn.toLowerCase().replace(/\s+/g, "-");
    fetchProducts(categorySlug, currentPage);
  }, [selectedBtn, currentPage]); // Dependency array with currentPage and selectedBtn changes

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  useEffect(() => {
    // Sorting products whenever sortOrder or products change
    sortProducts();
  }, [sortOrder]);

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) => {
      const dateA = new Date(a.date_created).getTime();
      const dateB = new Date(b.date_created).getTime();
      if (sortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
    setProducts(sortedProducts);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  console.log("====================================");
  console.log(products);
  console.log("====================================");

  return (
    <>
      <main className="w-full">
        <nav className="flex mt-[20vw] sm:mt-[8vw] lg:mt-[5vw] w-full max-w-[90vw] mx-auto items-center justify-between p-[3vw]">
          <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-[1vw]  w-full md:max-w-[50vw] items-center">
            {btnData.map((label, index) => (
              <Button
                key={index}
                style={{ textTransform: "capitalize" }}
                startIcon={
                  label === "Filter" ? <ImportExportSharpIcon /> : null
                }
                variant="outlined"
                className={` ml-[0.5vw] border-[1px] ${
                  selectedBtn === label
                    ? "bg-[#FF387A] text-[#ffff] border-[#FF387A]"
                    : "text-[#525252] border-[#525252]"
                } hover:bg-[#FF387A] hover:text-[#ffff] hover:border-[#FF387A] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw] hover:shadow-md p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center`}
                onClick={() => handleClick(label)}
              >
                {label}
              </Button>
            ))}
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
          {products?.length === 0 ? (
            <main className="w-full flex items-center justify-center h-[30vw]">
              <Loading />
            </main>
          ) : (
            <>
              <figure className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[5vw] md:mt-0 gap-[10vw] md:gap-[2vw] items-start">
                {products?.map((product, index) => {
                  const { images, regular_price, sale_price, name, slug } =
                    product;
                  return (
                    <Link
                      href={`/product/${slug}`}
                      key={index}
                      className="w-full"
                    >
                      <Pack
                        discountedPrice={sale_price}
                        actualPrice={regular_price}
                        image={images[0]?.src}
                        title={name}
                      />
                    </Link>
                  );
                })}
              </figure>

              <Link href={"/store"}>
                {" "}
                <button className="w-full max-w-[10vw] ml-[39vw] bg-[#FF387A] text-white font-bold text-[3.5vw] sm:text-[2vw] lg:text-[1vw] mt-[5vw] p-[0.5vw] rounded-md md:mt-0">
                  View All
                </button>
              </Link>
            </>
          )}
        </section>
        <article className="w-full max-w-[80vw] mx-auto mt-[10vw] md:mt-[2vw]">
          <SubscriptionPass btnBg={"#FF387A"} />
        </article>

        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Categories;
