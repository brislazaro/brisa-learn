import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { FC, useState } from "react";
import { Task } from "../List/List";

type TodoCardProps = {
  task: Task;
  onDelete: () => void;
};

const TodoCard: FC<TodoCardProps> = ({ task, onDelete }) => {
  const [hecho, setHecho] = useState(false);

  const onClickCheckBox = () => {
    setHecho(!hecho);
  };

  return (
    <li key={task.id} className="task-item">
      <Checkbox onClick={onClickCheckBox} checked={hecho} />

      <p className={`${hecho && "do"}`}>{task.task}</p>
      <IconButton
        onClick={onDelete}
        aria-label="delete"
        sx={{ height: "40px", width: "40px" }}
      >
        <DeleteIcon />
      </IconButton>
    </li>
  );
};
export default TodoCard;
