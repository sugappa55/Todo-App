import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { Todo } from '../Context/TodoContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function AddTask() {
  const [open, setOpen] = React.useState(false);
  const {addTodo} =React.useContext(Todo)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [todo,setTodo]=React.useState({
    task:"",
    assignee:"",
    days:"",
    hours:"",
    status:"Todo",
    priority:"P0"
  })


const handleSubmit=(e)=>{
  e.preventDefault()
  addTodo(todo)
handleClose()
}

const handleChange=(e)=>{
  const {id,value}=e.target
  setTodo({...todo,[id]:value})
}

  return (
    <>
      <div className='w-full flex justify-center'>
      <button onClick={handleOpen} className="px-6 py-2 border rounded-lg hover:bg-gray-600 bg-blue-600 text-white my-2">Create Task </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <form onSubmit={(e)=>{
            handleSubmit(e)
          }}>
              <div className='flex w-full  border py-2'>         
                 <label htmlFor="task">Task Name:</label><input value={todo.task} onChange={(e)=>handleChange(e)} required type="text"  className='flex-1' id="task" placeholder='Enter task name'/>
</div>


<div className='flex w-full  border py-2'>         
              <label htmlFor="priority">Set Priority:</label>
               <select required id="priority" value={todo.priority} onChange={(e)=>handleChange(e)} className='flex-1'>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
              </select><br />
</div>

<div className='flex w-full  border py-2'>         
            <label htmlFor="assignee">Assignee : </label><input type="text" value={todo.assignee} required placeholder='Enter Assignee' id="assignee" onChange={(e)=>handleChange(e)}/>
</div>


<div className='flex w-full   py-2'>         
            <label htmlFor="Story points">Story Points : </label> <input type="number" value={todo.days}required min={0} className="w-36 border" id="days" placeholder='enter no of days' onChange={(e)=>handleChange(e)} />
            <input type="number" className="w-32 border" min={0} max={23} required value={todo.hours} placeholder='no of hours' id="hours"  onChange={(e)=>handleChange(e)} />
</div>


<div className='w-full border py-2 flex '> 

          <label htmlFor="status">Status:</label>  <select value={todo.status}required className='flex-1' id="status" onChange={(e)=>handleChange(e)}>
            <option value="Todo">Todo</option>
            <option value="In-Progress">In-Progress</option>
            <option value="Completed">Completed</option>
          </select>
</div>
<div className='w-full pt-2 justify-around flex '>
<button className="border px-3 py-1transition-all ease-in delay-200   bg-blue-600 rounded-lg hover:bg-gray-600 cursor-pointer " onClick={()=>handleClose()} >Close</button>
<input className="border px-3 py-1 transition-all ease-in delay-200  bg-blue-600 rounded-lg hover:bg-gray-600 cursor-pointer " type="submit" value="Add Task"/>
</div>
          </form>
        </Box>
      </Modal>
    </>
  );
}
