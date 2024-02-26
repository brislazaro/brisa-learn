import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { FC, useState } from "react";
import { Task } from "../List/List";
import toast from "react-hot-toast";
import React from "react";
import { Button, DialogActions, TextField } from "@mui/material";
import "./TodoCard.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// TODO: Cambiar modal a Dialog

type TodoCardProps = {
  task: Task;
  onDelete: (taskName: string) => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  tasks: Task[];
};

const TodoCard: FC<TodoCardProps> = ({ task, onDelete, setTasks, tasks }) => {
  const [hecho, setHecho] = useState(false);
  const [newTaskText, setNewTaskText] = React.useState<string>(task.task);

  const onClickCheckBox = () => {
    setHecho(!hecho);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <li key={task.id} className="task-item">
      <Checkbox onClick={onClickCheckBox} checked={hecho} />

      <p onClick={handleOpen} className={` text ${hecho && "do"}`}>
        {task.task}
      </p>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Task"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="modal-form">
              <TextField
                disabled
                id="outlined-disabled"
                label="ID"
                defaultValue={task.id}
              />
              <TextField
                id="outlined-disabled"
                label="Task"
                defaultValue={task.task}
                value={newTaskText}
                onChange={(e) => {
                  setNewTaskText(e.target.value);
                }}
              />
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
          <Button
            onClick={() => {
              if (newTaskText !== task.task) {
                const newTasks = tasks.map((currTask) => {
                  if (currTask.id === task.id) {
                    return { ...task, task: newTaskText };
                  }

                  return currTask;
                });

                setTasks(newTasks);

                toast.success("Tarea Modificada");

                handleClose();
              }
            }}
          >
            Modificar
          </Button>
        </DialogActions>
      </Dialog>
      <IconButton
        onClick={() => {
          onDelete(task.task);
          toast.success("Tarea Eliminada!");
        }}
        aria-label="delete"
        sx={{ height: "40px", width: "40px" }}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
};
export default TodoCard;
