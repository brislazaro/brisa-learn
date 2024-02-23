import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { FC, useState } from "react";
import { Task } from "../List/List";
import toast from "react-hot-toast";
import React from "react";
import { Modal, Typography, TextField, Box } from "@mui/material";

// TODO: Cambiar modal a Dialog
// TODO: Cambiar el style de la l13 a css normal y el Box a div

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4,
};

type TodoCardProps = {
  task: Task;
  onDelete: (taskName: string) => void;
};

const TodoCard: FC<TodoCardProps> = ({ task, onDelete }) => {
  const [hecho, setHecho] = useState(false);

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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Task
          </Typography>
          <div id="modal-modal-description" className="modal-form">
            <TextField
              disabled
              id="outlined-disabled"
              label="ID"
              defaultValue={task.id}
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Task"
              defaultValue={task.task}
            />
          </div>
        </Box>
      </Modal>
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
