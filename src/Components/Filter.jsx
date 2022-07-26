import React from 'react'
import {useContext} from "react"
import {Todo} from "../Context/TodoContext"

const Filter = () => {

  const {setFiltered,todos} =useContext(Todo)
  
  const handleChange=(e)=>{
    const {value,id}=e.target;
      setFiltered([...todos.filter(e=>e[id].toLowerCase().includes(value.toLowerCase()))])

  }
  return (
    <div className='w-full py-2 flex  flex-wrap gap-y-2 justify-around '>
        <input onChange={(e)=>handleChange(e)} className="px-3 border  py-2" type="text" name="" id="task" placeholder='Search for a task' />
        <input onChange={(e)=>handleChange(e)}className="px-3  border py-2" type="text" placeholder='Filter by assignee ' id="assignee"/>
        <button className="bg-blue-600 rounded-lg hover:bg-gray-600 px-4 py-2" onClick={()=>setFiltered(todos)}>Clear  Filters</button>

    </div>
  )
}

export default Filter