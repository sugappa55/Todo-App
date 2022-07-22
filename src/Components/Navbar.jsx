import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-gray-700 text-white flex justify-between items-center'>
        <Link to="/" className='ml-4 '>Task Board</Link>
        <Link to="/deletedtasks" className='mr-4 '>Deleted Tasks</Link>
      
    </div>
  )
}

export default Navbar
