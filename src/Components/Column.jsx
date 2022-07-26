import { CircularProgress } from '@mui/material'
import axios from 'axios'
import React, { useContext } from 'react'
import { Todo } from '../Context/TodoContext'
import { GetTodos } from '../Helpers/endpoints'
import Delete from './Delete'
import Update from './Update'

const Column = ({Status}) => {
  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(!data)return
    axios.patch(`${GetTodos}/${data}`,{status:ev.target.id})
    ev.target.appendChild(document.getElementById(data));
  }

    const {filtered}=useContext(Todo)
  return (
    <div className=' flex-1 text-center  border lg:h-screen md:h-[500px]' id={Status} onDragOver={(e)=>allowDrop(e)} onDrop={(e)=>drop(e)}>
    <p className=' py-2 border bg-green-500'>{Status}</p>
    {
      filtered.length?(filtered.filter(e=>e.status===Status).map(e=>(
        <div key={e.id} className="flex w-full justify-between py-2 gap-2 my-2 border md:cursor-grab" draggable id={e.id} onDragStart={(e)=>drag(e)}>
        <p className='flex-1'>{e.task}</p>
        <div className='flex px-2 gap-4'>
        <Update elem={e}/>       
             <Delete todo={e}/>  
        </div>
                 </div> 
      ))):<CircularProgress/>
    }

  </div>
  )
}

export default Column