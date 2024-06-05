import React from 'react'
import SubscriptionCard from '../../Cards/SubscriptionCard'
import { subscriptionPlans } from '@/data/data'

const SubscriptionPlains = () => {
  return (
    <main className='flex flex-col items-center justify-center p-[2vw]'>
        <h1 className='pt-[3vw] text-[5.5vw] md:text-[2.5vw] font-medium text-[#171717]'>All-access pass</h1>
        <p className='text-[4vw] md:text-[1vw] text-[#525252] font-medium mt-[0.7vw] w-full max-w-[80vw] md:max-w-[31vw] text-center'>Hear from our satisfied clients and learn how we've helped them take their businesses to new heights.</p>
        <section className='w-full max-w-[80vw] mx-auto mt-[3vw] grid grid-cols-1 md:grid-cols-3 gap-[10vw] md:gap-[2vw] items-center'>
            {subscriptionPlans?.map((plan, index) => (
              <SubscriptionCard key={index} {...plan} />
            ))}
        </section>
        <button className="bg-[#FFFF] mt-[3vw] border-[1px] border-[#FF387A] font-medium hover:font-medium text-[4vw] md:text-[1vw] hover:text-white hover:shadow-md hover:bg-[#ff387af6] text-[#FF387A] p-[2.5vw] md:p-[0.9vw] rounded-md w-full max-w-[30vw] md:max-w-[10vw] text-center">Play Video</button>
    </main>
  )
}

export default SubscriptionPlains