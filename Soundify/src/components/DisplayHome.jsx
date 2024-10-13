import React from 'react'
import Navbar from './Navbar'
import AlbumItems from './AlbumItems'
import { albumsData, songsData} from '../assets/assets'
import { assets } from '../assets/assets'
import SongItems from './SongItems'





function DisplayHome() {
    console.log(albumsData,songsData)

    // const image =albumsData.map((item)=>{
    //    <AlbumItems 
    //     key={item.id} 
    //     id={item.id}
    //     name={item.name} 
    //     image={item.image} 
    //     desc={item.desc} 
    //    />

  return (
    
    <>
    <Navbar/>
    <div className='mb-4'>
        <h1>Hello</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item)=>(<AlbumItems  key={item.id}  id={item.id} name={item.name}  image={item.image}  desc={item.desc} 
        />))}
    </div>
    </div>
    <div className='mb-4'>
        <h1>Today's is bigest hits</h1>
        <div className='flex overflow-auto'>
            {songsData.map((song)=>{return(<SongItems key={song.id} id={song.id} name={song.name} image={song.image} desc={song.desc}/>)})}
        </div>
    </div>
    </>

  )
}

export default DisplayHome