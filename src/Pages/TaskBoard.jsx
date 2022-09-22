import { CircularProgress } from "@mui/material";
import React from "react";
const Filter = React.lazy(() => import("../Components/Filter"));
const AddTask = React.lazy(() => import("../Components/AddTask"));

const Column = React.lazy(() => import("../Components/Column"));
const TaskBoard = () => {
  return (
    <React.Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <CircularProgress size={300} />
        </div>
      }
    >
      <div>
        <AddTask />
        <Filter />
        <div className="w-full lg:flex md:grid md:grid-cols-2 justify-between gap-2 ">
          {["Todo", "In-Progress", "Completed"].map((state) => (
            <div key={state} className="m-4 md:m-2 lg:m-1 flex-1">
              <Column Status={state} />
            </div>
          ))}
        </div>
      </div>
    </React.Suspense>
  );
};

export default React.memo(TaskBoard);
