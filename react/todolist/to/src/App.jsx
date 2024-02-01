import "./App.css";

import Layout from "./containers/Layout";
import Listado from "./Listado/Listado";
import Addbutton from "./Addbutton/Addbutton";
import { useState } from "react";

const todosMock = [{ tarea: "Hacer de comer" }, { tarea: "Bañar al perro" }];

function App() {
  const [todos, setTodos] = useState(todosMock);

  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <Layout>
      <Listado todoList={todos} />
      <Addbutton onAddTodo={handleAddTodo} />
    </Layout>
  );
}

export default App;
