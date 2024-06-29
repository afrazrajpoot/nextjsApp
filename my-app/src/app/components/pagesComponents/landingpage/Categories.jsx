"use client";

import React, { useEffect, useState } from "react";
import Pack from "../../Cards/Pack";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGlobalContext } from "@/context/globalState";
import Link from "next/link";
import Loading from "../../Common/Loading";

const Categories = () => {
  const CustomPrevArrow = ({style, onClick}) => (
    <span
      style={{...style}}
      onClick={onClick}
      className={`text-vw text-black absolute cursor-pointer sm:top-[20vw] lg:top-[12vw] sm:-left-[35vw] lg:-left-[29vw] z-50`}
    >
      <ArrowRightAltIcon className="text-[#000000] top-[10vw] text-[10.5vw] sm:text-[5.5vw] lg:text-[3.5vw] p-[3vw] md:p-[1vw] cursor-pointer hover:bg-green-50 hover:rounded-full hover:text-center rotate-180" />
    </span>
  );

  const CustomNextArrow = ({style, onClick}) => (
    <span
      style={{...style}}
      onClick={onClick}
      className={`text-vw text-black absolute cursor-pointer sm:top-[20vw] lg:top-[12vw] sm:sm:-left-[30vw] lg:-left-[26vw]`}
    >
      <ArrowRightAltIcon className="text-[#000000] text-[10.5vw] sm:text-[5.5vw] lg:text-[3.5vw] p-[3vw] md:p-[1vw] cursor-pointer hover:bg-green-50 hover:rounded-full hover:text-center" />
    </span>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomPrevArrow />,
    prevArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
      { breakpoint: 1000, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const [featurePackages, setFeaturePackages] = useState([]);
  const [singlePack, setSinglePack] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { fetchWooCommerceData } = useGlobalContext();

  const fetchProducts = async (queryParams) => {
    try {
      const data = await fetchWooCommerceData('wc/v3/products', { params: queryParams });
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts({ featured: false }).then((data) => setFeaturePackages(data));
    fetchProducts({}).then((data) => setSinglePack(data));
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    let queryParams = {};

    if (category !== 'all') {
      queryParams = { categories: category };
    }

    fetchProducts(queryParams).then((data) => setSinglePack(data));
  };

  return (
    <main className="w-full max-w-[80vw] mx-auto py-[6vw] md:py-[4vw]">
      <section className="flex flex-col md:flex-row items-start">
        <aside className="w-full sm:max-w-[35vw] lg:max-w-[28vw]">
          <h1 className="text-[5.5vw] md:text-[2.5vw] text-[#171717] font-bold">
            Featured Single Packs
          </h1>
          <p className="text-[#404040] text-[4vw] sm:text-[2vw] lg:text-[1vw] mt-[1vw]">
            Find what you need on Sonduck Film, Discover millions of video
            templates, stock footage, audio & more. All for one low cost.
          </p>
        </aside>
        <figure className="grid grid-cols-1 w-full lg:max-w-[60vw] mt-[5vw] md:mt-0">
        { featurePackages?.length == 0 ? <main className="w-full lg:max-w-[60vw] flex items-center h-[15vw] justify-center"><Loading /></main> :  <Slider {...settings}>
            {featurePackages?.map((packages, index) => {
              const { images, regular_price, sale_price, name, slug } = packages;
              return (
                <Link href={`/product/${slug}`} key={index} className="w-full px-[1vw]">
                  <Pack discountedPrice={sale_price} actualPrice={regular_price} image={images[0]?.src} title={name} />
                </Link>
              );
            })}
          </Slider>}
        </figure>
      </section>
      <section className="items-start mt-[10vw] sm:mt-[3vw]">
        <aside className="w-full sm:max-w-[40vw] lg:max-w-[28vw]">
          <h1 className="text-[5.5vw] md:text-[2.5vw] text-[#171717] font-bold">
            Get Single Packs
          </h1>
          <div className="flex items-center w-full">
            {['all', 'after-effects', 'premiere-pro']?.map((category) => (
              <button
                key={category}
                className={`bg-[#FFFF] mt-[2vw] ml-[0.5vw] border-[1px] ${
                  selectedCategory === category
                    ? 'border-[#FF387A] text-[#FF387A]'
                    : 'border-[#525252] text-[#525252]'
                } font-medium hover:font-medium text-[3.5vw] capitalize sm:text-[2vw] lg:text-[1vw] hover:text-white hover:shadow-md hover:border-[#ff387af6] hover:bg-[#ff387af6] p-[2.5vw] md:p-[0.9vw] rounded-md w-full ${category == 'all'? "max-w-[20vw]" : "max-w-[30vw]"} sm:max-w-[15vw] lg:max-w-[10vw] text-center`}
                onClick={() => handleCategoryClick(category)}
              >
                {category === 'all' ? 'All' : category.replace('-', ' ')}
              </button>
            ))}
          </div>
        </aside>
        {singlePack?.length == 0 ? <main className="w-full flex items-center h-[25vw] justify-center"><Loading /></main> : <figure className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[5vw] sm:mt-[5vw] lg:mt-0 gap-[10vw] sm:gap-[4vw] lg:gap-[2vw] items-start">
         {singlePack?.slice(0, 6)?.map((packages, index) => {
            const { images, regular_price, sale_price, name, slug } = packages;
            return (
              <Link href={`/product/${slug}`} >
                <Pack key={index} discountedPrice={sale_price} actualPrice={regular_price} image={images[0]?.src} title={name} />
              </Link>
            );
          })}
        </figure>}
        <Link href={"/store"} className="flex items-center justify-center">
          <button className="bg-[#FFFF] mt-[5vw] lg:mt-[2vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[4vw] sm:text-[2vw] lg:text-[1vw] hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2.5vw] md:p-[0.9vw] rounded-md w-full max-w-[30vw] md:max-w-[10vw] text-center">
            View All
          </button>
        </Link>
      </section>
    </main>
  );
};

export default Categories;
