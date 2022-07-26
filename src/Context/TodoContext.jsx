import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { GetTodos } from '../Helpers/endpoints'

export const Todo=createContext()

const TodoContext = ({children}) => {
    const [todos,setTodos]=useState([])
    const [filtered,setFiltered]=useState([])
    const [alert,setAlert]=useState({
      open:false,
      message:"",
      severity:"success"
    })

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
      try {
        axios.post(GetTodos,todo).then(()=>getTodos())
        setAlert({
          ...alert,
          severity:"success",
          open:true,
          message:`${todo.task} added`
        })
        
      } catch (e) {
        setAlert({
          ...alert,
          severity:"error",
          open:true,
          message:e.message
        })
      }
    }

    const updateTodo=(id,body)=>{
      try {
        axios.patch(`${GetTodos}/${id}`,body).then(()=>getTodos())
        setAlert({
          ...alert,
          severity:"success",
          open:true,
          message:`${body.task?body.task:"Task"} updated`
        })
      } catch (e) {
        setAlert({
          ...alert,
          severity:"error",
          open:true,
          message:e.message
        })
      }
    }

    const deleteTodo=(id)=>{
      try {
        axios.delete(`${GetTodos}/${id}`).then(()=>getTodos())
        setAlert({
          ...alert,
          severity:"success",
          open:true,
          message:"Task deleted"
        })
      } catch (e) {
        setAlert({
          ...alert,
          severity:"error",
          open:true,
          message:e.message
        })
      }
    }
    


  return (
    <Todo.Provider value={{todos,getTodos,addTodo,updateTodo,deleteTodo,filtered,setFiltered,alert,setAlert}}>{children}</Todo.Provider>
  )
}

export default TodoContext