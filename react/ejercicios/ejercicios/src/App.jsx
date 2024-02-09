import { useState } from "react";
import "./App.css";
import Contador from "./Contador/Contador";
import Input from "./Input/Input";
import Formulario from "./Formulario/Formulario";
import Pokemon from "./Pokemon/Pokemon";
import Formulario2 from "./Formulario2/Formulario2";
import Formulario3 from "./Formulario3/Formulario3";
import Contador2 from "./Contador2/Contador2";
import Mensajes from "./Mensajes/Mensajes";
import Mensajes2 from "./Mensaje2/Mensaje2";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="app-container">
      <button onClick={() => setNumber(number + 1)}>asd</button>
      <Contador />
      <Input />
      <Formulario />
      <Formulario2 />

      <Pokemon />
      <Formulario3 />
      <Contador2 />
      <Mensajes />
      <Mensajes2 />
    </div>
  );
}

export default App;
