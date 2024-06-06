import Image from 'next/image'
import React from 'react'
import Categories from '../components/pagesComponents/landingpage/Categories'
import SubscriptionPlains from '../components/pagesComponents/landingpage/SubscriptionPlains'
import { profileData } from '@/data/data'
import Profile from '../components/Cards/Profile'
import Questions from '../components/pagesComponents/subscriptionPage/Questions'

const Subscription = () => {
  return (
    <>
    <main style={{ backgroundImage: "url('/img/hero1.png')"}} className="w-full bg-cover bg-center">
        <article className='flex w-full flex-col justify-center py-[6vw] items-center'>
            <h1 className='gradient-text text-[8vw] md:text-[4vw] font-bold'>Subscription</h1>
            <Image src={"/img/subscription.png"} className='mt-[3vw]' width={1100} height={1000} />
            <footer className='flex flex-col md:flex-row items-start justify-between p-[2vw] bg-[#ffff] w-full max-w-[80vw] rounded-lg'>
                <section className='w-full md:max-w-[35vw]'>
                    <h2 className='text-[4.3vw] md:text-[1.3vw] text-[#171717] text-center font-medium'>What is MotionDuck?</h2>
                    <img src={"/img/card1.png"} className='mt-[3vw] rounded-lg w-full h-[30vw] md:h-[20vw]'/>
                </section>
                <section className='w-full t-[4vw] md:mt-0 md:max-w-[35vw]'>
                    <h2 className='text-[4.3vw] md:text-[1.3vw] text-[#171717] text-center font-medium'>Subscription Walkthrough</h2>
                    <img src={"/img/card2.png"} className='mt-[3vw] rounded-lg w-full h-[30vw] md:h-[20vw]' />
                </section>
            </footer>
        </article>
    </main>
    <section className="w-full mt-[10vw] md:mt-[2vw] bg-[#F8F8F8]">
        <Categories />
      </section>
    <section className="w-full mt-[10vw] md:mt-[2vw] bg-[#F8F8F8]">
        <SubscriptionPlains />
      </section>
      <section className="w-full mt-[10vw] md:mt-[2vw] bg-[#171717]">
        <Questions />
      </section>
    <section className="w-full py-[6vw] md:py-[2vw] bg-[#F6F6F6]">
        <article className="w-full flex flex-col md:flex-row justify-between mt-[3vw] max-w-[75vw] mx-auto">
          <h1 className="text-[5.5vw] md:text-[2vw] leading-[6vw] md:leading-[3vw] font-semibold text-[#171717]">Discover What Our <br /> Community Is Saying</h1>
          <p className="text-[#525252] mt-[3vw] md:mt-0 text-[4vw] md:text-[1vw] w-full max-w-[80vw] md:max-w-[35vw]">
          At Sonduck, our vibrant community of learners and creators is at the heart of what we do.
          Hear directly from those who have experienced the transformative journey of learning and creating on our platform.
          Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </article>
        <figure className="w-full  max-w-[80vw] mx-auto my-[5vw] grid grid-cols-1 md:grid-cols-3 gap-[10vw] md:gap-[2vw] place-items-center place-content-center">
          {profileData?.map((user, index)=> (
            <Profile key={index} {...user} />
          ))}
        </figure>
      </section>
    </>
  )
}

export default Subscription