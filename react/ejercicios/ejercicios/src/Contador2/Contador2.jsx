import { useState } from "react";

function Contador2() {
  const [number, setNumber] = useState(0);

  const addValue = (valueToAdd) => {
    setNumber(number + valueToAdd);
  };

  const restValue = (valueToAdd) => {
    setNumber(number - valueToAdd);
  };

  return (
    <>
      <div className="result">
        <div>{number}</div>
        <div className="buttons">
          <button
            onClick={() => {
              addValue(1);
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              addValue(2);
            }}
          >
            +2
          </button>
          <button
            onClick={() => {
              addValue(5);
            }}
          >
            +5
          </button>
          <button
            onClick={() => {
              restValue(1);
            }}
          >
            {" "}
            -1{" "}
          </button>
          <button
            onClick={() => {
              restValue(2);
            }}
          >
            {" "}
            -2{" "}
          </button>
          <button
            onClick={() => {
              restValue(5);
            }}
          >
            {" "}
            -5{" "}
          </button>
        </div>
      </div>
    </>
  );
}
export default Contador2;
