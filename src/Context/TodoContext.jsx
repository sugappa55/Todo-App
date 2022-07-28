import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { GetTodos } from '../Helpers/endpoints'
import {useQuery} from "react-query"

export const Todo=createContext()

const TodoContext = ({children}) => {
    // const [todos,setTodos]=useState([])
    const [alert,setAlert]=useState({
      open:false,
      message:"",
      severity:"success"
    })
    // useEffect(()=>{
      //   getTodos()
      // },[])
      const getTodos=()=>{
        try {
          return axios.get(GetTodos).then((res)=>{return res.data })
        } catch (e) {
          console.log(e.message);
        }
      }
      const {isLoading,data,refetch}=useQuery(["todos"],getTodos,{enabled:true})
      const [filtered,setFiltered]=useState([])
     useEffect(()=>{ if(!isLoading)setFiltered(data)},[isLoading,data])
     

    const addTodo=(todo)=>{
      try {
        axios.post(GetTodos,todo).then(()=>refetch())
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
        axios.patch(`${GetTodos}/${id}`,body).then(()=>refetch())
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
        axios.delete(`${GetTodos}/${id}`).then(()=>refetch())
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
    <Todo.Provider value={{todos:data,getTodos,addTodo,updateTodo,deleteTodo,filtered,setFiltered,alert,setAlert,isLoading}}>{children}</Todo.Provider>
  )
}

export default TodoContext