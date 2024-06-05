import Image from 'next/image'
import React from 'react'

const BundleCard = ({discountedPrice, actualPrice, title, template, saveInfo, image1, image2}) => {
  return (
    <main className='w-full md:max-w-[40vw] rounded-md relative'>
        <Image src={image1} alt='bundle' width={500} height={300} className='z-50'/>
        <section className='w-full absolute top-0 left-0 p-[2vw]'>
            <nav className='flex items-center justify-between'>
        <aside className='flex items-center'>
            <Image src={"/img/adobe_ae.png"} height={50} alt="logo" width={50} className='cursor-pointer'  />
            <Image src={"/img/adobe_pr.png"} height={50} alt="logo" width={50} className='cursor-pointer' />
        </aside>
        <p className='flex items-center'>
                <span className='text-[#ffff] font-semibold text-[4.3vw] md:text-[1.3vw]'>${discountedPrice}</span>
                <strike className='text-[#fff] ml-[0.6vw] text-[4vw] md:text-[1vw]'>${actualPrice}</strike>
            </p>
            </nav>
            <p className='text-[#fff] mt-[4vw] md:mt-[1vw] leading-[5vw] md:leading-[2vw] font-semibold text-[5vw] md:text-[2vw]'>{title}</p>
            <h3 className='text-[#fff] text-[4.2vw] md:text-[1.2vw]'>{saveInfo}</h3>
        </section>
        <picture className='w-full'>
        <img src={image2} alt='bundle' className='w-full -mt-[1vw] h-[20vw] md:h-[9vw] rounded-md object-cover z-20' />
        </picture>
        <section className='w-full flex justify-between items-center absolute bottom-2 p-[2vw]'>
            <p className='text-[#fff] text-[4vw] md:text-[1vw] font-medium'>{template}</p>
            <button className='text-[#fff] border-[1px] border-[#fff] text-[4vw] md:text-[1vw] p-[2.5vw] md:p-[1vw] rounded-md w-full max-w-[30vw] md:max-w-[9vw] text-center'>View Here</button>
        </section>
    </main>
  )
}

export default BundleCard