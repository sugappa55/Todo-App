import { CircularProgress } from '@mui/material'
import React, { useContext } from 'react'
import  { Todo } from '../Context/TodoContext'
import Delete from './Delete'
import Update from './Update'

const Column = ({Status}) => {
  const {updateTodo}=useContext(Todo)
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    let id=ev.target.id;

    if(!data||typeof(id)===Number||id==="")return
    console.log(data);
    console.log(id);
    updateTodo(data,{status:ev.target.id})
    
  }

    const {filtered,isLoading}=useContext(Todo)
  return (
    <div className='text-center px-2  border lg:h-screen md:h-[500px] m-auto' id={Status} onDragOver={(e)=>allowDrop(e)} onDrop={(e)=>drop(e)}>
    <p className=' py-2 mx-[-.5rem]  bg-green-500'>{Status}</p>
    {
      !isLoading?(filtered?.filter(e=>e.status===Status).map(e=>(
        <div key={e.id} className="flex w-full justify-between py-2 gap-2 my-2 hover:border hover:bg-gray-600 hover:text-white md:cursor-grab" draggable id={e.id} onDragStart={(e)=>drag(e)}>
        <p className='flex-1'>{e.task}</p>
        <div className='flex px-2 gap-4'>
        <Update elem={e}/>       
             <Delete todo={e}/>  
        </div>
                 </div> 
      ))):<div className='w-full h-full flex justify-center items-center'><CircularProgress color='success' size={100}/></div>
    }

  </div>
  )
}

export default Column