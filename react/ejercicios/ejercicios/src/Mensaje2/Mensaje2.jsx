import { useState } from "react";

function Mensajes() {
  const [isVisible, setIsVisible] = useState({
    text1: true,
    text2: false,
    text3: false,
  });

  const handleClick = (textToModify) => {
    setIsVisible({
      ...isVisible,
      [textToModify]: !isVisible[textToModify],
    });
  };

  return (
    <div className="result">
      <button
        onClick={() => {
          handleClick("text1");
        }}
      >
        {isVisible.text1 ? "Ocultar Mensaje" : "Ver Mensaje"}
      </button>
      {isVisible.text1 && <p>Te amo bebé</p>}

      <button
        onClick={() => {
          handleClick("text2");
        }}
      >
        {isVisible.text2 ? "Ocultar Mensaje" : "Ver Mensaje"}
      </button>
      {isVisible.text2 && <p>Eres el amor de mi vida</p>}

      <button
        onClick={() => {
          handleClick("text3");
        }}
      >
        {isVisible.text3 ? "Ocultar Mensaje" : "Ver Mensaje"}
      </button>
      {isVisible.text3 && <p>Me abandonaras</p>}
    </div>
  );
}
export default Mensajes;
