import TodoCard from "../TodoCard/TodoCard";

export type Task = {
  text: string;
};

function List() {
  const tareas: Task[] = [
    {
      text: "Hacer la comida",
    },
    {
      text: "Lavar la ropa",
    },
    {
      text: "Pasear al perro",
    },
  ];

  return (
    <ul className="list">
      {tareas.map((tarea, index) => (
        <TodoCard tarea={tarea} key={`${index}-${tarea.text}`} />
      ))}
    </ul>
  );
}

export default List;
