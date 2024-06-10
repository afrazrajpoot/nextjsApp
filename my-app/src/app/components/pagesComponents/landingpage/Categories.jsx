'use client'

import React from 'react'
import { featurePack, singlePack } from '@/data/data';
import Pack from '../../Cards/Pack';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'; // Make sure to import your icon
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const Categories = () => {
  const CustomPrevArrow = (props) => (
    <span {...props} className="text-vw text-black absolute cursor-pointer sm:top-[20vw] lg:top-[12vw] sm:-left-[35vw] lg:-left-[29vw] z-50">
   <ArrowRightAltIcon className='text-[#000000] text-[10.5vw] sm:text-[5.5vw] lg:text-[3.5vw] p-[3vw] md:p-[1vw] cursor-pointer hover:bg-green-50 hover:rounded-full hover:text-center rotate-180' />
  </span>);
  const CustomNextArrow = (props) => (
    <span {...props} className="text-vw text-black absolute cursor-pointer sm:top-[20vw] lg:top-[12vw] sm:sm:-left-[30vw] lg:-left-[26vw] ">
    <ArrowRightAltIcon className='text-[#000000] text-[10.5vw] sm:text-[5.5vw] lg:text-[3.5vw] p-[3vw] md:p-[1vw] cursor-pointer hover:bg-green-50 hover:rounded-full hover:text-center' />
  </span> );


  const settings = {
    dots: false, infinite: true, speed: 500, arrows: true,
    slidesToShow: 2, slidesToScroll: 1,
    nextArrow: <CustomPrevArrow  />,
    prevArrow: <CustomNextArrow  />,
    responsive: [
      {  breakpoint: 1024,
        settings: {  slidesToShow: 2,  slidesToScroll: 1,  infinite: true, },
      },
      {  breakpoint: 1000,
        settings: {  slidesToShow: 1,  slidesToScroll: 1, },
      },
      {  breakpoint: 640,
        settings: {  slidesToShow: 1,  slidesToScroll: 1, },
      },
    ],
  };

  return (
    <main className='w-full max-w-[80vw] mx-auto py-[6vw] md:py-[4vw]'>
      <section className='flex flex-col md:flex-row items-start'>
        <aside className='w-full sm:max-w-[35vw] lg:max-w-[28vw]'>
        <h1 className='text-[5.5vw] md:text-[2.5vw] text-[#171717] font-bold'>Featured Single Packs</h1>
        <p className='text-[#404040] text-[4vw] sm:text-[2vw] lg:text-[1vw] mt-[1vw]'>Find what you need on Sonduck Film, Discover millions of video templates, stock footage, audio & more. All for one low cost.</p>
        </aside>
        <figure className='grid grid-cols-1 w-full lg:max-w-[60vw] mt-[5vw] md:mt-0'>
        <Slider {...settings}>
          {featurePack?.map((pack, index) => (
            <div key={index} className='w-full px-[1vw]'>
              <Pack {...pack} />
            </div>
          ))}
        </Slider>
        </figure>
      </section>
      <section className=' items-start mt-[3vw]'>
        <aside className='w-full sm:max-w-[40vw] lg:max-w-[28vw]'>
        <h1 className='text-[5.5vw] md:text-[2.5vw] text-[#171717] font-bold'>Get Single Packs</h1>
        <div className="flex items-center w-full">
        <button className="bg-[#FFFF] mt-[2vw] ml-[0.5vw] border-[1px] border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.9vw] rounded-md w-full max-w-[20vw] sm:max-w-[8vw] lg:max-w-[4vw] text-center">All</button>
        <button className="bg-[#FFFF] mt-[2vw] ml-[0.5vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2.5vw] md:p-[0.9vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[10vw] text-center">After Effects</button>
        <button className="bg-[#FFFF] mt-[2vw] ml-[0.5vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2.5vw] md:p-[0.9vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[10vw] text-center">Premiere Pro</button>
        </div>
        </aside>
        <figure className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[5vw] sm:mt-[5vw] lg:mt-0 gap-[10vw] md:gap-[2vw] items-start'>
          {singlePack?.map((pack, index)=> (
            <Pack key={index} {...pack} />
          ))}
        </figure>
        <div className="flex items-center justify-center">
        <button className="bg-[#FFFF] mt-[5vw] md:mt-[2vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[4vw] sm:text-[2vw] lg:text-[1vw] hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2.5vw] md:p-[0.9vw] rounded-md w-full max-w-[30vw] md:max-w-[10vw] text-center">View All</button>
        </div>
      </section>
      
    </main>
  )
}

export default Categories