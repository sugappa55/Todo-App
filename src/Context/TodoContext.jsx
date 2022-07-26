import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { GetTodos } from '../Helpers/endpoints'

export const Todo=createContext()

const TodoContext = ({children}) => {
    const [todos,setTodos]=useState([])
    const [filtered,setFiltered]=useState([])

    useEffect(()=>{
      getTodos()
    },[])
    const getTodos=()=>{
      try {
        axios.get(GetTodos).then((res)=>{setTodos(res.data);setFiltered(res.data)})
      } catch (e) {
        console.log(e.message);
      }
    }

    const addTodo=(todo)=>{
      axios.post(GetTodos,todo).then(()=>getTodos()).catch((e)=>console.log(e.message))

    }

    const updateTodo=(id,body)=>{
      try {
        axios.patch(`${GetTodos}/${id}`,body).then(()=>getTodos())
      } catch (e) {
        console.log(e.message);
      }
    }

    const deleteTodo=(id)=>{
      try {
        axios.delete(`${GetTodos}/${id}`).then(()=>getTodos())
      } catch (e) {
        console.log(e.message);
      }
    }
    


  return (
    <Todo.Provider value={{todos,getTodos,addTodo,updateTodo,deleteTodo,filtered,setFiltered}}>{children}</Todo.Provider>
  )
}

export default TodoContext