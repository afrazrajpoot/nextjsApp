'use client'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';

const SubscriptionCard = ({title, price, features}) => {
    const [monthlyPlan, setMonthlyPlan] = useState(true)
  return (
    <main className='bg-[#FFFFFF] shadow-md w-full md:max-w-[22vw] rounded-[5vw] md:rounded-[1vw] p-[3.5vw] md:p-[1.5vw]'>
        <p className=' text-[4vw] md:text-[1vw] font-medium text-[#FF387A]'>{title}</p>
        <div className="flex mt-[0.6vw] text-[#171717] items-center">
            <h1 className='text-[8.5vw] md:text-[2.5vw] font-semibold '>${price}</h1>
            <span className='text-[3.8vw] md:text-[0.8vw] font-medium'>/month</span>
        </div>
        <p className=' text-[4vw] md:text-[1vw] mt-[0.6vw] text-[#171717]'>For new creators building their list</p>
        <section className='w-full mt-[3vw] md:mt-[1vw] rounded-full md:max-w-[22vw] flex items-center p-[0.3vw] bg-[#F5F5F5]'>
            <button onClick={()=> setMonthlyPlan(true)} className={` text-[4vw] md:text-[1vw] ${monthlyPlan ? 'bg-[#ffff] text-[#FF387A]' : 'text-[#171717]'} p-[2vw] md:p-[0.2vw] mx-[0.5vw] w-full max-w-[35vw] md:max-w-[10vw] rounded-lg md:rounded-md`}>Monthly</button>
            <button onClick={()=> setMonthlyPlan(false)} className={` text-[4vw] md:text-[1vw] ${!monthlyPlan ? 'bg-[#ffff] text-[#FF387A]' : 'text-[#171717]'} p-[2vw] md:p-[0.2vw] mx-[0.5vw] w-full max-w-[35vw] md:max-w-[10vw] rounded-lg md:rounded-md`}>Yearly</button>
        </section>
        <article className='w-full mt-[3.5vw] md:mt-[1.5vw] border-t-[1px] border-gray-300'>
            {features && features?.map((item, index)=> (
            <section key={index} className='flex items-center mt-[5vw] md:mt-[1vw]'>
                <CheckCircleOutlineIcon className='text-[#FF387A] text-[4.3vw] md:text-[1.3vw]' />
                <p className=' text-[4vw] md:text-[1vw] font-medium text-[#171717] ml-[0.5vw]'>{item}</p>
            </section>
            ))}
            <button className='bg-[#FF387A]  text-[4vw] md:text-[1vw] mt-[6vw] md:mt-[2vw] hover:shadow-md hover:bg-[#ff387af1] text-[#fff] p-[2.5vw] md:p-[0.9vw] rounded-md w-full text-center'>Select Plan</button>
        </article>

    </main>
  )
}

export default SubscriptionCard