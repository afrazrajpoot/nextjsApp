import Image from 'next/image'
import React from 'react'

const Pack = ({discountedPrice, actualPrice, image, title}) => {
  return (
    <main className='relative w-full md:max-w-[25vw] m-[1vw]'>
        <img src={image} alt='pack' className='w-full object-cover md:h-[15vw] rounded-md' />
        <p className='text-[3.9vw] md:text-[0.9vw] mt-[2.7vw] md:mt-[0.7vw] font-medium'>{title}</p>
        <div className="flex items-center mt-[1vw] justify-between">
            <p className='flex items-center'>
                <span className='text-[#FF689A] text-[3.9vw] md:text-[0.9vw]'>${discountedPrice}</span>
                <strike className='text-[#171717] ml-[0.6vw] text-[3.8vw] md:text-[0.8vw]'>${actualPrice}</strike>
            </p>
            <Image src={"/img/people.png"} alt='people' height={60} width={60} className='cursor-pointer' />
        </div>
    </main>
  )
}

export default Pack