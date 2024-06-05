import { bundleData } from '@/data/data'
import React from 'react'
import BundleCard from '../../Cards/BundleCard'

const Bundles = () => {
  return (
    <section className="w-full max-w-[80vw] mx-auto mt-[2vw] py-[6vw] md:py-[2vw] bg-[#F8F8F8]">
    <h1 className="text-[5.5vw] md:text-[2.5vw] text-[#171717] font-semibold">Get Bundles</h1>
    <p className="text-[#B0B0B0] text-[4vw] md:text-[1vw] mt-[0.5vw]">Unlimited Packs Get Every Pack We Have + Every Future Pack!</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[10vw] md:gap-[2vw] mt-[2vw]">
        {bundleData.map((bundle, index) => (
            <BundleCard key={index} {...bundle} />
        ))}
    </div>
    
  </section>
  )
}

export default Bundles