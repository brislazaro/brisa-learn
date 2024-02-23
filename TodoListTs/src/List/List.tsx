import "./List.css";

import Button from "@mui/material/Button";
import * as React from "react";
import TodoCard from "../TodoCard/TodoCard";
import { Task } from "@mui/icons-material";
import { useState } from "react";
import Formulario from "../formulario/Formulario";

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

  const onClickDelete = (taskName: string) => {
    const updatedTasks = tasks.filter((task) => task.task !== taskName);
    setTasks(updatedTasks);
  };

  return (
    <>
      <ul className="list-container">
        {tasks.map((task: Task) => (
          <TodoCard task={task} onDelete={onClickDelete} />
        ))}
      </ul>

      <div className="button">
        <Button onClick={handleClickOpen} variant="contained">
          Add Reminder
        </Button>
      </div>
      <Formulario
        setOpen={setOpen}
        tasks={tasks}
        setTasks={setTasks}
        open={open}
      />
    </>
  );
}
export default List;
