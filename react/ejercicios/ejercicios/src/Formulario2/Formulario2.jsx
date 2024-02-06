import { useState } from "react";

function Formulario2() {
  const [state, setState] = useState({
    name: "",
    edad: "",
    ciudad: "",
  });

  const [isCardVisible, setIsCardVisible] = useState(false);

  return (
    <div className="formulario">
      <form>
        <div className="flex-row">
          <label>Nombre:</label>
          <input
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          ></input>
        </div>

        <div className="flex-row">
          <label>Edad:</label>
          <input
            value={state.edad}
            onChange={(e) => setState({ ...state, edad: e.target.value })}
          ></input>
        </div>

        <div className="flex-row">
          <label>Ciudad:</label>
          <input
            value={state.ciudad}
            onChange={(e) => setState({ ...state, ciudad: e.target.value })}
          ></input>
        </div>

        <div className="flex-row">
          <button
            onClick={() => {
              setState({ name: "", edad: "", ciudad: "" });
            }}
          >
            Eliminar
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsCardVisible(true);
            }}
          >
            Guardar
          </button>
        </div>
      </form>

      {isCardVisible && (
        <div className="form-card">
          <p>Nombre:{state.name}</p>
          <p>Edad:{state.edad}</p>
          <p>Ciudad:{state.ciudad}</p>
        </div>
      )}
    </div>
  );
}

export default Formulario2;
