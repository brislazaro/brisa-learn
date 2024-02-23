import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { Dispatch, FC, SetStateAction } from "react";
import { Task } from "../List/List";
import toast from "react-hot-toast";

type FormularioProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  tasks: Task[];
  setTasks: Dispatch<React.SetStateAction<Task[]>>;
};

const Formulario: FC<FormularioProps> = ({
  open,
  setOpen,
  tasks,
  setTasks,
}) => {
  const [newTask, setNewTask] = React.useState<string>("");

  const handleClose = () => {
    setOpen(false);
  };

  const onClickAdd = () => {
    if (newTask !== "") {
      const newTaskObject: Task = {
        id: tasks.length + 1,
        task: newTask,
      };

      setTasks([...tasks, newTaskObject]);
      setNewTask("");
      toast.success("Tarea añadida!");
    } else {
      toast.error("Añade una tarea!");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Add a new Reminder</DialogTitle>
      <DialogContent>
        <div className="dialog-content">
          <TextField
            id="task-id"
            label="Task"
            variant="outlined"
            size="small"
            name="Task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
        <Button
          onClick={() => {
            handleClose();
            onClickAdd();
          }}
          autoFocus
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Formulario;
