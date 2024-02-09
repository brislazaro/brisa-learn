import { useState } from "react";

function Formulario2() {
  const [state, setState] = useState({
    name: "",
    edad: "",
    ciudad: "",
  });

  const [TrueOrFalse, setTrueOrFalse] = useState({
    name: false,
    edad: false,
    ciudad: false,
  });

  const handleChangeName = (e) => {
    if (e.target.value.length <= 3) {
      setTrueOrFalse({ ...TrueOrFalse, name: true });
    } else {
      setTrueOrFalse({ ...TrueOrFalse, name: false });
    }

    setState({ ...state, name: e.target.value });
  };

  const handleChangeAge = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue) && e.target.value.length < 3) {
      setTrueOrFalse({ ...TrueOrFalse, edad: false });
    } else {
      setTrueOrFalse({ ...TrueOrFalse, edad: true });
    }

    setState({ ...state, edad: e.target.value });
  };

  const handleChangeCity = (e) => {
    if (e.target.value === "") {
      setTrueOrFalse({ ...TrueOrFalse, ciudad: true });
    } else {
      setTrueOrFalse({ ...TrueOrFalse, ciudad: false });
    }

    setState({ ...state, ciudad: e.target.value });
  };

  const [isCardVisible, setIsCardVisible] = useState(false);

  const showCard = (e) => {
    e.preventDefault();
    if (state.name === "") {
      setIsCardVisible(false);
    } else {
      setIsCardVisible(true);
    }
  };

  return (
    <div className="formulario">
      <form>
        <div className="flex-row">
          <label>Nombre:</label>
          <input value={state.name} onChange={handleChangeName}></input>
          {TrueOrFalse.name && <p>Nombre no valido</p>}
        </div>

        <div className="flex-row">
          <label>Edad:</label>
          <input value={state.edad} onChange={handleChangeAge}></input>
          {TrueOrFalse.edad && <p>Edad no valida</p>}
        </div>

        <div className="flex-row">
          <label>Ciudad:</label>
          <input value={state.ciudad} onChange={handleChangeCity}></input>

          {TrueOrFalse.ciudad && <p>Agrega una ciudad</p>}
        </div>

        <div className="flex-row">
          <button
            onClick={() => {
              setState({ name: "", edad: "", ciudad: "" });
            }}
          >
            Eliminar
          </button>
          <button onClick={showCard}>Guardar</button>
          {!isCardVisible && <p>llenar todos los campos</p>}
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
