import "./List.css";

import Button from "@mui/material/Button";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import TodoCard from "../TodoCard/TodoCard";
import { Task } from "@mui/icons-material";
import { useState } from "react";

export type Task = {
  id: number;
  task: string;
};

function List() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      task: "Hacer el super",
    },
    {
      id: 2,
      task: "Lavar el coche",
    },
    {
      id: 3,
      task: "Jugar MK",
    },
  ]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const OnclickDelete = () => {
    const updatedTasks = tasks.filter(
      (task: { task: string }) => task.task !== "Hacer el super"
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <ul className="list-container">
        {tasks.map((task: Task) => (
          <TodoCard task={task} onDelete={OnclickDelete} />
        ))}
      </ul>

      <div className="button">
        <Button onClick={handleClickOpen} variant="contained">
          Add Reminder
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Add a new Reminder</DialogTitle>
          <DialogContent>
            <div className="dialog-content">
              {/* Ponerle name, cambiar el ID, y value */}
              <TextField
                id="outlined-basic"
                label="Task"
                variant="outlined"
                size="small"
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleClose} autoFocus>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
export default List;
