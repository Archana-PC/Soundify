import React from 'react'

const AlbumItems = ({id,name,image,desc}) => (
 <div className='min-w-[180px] px-2 py-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
     <img className="rounded" src={image} alt=''/>
     <p className='font-bold mt-2 mb-1'>{name}</p>
     <p className='text-slate-200 text-sm'>{desc}</p>
 </div>
 )


export default AlbumItems