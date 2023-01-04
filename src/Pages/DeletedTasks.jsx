import axios from "axios";
import { memo, useEffect, useState } from "react";
import { DeletedTodos } from "../Helpers/endpoints";

const DeletedTasks = () => {
  const [deleted, setDeleted] = useState([]);

  const getDeletedTodos = () => {
    axios.get(DeletedTodos).then(({ data }) => setDeleted(data));
  };
  useEffect(() => {
    getDeletedTodos();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-2">Deleted Tasks</h1>
      {deleted?.map((e, i) => (
        <div key={e.id} className="w-screen p-2 border flex justify-between">
          <p>{i + 1}</p>
          <p>{e.task}</p>
          <p>{e.assignee}</p>
          <p>{e.status}</p>
          <p>{e.priority}</p>
          <p>
            {e.days} days{"  "}
            {e.hours}hours
          </p>
        </div>
      ))}
    </div>
  );
};

export default memo(DeletedTasks);
