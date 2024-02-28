import { useState } from "react";

/*
    En este componente vamos a testear:

    1- Que al renderizarse tenga el texto Count: 0

    2- Que al darle click al boton + --> encuentre el texto Count: 1
    3- Que al darle click al boton + 4 veces --> encuentre el texto Count: 4

    2- Que al darle click al boton - --> encuentre el texto Count: -1
    3- Que al darle click al boton - 4 veces --> encuentre el texto Count: -4

*/

const NumberCount = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="component-container">
      <p>Count: {count}</p>

      <div className="flex">
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NumberCount;
