import { Checkbox } from "@mui/material";
import { FC, useState } from "react";
import { Task } from "../List/List";
import "./TodoCard.css";

type TodoCardProps = {
  tarea: Task;
};

const TodoCard: FC<TodoCardProps> = ({ tarea }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleClicCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li className="card" key={tarea.text}>
      <Checkbox
        onClick={handleClicCheck}
        name="is-checked"
        checked={isChecked}
      />

      <span>{tarea.text}</span>

      <span>{isChecked ? "Completed" : "Pending"}</span>
    </li>
  );
};

export default TodoCard;
