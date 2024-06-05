import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { featurePack, singlePack } from '@/data/data';
import Pack from '../../Cards/Pack';
const Categories = () => {
  return (
    <main className='w-full max-w-[80vw] mx-auto py-[6vw] md:py-[2vw]'>
      <section className='flex flex-col md:flex-row items-start'>
        <aside className='w-full md:max-w-[28vw]'>
        <h1 className='text-[5.5vw] md:text-[2.5vw] text-[#171717] font-bold'>Featured Single Packs</h1>
        <p className='text-[#404040] text-[4vw] md:text-[1vw] mt-[1vw]'>Find what you need on Sonduck Film, Discover millions of video templates, stock footage, audio & more. All for one low cost.</p>
        <div className="flex mt-[3vw] -ml-[4vw] md:ml-0 ">
          <ArrowRightAltIcon className="text-[#000000] text-[10.5vw] md:text-[3.5vw] p-[3vw] md:p-[1vw] cursor-pointer hover:bg-green-50 hover:rounded-full hover:text-center rotate-180"/>
          <ArrowRightAltIcon className="text-[#000000] text-[10.5vw] md:text-[3.5vw] p-[3vw] md:p-[1vw] cursor-pointer hover:bg-green-50 hover:rounded-full hover:text-center"/>
        </div>
        </aside>
        <figure className='w-full flex flex-col md:flex-row items-start'>
          {featurePack?.map((pack, index)=> (
            <Pack key={index} {...pack} />
          ))}
        </figure>
      </section>
      <section className=' items-start mt-[3vw]'>
        <aside className='w-full md:max-w-[28vw]'>
        <h1 className='text-[5.5vw] md:text-[2.5vw] text-[#171717] font-bold'>Get Single Packs</h1>
        <div className="flex items-center">
        <button className="bg-[#FFFF] mt-[2vw] ml-[0.5vw] border-[1px] border-[#525252] font-medium hover:font-medium text-[3.5vw] md:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2.5vw] md:p-[0.9vw] rounded-md w-full max-w-[20vw] md:max-w-[4vw] text-center">All</button>
        <button className="bg-[#FFFF] mt-[2vw] ml-[0.5vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[3.5vw] md:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2.5vw] md:p-[0.9vw] rounded-md w-full max-w-[30vw] md:max-w-[10vw] text-center">After Effects</button>
        <button className="bg-[#FFFF] mt-[2vw] ml-[0.5vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[3.5vw] md:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2.5vw] md:p-[0.9vw] rounded-md w-full max-w-[30vw] md:max-w-[10vw] text-center">Premiere Pro</button>
        </div>
        </aside>
        <figure className='w-full grid grid-cols-1 md:grid-cols-3 mt-[5vw] md:mt-0 gap-[10vw] md:gap-[2vw] items-start'>
          {singlePack?.map((pack, index)=> (
            <Pack key={index} {...pack} />
          ))}
        </figure>
        <div className="flex items-center justify-center">
        <button className="bg-[#FFFF] mt-[5vw] md:mt-[2vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[4vw] md:text-[1vw] hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2.5vw] md:p-[0.9vw] rounded-md w-full max-w-[30vw] md:max-w-[10vw] text-center">View All</button>
        </div>
      </section>
      
    </main>
  )
}

export default Categories