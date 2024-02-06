import { useState } from "react";

function Contador() {
  const [number, setNumber] = useState(0);

  const suma = () => {
    setNumber(number + 1);
  };

  const resta = () => {
    setNumber(number - 1);
  };

  return (
    <div className="flex-row">
      <div>{number}</div>
      <button onClick={suma}> + </button>
      <button onClick={resta}> - </button>
    </div>
  );
}

export default Contador;
