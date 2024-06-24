import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import DeleteIcon from '@mui/icons-material/Delete';
import { useGlobalContext } from '@/context/globalState';

const ChechoutDrawer = ({cartedItems, closeDrawer, removeProduct}) => {
    const {addToCart} = useGlobalContext();
  return (
    <main className='bg-[#FFFFFF] p-[2vw] w-full max-w-[25vw]'>
        <nav className="flex items-center justify-between">
            <p className='text-[1vw] cursor-pointer text-[#171717]'>Cart <span className='bg-[#F5F5F5] text-[#171717] rounded-full text-center p-[0.5vw] ml-[0.6vw]'>{addToCart}</span></p>
            <HighlightOffIcon className='cursor-pointer text-[1.5vw]' onClick={closeDrawer} />
        </nav>
        <section className='w-full mt-[2vw]'>
            {cartedItems?.map((item, index) => (
            <aside className='w-full flex items-start pb-[0.7vw] border-b-[0.15vw] border-[#F5F5F5] ' key={index}>
                <img src={item?.images?.[0]?.src} alt={item?.name} className='w-full object-cover max-w-[6vw] h-[5vw] sm:h-[3vw] lg:h-[4vw] rounded-[1vw]' />
                <section className='ml-[1vw]'>
                    {/* toSubString(0, 10) */}
                    <h2 className='text-[1vw] font-medium text-[#171717]'>{item?.name?.slice(0, 30)}...</h2>
                    <div className="flex items-center justify-between">
                        <p className='text-[1vw]'>${item?.sale_price ? item?.sale_price : item?.regular_price}</p>
                        <DeleteIcon className='cursor-pointer text-[#F87171] text-[1vw]' onClick={() => removeProduct(item?.id)} />
                    </div>
                </section>
            </aside>
            ))}
        </section>
    </main>
  )
}

export default ChechoutDrawer