import React, { useContext } from 'react'
import { Todo } from '../Context/TodoContext'
import Delete from './Delete'
import Update from './Update'

const Column = ({Status}) => {

    const {filtered}=useContext(Todo)
  return (
    <div className=' flex-1 text-center  border'>
    <p className=' py-2 border bg-green-500'>{Status}</p>
    {filtered.filter(e=>e.status===Status).map(e=>(
      <div key={e.id} className="flex w-full justify-between py-2 gap-2">
      <p className='flex-1'>{e.task}</p>
      <div className='flex px-2 gap-4'>
      <Update elem={e}/>       
           <Delete todo={e}/>  
      </div>
               </div> 
    ))}

  </div>
  )
}

export default Column