import { useState } from "react";
import "./Formulario.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [ciudad, setCiudad] = useState("");

  const handleSave = () => {
    setNombre("");
    setCiudad("");
    setEdad("");
    alert("formulario completo");
  };

  return (
    <>
      <div className="formulario">
        <div className="flex-row">
          <label>Nombre:</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </div>

        <div className="flex-row">
          <label>Edad:</label>
          <input value={edad} onChange={(e) => setEdad(e.target.value)}></input>
        </div>

        <div className="flex-row">
          <label>Ciudad:</label>
          <input
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          ></input>
        </div>

        <div className="flex-row">
          <button onClick={handleSave}>Guardar</button>
          <button
            onClick={() => {
              setNombre("");
              setCiudad("");
              setEdad("");
            }}
          >
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
}
export default Formulario;
