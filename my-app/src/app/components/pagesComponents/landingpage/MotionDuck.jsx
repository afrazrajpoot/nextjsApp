import Image from 'next/image'
import React from 'react'

const MotionDuck = () => {
  return (
    <main className='w-full bg-[#ffff] relative sm:h-[20vw] lg:h-[16vw] p-[2vw] rounded-[2vw] md:rounded-[0.6vw] shadow-lg flex flex-col md:flex-row items-center justify-between'>
      <img src="/img/duck_bg.png" alt='duck_bg' className='absolute top-0 left-0 w-full h-full object-cover' />
      <section className='p-[2vw] z-30'>
        <h1 className='text-[5.5vw] md:text-[2.5vw] text-black font-bold'>What is MotionDucks</h1>
        <p className='text-[4vw] sm:text-[2vw] lg:text-[1vw] text-[#171717] mt-[1vw]'>25,5000+ Assets</p>
        <button className="bg-[#FFFF] mt-[8vw] md:mt-[1vw] border-[1px] border-[#171717] hover:font-medium text-[4vw] sm:text-[2vw] lg:text-[1vw] hover:shadow-md hover:bg-[#fefefe] text-[#171717] p-[2vw] md:p-[0.9vw] rounded-md w-full max-w-[30vw] sm:max-w-[15vw] lg:max-w-[10vw] text-center">Play Video</button>
      </section>
      <section className='p-[2vw] w-full sm:max-w-[36vw] mt-[1vw] z-40'>
        <img src={"/img/video.png"} alt="motionDuck" className='rounded-xl sm:rounded-t-[0.6vw]' />
      </section>
    </main>
  )
}

export default MotionDuck