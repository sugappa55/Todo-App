import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Todo } from "../Context/TodoContext";

export default function CustomizedSnackbars() {
  const { alert, setAlert } = React.useContext(Todo);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ ...alert, open: false });
  };

  return (
    <div className="w-screen flex justify-center  ">
      <Snackbar open={alert.open} autoHideDuration={3000} onClose={handleClose}>
        <MuiAlert
          onClose={handleClose}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
