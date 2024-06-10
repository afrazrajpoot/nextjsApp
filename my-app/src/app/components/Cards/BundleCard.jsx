import Image from 'next/image'
import React from 'react'

const BundleCard = ({discountedPrice, actualPrice, title, template, saveInfo, image1, image2, bgColor}) => {
  return (
    <main style={{backgroundColor: bgColor}} className={`w-full lg:max-w-[25vw] z-40 rounded-xl lg:rounded-t-[1vw] relative`}>
       <picture className='w-full'>
       <img src={image1} alt='bundle'className='z-20 w-full h-[50vw] sm:h-[25vw] lg:h-[17vw] rounded-t-[1vw] opacity-10'/>
       </picture>
        <section className={`w-full absolute top-0 left-0 p-[2vw]`}>
            <nav className='flex items-center justify-between'>
        <aside className='flex items-center'>
            <Image src={"/img/adobe_ae.png"} height={50} alt="logo" width={50} className='cursor-pointer'  />
            <Image src={"/img/adobe_pr.png"} height={50} alt="logo" width={50} className='cursor-pointer' />
        </aside>    
        <p className='flex items-center'>
                <span className='text-[#ffff] font-semibold text-[4.3vw] sm:text-[2.3vw] lg:text-[1.3vw]'>${discountedPrice}</span>
                <strike className={`text-[#fff] ml-[0.6vw] font-semibold  text-[4vw] sm:text-[2vw] lg:text-[1vw]`}>${actualPrice}</strike>
            </p>
            </nav>
            <p className='text-[#fff] mt-[4vw] md:mt-[1vw] leading-[5vw] md:leading-[2.5vw] font-semibold text-[5vw] sm:text-[2.5vw] lg:text-[2vw]'>{title}</p>
            <h3 className='text-[#fff] mt-[4vw] md:mt-[1vw] font-medium text-[4.2vw] sm:text-[2vw] lg:text-[1.2vw]'>{saveInfo}</h3>
        </section>
        <picture className='w-full'>
        <img src={image2} alt='bundle' className='w-full h-[25vw] sm:h-[15vw] lg:h-[10vw] rounded-b-[1vw] object-cover z-20' />
        </picture>
        <section className='w-full flex justify-between items-center absolute bottom-2 p-[2vw]'>
            <p className='text-[#fff] text-[4vw] sm:text-[2.3vw] lg:text-[1.3vw] font-semibold'>{template}</p>
            <button className='text-[#fff] border-[2px] hover:bg-[#171717] hover:border-[#171717] font-semibold border-[#fff] text-[4vw] sm:text-[2vw] lg:text-[1vw] p-[2.5vw] md:p-[1vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[9vw] text-center'>View Here</button>
        </section>
    </main>
  )
}

export default BundleCard