import * as React from 'react';
import Box from '@mui/material/Box';
import {AiFillDelete} from "react-icons/ai"
import Modal from '@mui/material/Modal';
import { Todo } from '../Context/TodoContext';
import axios from 'axios';
import { DeletedTodos } from '../Helpers/endpoints';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {md:500,sm:400},
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function Delete({todo}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {deleteTodo} =React.useContext(Todo)

  const handleDelete=()=>{
        deleteTodo(todo.id)
        axios.post(DeletedTodos,todo)
        handleClose()
  }

  return (
    <div>
        <AiFillDelete size={25} className="hover:cursor-pointer " onClick={()=>handleOpen()}/>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <div className='w-full text-center'>
         <p>Delete {todo.task}</p>
         <div className='w-full justify-around pt-4 flex '>
            <button className='border px-3 transition-all ease-in delay-200  py-1 bg-blue-600 rounded-lg hover:bg-gray-600 cursor-pointer'  onClick={()=>handleClose()}>Close</button>
            <button className='border px-3 transition-all ease-in delay-200  py-1 bg-blue-600 rounded-lg hover:bg-gray-600 cursor-pointer' onClick={()=>handleDelete()}>Delete</button>
         </div>
         </div>
        </Box>
      </Modal>
    </div>
  );
}
