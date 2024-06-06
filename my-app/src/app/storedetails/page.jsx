import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import EastSharpIcon from '@mui/icons-material/EastSharp';
import { features, singlePack } from '@/data/data';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Pack from '../components/Cards/Pack';



const StoreDetails = () => {
  return (
    <main className='w-full'>
        <nav className='w-full max-w-[90vw] mx-auto mt-[12vw] md:mt-0 p-[2vw]'>
            <p className='text-[5.5vw] md:text-[2.5vw] text-[#171717] w-full md:max-w-[50vw] font-semibold'>Seamless Transitions Pack | 1500+ Transitions | Premiere Pro</p>
            <section className='flex items-center mt-[5vw] md:mt-0 w-full md:max-w-[30vw]'>
            <p className='text-[#525252] md:w-full md:max-w-[5vw] text-[4vw] md:text-[1vw]'>Category : </p>
            <Button variant="outlined" className='bg-[#FFFF] ml-[0.5vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[3.5vw] md:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2vw] md:p-[0.5vw] rounded-md w-full max-w-[35vw] md:max-w-[10vw] text-center' >Premium Pro</Button>
        </section>
        <section className='w-full flex flex-col md:flex-row items-start max-w-[90vw] mx-auto mt-[10vw] md:mt-[2vw]'>
            <Image src={"/img/storeDetails.png"} width={1000} height={1000} alt=""/>
            <aside className='w-full mt-[10vw] md:mt-0 md:max-w-[24vw] md:ml-[2vw]'>
            <section className='w-full shadow-md ml-[2vw] p-[5vw] md:p-[1vw] rounded-lg'>
                <nav className='flex items-center justify-between p-[2vw] md:p-[1vw]'>
                    <p className='text-[#171717] text-[5vw] md:text-[1vw] font-medium'>Price</p>
                    <p className='flex items-center'>
                        <span className='text-[6.3vw] md:text-[1.3vw] text-[#FF387A] font-medium'>$48</span>
                        <strike className="ml-[0.5vw] text-[5vw] md:text-[1vw] text-[#171717]">$32</strike>
                    </p>
                </nav>
                <Button variant="outlined" className='bg-[#FFFF] ml-[0.5vw] mt-[1vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[3.5vw] md:text-[1vw]  hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2.5vw] md:p-[0.5vw] rounded-md w-full text-center' >Add to cart</Button>
                <Button variant="contained" className='bg-[#FF387A] ml-[0.5vw] mt-[4vw] md:mt-[1vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[3.5vw] md:text-[1vw] text-white hover:shadow-md hover:bg-[#ff387af6] p-[2.5vw] md:p-[0.5vw] rounded-md w-full text-center' >Buy now</Button>
                <section className='flex border-t-[1px] border-[#E5E5E5] mt-[3vw] md:mt-[1vw] items-center justify-between p-[1vw]'>
                    <p className='text-[#171717] font-medium text-[4vw] md:text-[1vw]'>Compatibility</p>
                    <aside className='flex items-center'>
                        <Image src={"/img/adobe_ae.png"} height={30} alt="logo" width={50} className='cursor-pointer'  />
                        <Image src={"/img/adobe_pr.png"} height={30} alt="logo" width={50} className='cursor-pointer' />
                    </aside>
                </section>
                <p className='flex mt-[0.5vw] text-[4vw] md:text-[1vw] text-[#171717] items-center justify-between p-[1vw]'>
                    <span>File size</span>
                    <span>65.43 MB</span>
                </p>
            </section> 
            <footer className='w-full mt-[10vw] md:mt-[2vw] ml-[2vw] rounded-md p-[5vw] md:p-[2vw] bg-[#FF689A1A]'>
                <nav className='flex items-center'>
                    <Image src={"/img/access.png"} height={30} alt="logo" width={30} className='cursor-pointer'  />
                    <p className='text-[4vw] md:text-[1vw] text-[#FF387A] ml-[0.5vw] font-medium'>Get Unlimited Access</p>
                </nav>
                <p className='w-full mt-[1vw] md:max-w-[21vw] text-[4vw] md:text-[1vw] text-[#525252]'>Unlock this theme and get unlimited access to over 1000+ Premium templates.</p>
                <p className='w-full flex items-center mt-[1vw] md:max-w-[20vw] text-[4vw] md:text-[1vw] text-[#FF387A]'>Go Unlimited now <EastSharpIcon className='ml-[0.5vw]' /></p>

            </footer>
            </aside>
        </section>
        </nav>
        <section className='w-full flex flex-col md:flex-row items-start max-w-[90vw] mx-auto mt-[10vw] md:mt-[2vw]'>
            <article className='w-full md:max-w-[70vw]'>
            <main className='flex flex-col md:flex-row items-start justify-evenly w-full'>
            <Image src={"/img/storeDetails1.png"} width={450} height={1000} alt="store details" className='rounded-lg'/>
            <Image src={"/img/storeDetails2.png"} width={450} height={1000} alt="store details" className='rounded-lg'/>
            </main>
            <h1 className='text-[#171717] text-[5vw] md:text-[2vw] mt-[10vw] md:mt-[2vw] font-semibold'>Overview</h1>
            <p className='text-[#171717] text-[4vw] md:text-[1vw] mt-[1vw]'>Boost your video production to the next level</p>
            <p className='text-[#171717] text-[4vw] md:text-[1vw] mt-[1vw] w-full md:max-w-[70vw]'>Boost your video production to the next level Over 3333 dynamic, seamless transitions for any video project! Make your video visually interesting and amazing quickly, conveniently, and effortlessly! Slideshow, trailer, promo, music clip, broadcast, movie, documentary film, or presentation – every your project will be far more fascinating, dizzying, and professional!</p>
            <h1 className='text-[#171717] text-[5vw] md:text-[2vw] mt-[10vw] md:mt-[2vw] font-medium'>Full Customization</h1>
            <p className='text-[#171717] text-[4vw] md:text-[1vw] mt-[1vw] w-full md:max-w-[70vw]'>Full Customization Control every transition with no experience in After Effects. You can easily change the color, direction, zoom point, and many other parameters. How? Check out this video review.</p>
            <Image src={"/img/storeDetails3.png"} width={1000} height={1000} alt="store details" className='mt-[10vw] md:mt-[3vw]'/>
            <p className='text-[#171717] text-[4.3vw] md:text-[1.3vw] mt-[10vw] md:mt-[1vw]'>What resolution projects are supported</p>
            <p className='text-[#171717] text-[4vw] md:text-[1vw] mt-[5vw] md:mt-[1vw] w-full md:max-w-[70vw]'>Handy Seamless Transitions support any resolution of your project. Starting with the
            minimum and ending with a full 4K! In fact, - these transitions are resizable. Moreover,
            transitions will work with any aspect ratio in the frame, such as portrait 9:16</p>
            <Image src={"/img/storeDetails4.png"} width={1000} height={1000} alt="store details" className='mt-[10vw] md:mt-[3vw]'/>
            <Image src={"/img/storeDetails5.png"} width={1000} height={1000} alt="store details" className='mt-[10vw] md:mt-[3vw]'/>
            <Image src={"/img/storeDetails6.png"} width={1000} height={1000} alt="store details" className='mt-[10vw] md:mt-[3vw]'/>
            </article>
            <aside className='w-full md:max-w-[24vw] p-[2vw] mt-[10vw] md:mt-[2vw] border-[1px] border-[525252] rounded-lg md:ml-[2vw]'>
                <h1 className='text-[5.5vw] md:text-[1.5vw] text-[#171717] font-semibold'>Features</h1>
                {features?.map((item, index)=> (
            <section key={index} className='flex items-center mt-[5vw] md:mt-[1vw]'>
                <CheckCircleOutlineIcon className='text-[#FF387A] text-[4.3vw] md:text-[1.3vw]' />
                <p className=' text-[4vw] md:text-[1vw] font-medium text-[#171717] ml-[0.5vw]'>{item}</p>
            </section>
            ))}
            <footer className='w-full p-[0.6vw] mt-[10vw] md:mt-[2vw] flex items-center rounded-md border-[1px] border-[#D4D4D4]'>
                <Image src={"/img/people.png"} width={100} height={100} className='' />
                <p className='text-[#171717] ml-[0.5vw] text-[4vw] md:text-[1vw]'>125 Sales</p>
            </footer>
            </aside>
        </section>
        <section className='w-full flex flex-col items-start max-w-[90vw] mx-auto my-[10vw] md:mt-[2vw]'>
            <h1 className='text-[5vw] md:text-[2vw] text-[#171717] font-semibold'>Related Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[2vw] w-full">
                {singlePack?.slice(0, 3)?.map((item, index) => (
                    <Pack key={index} {...item} />
                ))}
            </div>
        </section>
    </main>
  )
}

export default StoreDetails