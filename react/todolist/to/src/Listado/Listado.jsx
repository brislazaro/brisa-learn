import "./Listado.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Listado({ todoList }) {
  return (
    <section className="seccion-container">
      <h1 className="title">No olvides...</h1>
      <ul className="list-container">
        {todoList.map((todo) => (
          <li key={todo.tarea} className="list-item">
            {todo.tarea}
          </li>
        ))}
        <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </ul>
    </section>
  );
}
export default Listado;
