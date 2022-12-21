import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Yoshi</h1>
        </div>
    </div>
  )
}

