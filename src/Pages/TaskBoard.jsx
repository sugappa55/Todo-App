import AddTask from '../Components/AddTask'
import Filter from '../Components/Filter'

import Column from '../Components/Column'

export const TaskBoard = () => {

  



  return (
    <div>
      <AddTask />
      <Filter/>
      <div className='w-full lg:flex md:grid md:grid-cols-2 justify-between gap-2 '>
     
       
       {["Todo","In-Progress","Completed"].map(state=>
       <div key={state} className='m-4 md:m-2 lg:m-1 flex-1'><Column Status={state}/></div>
       )}
      </div>
    </div>
  )
}


