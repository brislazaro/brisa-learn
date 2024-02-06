import { useState } from "react";

function Input() {
  const [value, setValue] = useState("");

  return (
    <div className="flex-row">
      <input
        value={value}
        className="input"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <p>La respuesta es : {value}</p>
      <button onClick={() => setValue("")}>Reset</button>
    </div>
  );
}

export default Input;
