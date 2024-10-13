import React from 'react'
import { assets } from '../assets/assets'

function Navbar() {
  return (
    <>
    <div className=' w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center mt-2 ml-2 gap-4'>
           <img className="w-8 bg-black rounded-2xl p-2 cursor-pointer" src={assets.arrow_left} alt=''/>
           <img className="w-8 bg-black rounded-2xl p-2 cursor-pointer" src={assets.arrow_right} alt=''/>
        </div>
        <div className='flex items-center mt-2 gap-4'>
            <p className='bg-white text-black text-[15px] rounded-full px-4 hidden md:block cursor-pointer'>Explore Premium</p>
            <p className='bg-black text-white rounded-2xl px-4 cursor-pointer text-[15px]'>Install App</p>
            <p className='bg-purple-400 text-black rounded-full px-2 cursor-pointer flex justify-center items-center w-7 h-7'>G</p>
        </div>
    </div>
    <div className='flex items-start mt-2 gap-4'>
     <p className='bg-white text-black rounded-2xl px-4 py-1 cursor-pointer'>All</p>
     <p className='bg-black text-white rounded-2xl px-4 py-1 cursor-pointer'>Music </p>
     <p className='bg-black text-white rounded-2xl px-4 py-1 cursor-pointer'>Podcasts</p>
    </div>
 </>
  )
}

export default Navbar