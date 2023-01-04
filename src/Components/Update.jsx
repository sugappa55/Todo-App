import * as React from "react";
import Box from "@mui/material/Box";
import { AiFillEdit } from "react-icons/ai";
import Modal from "@mui/material/Modal";
import { Todo } from "../Context/TodoContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { md: 500, sm: 400 },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Update({ elem }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { updateTodo } = React.useContext(Todo);
  const [todo, setTodo] = React.useState({
    ...elem,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(elem.id, todo);

    handleClose();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setTodo({ ...todo, [id]: value });
  };

  return (
    <div>
      <button onClick={handleOpen}>
        <AiFillEdit size={25} />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="w-full text-center">
            <div>
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="flex w-full py-2">
                  <label htmlFor="task">Task Name:</label>
                  <input
                    value={todo.task}
                    onChange={(e) => handleChange(e)}
                    required
                    type="text"
                    className="flex-1 border ml-4 rounded-lg text-center"
                    id="task"
                    placeholder="Enter task name"
                  />
                </div>

                <div className="flex w-full py-2">
                  <label htmlFor="priority">Set Priority:</label>
                  <select
                    required
                    id="priority"
                    value={todo.priority}
                    onChange={(e) => handleChange(e)}
                    className="w-[50%] rounded-lg text-center mx-2"
                  >
                    <option value="P0">P0</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P3">P3</option>
                  </select>
                  <br />
                </div>

                <div className="flex w-full py-2">
                  <label htmlFor="assignee">Assignee : </label>
                  <input
                    type="text"
                    value={todo.assignee}
                    required
                    placeholder="Enter Assignee"
                    id="assignee"
                    className="border ml-4 rounded-lg text-center"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="flex w-full   py-2">
                  <label htmlFor="Story points">Story Points : </label>{" "}
                  <input
                    type="number"
                    value={todo.days}
                    required
                    min={0}
                    className="w-32 text-center border rounded-lg mx-1"
                    id="days"
                    placeholder="enter no of days"
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="number"
                    className="w-30 text-center border rounded-lg mx-1"
                    min={0}
                    max={23}
                    required
                    value={todo.hours}
                    placeholder="no of hours"
                    id="hours"
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="w-full  py-2 flex ">
                  <label htmlFor="status">Status:</label>{" "}
                  <select
                    value={todo.status}
                    required
                    className="w-[50%] rounded-lg text-center mx-2"
                    id="status"
                    onChange={(e) => handleChange(e)}
                  >
                    <option disabled={elem.status === "Todo"} value="Todo">
                      Todo
                    </option>
                    <option
                      disabled={elem.status === "In-Progress"}
                      value="In-Progress"
                    >
                      In-Progress
                    </option>
                    <option
                      disabled={elem.status === "Completed"}
                      value="Completed"
                    >
                      Completed
                    </option>
                  </select>
                </div>
                <div className="w-full pt-2 justify-around flex ">
                  <button
                    className="border transition-all ease-in-out delay-200   px-3 py-1 bg-blue-600 rounded-lg hover:bg-gray-600 cursor-pointer text-white"
                    onClick={() => handleClose()}
                  >
                    Close
                  </button>
                  <input
                    className="border  transition-all ease-in-out delay-200 px-3 py-1 bg-blue-600 rounded-lg hover:bg-gray-600 cursor-pointer text-white"
                    type="submit"
                    value="Update"
                  />
                </div>
              </form>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
