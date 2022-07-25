import AddTask from '../Components/AddTask'
import Filter from '../Components/Filter'

import Column from '../Components/Column'

const TaskBoard = () => {

  



  return (
    <div>
      <AddTask />
      <Filter/>
      <div className='w-full flex justify-between gap-2'>
       <Column Status={"Todo"}/>
       <Column Status={"In-Progress"}/>
       <Column Status={"Completed"}/>
       
       
      </div>
    </div>
  )
}

export default TaskBoard
