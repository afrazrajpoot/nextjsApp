import Image from 'next/image'
import React from 'react'

const MotionDuck = () => {
  return (
    <main className='w-full bg-[#ffff] md:h-[20vw] p-[2vw] rounded-[2vw] md:rounded-[0.6vw] shadow-lg flex flex-col md:flex-row items-center justify-between'>
      <section className='p-[2vw]'>
        <h1 className='text-[5.5vw] md:text-[2.5vw] text-black font-bold'>What is MotionDucks</h1>
        <p className='text-[4vw] md:text-[1vw] text-[#171717] mt-[1vw]'>25,5000+ Assets</p>
        <button className="bg-[#FFFF] mt-[8vw] md:mt-[1vw] border-[1px] border-[#171717] hover:font-medium text-[4vw] md:text-[1vw] hover:shadow-md hover:bg-[#fefefe] text-[#171717] p-[2vw] md:p-[0.9vw] rounded-md w-full max-w-[30vw] md:max-w-[10vw] text-center">Play Video</button>
      </section>
      <section className='p-[2vw] mt-[2.5vw]'>
        <Image src={"/img/video.png"} height={700} width={600} sizes="(max-width: 786px) 100vh, 80vh" alt="motionDuck" className='rounded-xl md:rounded-t-[0.6vw]' />
      </section>
    </main>
  )
}

export default MotionDuck