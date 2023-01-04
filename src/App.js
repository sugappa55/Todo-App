import { CircularProgress } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TaskBoard from "./Pages/TaskBoard";

const DeletedTasks = React.lazy(() => import("./Pages/DeletedTasks"));
const Alert = React.lazy(() => import("./Components/Alert"));
function App() {
  return (
    <div>
      <React.Suspense
        fallback={
          <div className="w-screen h-screen flex justify-center items-center">
            <CircularProgress size={300} />
          </div>
        }
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<TaskBoard />} />
          <Route path="/deleted" element={<DeletedTasks/>} />
          <Route path="/board" element={<TaskBoard />} />
          <Route path="*" exact={true} element={<TaskBoard />} />
        </Routes>
        <Alert />
      </React.Suspense>
    </div>
  );
}

export default App;
