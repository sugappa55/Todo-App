import DeletedTasks from "./Pages/DeletedTasks";
import TaskBoard from "./Pages/TaskBoard";
import {Route,Routes} from "react-router-dom"
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div >
     <Navbar/>
     <Routes>
      <Route path="/" element={<TaskBoard/>}/>
      <Route path="/board" element={<TaskBoard/>}/>
      <Route path="/deletedtasks" element={<DeletedTasks/>}/>
     </Routes>
    </div>
  );
}

export default App;
