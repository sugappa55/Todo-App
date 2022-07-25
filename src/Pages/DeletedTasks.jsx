import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DeletedTodos } from '../Helpers/endpoints'

const DeletedTasks = () => {

  const [deleted,setDeleted]=useState([])
  useEffect(()=>{
    getDeletedTodos()
  },[])

  const getDeletedTodos=()=>{
    axios.get(DeletedTodos).then(({data})=>setDeleted(data))
  }
  return (
    <div>
      <h1 className='text-2xl font-bold text-center py-2'>Deleted Tasks</h1>
    { deleted?.map((e,i)=>(
      <div key={e.id} className="w-screen p-2 border flex justify-between">
        <p>{i+1}</p>
        <p>{e.task}</p>
        <p>{e.assignee}</p>
        <p>{e.status}</p>
        <p>{e.priority}</p>
        <p>{e.days} {e.days<=1?"day":"days"}{"  "}{e.hours}{e.hours<=1?"hour":"hours"}</p>
      </div>
    ))}
    </div>
  )
}

export default DeletedTasks