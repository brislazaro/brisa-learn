import "./Listado.css";

function Lista() {
  return (
    <section className="seccion-container">
      <h1 className="title">No olvides...</h1>
      <ul className="list-container">
        <li className="list-item">Comprar Huevos</li>
        <li className="list-item">Ir a la perruqueria</li>
        <li className="list-item">Tomar las vitaminas</li>
        <li className="list-item">Ir al gym</li>
      </ul>
    </section>
  );
}
export default Lista;
