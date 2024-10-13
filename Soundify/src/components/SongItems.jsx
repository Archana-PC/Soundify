import React from 'react'
import { assets } from '../assets/assets'

function SongItems({id,name,image,desc}) {
  return (
    <div className='min-w-[180px] px-2 py-3 rounded hover:bg-[#ffffff26] cursor-pointer'>
        <div>
            <p className='font-bold text-white'>{name}</p>
            <img className='rounded' src={image} alt=''/>
            <p className='text-slate-50 text-sm'>{desc}</p>
        </div>
    </div>
  )
}

export default SongItems