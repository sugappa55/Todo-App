import AddTask from '../Components/AddTask'
import Filter from '../Components/Filter'

import Column from '../Components/Column'

const TaskBoard = () => {

  



  return (
    <div>
      <AddTask />
      <Filter/>
      <div className='w-full md:flex justify-between gap-2 flex-wrap'>
     
       
       {["Todo","In-Progress","Completed"].map(state=>
       <Column Status={state} key={state}/>)}
      </div>
    </div>
  )
}

export default TaskBoard
