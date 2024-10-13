import React from 'react'
import { assets } from '../assets/assets'

function Sidebar() {
  return (
  <div className='w-[20%] h-full p-2 flex-col text-white hidden lg:flex'>
    <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
      <div className='flex items-center gap-3 pl-8 cursor-pointer'>
        <img className='w-6'src={assets.home_icon} alt=""/>
        <p className='font-bold'>Home</p>
      </div>
      <div className='flex items-center gap-3 pl-8 cursor-pointer'>
        <img className='w-6'src={assets.search_icon} alt=""/>
        <p className='font-bold'>Search</p>
      </div>
    </div>
    <div className='bg-[#121212] h-[80%] rounded'>
         <div className='p-4 flex items-between justify-between'>
            <div className='flex items-center gap-3'>
              <img className='w-8' src={assets.stack_icon} alt=''/>
              <p className='font-semibold'>Your Library</p>
            </div>
            <div className='flex items-end gap-3'>
               <img className="w-5" src={assets.arrow_icon} alt=''/>
               <img className="w-5" src={assets.plus_icon} alt=''/>
            </div>
         </div>
         <div className='p-4 bg-[#242424] m-2 flex flex-col rounded font-semibold items-start justify-between'>
         <h1>create your own Library</h1>
         <p className='font-light'>It's easy we will help you</p>
         <button className='bg-white text-black text-[12px] px-4 py-1.5 rounded-full '>Create Playlist</button>
         </div>
         <div className='p-4 bg-[#242424] m-2 flex flex-col rounded font-semibold items-start justify-between mt-4'>
         <h1>Let's find some Podcast to Follow</h1>
         <p className='font-light'>We will keep you in new Podcast</p>
         <button className='bg-white text-black text-[12px] px-4 py-1.5 rounded-full'>Browse Podcast</button>
         </div>
    </div>
  </div>
  )
}

export default Sidebar