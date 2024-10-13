import React from 'react'
import ReactDom from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'


function Display() {
  return (
    <div className='w-[100%] mt-2 bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
           <Route path='/' element={<DisplayHome/>}/>
      </Routes>
    </div>
  )
}

export default Display