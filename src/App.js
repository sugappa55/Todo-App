import DeletedTasks from "./Pages/DeletedTasks";
import TaskBoard from "./Pages/TaskBoard";
import {Route,Routes} from "react-router-dom"
import Navbar from "./Components/Navbar";
import ActionAlerts from "./Components/Alert";

function App() {
  return (
     <div >
     <Navbar/>
     <Routes>
      <Route path="/" element={<TaskBoard/>}/>
      <Route path="/board" element={<TaskBoard/>}/>
      <Route path="/deletedtasks" element={<DeletedTasks/>}/>
     < Route path='*' exact={true} element={<TaskBoard/>} />
      

     </Routes>
     <ActionAlerts/>
    </div>
  );
}

export default App;
