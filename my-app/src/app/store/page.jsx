import { Button } from '@mui/material'
import React from 'react'
import ImportExportSharpIcon from '@mui/icons-material/ImportExportSharp';
import { singlePack } from '@/data/data';
import Pack from '../components/Cards/Pack';
import Pagination from '../components/Common/Paggination';
import SubscriptionPass from '../components/pagesComponents/landingpage/SubscriptionPass';
import Bundles from '../components/pagesComponents/landingpage/Bundles';
import Link from 'next/link';
import Footer from '../components/Common/Footer/Footer';

const Store = () => {
  return (
    <>
    <main className='w-full'>
         <nav className='flex mt-[20vw] sm:mt-[8vw] lg:mt-[0vw] w-full max-w-[90vw] mx-auto items-center justify-between p-[3vw]'>
         <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-[1vw]  w-full md:max-w-[50vw] items-center">
         <Button startIcon={<ImportExportSharpIcon />} variant="outlined" className='bg-[#FFFF] ml-[0.5vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center' >Filter</Button>
         <Link href={'/storedetails'}>
        <button className="bg-[#FFFF] ml-[0.5vw] border-[1px] hidden md:block border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center">All Products</button>
         </Link>
        <button className="bg-[#FFFF] ml-[0.5vw] border-[1px] hidden md:block border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center">Bundle</button>
        <button className="bg-[#FFFF] ml-[0.5vw] border-[1px] hidden md:block border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center">Single Packs</button>
        <button className="bg-[#FFFF] ml-[0.5vw] border-[1px] hidden md:block border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center">After Effects</button>
        <button className="bg-[#FFFF] ml-[0.5vw] border-[1px] hidden md:block border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center">Premiere Pro</button>
        </section>
        <section className='flex items-center w-full sm:max-w-[40vw] lg:max-w-[30vw] justify-end'>
            <p className='text-[#525252] w-full max-w-[15vw] sm:max-w-[8vw] lg:max-w-[5vw] text-[4vw] sm:text-[2vw] lg:text-[1vw]'>Sort by</p>
            <Button endIcon={<ImportExportSharpIcon />} variant="outlined" className='bg-[#FFFF] ml-[0.5vw] border-[1px] border-[#525252] font-medium hover:font-medium text-[3.5vw] sm:text-[2vw] lg:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#525252] p-[2.5vw] md:p-[0.5vw] rounded-md w-full max-w-[40vw] sm:max-w-[15vw] lg:max-w-[8vw] text-center' >Release</Button>
        </section>
         </nav>
         <section className='w-full max-w-[90vw] mx-auto mt-[10vw] md:mt-[2vw]'>
         <figure className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[5vw] md:mt-0 gap-[10vw] md:gap-[2vw] items-start'>
          {singlePack?.map((pack, index)=> (
            <Pack key={index} {...pack} />
          ))}
        </figure>
        <Pagination />
         </section>
         <article className='w-full max-w-[80vw] mx-auto mt-[10vw] md:mt-[2vw]'>
            <SubscriptionPass btnBg={'#FF387A'} />
         </article>
         <section className="w-full mt-[10vw] md:mt-[2vw] bg-[#F8F8F8]">
        <Bundles />
      </section>
    <Footer />
    </main>
    </>
  )
}

export default Store