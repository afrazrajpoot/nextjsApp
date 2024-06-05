import Image from 'next/image'
import React from 'react'

const SubscriptionPass = () => {
  return (
    <main style={{ backgroundImage: "url('/img/image_bg.png')"}}  className='w-full bg-[#FF387A] md:h-[25vw] p-[2vw] rounded-[2vw] md:rounded-[0.6vw] shadow-lg flex flex-col md:flex-row md:items-center justify-between'>
    <section className='p-[2vw]'>
        <aside className='flex items-center'>
            <Image src={"/img/adobe_ae.png"} height={50} alt="logo" width={50} className='cursor-pointer'  />
            <Image src={"/img/adobe_pr.png"} height={50} alt="logo" width={50} className='cursor-pointer' />
        </aside>
      <h1 className='text-[5.5vw] md:text-[2.5vw] text-[#fff] font-bold'>Motionduck All Access <br /> Pass Subscription</h1>
      <p className='text-[4vw] md:text-[1vw] text-[#fff] mt-[1vw]'>Unlimited Packs Get Every Pack We Have + Every Future Pack!</p>
      <button className="bg-[#171717] mt-[3vw] md:mt-[1vw] border-[1px] border-[#171717] hover:font-medium text-[4vw] md:text-[1vw] hover:shadow-md hover:bg-[#111111] text-[#fff] p-[2.5vw] md:p-[0.9vw] rounded-md w-full max-w-[30vw] md:max-w-[10vw] text-center">Get Access</button>
    </section>
    <section className='my-[1.5vw]'>
      <Image src={"/img/items.png"} height={100} width={400} alt="motionDuck" className='rounded-t-[0.6vw]' />
    </section>
  </main>
  )
}

export default SubscriptionPass