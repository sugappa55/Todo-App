import React, { useContext } from 'react'
import AddTask from '../Components/AddTask'
import Filter from '../Components/Filter'
import Delete from '../Components/Delete'
import Update from '../Components/Update'
import { Todo } from '../Context/TodoContext'

const TaskBoard = () => {

  
 const {todos}=useContext(Todo)



  return (
    <div>
      <AddTask />
      <Filter/>
      <div className='w-full flex justify-between gap-2'>
        <div className=' flex-1 text-center pt-4 '>
          <p className=' py-2 border'>To do</p>
          {todos.filter(e=>e.status==="Todo").map(e=>(
            <div key={e.id} className="flex w-full justify-between py-2 gap-2">
            <p className='flex-1'>{e.task}</p>
            <Update elem={e}/>       
                 <Delete todo={e}/>           </div> 
          ))}

        </div>
        <div className=' flex-1 text-center pt-4'>
          <p className=' py-2 border'>In Progress</p>
          {todos.filter(e=>e.status==="In-Progress").map(e=>(
           <div key={e.id} className="flex w-full justify-between py-2 gap-2">
           <p className='flex-1'>{e.task}</p>
          <Update elem={e}/>
           
           <Delete todo={e}/>
          </div> 
          ))}

        </div>
        <div className=' flex-1 text-center pt-4'>
          <p className=' py-2 border'>Completed</p>
          {todos.filter(e=>e.status==="Completed").map(e=>(
            <div key={e.id} className="flex w-full justify-between py-2 gap-2">
              <p className='flex-1'>{e.task}</p>
              <Update elem={e}/>
              <Delete todo={e}/>             </div>       
                ))}

        </div>
      </div>
    </div>
  )
}

export default TaskBoard
