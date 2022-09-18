import { CircularProgress } from "@mui/material";
import React from "react";
import {Route,Routes} from "react-router-dom"
import {TaskBoard} from "./Pages/TaskBoard"
const Navbar =React.lazy(()=>import("./Components/Navbar"))
const Alert=React.lazy(()=>import("./Components/Alert"))
function App() {

 
  return (
     <div >
     <React.Suspense fallback={<div className="w-screen h-screen flex justify-center items-center"><CircularProgress size={300}/></div>}>
     <Navbar/>
  
     <Routes>
      <Route path="/" element={<TaskBoard/>}/>
      <Route path="/board" element={<TaskBoard/>}/>
     < Route path='*' exact={true} element={<TaskBoard/>} />

     </Routes>
      <Alert/></React.Suspense>

     
    </div>
  );
}

export default App;
