import React from 'react'

const Filter = () => {
  return (
    <div className='w-full py-2 flex justify-around'>
        <input type="text" name="" id="search" placeholder='search for a task' />
        <select name="" id="status">
            <option value="Todo">Todo</option>
            <option value="assignee">Assignee</option>
        </select>
    </div>
  )
}

export default Filter