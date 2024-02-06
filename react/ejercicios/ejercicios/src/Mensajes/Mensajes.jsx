import { useState } from "react";

function Mensajes() {
  const [mensaje, setMensaje] = useState("");

  const changeMsg = (mensaje) => {
    setMensaje(mensaje);
  };

  return (
    <div className="flex-row">
      <button
        onClick={() => {
          changeMsg("OK");
        }}
      >
        Mostar OK
      </button>

      <button
        onClick={() => {
          changeMsg("WARNING");
        }}
      >
        Mostar WARNING
      </button>

      <button
        onClick={() => {
          changeMsg("ERROR");
        }}
      >
        Mostar ERROR
      </button>

      <p> El mensaje es: {mensaje}</p>
    </div>
  );
}
export default Mensajes;
