import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-gray-700 text-white flex justify-between items-center'>
        <Link to="/" className='m-auto text-xl font-bold'>Task Board</Link>
      
    </div>
  )
}

export default Navbar
